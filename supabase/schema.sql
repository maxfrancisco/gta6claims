-- Real vs Leonida: Supabase setup.
-- Paste this whole file into Supabase > SQL Editor > New query, and run it once.
--
-- Visitors (the "anon" role) can only INSERT. Nobody can read signups or
-- submissions from the website; you review them in the Supabase dashboard.

-- ---------- email signups ----------
create table if not exists public.subscribers (
  id          bigint generated always as identity primary key,
  email       text not null unique check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and length(email) <= 200),
  source      text check (length(source) <= 40),
  created_at  timestamptz not null default now()
);

alter table public.subscribers enable row level security;

drop policy if exists "anyone can sign up" on public.subscribers;
create policy "anyone can sign up"
  on public.subscribers for insert to anon
  with check (true);

-- ---------- user-submitted matches ----------
create table if not exists public.submissions (
  id                      uuid primary key,
  game_place              text not null check (length(game_place) between 2 and 140),
  real_place              text not null check (length(real_place) between 2 and 140),
  real_location           text check (length(real_location) <= 200),
  notes                   text check (length(notes) <= 1000),
  handle                  text check (length(handle) <= 60),
  email                   text check (length(email) <= 200),
  game_image_path         text check (length(game_image_path) <= 200),
  real_image_path         text check (length(real_image_path) <= 200),
  photo_rights_confirmed  boolean not null default false,
  status                  text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at              timestamptz not null default now()
);

alter table public.submissions enable row level security;

drop policy if exists "anyone can submit" on public.submissions;
create policy "anyone can submit"
  on public.submissions for insert to anon
  with check (status = 'pending');

-- ---------- photo uploads ----------
-- Private bucket: uploads are only visible to you in the dashboard.
-- 4 MB cap per file (the site shrinks photos to ~300-600 KB before upload).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('submissions', 'submissions', false, 4194304, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "anyone can upload a submission photo" on storage.objects;
create policy "anyone can upload a submission photo"
  on storage.objects for insert to anon
  with check (bucket_id = 'submissions');

-- ---------- keep-alive ----------
-- Free Supabase projects pause after 7 days with no activity.
-- The GitHub Action in .github/workflows/keepalive.yml calls this every 3 days.
create or replace function public.ping()
returns timestamptz
language sql
stable
as $$ select now() $$;

grant execute on function public.ping() to anon;
