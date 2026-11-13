-- GTA 6 Claims: votes and claim submissions.
-- Run once in Supabase > SQL Editor > New query, after schema.sql.
-- Visitors can add a vote or a claim, and read only the vote totals.

-- ---------- votes ----------
-- One vote per browser per claim. voter is a random id the browser keeps.
create table if not exists public.claim_votes (
  id          bigint generated always as identity primary key,
  claim_slug  text not null check (claim_slug ~ '^[a-z0-9-]{3,80}$'),
  voter       uuid not null,
  vote        text not null check (vote in ('real', 'fake')),
  created_at  timestamptz not null default now(),
  unique (claim_slug, voter)
);

alter table public.claim_votes enable row level security;

drop policy if exists "anyone can vote" on public.claim_votes;
create policy "anyone can vote"
  on public.claim_votes for insert to anon
  with check (true);

-- Totals only; individual votes stay private.
create or replace function public.claim_vote_totals()
returns table (claim_slug text, real_votes bigint, fake_votes bigint)
language sql
stable
security definer
set search_path = public
as $$
  select claim_slug,
         count(*) filter (where vote = 'real') as real_votes,
         count(*) filter (where vote = 'fake') as fake_votes
  from public.claim_votes
  group by claim_slug
$$;

grant execute on function public.claim_vote_totals() to anon;

-- ---------- claim submissions ----------
create table if not exists public.claim_submissions (
  id                      uuid primary key,
  claim                   text not null check (length(claim) between 8 and 200),
  category                text check (length(category) <= 40),
  proof_url               text check (length(proof_url) <= 400),
  proof_image_path        text check (length(proof_image_path) <= 200),
  notes                   text check (length(notes) <= 1000),
  handle                  text check (length(handle) <= 60),
  email                   text check (length(email) <= 200),
  photo_rights_confirmed  boolean not null default false,
  status                  text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at              timestamptz not null default now()
);

alter table public.claim_submissions enable row level security;

drop policy if exists "anyone can submit a claim" on public.claim_submissions;
create policy "anyone can submit a claim"
  on public.claim_submissions for insert to anon
  with check (status = 'pending');

-- Proof screenshots reuse the private 'submissions' bucket from schema.sql,
-- in a folder named claims/<submission id>/.
