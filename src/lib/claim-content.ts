// Long-form text for each claim page, keyed by claim slug.
// `question` is how people search for it (it becomes the page title and main heading).
// `body` is the explanation; `faq` answers related searches. Keep every sentence factual
// and sourced in claims.ts; when a verdict changes, update the text here too.

export type ClaimContent = {
  question: string;
  body: string[];
  faq: { q: string; a: string }[];
};

export const CLAIM_CONTENT: Record<string, ClaimContent> = {
  // ---------------- Release ----------------
  "release-date-november-19-2026": {
    question: "When does GTA 6 come out?",
    body: [
      "GTA 6 comes out on Thursday, November 19, 2026, on PlayStation 5 and Xbox Series X|S. Rockstar set that date in November 2025 when it moved the game back from May 26, 2026, and Take-Two repeated it in its earnings report in August 2026.",
      "It's the game's third release target. Rockstar first aimed for fall 2025, then moved it to May 26, 2026, then to November 19. Take-Two's CEO said at the time that he was highly confident in the new date, and nothing since has suggested it will slip again.",
      "The game unlocks at midnight local time, so players in Australia and New Zealand start first and the launch rolls west around the world. In the US, the West Coast can start playing at 9 p.m. Pacific on November 18.",
    ],
    faq: [
      { q: "What day of the week does GTA 6 come out?", a: "Thursday. November 19, 2026 falls on a Thursday." },
      { q: "Can I play GTA 6 early?", a: "No. You can pre-load it so it's ready to go, but it stays locked until midnight local time on November 19." },
    ],
  },
  "gta-6-was-delayed-twice": {
    question: "How many times was GTA 6 delayed?",
    body: [
      "Twice. When Rockstar revealed GTA 6 in December 2023, it gave a 2025 release window. In May 2025 it moved the game to May 26, 2026, saying it needed more time to reach the quality players expect.",
      "In November 2025 Rockstar delayed it again, by six months, to November 19, 2026, and apologized to fans for the wait. Take-Two's CEO said he was highly confident in the new date.",
      "Long delays are normal for Rockstar's biggest games. Red Dead Redemption 2 also slipped twice before launching in October 2018.",
    ],
    faq: [
      { q: "Why was GTA 6 delayed?", a: "Rockstar said it needed extra time to finish the game to the standard players expect. It didn't give more detail." },
      { q: "Is GTA 6 delayed to 2027?", a: "No. The release date is still November 19, 2026." },
    ],
  },
  "gta-6-came-out-in-2025": {
    question: "Did GTA 6 come out in 2025?",
    body: [
      "No. GTA 6 was originally planned for fall 2025, which is where the claim comes from. Rockstar announced that window with the first trailer in December 2023.",
      "In May 2025, Rockstar moved the game to May 26, 2026. In November 2025 it moved it again, to November 19, 2026. That's the current release date.",
      "If you see an article or video promising a 2025 release, it was published before the delays.",
    ],
    faq: [
      { q: "What year does GTA 6 come out?", a: "2026. The release date is November 19, 2026." },
      { q: "When was GTA 6 first supposed to come out?", a: "Fall 2025, the window Rockstar gave with the first trailer in December 2023." },
    ],
  },
  "ps5-and-xbox-series-only-at-launch": {
    question: "What consoles is GTA 6 on?",
    body: [
      "At launch, GTA 6 is only on PlayStation 5 and Xbox Series X|S. That includes the PS5 Pro and the cheaper Xbox Series S.",
      "There's no PS4, Xbox One, PC or Nintendo Switch 2 version on November 19. Xbox One owners can stream it through Xbox Cloud Gaming, but the game itself only runs on current consoles.",
      "Rockstar usually releases on consoles first. GTA 5 reached PC about a year and a half after its console launch, and Red Dead Redemption 2 about a year later.",
    ],
    faq: [
      { q: "Is GTA 6 on Xbox Series S?", a: "Yes. It launches on Xbox Series S as well as Series X." },
      { q: "Is GTA 6 on PS5 Pro?", a: "Yes, with extra visual upgrades that only the Pro gets." },
    ],
  },
  "gta-6-launches-on-pc": {
    question: "Is GTA 6 coming out on PC?",
    body: [
      "Not on November 19. GTA 6 launches only on PS5 and Xbox Series X|S, and Rockstar hasn't announced a PC version or given one a date. Take-Two has said that any PC news will come from Rockstar.",
      "A PC version is very likely eventually. Rockstar has brought every recent GTA and Red Dead game to PC, but always later. GTA 5 arrived on PC about a year and a half after its console release, and Red Dead Redemption 2 about a year after.",
      "Some reports point to 2027 for a PC release, but those come from anonymous sources, not from Rockstar.",
    ],
    faq: [
      { q: "When will GTA 6 come out on PC?", a: "Rockstar hasn't said. Based on its past games, expect a gap of a year or more after the console launch." },
      { q: "Can I play GTA 6 on PC through the cloud?", a: "No. Xbox Cloud Gaming streams GTA 6 only to Xbox consoles at launch, not to PCs." },
    ],
  },
  "gta-6-on-ps4-and-xbox-one": {
    question: "Is GTA 6 coming to PS4 or Xbox One?",
    body: [
      "Not as a game you install. GTA 6 is built for PS5 and Xbox Series X|S, and there's no version that runs on a PS4 or Xbox One.",
      "Xbox One owners do have one option: Xbox Cloud Gaming. GTA 6 streams to Xbox One from launch day, running on Microsoft's servers. You have to buy the game first, and streaming time comes out of a monthly Game Pass allowance or paid Cloud Playtime packs.",
      "PS4 owners have no equivalent. To play on PlayStation, you need a PS5.",
    ],
    faq: [
      { q: "Can you play GTA 6 on Xbox One?", a: "Only by streaming it through Xbox Cloud Gaming, after buying the game. Streaming time is metered." },
      { q: "Is GTA 6 on PS4?", a: "No. It's only on PS5 and Xbox Series X|S." },
    ],
  },
  "gta-6-on-switch-2-at-launch": {
    question: "Is GTA 6 coming to Nintendo Switch 2?",
    body: [
      "Not at launch. GTA 6's launch platforms are PS5 and Xbox Series X|S only.",
      "The rumor started when Take-Two's CEO, Strauss Zelnick, said the company would fully expect to support the Switch 2. He was talking about Take-Two's games in general and didn't name GTA 6.",
      "Neither GTA 4 nor GTA 5 ever came to Switch, so a Switch 2 version would be a first for the series.",
    ],
    faq: [
      { q: "Will GTA 6 ever come to Switch 2?", a: "Nothing has been announced. Take-Two hasn't ruled it out, but it hasn't promised it either." },
      { q: "Is GTA 5 on Nintendo Switch?", a: "No. No mainline GTA after San Andreas has been released on a Nintendo console." },
    ],
  },
  "standard-edition-costs-79-99": {
    question: "How much does GTA 6 cost?",
    body: [
      "The Standard Edition of GTA 6 costs $79.99 in the US, and the Ultimate Edition costs $99.99. Rockstar announced both prices when pre-orders opened in June 2026.",
      "That puts the Standard Edition about $10 above most new console games. Many analysts had expected an even higher price, and a $150 rumor went viral before the real price came out.",
      "Both editions include the full game. The extra $20 for Ultimate buys bonus vehicles, weapons, clothing, shops and activities, not more story.",
    ],
    faq: [
      { q: "Is GTA 6 $70 or $80?", a: "$79.99 for the Standard Edition." },
      { q: "What's the difference between Ultimate and Standard?", a: "Ultimate costs $20 more and adds 16 in-game extras. The story and map are the same." },
    ],
  },
  "standard-edition-costs-150": {
    question: "Does GTA 6 cost $150?",
    body: [
      "No. The Standard Edition is $79.99, and the most expensive edition Rockstar sells is the $99.99 Ultimate Edition.",
      "The $150 figure spread online before Rockstar announced prices, often alongside claims that GTA 6 would be the first $100-plus standard game. It never came from Rockstar or a retailer.",
      "Prices outside the US vary by currency and local taxes, so some countries will see higher numbers than $79.99. None of them are $150 equivalents for the Standard Edition.",
    ],
    faq: [
      { q: "Why did people think GTA 6 would cost $150?", a: "Speculation about the game's huge budget, plus fake retailer listings, made the number spread before the real price was announced." },
      { q: "What's the most expensive version of GTA 6?", a: "The Ultimate Edition at $99.99." },
    ],
  },
  "physical-copies-have-no-disc": {
    question: "Does GTA 6 come on a disc?",
    body: [
      "No. Rockstar confirmed that boxed copies of GTA 6 contain a download code, not a game disc. You still download the full game, just as with a digital purchase.",
      "Some retailers stopped selling boxed pre-orders because of it, and fans with disc-drive consoles were not happy. Take-Two's CEO said discs don't really make sense for most players anymore.",
      "Whether a real disc version comes later is unclear. One report quoted Rockstar support as saying a physical copy would come in the months after launch, while another report disputed it.",
    ],
    faq: [
      { q: "Is there a GTA 6 disc version?", a: "Not at launch. Boxed copies are a code in a box." },
      { q: "Do I need internet to install GTA 6?", a: "Yes. Every copy, including the boxed one, is a download." },
    ],
  },
  "download-is-676-gb": {
    question: "Is GTA 6 676 GB?",
    body: [
      "No. Rockstar says GTA 6 needs up to 212 GB of free space, depending on the console. The 676 GB figure was a fake that circulated before the real size was public.",
      "212 GB is still huge. It's more than twice the size of GTA 5's current-generation version, and it takes up a big share of a standard PS5's storage.",
      "If you're short on space, delete or move other games before pre-loading. An external drive can store PS5 games, but they have to be on internal or M.2 storage to play.",
    ],
    faq: [
      { q: "How big is GTA 6?", a: "Up to 212 GB, according to Rockstar." },
      { q: "Will GTA 6 fit on a Series S?", a: "Check your free space first. The Series S has much less storage than a PS5 or Series X, so you'll likely need to clear room or add an expansion card." },
    ],
  },
  "gta-online-launches-same-day": {
    question: "Does GTA 6 have online multiplayer at launch?",
    body: [
      "As far as anyone knows, no. Rockstar is marketing GTA 6 as a single-player game and hasn't announced an online mode or a date for one.",
      "GTA Online didn't launch with GTA 5 either. It arrived two weeks later, in October 2013. Some reports suggest a similar gap this time, while others expect a much longer wait. None of those timelines come from Rockstar.",
      "Dataminers claim to have found multiplayer code in the launch files, which is why we're keeping this open until people can check the main menu on November 19.",
    ],
    faq: [
      { q: "Will GTA 6 online be cross platform?", a: "Rockstar hasn't announced an online mode, so it hasn't said anything about crossplay either." },
      { q: "Will GTA Online stay up after GTA 6 comes out?", a: "Rockstar hasn't announced any plans to shut down GTA Online." },
    ],
  },
  "vice-city-collectors-edition-box": {
    question: "Is there a GTA 6 Collector's Edition?",
    body: [
      "Not one you can buy from Rockstar. The official editions are Standard at $79.99 and Ultimate at $99.99.",
      "In September 2026, photos of a box branded 'Vice City Leonida' spread on Reddit and X, and many people called it a Collector's Edition reveal. The original post was deleted, and Rockstar hasn't commented.",
      "It could be a promotional kit sent to press or influencers, merchandise, or a fake. Until Rockstar or a retailer lists it, treat any Collector's Edition for sale as suspicious.",
    ],
    faq: [
      { q: "How much is the GTA 6 Collector's Edition?", a: "There's no official Collector's Edition, so there's no official price. Be careful with listings that claim otherwise." },
      { q: "What editions of GTA 6 are there?", a: "Standard ($79.99) and Ultimate ($99.99)." },
    ],
  },
  "xbox-players-pay-per-hour": {
    question: "Do you have to pay per hour to play GTA 6 on Xbox?",
    body: [
      "No, not if you download it. Buy GTA 6 on Xbox Series X or Series S, install it, and you can play as long as you like. There's no hourly charge, and you don't need Game Pass or any other subscription for the single-player game.",
      "The per-hour charge only applies to Xbox Cloud Gaming, which streams the game from Microsoft's servers instead of running it on your console. GTA 6 is available on Xbox Cloud Gaming from launch day, but only on Xbox consoles: Xbox Series X|S and the older Xbox One. It doesn't stream to phones, PCs, smart TVs or web browsers.",
      "Cloud streaming is how Xbox One owners can play, since there's no Xbox One version of the game. They still have to buy GTA 6 first. Streaming time then comes out of a monthly allowance: 5 hours with Game Pass Essential, 10 with Premium and 15 with Ultimate. Past that, Microsoft sells Cloud Playtime packs: 10 hours for $3.99, 25 hours for $7.99 and 50 hours for $11.99, roughly 24 to 40 cents an hour. Unused pack hours stay on your account until you use them.",
      "So the claim mixes up two things. Downloading the game on a Series X|S costs the $79.99 or $99.99 purchase price and nothing more. Streaming it, mostly relevant to Xbox One owners, costs the same purchase plus playtime. A 100-hour playthrough streamed with the biggest pack would add about $24.",
    ],
    faq: [
      { q: "Can you play GTA 6 on Xbox One?", a: "Only by streaming it through Xbox Cloud Gaming. You have to buy the game, and streaming time is metered after your monthly allowance runs out." },
      { q: "Do you need Game Pass to play GTA 6 on Xbox?", a: "No. GTA 6 isn't in Game Pass, and you don't need a subscription to play the downloaded single-player game." },
      { q: "Can I stream GTA 6 on my phone or PC?", a: "Not at launch. Xbox Cloud Gaming streaming for GTA 6 is limited to Xbox consoles." },
      { q: "How much does it cost to stream GTA 6 on Xbox?", a: "You buy the game, then use your Game Pass cloud hours or Cloud Playtime packs, which cost about 24 to 40 cents per hour." },
    ],
  },
  "gta-6-unlocks-at-midnight-local-time": {
    question: "What time does GTA 6 come out?",
    body: [
      "GTA 6 unlocks at midnight local time on November 19, 2026, according to Rockstar's support page. That means it starts in Australia and New Zealand and rolls west around the world.",
      "In the US, the store listings use Eastern time for the whole country. That puts the unlock at 12 a.m. Eastern on November 19, which is 11 p.m. Central, 10 p.m. Mountain and 9 p.m. Pacific on November 18.",
      "Pre-load the game ahead of time so you can start playing the moment it unlocks.",
    ],
    faq: [
      { q: "What time does GTA 6 come out on the West Coast?", a: "9 p.m. Pacific on Wednesday, November 18, if your console's store follows the Eastern-time unlock." },
      { q: "Does GTA 6 unlock at the same time on PS5 and Xbox?", a: "Yes. Both unlock at midnight local time on November 19." },
    ],
  },
  "gta-6-got-delayed-again": {
    question: "Did GTA 6 get delayed again?",
    body: [
      "No. GTA 6 is still coming out on November 19, 2026. There has been no third delay.",
      "The game was delayed twice before: from fall 2025 to May 26, 2026, and then to November 19, 2026. Rockstar announced the current date in November 2025, and Take-Two's CEO said he was highly confident it would hold.",
      "Pre-loading is already open and retailers are shipping boxed copies, which makes a last-minute delay extremely unlikely.",
    ],
    faq: [
      { q: "Is GTA 6 still coming out November 19?", a: "Yes, as of November 13, 2026." },
      { q: "Why does everyone think GTA 6 got delayed again?", a: "Fake 'delay' posts spread every time a date gets close, and the game really was delayed twice before." },
    ],
  },
  "gta-6-is-already-out": {
    question: "Is GTA 6 out yet?",
    body: [
      "Not yet. GTA 6 comes out on November 19, 2026, and unlocks at midnight local time.",
      "You can pre-order it now and pre-load it, which downloads the game ahead of time. It stays locked until launch, so no one can play the full game early. Boxed copies reaching stores early contain a download code, not a playable disc.",
      "Videos claiming to show early access are usually trailer footage, older leaks or fakes.",
    ],
    faq: [
      { q: "Can you play GTA 6 right now?", a: "No. It unlocks at midnight local time on November 19, 2026." },
      { q: "How many days until GTA 6?", a: "It comes out on November 19, 2026." },
    ],
  },
  "gta-6-needs-212-gb": {
    question: "How many GB is GTA 6?",
    body: [
      "Rockstar says GTA 6 needs up to 212 GB of free space, and the exact figure varies by console. It's one of the largest console installs ever.",
      "A launch-model PS5 has about 667 GB of usable space, so GTA 6 alone takes roughly a third of it. Newer 1 TB models have a bit more room. Xbox Series S owners, with much less storage, will likely need to clear games or add an expansion card.",
      "Pre-loading opened before launch for digital copies, so check your free space now and delete what you don't need.",
    ],
    faq: [
      { q: "Can I play GTA 6 from an external drive?", a: "On PS5, games must run from internal or M.2 storage. On Xbox, current-generation games need internal storage or an official expansion card." },
      { q: "Is the 676 GB GTA 6 size real?", a: "No. That number was fake." },
    ],
  },
  "gta-6-runs-at-60-fps": {
    question: "Does GTA 6 run at 60 fps?",
    body: [
      "No. Rockstar has said GTA 6 targets 30 frames per second on every console, including the PS5 Pro. No 60 fps or 40 fps performance mode has been announced.",
      "Rockstar chose detail and density over frame rate. The PS5 Pro gets visual upgrades, such as ray-traced shadows and sharper image quality, but not a higher frame rate.",
      "Rockstar hasn't ruled out more graphics modes later. GTA 5 launched at 30 fps and only got a 60 fps mode years later on newer hardware.",
    ],
    faq: [
      { q: "Is GTA 6 30 fps on PS5 Pro?", a: "Yes. The target is 30 fps on every console, Pro included." },
      { q: "Will GTA 6 get a performance mode?", a: "None has been announced. Rockstar hasn't ruled one out." },
    ],
  },
  "gta-6-looks-best-on-ps5-pro": {
    question: "What's the best console for GTA 6?",
    body: [
      "The PS5 Pro. Rockstar announced Pro-only upgrades: ray-traced shadows and sharper image quality from Sony's PSSR upscaling. Every console targets the same 30 fps.",
      "Between a base PS5 and an Xbox Series X, the differences are small. Both run the same 30 fps target, and the choice mostly comes down to price, which controller you like, and where your friends play.",
      "The Xbox Series S is the weakest option. It runs the game, but analysts expect a noticeably lower resolution than on the other consoles.",
    ],
    faq: [
      { q: "Is GTA 6 better on PS5 or Xbox?", a: "On base consoles they're close. The PS5 Pro is the best-looking version." },
      { q: "Is there a GTA 6 PS5 bundle?", a: "No official GTA 6 console bundle has been announced." },
    ],
  },
  "ultimate-edition-has-extra-story": {
    question: "What's the difference between GTA 6 Ultimate and Standard?",
    body: [
      "The Ultimate Edition costs $99.99, $20 more than the $79.99 Standard Edition, and adds 16 in-game extras: vehicles, weapons, clothing collections, shops and activities.",
      "It doesn't add story missions. Both editions include the full story, the full map of Leonida, and every core feature. The extras are nice to have, not required.",
      "If you buy Standard and change your mind, you can reportedly upgrade later for the $20 difference. Ultimate is sold digitally.",
    ],
    faq: [
      { q: "Is the GTA 6 Ultimate Edition worth it?", a: "Only if you want the bonus vehicles, weapons, outfits and shops. The game itself is identical." },
      { q: "Can I upgrade from Standard to Ultimate later?", a: "Reports say yes, for the $20 difference." },
    ],
  },
  "there-is-a-deluxe-edition": {
    question: "Is there a GTA 6 Deluxe Edition?",
    body: [
      "No. Rockstar sells two editions of GTA 6: Standard at $79.99 and Ultimate at $99.99.",
      "Many games have a three-tier lineup of Standard, Deluxe and Ultimate, which is probably why people search for a Deluxe version. GTA 6 skips the middle tier.",
      "If a site sells a 'GTA 6 Deluxe Edition', it's either a renamed listing or not legitimate.",
    ],
    faq: [
      { q: "What editions does GTA 6 have?", a: "Standard and Ultimate." },
      { q: "What does the Ultimate Edition include?", a: "The full game plus 16 extras like vehicles, weapons, clothing, shops and activities." },
    ],
  },
  "official-gta-6-ps5-controller": {
    question: "Is there a GTA 6 PS5 controller?",
    body: [
      "Yes. Sony revealed two limited-edition GTA VI DualSense controllers at its September 2026 State of Play. One is black, inspired by Vice City at night. The other is white, themed on its beaches and pastel skies.",
      "They're cosmetic. They play GTA 6 exactly like any other DualSense, with the same vibration and trigger effects. Retail listings put them at $84.99, and they ship on November 19.",
      "There's no official GTA-branded Xbox controller and no official GTA 6 console bundle.",
    ],
    faq: [
      { q: "Where can I buy the GTA 6 controller?", a: "PlayStation Direct and participating retailers. Stock is limited." },
      { q: "Is there a GTA 6 Xbox controller?", a: "No official one has been announced." },
    ],
  },
  "gta-6-has-crossplay": {
    question: "Is GTA 6 going to be crossplay?",
    body: [
      "Unknown. Rockstar hasn't announced crossplay, and it hasn't announced an online mode for crossplay to apply to. At launch, GTA 6 is a single-player game.",
      "Rockstar's track record suggests caution. GTA Online has never let PlayStation and Xbox players into the same session, even on current consoles.",
      "Once an online mode is announced, crossplay and cross-progression between PS5 and Xbox will be among the first things we check.",
    ],
    faq: [
      { q: "Will GTA 6 online be cross platform?", a: "Rockstar hasn't said. No online mode has been announced yet." },
      { q: "Is GTA Online crossplay between PS5 and Xbox?", a: "No. GTA Online keeps PlayStation and Xbox players separate." },
    ],
  },
  "reviews-come-out-november-18": {
    question: "When do GTA 6 reviews come out?",
    body: [
      "Probably November 18, the day before launch. Insider Gaming reports that's when the review embargo lifts, which matches how GTA 5 and Red Dead Redemption 2 were handled.",
      "Rockstar hasn't announced the date, so we're keeping this open. Some reports say certain outlets must wait until launch day to publish.",
      "Reviews will show up on Metacritic and OpenCritic as soon as the embargo lifts.",
    ],
    faq: [
      { q: "Is the GTA 6 review embargo November 18?", a: "That's the reported date. Rockstar hasn't confirmed it." },
      { q: "Where can I read GTA 6 reviews?", a: "Metacritic and OpenCritic collect them as soon as they're published." },
    ],
  },
  "pre-orders-made-1-billion": {
    question: "How much has GTA 6 made so far?",
    body: [
      "Nobody outside Take-Two knows for sure. Analyst firm estimates put pre-order revenue at around $750 million in early November, and one tally passed $1 billion by November 12.",
      "Take-Two hasn't published a figure. Its CEO said only that pre-orders were reaching unprecedented levels. Bank of America estimates the game needs about $1.9 billion in sales to meet investor expectations for the year.",
      "Take-Two is expected to share its first official numbers shortly after launch. GTA 5 made $1 billion in its first three days in 2013, a record at the time.",
    ],
    faq: [
      { q: "How much did it cost to make GTA 6?", a: "Rockstar and Take-Two haven't disclosed the budget. Figures you see online are estimates." },
      { q: "How many pre-orders does GTA 6 have?", a: "Estimates range from about 7.7 million to over 11 million. Take-Two hasn't confirmed a number." },
    ],
  },
  "manni-perez-plays-lucia": {
    question: "Who plays Lucia in GTA 6?",
    body: [
      "Rockstar hasn't confirmed who plays Lucia Caminos, one of GTA 6's two leads. The name fans link to the role most often is Manni L. Perez, an actor with TV credits including Law & Order: SVU and Chicago P.D.",
      "The connection is based on her resemblance to Lucia's character model and comparisons with Lucia's voice in the trailers. Neither Rockstar nor the actress has confirmed it.",
      "Other names spread earlier and turned out to be wrong. One actress said she'd only voiced a GTA Online character. The credits at launch should settle it.",
    ],
    faq: [
      { q: "Who plays Jason in GTA 6?", a: "Rockstar hasn't confirmed the cast for either lead." },
      { q: "Who is Lucia in GTA 6?", a: "Lucia Caminos is one of the two playable leads, alongside Jason." },
    ],
  },

  // ---------------- Gameplay ----------------
  "two-playable-leads-lucia-and-jason": {
    question: "Who are the main characters in GTA 6?",
    body: [
      "GTA 6 has two playable leads: Lucia Caminos and Jason Duval. Rockstar's trailers and its August 2026 Extended Look gameplay video both center on the pair.",
      "Lucia is the first female lead in a mainline 3D GTA. The trailers present the two as partners in crime working their way through Leonida together.",
      "You can switch between them, much like switching between Michael, Franklin and Trevor in GTA 5.",
    ],
    faq: [
      { q: "Is Lucia the first female protagonist in GTA?", a: "She's the first female lead in a mainline 3D GTA game." },
      { q: "Who plays Lucia in GTA 6?", a: "Rockstar hasn't confirmed the actor." },
    ],
  },
  "switch-characters-like-gta-5": {
    question: "Can you switch characters in GTA 6?",
    body: [
      "Yes. The Extended Look gameplay video shows switching between Lucia and Jason, similar to how GTA 5 let you swap between its three leads.",
      "GTA 6 has two playable characters instead of three, and the story is built around the two of them working together.",
      "How freely you can switch during missions and free roam is one of the details players will test after launch.",
    ],
    faq: [
      { q: "How many playable characters are in GTA 6?", a: "Two: Lucia and Jason." },
      { q: "Do Lucia and Jason have different abilities?", a: "Yes. Their slow-motion aiming abilities work differently." },
    ],
  },
  "six-star-wanted-level": {
    question: "Does GTA 6 have a six-star wanted level?",
    body: [
      "Yes. The Extended Look shows six wanted stars, bringing back the six-star maximum from older games like GTA San Andreas and GTA 4. GTA 5 capped it at five.",
      "The wanted system goes further than before. The HUD shows icons for whether the police know what you look like and what you're wearing.",
      "How the sixth star escalates the response, whether it brings the military, SWAT or something new, is something players will find out after launch.",
    ],
    faq: [
      { q: "What happens at six stars in GTA 6?", a: "Rockstar hasn't detailed it. Players will find out after launch." },
      { q: "How many wanted stars did GTA 5 have?", a: "Five." },
    ],
  },
  "cops-remember-your-outfit": {
    question: "Can you change clothes to escape the cops in GTA 6?",
    body: [
      "Official footage shows the police tracking your appearance and outfit, with icons for both under your wanted level. That points to a system where changing your look matters.",
      "Previews describe police building a description from witnesses and cameras. How much a change of clothes helps you escape hasn't been shown in detail.",
      "We'll test it at launch: get a wanted level, change outfits in a store, and see whether the outfit icon clears.",
    ],
    faq: [
      { q: "Do cops remember your car in GTA 6?", a: "Previews say the police description can include your vehicle. Rockstar hasn't fully explained it." },
      { q: "How do you lose the cops in GTA 6?", a: "Breaking line of sight still matters. The new description system suggests changing clothes or vehicles may help too." },
    ],
  },
  "slow-motion-aiming-ability": {
    question: "Do Lucia and Jason have special abilities in GTA 6?",
    body: [
      "Yes. Both have a slow-motion aiming ability, shown by a purple bar in the Extended Look.",
      "They work differently. Jason's highlights enemy weak points, while Lucia's sets up one precise, cinematic shot. Coverage compares it to Dead Eye in Red Dead Redemption 2.",
      "In GTA 5 each character had a unique special ability. GTA 6 keeps slow-motion aiming for both leads but gives each a different twist.",
    ],
    faq: [
      { q: "Is GTA 6's ability like Dead Eye?", a: "It's closer to Red Dead's Dead Eye than to GTA 5's abilities, according to people who've watched the footage." },
      { q: "What was Michael's ability in GTA 5?", a: "Slow-motion aiming, called bullet time." },
    ],
  },
  "story-is-80-hours": {
    question: "How long is the GTA 6 story?",
    body: [
      "The 80-hour figure comes from Rockstar North co-director Rob Nelson's own playthrough, which covered the story and some side activities. It isn't an official story length.",
      "For comparison, GTA 5's main story takes most players around 30 to 40 hours, and completionists spend over 80.",
      "Real completion times will vary a lot depending on how much you explore. We'll update this once players finish the game.",
    ],
    faq: [
      { q: "How many missions are in GTA 6?", a: "Rockstar hasn't said." },
      { q: "Is GTA 6 longer than Red Dead Redemption 2?", a: "Unknown until players finish it. RDR2's story runs around 50 to 60 hours for most players." },
    ],
  },
  "gyms-make-you-stronger": {
    question: "Can you work out at the gym in GTA 6?",
    body: [
      "Gyms appear in the Extended Look gameplay video, so you can visit them. Whether working out changes your character's body or stats hasn't been shown.",
      "GTA San Andreas let you build muscle or gain weight at the gym and at restaurants, and fans have wanted that back ever since. GTA 5 dropped it.",
      "We'll test it at launch by training for a few in-game days and comparing screenshots.",
    ],
    faq: [
      { q: "Can you get fat in GTA 6?", a: "Unknown. Rockstar hasn't shown body changes." },
      { q: "Can you build muscle in GTA 6?", a: "Unknown until launch." },
    ],
  },
  "you-can-buy-houses": {
    question: "Can you buy houses in GTA 6?",
    body: [
      "Rockstar hasn't shown buying property in GTA 6. The trailers and Extended Look don't include a property website or for-sale signs.",
      "It would fit the series. GTA 5 let you buy businesses and garages, and Vice City Stories was built around buying property.",
      "We'll check at launch for a property site on the in-game phone and buildings marked for sale.",
    ],
    faq: [
      { q: "Can you buy businesses in GTA 6?", a: "Not shown yet. Previews suggest Jason and Lucia take jobs from clients, but buying businesses hasn't been confirmed." },
      { q: "Does GTA 6 have safehouses?", a: "Rockstar hasn't detailed safehouses yet." },
    ],
  },

  // ---------------- World ----------------
  "enter-every-building": {
    question: "Can you go inside every building in GTA 6?",
    body: [
      "Almost certainly not every one, but more than ever before. Rockstar has shown far more interiors than in past games, from shops and clubs to apartments, but has never said every building can be entered.",
      "Every past GTA had locked doors and decorative buildings, and a city the size of Vice City with every interior modeled would be a massive undertaking.",
      "Our launch-day test: walk one block of Ocean Drive and count how many doors open.",
    ],
    faq: [
      { q: "How many interiors are in GTA 6?", a: "Rockstar hasn't given a number." },
      { q: "Can you go in shops in GTA 6?", a: "Yes, footage shows store interiors." },
    ],
  },
  "set-in-vice-city-leonida": {
    question: "Where is GTA 6 set?",
    body: [
      "GTA 6 is set in Leonida, Rockstar's fictional version of Florida, with Vice City, its version of Miami, as the main city.",
      "Rockstar has named the regions around it: the Leonida Keys, Grassrivers (the Everglades), Port Gellhorn, Ambrosia and Mount Kalaga National Park.",
      "It's the series' first return to Vice City since 2006's Vice City Stories, and the first time a whole state surrounds it.",
    ],
    faq: [
      { q: "Is GTA 6 set in Miami?", a: "Vice City is Rockstar's version of Miami, and Leonida is its version of Florida." },
      { q: "What are the regions in GTA 6?", a: "Vice City, the Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia and Mount Kalaga." },
    ],
  },
  "map-is-twice-gta-5": {
    question: "How big is the GTA 6 map?",
    body: [
      "About twice the size of GTA 5's. Rockstar North co-director Rob Nelson told The New York Times the map is roughly double GTA 5's and three times Red Dead Redemption 2's.",
      "Rockstar's art director also called it the largest map the studio has ever made, by some margin, and said the story alone won't take you everywhere.",
      "Rockstar hasn't given an exact size in square miles. Fan mapping projects have estimated it from the trailers.",
    ],
    faq: [
      { q: "Is the GTA 6 map bigger than RDR2?", a: "Yes, about three times bigger, according to Rockstar." },
      { q: "Is there an official GTA 6 map?", a: "Not a full one. The detailed maps online are fan-made." },
    ],
  },
  "map-is-three-times-gta-5": {
    question: "Is the GTA 6 map three times bigger than GTA 5?",
    body: [
      "No. Rockstar's comparison puts GTA 6's map at about twice the size of GTA 5's.",
      "The '3x' number is real but refers to Red Dead Redemption 2. Rockstar said GTA 6's map is about three times the size of RDR2's, and the two figures got mixed up as they spread.",
      "Either way, it's the biggest map Rockstar has ever made.",
    ],
    faq: [
      { q: "How much bigger is GTA 6 than GTA 5?", a: "About twice as big." },
      { q: "Is GTA 6 bigger than GTA 4 and GTA 5 combined?", a: "One report says the landmass is close to GTA 4, GTA 5 and RDR2 combined. Rockstar's own comparison is about 2x GTA 5." },
    ],
  },
  "alligators-attack-you": {
    question: "Can alligators kill you in GTA 6?",
    body: [
      "Alligators appear in Rockstar's trailers, including one memorable clip of a gator wandering into a convenience store. Whether they attack the player hasn't been shown.",
      "Red Dead Redemption 2's alligators could attack and kill the player, so Rockstar has done it before.",
      "The Grassrivers, Leonida's version of the Everglades, is the place to find out. Get off the airboat near a gator and see what happens.",
    ],
    faq: [
      { q: "Are there animals in GTA 6?", a: "Yes. Trailers show alligators, flamingos and other Florida wildlife." },
      { q: "Can you hunt in GTA 6?", a: "Not confirmed." },
    ],
  },
  "climb-mount-kalaga": {
    question: "Can you climb Mount Kalaga in GTA 6?",
    body: [
      "Mount Kalaga National Park is one of Leonida's named regions, but nothing official shows its summit or a route to the top.",
      "Fans have linked its scenery to the southern Appalachians, but that's a fan theory. Florida itself has no mountains.",
      "Climbing Mount Chiliad in GTA 5 was a rite of passage, so we expect players to race to the top of Kalaga on day one.",
    ],
    faq: [
      { q: "What is Mount Kalaga based on?", a: "Fans think the southern Appalachians. Rockstar hasn't said." },
      { q: "Is there a mountain in GTA 6?", a: "Yes, Mount Kalaga, inside a national park region." },
    ],
  },
  "rockstar-released-the-full-map": {
    question: "Is there an official GTA 6 map?",
    body: [
      "Not a full one. Rockstar has named Leonida's regions but hasn't published a complete map.",
      "The detailed maps you've seen come from fan mapping projects. The best known started in 2022 and has pieced Leonida together frame by frame from trailers, screenshots and leaks, releasing new versions as more footage appears.",
      "Those maps are impressive detective work but aren't official. The real in-game map arrives on November 19, and boxed copies may include a printed map like past GTAs did.",
    ],
    faq: [
      { q: "What is the GTA 6 mapping project?", a: "A fan effort that reconstructs Leonida from official footage. It isn't affiliated with Rockstar." },
      { q: "Does GTA 6 come with a paper map?", a: "Past GTAs did. Rockstar hasn't confirmed one for GTA 6." },
    ],
  },

  // ---------------- Easter eggs ----------------
  "bigfoot-in-the-grassrivers": {
    question: "Is there Bigfoot in GTA 6?",
    body: [
      "Nothing official points to Bigfoot in GTA 6, at least not yet. That's why it's unverified.",
      "Bigfoot hunting has a long history in the series. GTA San Andreas rumors kept players searching the forests for years, and GTA 5 finally included a Bigfoot hunt and a Bigfoot costume.",
      "Leonida's swamps and forests, especially the Grassrivers and Mount Kalaga, are the obvious places to look. Search at night and in fog, and send us proof if you find anything.",
    ],
    faq: [
      { q: "Was Bigfoot in GTA San Andreas?", a: "No. It was a famous rumor, but Bigfoot was never in the game." },
      { q: "Was Bigfoot in GTA 5?", a: "Yes, as part of a hunting mission and an online costume." },
    ],
  },

  // ---------------- Real world ----------------
  "cortez-hotel-is-the-colony-hotel": {
    question: "Is the Cortez Hotel in GTA 6 a real place?",
    body: [
      "Yes. The Cortez Hotel is Vice City's version of the Colony Hotel at 736 Ocean Drive in Miami Beach. The vertical neon sign, the art deco facade and the Ocean Drive setting all match.",
      "The Colony is one of the most photographed buildings in South Beach, and its blue neon sign is best seen after dark from across the street.",
      "We have a side-by-side comparison page for it and will add our own photo of the real hotel next to an in-game shot after launch.",
    ],
    faq: [
      { q: "Where is the Colony Hotel?", a: "736 Ocean Drive, Miami Beach, Florida." },
      { q: "Is GTA 6 Vice City based on Miami?", a: "Yes. Vice City is Rockstar's version of Miami." },
    ],
  },
  "beach-towers-are-diamond-condos": {
    question: "Are the Diamond condos in GTA 6?",
    body: [
      "Fans have matched Vice City's tall beach towers to the Green and Blue Diamond condos on Collins Avenue in Miami Beach, known for their pointed, color-lit crowns.",
      "The towers haven't clearly appeared in official footage yet, so we're keeping this open. We already have our own photo of the real towers on the comparison page.",
      "At launch, drive Collins Avenue in-game at night and look for two towers with pointed crowns. If you find them, send us a screenshot.",
    ],
    faq: [
      { q: "Where are the Green and Blue Diamond condos?", a: "On Collins Avenue in Miami Beach." },
      { q: "What real Miami places are in GTA 6?", a: "See our Real places section for every match so far." },
    ],
  },
};
