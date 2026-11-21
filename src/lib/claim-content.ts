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
      "GTA 6 came out on Thursday, November 19, 2026, on PlayStation 5 and Xbox Series X|S, right on schedule. Rockstar set that date in November 2025 when it moved the game back from May 26, 2026, and Take-Two repeated it in its earnings report in August 2026.",
      "It's the game's third release target. Rockstar first aimed for fall 2025, then moved it to May 26, 2026, then to November 19. Take-Two's CEO said at the time that he was highly confident in the new date, and it held.",
      "It unlocked at midnight local time, starting in Australia and New Zealand and rolling west around the world. Take-Two says it was the biggest entertainment launch ever, with $3.79 billion in day-one sales.",
    ],
    faq: [
      { q: "What day of the week does GTA 6 come out?", a: "Thursday. November 19, 2026 falls on a Thursday." },
      { q: "Is GTA 6 out now?", a: "Yes. It has been out since November 19, 2026, on PS5 and Xbox Series X|S." },
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
      "No. GTA 6 launched only on PS5 and Xbox Series X|S, and Rockstar hasn't announced a PC version or given one a date. Take-Two has said that any PC news will come from Rockstar.",
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
    question: "When does GTA 6 Online come out?",
    body: [
      "There's no date. GTA 6 launched on November 19 as a single-player game, and Rockstar still hasn't announced an online mode, a release window or which platforms it will be on.",
      "Reports point to 2027. Twitch's CEO hinted multiplayer would come next year, and Bloomberg reporting has suggested roughly a year after the main game. None of that comes from Rockstar.",
      "The existing GTA Online, built on GTA 5, keeps running. Take-Two said Rockstar will keep supporting it with new content and events.",
    ],
    faq: [
      { q: "Does GTA 6 have online multiplayer?", a: "Not yet. It launched as a single-player game." },
      { q: "Will GTA Online shut down now that GTA 6 is out?", a: "No. Take-Two says Rockstar will keep supporting it." },
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
      "In the US, PlayStation Store listings reportedly use a single Eastern-time unlock for the whole country. If that holds, the game unlocks at 12 a.m. Eastern on November 19, which is 11 p.m. Central, 10 p.m. Mountain and 9 p.m. Pacific on November 18. Rockstar's own wording just says midnight local time, so West Coast players should check their console on the evening of the 18th.",
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
    question: "Is GTA 6 out?",
    body: [
      "Yes. GTA 6 came out on Thursday, November 19, 2026, on PlayStation 5 and Xbox Series X|S. It unlocked at midnight local time, starting in Australia and New Zealand and rolling west.",
      "It was the biggest entertainment launch ever. Take-Two says the game sold 32.5 million copies before release and $3.79 billion in retail sales on its first day, nearly five times GTA 5's first day in 2013. Critics scored it 99 on Metacritic.",
      "It's still not on PC, and there's no online mode yet. Launch night had some bumps: PlayStation Network sign-in problems on November 18, and some boxed copies with missing or used codes. Our status page tracks what's broken and what's fixed.",
    ],
    faq: [
      { q: "Is GTA 6 on PC yet?", a: "No. It's only on PS5 and Xbox Series X|S, and Rockstar hasn't announced a PC date." },
      { q: "Did GTA 6 come out on time?", a: "Yes. It launched on November 19, 2026, the date Rockstar set a year earlier." },
    ],
  },
  "gta-6-needs-212-gb": {
    question: "How many GB is GTA 6?",
    body: [
      "Rockstar says GTA 6 needs up to 212 GB of free space, and the exact figure varies by console. It's one of the largest console installs ever.",
      "A launch-model PS5 has about 667 GB of usable space, so GTA 6 alone takes roughly a third of it. Newer 1 TB models have a bit more room. Xbox Series S owners, with much less storage, will likely need to clear games or add an expansion card.",
      "Pre-loading opened on November 10, so check your free space now and delete what you don't need. The first update, 1.002, adds roughly another 1 to 2 GB.",
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
    question: "Is GTA 6 crossplay?",
    body: [
      "No, because it has no multiplayer to cross over. GTA 6 launched on November 19 as a single-player game, so PS5 and Xbox players can't play together, or with anyone at all.",
      "When an online mode arrives, crossplay will be one of the first questions. Rockstar's track record isn't encouraging: GTA Online has never let PlayStation and Xbox players into the same session.",
      "Your progress also doesn't carry between consoles. A save on PS5 stays on PS5.",
    ],
    faq: [
      { q: "Can I play GTA 6 with friends?", a: "Not yet. There's no online mode at launch." },
      { q: "Will GTA 6 Online have crossplay?", a: "Rockstar hasn't said. Online itself hasn't been announced." },
    ],
  },
  "reviews-come-out-november-18": {
    question: "What are the GTA 6 reviews?",
    body: [
      "Reviews went live on the morning of Wednesday, November 18, the day before launch, just as Insider Gaming had reported. More than 150 critics published at once.",
      "They're close to unanimous. GTA 6 scored 99 on Metacritic, tying The Legend of Zelda: Ocarina of Time for the highest score in the site's history and topping GTA 4's 98, with no mixed or negative reviews. OpenCritic shows a similar score.",
      "The main criticism is performance. There's no 60 fps mode, and several reviewers noted dips below 30 fps in heavy scenes, especially on the base PS5 and Xbox Series S.",
    ],
    faq: [
      { q: "What is GTA 6's Metacritic score?", a: "99, from more than 140 critics, as of launch week." },
      { q: "Is GTA 6 the highest-rated game ever?", a: "It's tied with The Legend of Zelda: Ocarina of Time at 99 on Metacritic." },
    ],
  },
  "pre-orders-made-1-billion": {
    question: "How much money has GTA 6 made?",
    body: [
      "A lot more than $1 billion. Take-Two announced on November 20 that GTA 6 sold 32.5 million copies before launch, a record across all platforms, and $3.79 billion in retail sales on its first day.",
      "Take-Two calls it the biggest launch in entertainment history, bigger than any movie's opening. For comparison, GTA 5 made about $800 million on its first day in 2013 and passed $1 billion in three days.",
      "These are retail sales figures from Take-Two, not the company's own revenue, and it's unclear exactly how pre-orders are counted in the day-one total.",
    ],
    faq: [
      { q: "How many copies has GTA 6 sold?", a: "32.5 million before launch, according to Take-Two. A running total hasn't been published yet." },
      { q: "How much did it cost to make GTA 6?", a: "Take-Two hasn't disclosed it. Estimates are $1 to $1.5 billion." },
    ],
  },
  "manni-perez-plays-lucia": {
    question: "Who plays Lucia in GTA 6?",
    body: [
      "Manni L. Perez. The game's credits confirm what fans had suspected for more than two years: Perez plays Lucia Caminos. She'd been the name most linked to the role since the trailers, based on her look and voice.",
      "Jason Duval is played by Dylan Rourke, whose name wasn't public until launch. Other credited cast include Bobby Moynihan as Cal and Stephen Root as Brian Heder.",
      "You can see the full credits in the game's settings menu.",
    ],
    faq: [
      { q: "Who plays Jason in GTA 6?", a: "Dylan Rourke, according to the game's credits." },
      { q: "Who is Lucia in GTA 6?", a: "Lucia Caminos is one of the two playable leads, alongside Jason Duval." },
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
      "How freely you can switch during missions and free roam is one of the details players are still testing."
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
      "How the sixth star escalates the response, whether it brings the military, SWAT or something new, is something players are still working out."
    ],
    faq: [
      { q: "What happens at six stars in GTA 6?", a: "Rockstar hasn't detailed it, and players are still testing." },
      { q: "How many wanted stars did GTA 5 have?", a: "Five." },
    ],
  },
  "cops-remember-your-outfit": {
    question: "Can you change clothes to escape the cops in GTA 6?",
    body: [
      "Official footage shows the police tracking your appearance and outfit, with icons for both under your wanted level. That points to a system where changing your look matters.",
      "Previews describe police building a description from witnesses and cameras. How much a change of clothes helps you escape hasn't been shown in detail.",
      "We're testing it: get a wanted level, change outfits in a store, and see whether the outfit icon clears.",
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
    question: "How long is GTA 6?",
    body: [
      "Most critics finished the main story in about 50 to 60 hours. Reviewers who explored more took 70 hours or longer, and one spent over 100.",
      "The 80-hour figure came from a Rockstar North director's playthrough of the story plus some side activities, so it's closer to a relaxed playthrough than to the story alone.",
      "Completionists should expect around 150 to 200 hours. For comparison, GTA 5's main story takes about 30 hours.",
    ],
    faq: [
      { q: "How long does it take to 100% GTA 6?", a: "Estimates are around 150 to 200 hours." },
      { q: "Is GTA 6 longer than GTA 5?", a: "Yes. Its main story is roughly twice as long." },
    ],
  },
  "gyms-make-you-stronger": {
    question: "Can you get muscles in GTA 6?",
    body: [
      "Yes. There are gyms across Vice City, and working out builds muscle and strength. Food and exercise visibly change Jason's and Lucia's bodies, so eating too much adds weight too.",
      "Gym memberships are a one-time fee, and early safehouses have basic weights you can use for free. It's the first time since GTA San Andreas that the series has let your character's body change like this.",
      "Exactly how much strength affects fighting, running or driving is still being tested by players.",
    ],
    faq: [
      { q: "Can you get fat in GTA 6?", a: "Yes. Eating more than you burn adds visible weight." },
      { q: "Where are the gyms in GTA 6?", a: "In Vice City. Guides list nine fitness centers." },
    ],
  },
  "you-can-buy-houses": {
    question: "Can you buy houses in GTA 6?",
    body: [
      "Not so far. Players have found garages to buy around the map for more vehicle space, but no houses, apartments or businesses for sale.",
      "Your homes come with the story instead. Safehouses change as the chapters progress.",
      "That could change with updates or an online mode. GTA Online added property buying years after GTA 5 launched. We'll update this if players find a way.",
    ],
    faq: [
      { q: "Can you buy property in GTA 6?", a: "Only garages so far." },
      { q: "Does GTA 6 have safehouses?", a: "Yes. They come with the story and change by chapter." },
    ],
  },

  // ---------------- World ----------------
  "enter-every-building": {
    question: "Can you go inside every building in GTA 6?",
    body: [
      "No, but you can go into far more than in any GTA before. Rockstar said there are hundreds of interiors, and players are finding shops, bars, clubs, gyms, banks and back offices you can walk into.",
      "Many big buildings are still just scenery, and some major landmarks stay closed. GTA 5 had about 80 interiors, so this is still a huge jump.",
      "Rockstar hasn't published an exact count. The 700 figure going around is unconfirmed.",
    ],
    faq: [
      { q: "How many interiors are in GTA 6?", a: "Hundreds, according to Rockstar. No exact count has been published." },
      { q: "Can you enter shops in GTA 6?", a: "Yes. Most smaller shops and many businesses can be entered." },
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
      "Yes, now that the game is out. The full map of Leonida is in the game, and players are filling in every road and landmark.",
      "Rockstar still hasn't published a separate map image outside the game, so screenshots of the in-game map are the real reference now.",
      "The detailed maps you've seen come from fan mapping projects. The best known started in 2022 and has pieced Leonida together frame by frame from trailers, screenshots and leaks, releasing new versions as more footage appears.",
      "Before launch, the detailed maps came from fan mapping projects built frame by frame from trailers and leaks. They got remarkably close, and now players can check them against the real thing.",
    ],
    faq: [
      { q: "What is the GTA 6 mapping project?", a: "A fan effort that reconstructs Leonida from official footage. It isn't affiliated with Rockstar." },
      { q: "Is Key West in GTA 6?", a: "Still unconfirmed. Check our claim on the leaked map for the latest." },
    ],
  },

  // ---------------- Launch week ----------------
  "you-can-play-gta-6-early": {
    question: "Can you play GTA 6 early?",
    body: [
      "No, and now you don't need it: GTA 6 has been out since November 19. There was no early access for any edition, Ultimate included. Pre-loaded copies stayed locked until midnight local time on launch day.",
      "Boxed copies work like digital ones: they contain a download code, not a disc. Some buyers have reported boxes with missing or already-used codes; PlayStation's advice is to go back to the retailer.",
      "Videos and posts promising early access are usually old trailer footage, fake leaks or scams. Never enter your PlayStation or Xbox login on a site offering early access.",
    ],
    faq: [
      { q: "Does the Ultimate Edition have early access?", a: "No. Every edition unlocks at the same time." },
      { q: "When is GTA 6 playable?", a: "From midnight local time on November 19, 2026." },
    ],
  },
  "preload-starts-november-10": {
    question: "How do you preload GTA 6?",
    body: [
      "Pre-loading opened on November 10, 2026. On PS5, it started at midnight in your local time zone. On Xbox Series X|S, it opened at the same moment worldwide, midnight GMT, which was 7 p.m. Eastern on November 9 in the US.",
      "To pre-load on PS5, go to your Game Library, find Grand Theft Auto VI under Purchased, and select Download. On Xbox, open My Games and Apps, then Full Library, then Owned Games, and install it from there. If you bought a boxed copy, redeem the code in the box first. Turning on automatic downloads means the pre-load and any updates install while the console is in rest mode.",
      "You need up to 212 GB of free space. Preloading now also gets you the first update, 1.002, before launch, so you won't be stuck downloading on launch night.",
    ],
    faq: [
      { q: "When can I download GTA 6?", a: "Now. Pre-loading opened on November 10, 2026." },
      { q: "Why is my GTA 6 preload so slow?", a: "Huge demand. Some internet providers reported record traffic. Try downloading overnight, and pause and resume if it stalls." },
    ],
  },
  "gta-6-has-a-day-one-patch": {
    question: "Is there a GTA 6 day one patch?",
    body: [
      "Yes, two of them. Version 1.002 rolled out the week before launch, about 1.07 GB on PS5 and about 2.18 GB on Xbox Series X|S, and version 1.002.001 followed on November 16.",
      "Rockstar hasn't published patch notes for either, so what they change is unknown. Patches this close to launch usually fix bugs found after the game went gold. PS5 players also needed a PlayStation system update to play.",
      "Updates download automatically if your console is set to. We track every update, its size and any notes on our GTA 6 status page.",
    ],
    faq: [
      { q: "How big is the GTA 6 day one patch?", a: "Update 1.002 is about 1.07 GB on PS5 and about 2.18 GB on Xbox." },
      { q: "Where are the GTA 6 patch notes?", a: "Rockstar hasn't published any yet. Our status page lists every update as it lands." },
    ],
  },
  "gta-6-downgraded-on-xbox": {
    question: "Is GTA 6 downgraded on Xbox?",
    body: [
      "On Xbox Series S, yes. Digital Foundry's testing, as reported, shows it renders at 720p and upscales to 1080p, with frame rates often in the low-to-mid 20s in heavy scenes.",
      "On Xbox Series X, no. It renders at about 1440p like the base PS5, and Xbox's 120Hz display mode makes its 30 fps feel slightly smoother. The base PS5 can dip into the low 20s during big explosions.",
      "The PS5 Pro is the best version: sharper image, ray-traced shadows, and the steadiest 30 fps. Xbox One owners stream the game at Series S settings.",
    ],
    faq: [
      { q: "Is GTA 6 better on PS5 or Xbox Series X?", a: "They're very close. Series X runs slightly smoother; the PS5 Pro beats both." },
      { q: "Is GTA 6 playable on Xbox Series S?", a: "Yes, but at a lower resolution and less stable frame rate than other consoles." },
    ],
  },
  "gta-6-cost-2-billion": {
    question: "How much did it cost to make GTA 6?",
    body: [
      "Nobody outside Take-Two knows. The company has never disclosed GTA 6's budget, and its CEO has said only that the game was expensive.",
      "Most analyst estimates land between $1 billion and $1.5 billion. The $2 billion figure that circulates usually adds marketing on top of development, or rounds up a rough estimate. None of these numbers come from a corporate filing or an on-the-record statement.",
      "For comparison, GTA 5 reportedly cost about $265 million to develop and market in 2013, and Red Dead Redemption 2 around $540 million. Even the lowest GTA 6 estimates would make it one of the most expensive entertainment projects ever made.",
    ],
    faq: [
      { q: "Is GTA 6 the most expensive game ever made?", a: "Very likely, based on estimates, but the budget isn't public." },
      { q: "How much did GTA 5 cost to make?", a: "About $265 million including marketing, according to reports at the time." },
    ],
  },
  "preloads-slowing-down-the-internet": {
    question: "Is GTA 6 slowing down the internet?",
    body: [
      "In some places, yes. When pre-loads opened on November 10, millions of players started downloading up to 212 GB at once.",
      "UK provider YouFibre emailed customers that GTA 6 downloads had overloaded one of its network gateways, slowing speeds for everyone on it, including people who don't play. It later said emergency work was done but speeds could stay slower during the rush. Virgin Media O2 and Germany's 1&1 also reported record traffic.",
      "If your download or your whole connection is slow, it's probably congestion rather than a problem with your console. Downloading overnight helps, and pausing and resuming a stalled download often restarts it at full speed.",
    ],
    faq: [
      { q: "Is GTA 6 down?", a: "Check our status page for outages and known issues." },
      { q: "Why is my internet slow since GTA 6 pre-loads opened?", a: "Some providers' networks are congested by the downloads. Try again overnight." },
    ],
  },

  // ---------------- Leaks ----------------
  "leaked-first-mission-footage": {
    question: "Is the leaked GTA 6 first mission footage real?",
    body: [
      "Almost certainly not. A clip claiming to show GTA 6's opening mission went viral this week, but no news outlet has verified it, and Reddit users who broke it down frame by frame say the voices are fake and the footage appears to be built in GTA 5.",
      "Fakes like this are common before a big launch. Some are AI-generated, some are GTA 5 mods dressed up as GTA 6, and at least one viral clip was made by a creator who later admitted rebuilding a scene from scratch to see if people would believe it. Another clip this week fooled many viewers with how lifelike it looked, until people realized it was a recreation, not a leak.",
      "Real GTA 6 footage does exist: Rockstar's trailers, its August 2026 Extended Look and the 2022 hack that Rockstar itself confirmed. Anything else should be treated as unverified until the game is out on November 19.",
    ],
    faq: [
      { q: "How can you tell if a GTA 6 leak is fake?", a: "Check whether a reputable outlet has verified it, look for GTA 5 assets, menus or vehicles, and be wary of perfect-looking footage with no source. A Reddit post alone isn't proof." },
      { q: "Was GTA 6 really leaked before?", a: "Yes. In September 2022 Rockstar confirmed a hacker had stolen and posted early development footage." },
    ],
  },
  "leaked-full-map-image": {
    question: "Is the leaked GTA 6 map real?",
    body: [
      "Not confirmed. The map image circulating this week appears to be an AI-upscaled version of a low-quality photo. Upscaling invents detail that wasn't in the original, so small features, including whether Key West is there, can't be trusted.",
      "A separate collector-style map that surfaced on November 12 drew similar doubts. Reddit users pointed out it looks like a stylized, theme-park-style illustration rather than a real game map, which makes it useless for working out the actual layout. Others have noticed that some 'leaked maps' resemble maps from other open-world games.",
      "Rockstar has named the Leonida Keys as a region but hasn't shown whether the island at their far end, Key West's equivalent, is in the game. Fans think it may have been folded into other islands. We'll know when the in-game map opens on November 19.",
    ],
    faq: [
      { q: "Is Key West in GTA 6?", a: "Unknown. Rockstar hasn't shown it, and the leaked maps that leave it out aren't reliable." },
      { q: "Is there an official GTA 6 map?", a: "Not a full one. Rockstar has named the regions, and fan projects have reconstructed the rest from trailers." },
    ],
  },
  "review-copies-locked-down": {
    question: "How did GTA 6 reviewers get the game?",
    body: [
      "Mostly like any big game: review copies went out ahead of launch, and more than 150 reviews went live on November 18. The early rumors that reviewers would only play at secret, supervised locations didn't hold up.",
      "A pre-launch claim that review copies carried flashing on-screen watermarks was also disputed by NateTheHate, the leaker it was pinned on, who said it wasn't accurate.",
      "Rockstar likely did use extra precautions to trace leaks, as publishers often do, but there was no unusual lockdown.",
    ],
    faq: [
      { q: "When did GTA 6 reviews come out?", a: "November 18, the day before launch." },
      { q: "Did GTA 6 leak before launch?", a: "Some clips spread, but the viral 'leaks' before launch were mostly fakes." },
    ],
  },
  "leaked-108-artist-list": {
    question: "How many songs are on the GTA 6 radio?",
    body: [
      "Far more than 108 artists' worth. GTA 6's in-game radio has more than 20 stations, and music sites cataloguing them count hundreds of licensed tracks.",
      "Station counts differ between guides, from 21 to 24, depending on whether talk and special stations are included. Stations include Flash FM, Emotion 98.3, VCRR and Leonida Jazz Radio.",
      "The separate official album, Grand Theft Auto VI: The Album, has 34 songs. The 108-artist list that spread before launch was only a fraction of the full lineup.",
    ],
    faq: [
      { q: "How many radio stations are in GTA 6?", a: "More than 20. Guides count 21 to 24 depending on what they include." },
      { q: "Is there a GTA 6 soundtrack album?", a: "Yes, Grand Theft Auto VI: The Album, with 34 songs." },
    ],
  },

  // ---------------- Post-launch ----------------
  "gta-6-has-cheat-codes": {
    question: "Does GTA 6 have cheats?",
    body: [
      "Yes. GTA 6 has 61 cheats, but they work differently from past games. Each cheat unlocks after you finish the main story, by completing its own challenge. Finishing the story unlocks a money cheat, for example, and earning medals at shooting ranges unlocks infinite ammo.",
      "Once unlocked, you enter cheats on the in-game phone with a button combination: open the phone, hold L1 or LB, press R1 or RB, then enter the combo. There are no phone-number cheats like GTA 4 and GTA 5 had.",
      "Guides are still filling in the exact combos for every cheat, and some lists mark codes as unconfirmed. Be wary of lists that are really GTA 5 codes relabeled for GTA 6.",
    ],
    faq: [
      { q: "How do you enter cheats in GTA 6?", a: "Open the phone, hold L1 (PS5) or LB (Xbox), press R1 or RB, then enter the cheat's button combo." },
      { q: "Do GTA 6 cheats disable trophies?", a: "Not confirmed yet. Past GTAs disabled trophies and achievements while cheats were active." },
    ],
  },
  "gta-6-crashed-psn": {
    question: "Did GTA 6 crash PSN?",
    body: [
      "Nobody has said so officially. PlayStation Network sign-ins failed for many players on November 18, hours before GTA 6 unlocked in Europe and the US. Sony's status page confirmed the outage and showed services back to normal by mid-afternoon Eastern time.",
      "The timing made GTA 6 the obvious suspect: millions of players were signing in, redeeming codes and downloading updates at once, and PS5 owners also needed a new system update to play. But Sony hasn't given a cause or tied the outage to the game.",
      "The game itself didn't suffer a wide outage, since it has no online mode. If you have sign-in trouble, check PlayStation's status page first.",
    ],
    faq: [
      { q: "Is PSN down?", a: "Check status.playstation.com. The November 18 outage was resolved the same day." },
      { q: "Can you play GTA 6 offline?", a: "Yes. It's a single-player game, though PS5 owners needed to install a system update first." },
    ],
  },
  "boxed-copies-missing-codes": {
    question: "What if my GTA 6 box has no code?",
    body: [
      "Go back to the retailer. Some buyers have reported GTA 6 boxes with no download code inside, or a code that was already used. Because the boxed edition contains only a code, not a disc, a missing code means no game.",
      "Neither Rockstar nor Sony has said how many boxes are affected or why. PlayStation's support guidance points buyers to the store where they bought the game.",
      "Keep your receipt and the box. If a code shows as already used, don't keep retrying it.",
    ],
    faq: [
      { q: "Does the GTA 6 box have a disc?", a: "No. Boxed copies contain a download code only." },
      { q: "Can Rockstar replace a missing GTA 6 code?", a: "The advice so far is to contact the retailer, not Rockstar." },
    ],
  },

  // ---------------- Easter eggs ----------------
  "bigfoot-in-the-grassrivers": {
    question: "Is there Bigfoot in GTA 6?",
    body: [
      "Yes. Bigfoot is in GTA 6 as Leonida's Skunk Ape, Florida's own swamp-dwelling legend. Players have found an encounter in the Grassrivers, where a growl in the vegetation leads to a strange effigy tied to a tree.",
      "There's also a side quest to hunt the creature, started from flyers around the swamp towns, with night-time searches by flashlight. Guides differ on the exact locations, so expect them to settle over the next few days.",
      "It caps a 20-year running joke. GTA San Andreas players hunted a Bigfoot that never existed, and GTA 5 finally added one.",
    ],
    faq: [
      { q: "Where is Bigfoot in GTA 6?", a: "In the Grassrivers swamps. Guides point to several spots, and a side quest leads you there." },
      { q: "What is the Skunk Ape?", a: "Florida's version of Bigfoot, a legendary ape said to live in the Everglades." },
    ],
  },

  // ---------------- Real world ----------------
  "cortez-hotel-is-the-colony-hotel": {
    question: "Is the Cortez Hotel in GTA 6 a real place?",
    body: [
      "Yes. The Cortez Hotel is Vice City's version of the Colony Hotel at 736 Ocean Drive in Miami Beach. The vertical neon sign, the art deco facade and the Ocean Drive setting all match.",
      "The Colony is one of the most photographed buildings in South Beach, and its blue neon sign is best seen after dark from across the street.",
      "We have a side-by-side comparison page for it and will add an in-game shot next to our own photo of the real hotel soon.",
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
      "Drive Collins Avenue in-game at night and look for two towers with pointed crowns. If you find them, send us a screenshot.",
    ],
    faq: [
      { q: "Where are the Green and Blue Diamond condos?", a: "On Collins Avenue in Miami Beach." },
      { q: "What real Miami places are in GTA 6?", a: "See our Real places section for every match so far." },
    ],
  },
};
