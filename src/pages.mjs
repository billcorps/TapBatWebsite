import { config, escape as e, href } from "../scripts/config.mjs";
const home = `
<section class="hero shell" aria-labelledby="home-heading">
  <div class="hero-copy"><p class="eyebrow"><span class="short-line"></span> ARCADE FLYING GAME / ANDROID</p>
    <h1 id="home-heading">Tap to flap.<br><em>Hold to glide.</em></h1>
    <p class="intro">Guide a bat through gaps between stone columns. Tap to climb, hold to slow your descent, and try to beat your best score.</p>
    <div class="actions"><a class="button" href="${href("beta/")}">Join the Android beta</a><a class="text-link" href="#game">Meet TapBat</a></div>
    <p class="hero-meta">ANDROID 8.0+ <span aria-hidden="true">/</span> CONTAINS ADS</p>
  </div>
  <figure class="hero-visual"><div class="screenshot-frame"><img src="${href("assets/tapbat-gameplay.png?v=20261002")}" width="1080" height="2400" alt="TapBat development gameplay: a bat flies toward a gap between stone columns above rocks and ferns." fetchpriority="high"></div><figcaption><span>01 / GAMEPLAY</span><span>Development build</span></figcaption></figure>
</section>

<section id="game" class="section shell" aria-labelledby="game-heading"><div class="section-heading"><p class="eyebrow">THE GAME</p><h2 id="game-heading">How to play.</h2><p>Earn one point for each pair of columns you pass. The pace increases and the gaps narrow as your score grows.</p></div>
<div class="features"><article><span class="feature-number">01</span><h3>Control your flight.</h3><p>Tap for a wingbeat. Hold your wings open to descend 50% slower. Release to tuck them and drop faster, then time your next flap through the gap.</p></article><article><span class="feature-number">02</span><h3>Change the landscape.</h3><p>Procedural scenery brings variety to the terrain, clouds, rocks, and vines. Choose New landscape in Settings for a fresh view that stays saved between flights.</p></article><article><span class="feature-number">03</span><h3>Track your best score.</h3><p>Your personal best is saved on your device, so you can track your progress between games.</p></article></div></section>
<section class="world-section"><div class="shell world-grid"><figure class="world-visual"><img src="${href("assets/tapbat-home.png?v=20261002")}" width="1080" height="2400" loading="lazy" alt="TapBat's home screen with the bat above layered forests and stonework, with rocks, ferns, and vines in the foreground."><figcaption>02 / HOME SCREEN</figcaption></figure><div class="world-copy"><p class="eyebrow">IN THE APP</p><h2>Inside TapBat.</h2><p>Fly past layered forests, stone columns, rocks, and ferns. Generate a different landscape in Settings, or keep the one you have. These screenshots show a recent Android development build.</p><dl class="game-details"><div><dt>The controls</dt><dd>Tap to flap. Hold to glide. Release to tuck.</dd></div><div><dt>The challenge</dt><dd>Clear the columns. Beat your best.</dd></div><div><dt>The pause button</dt><dd>Pause and resume your game.</dd></div></dl><a class="text-link" href="${href("beta/")}">Learn about beta testing</a></div></div></section>
<section class="closing shell"><div><p class="eyebrow">ANDROID BETA</p><h2>Test TapBat.</h2><p>Try TapBat on Android and help make it better.</p></div><a class="button" href="${href("beta/")}">Join the beta</a></section>`;
const contact = `<a href="mailto:${e(config.supportEmail)}">${e(config.supportEmail)}</a>`;
const external = (url, label, className = "") =>
  `<a class="${className}" href="${e(url)}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;
const beta = `
<section class="beta-hero shell"><div><p class="eyebrow">THE ANDROID BETA</p><h1>Test TapBat<br><em>on Android.</em></h1><p class="intro">Try TapBat before its public release and share feedback on the controls, performance, and any problems you find.</p><a class="button" href="#join">Become a tester</a></div><aside class="beta-note" aria-label="What you need to test"><span class="eyebrow">WHAT YOU NEED</span><ul><li>An Android 8.0 or newer device</li><li>A Google account for Google Play</li><li>A few minutes to play and share feedback</li></ul><p>Keep the app installed and stay in the tester group while you take part. Come back over the next two weeks and try a few more flights.</p></aside></section>
<section id="join" class="enrollment shell" aria-labelledby="join-heading"><div class="section-heading"><p class="eyebrow">JOIN THE CLOSED TEST</p><h2 id="join-heading">Join in this order.</h2><p>Closed testing is being prepared. You can join the Google Group now; the testing and install links will work after the first build is approved and available.</p><p>Use the same Google account at every step, including in the Play Store on your phone. Each button opens a new tab.</p></div><ol class="steps">
<li><span class="step-number" aria-hidden="true">01</span><div><h3>Join the TapBat group.</h3><p>Open the Google Group and choose Join group. If membership needs approval, wait for confirmation before continuing.</p></div>${external(config.beta.groupUrl, "Join the Google Group", "button")}</li>
<li><span class="step-number" aria-hidden="true">02</span><div><h3>Become a tester.</h3><p>After joining the group, open TapBat’s Google Play testing page and choose Become a tester. Group membership alone does not enroll you.</p></div>${external(config.beta.testUrl, "Join the closed test", "button button-secondary")}</li>
<li><span class="step-number" aria-hidden="true">03</span><div><h3>Install TapBat.</h3><p>Open the Play Store listing on your Android device and install TapBat with the same account you used to join the test.</p></div>${external(config.beta.installUrl, "Install TapBat", "button button-secondary")}</li>
</ol><p class="enrollment-note">Google handles group membership and test enrollment. This website does not collect signup details or check whether you have joined.</p></section>
<section class="feedback-section"><div class="shell feedback-grid"><div><p class="eyebrow">DURING THE TEST</p><h2>What to test.</h2><p>Try a quick tap, a held glide, and a release into a faster drop. Watch the vines, rocks, and ferns pass the layered forest. Then pause, return to the game, try New landscape, and check that your best score is saved. Stutters, visual gaps, or awkward controls are useful feedback.</p></div><aside class="feedback-card"><h3>Tell me what happened.</h3><p>Email ${contact} or leave private tester feedback on Google Play. Include your phone model, Android version, and what you were doing when the problem happened.</p><p>General questions are welcome in the tester group. Avoid posting personal details in public messages or screenshots.</p><p class="signature">${e(config.developerName)}<br><span>TapBat developer</span></p></aside></div></section>
<section class="section shell faq" aria-labelledby="faq-heading"><p class="eyebrow">BETA HELP</p><h2 id="faq-heading">Common questions.</h2>
<details><summary>Google Play says the app is not available.</summary><p>Check that you joined the TapBat group, opted into the test, and are using the same Google account in your browser and the Play Store. A new test or access change can take time to become available. If it still does not work, email ${contact}.</p></details>

<details><summary>Do I need to leave a public review?</summary><p>No. Honest private feedback is what helps. Use the tester feedback option on Google Play or email the developer.</p></details>
<details><summary>Does TapBat have ads or require an account?</summary><p>The game includes advertising on Home and Scoreboards, and an ad may appear before a retry. You can play and save a personal best without signing into Google Play Games. Online rankings, where enabled, use Google Play Games. A Google account is required to join this beta through Google Play.</p></details>

</section>`;
const policySections = [
  [
    "local-data",
    "Game data on your device",
    `<p>TapBat saves your personal best score, haptic preference, and landscape seed in the app’s local storage. It also keeps a completed-flight score and retry information for submission when online rankings are available. These records keep your settings and score working between sessions.</p><p>Android backup is enabled. Depending on your device and Google backup settings, app data may be backed up or transferred by Android. TapBat does not operate its own game-data server.</p>`,
  ],
  [
    "advertising",
    "Advertising and consent",
    `<p>TapBat uses Google Mobile Ads and Google’s User Messaging Platform. Ads can appear on Home and Scoreboards, and an interstitial ad may appear when you choose to play again. Availability depends on connectivity, consent, and ad delivery.</p><p>Google’s advertising SDK may collect and share IP addresses, approximate location inferred from IP addresses, device and account identifiers, ad and app interactions, and diagnostic information. Google uses these for advertising, measurement, and fraud prevention. Ad behavior and data use depend on your choices and the service configuration.</p><p>The app requests consent information and shows a consent form when required. An <strong>Ad privacy</strong> option appears in Settings when Google requires access to privacy choices. You can also manage your advertising ID through Android settings.</p><p>See <a href="https://policies.google.com/privacy">Google’s Privacy Policy</a> and <a href="https://developers.google.com/admob/android/next-gen/privacy/play-data-disclosure">Google’s advertising SDK data disclosures</a> for details.</p>`,
  ],
  [
    "play-games",
    "Google Play Games",
    `<p>Local play and your personal best do not require Google Play Games sign-in. When online rankings are enabled, Google Play Games handles authentication and leaderboard services. It can automatically sign in an existing gaming profile when TapBat starts, according to your Google Play Games sign-in settings. While signed in, TapBat automatically sends completed-flight scores and retries pending submissions when the service is available. The app displays player names, ranks, and scores from the leaderboard.</p><p>Google Play Games collects gamer identity information, including a gamertag and avatar, when a gaming profile is created or updated. Its SDK also collects analytics and diagnostic information for stability and product improvements. See <a href="https://developer.android.com/games/pgs/data-collection">Google’s Play Games SDK data disclosures</a> for details.</p><p>Your gaming profile and score may be visible to other players according to Google Play Games settings. Manage your profile, sign-in choices, and game data through Google Play Games and your Google account.</p>`,
  ],
  [
    "website",
    "This website and beta enrollment",
    `<p>This website has no advertising scripts, analytics trackers, signup form, or developer-set cookies. Its fonts and images are served with the site. GitHub Pages hosts the website and may process technical request information, including your IP address, under the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub Privacy Statement</a>.</p><p>Beta signup takes place on Google Groups and Google Play. When you join the tester group or send feedback, your Google profile, membership information, and messages may be visible to the developer, group administrators, and other people according to the group’s settings. Avoid sharing private information in group posts. This website does not verify your membership or enrollment.</p>`,
  ],
  [
    "support",
    "Support and feedback",
    `<p>If you email ${contact}, the developer receives your email address and any details or attachments you choose to send. This information is used to reply, investigate problems, and improve TapBat. Send only what is needed to explain the issue.</p><p>Support correspondence is kept for as long as needed to handle the request and related follow-up. You can ask the developer to delete correspondence by contacting the same address. Email providers also process messages under their own policies.</p>`,
  ],
  [
    "choices",
    "Your choices and deletion",
    `<ul><li><strong>Local game data:</strong> use Android’s app settings to clear TapBat’s storage, or uninstall the app. Clearing storage resets your local scores and preferences.</li><li><strong>Backups:</strong> manage Android backups through your device or Google account. Clearing local storage does not necessarily remove a backup.</li><li><strong>Ads:</strong> use Ad privacy in TapBat Settings when available, and Android’s advertising controls.</li><li><strong>Play Games:</strong> use Google Play Games controls to manage or delete gaming-profile and game data. Removing TapBat does not automatically remove information held by Google.</li></ul><p>Google and GitHub retain information according to their own policies. Contact the developer about information you provided directly or questions about access, correction, or deletion.</p>`,
  ],
  [
    "security",
    "Security",
    `<p>TapBat uses Android app storage for local settings and established Google services for advertising and rankings. No storage or transmission method can be guaranteed completely secure. Do not include passwords or other sensitive information in support messages or tester feedback.</p>`,
  ],
  [
    "children",
    "Children’s privacy",
    `<p>TapBat is intended for players ages 13 and older and is not directed to children under 13. The app does not include a form for children to submit personal details to the developer. If you believe a child has provided personal information through support or the tester group, contact ${contact} so the developer can investigate and address it. Google’s services have their own age and account requirements.</p>`,
  ],
  [
    "changes",
    "Changes and contact",
    `<p>This policy may change when TapBat or its services change. The updated date at the top of this page identifies the latest revision.</p><p><strong>Developer:</strong> ${e(config.developerName)}<br><strong>Privacy and support:</strong> ${contact}<br><strong>Android app:</strong> TapBat (<code>com.billcorp.tapbat</code>)</p>`,
  ],
];
const privacy = `<section class="policy-hero shell"><p class="eyebrow">TAPBAT / YOUR INFORMATION</p><h1>Privacy policy.</h1><p class="intro">What is saved, what is shared, and the choices you have.</p><p class="policy-date">Last updated ${e(config.policyUpdated)}</p></section><div class="policy-layout shell"><aside class="policy-nav"><nav aria-label="Policy sections"><p class="eyebrow">ON THIS PAGE</p>${policySections.map(([id, title], i) => `<a href="#${id}"><span>${String(i + 1).padStart(2, "0")}</span>${title}</a>`).join("")}</nav></aside><article class="policy-content"><div class="policy-summary"><h2>The short version</h2><p>TapBat saves game progress and preferences on your device. Google services handle advertising and optional online rankings. The website has no signup form or analytics trackers. For privacy questions, contact ${contact}.</p></div><p>This policy covers the TapBat Android app and this website, provided by ${e(config.developerName)}.</p>${policySections.map(([id, title, content], i) => `<section id="${id}" class="policy-section"><span class="section-number">${String(i + 1).padStart(2, "0")}</span><h2>${title}</h2>${content}</section>`).join("")}</article></div>`;
export const pages = [
  {
    path: "",
    title: "TapBat · Android arcade game",
    description:
      "Guide a bat through gaps between stone columns. Tap to flap, hold to glide, and beat your best score. Join the TapBat Android beta.",
    content: home,
  },
  {
    path: "beta/",
    title: "Join the beta · TapBat",
    description:
      "Join the TapBat tester group, enroll in the Android closed test, and share feedback.",
    content: beta,
  },
  {
    path: "privacy/",
    title: "Privacy policy · TapBat",
    description:
      "How TapBat handles local game data, advertising, optional Google Play Games rankings, beta enrollment, and support.",
    content: privacy,
  },
];
