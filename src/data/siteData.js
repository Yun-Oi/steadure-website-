/**
 * Steadure - Content and Site Configuration Data
 * 
 * All copy, samples, demo transcript pieces, and founder notes
 * are kept here for easy editing and extension.
 */

export const siteConfig = {
  name: "Steadure",
  tagline: "build to keep you moving.",
  subline: "We turn one finance video into posts, threads, newsletters and emails, so your ideas reach people who read.",
  email: "dispatch@steadure.com",
  socials: {
    x: "https://x.com/steadure",
    linkedin: "https://linkedin.com/company/steadure",
    youtube: "https://youtube.com/@steadure",
  },
};

export const sampleTranscript = {
  videoTitle: "Why Only 0.67% of Indians Know Where Their Money Goes",
  creator: "The 1% Club // AICFO Announcement",
  duration: "18:42",
  lines: [
    {
      id: "line-1",
      timestamp: "00:00:14",
      speaker: "Creator",
      text: "Over 9 CRORE Indians filed a tax return last year. Nine crore. But do you know how many have ever taken a single structured lesson on what to do with that money? We taught 6 LAKHS of them. That is 0.67%.",
      tags: ["hook", "stat", "x-thread", "newsletter"],
      isHook: true,
      hasFactCheck: true,
      factCheckNote: "CBDT 2024-25 ITR filing statistics: 9.08 crore total filings verified.",
    },
    {
      id: "line-2",
      timestamp: "00:01:28",
      speaker: "Creator",
      text: "And every day in my comments, people ask me the exact same thing: 'Should I buy a three crore house? Should I break my FD for crypto? Am I paying too much tax?' Google gives you fifty articles. It can't tell you what YOU should do.",
      tags: ["pain-point", "x-thread", "email"],
      isHook: false,
      hasFactCheck: false,
    },
    {
      id: "line-3",
      timestamp: "00:03:05",
      speaker: "Creator",
      text: "Indians do not have an income problem. Indians have a money guidance problem. When your salary doubles, your anxiety doubles with it because there's nobody sitting in your corner watching the balance sheet.",
      tags: ["thesis", "linkedin", "newsletter"],
      isHook: false,
      hasFactCheck: false,
    },
    {
      id: "line-4",
      timestamp: "00:05:42",
      speaker: "Creator",
      text: "Teaching worked. 600,000 students is proof. But teaching cannot scale to 9 crore families. You cannot attend a webinar at 11 PM when your credit card bill arrives. You need a CFO who never sleeps.",
      tags: ["pivot", "linkedin", "newsletter", "email"],
      isHook: false,
      hasFactCheck: false,
    },
    {
      id: "line-5",
      timestamp: "00:08:19",
      speaker: "Creator",
      text: "That is why we built AICFO. Not an Excel template, not another budgeting tracker that asks you to log your chai. A full-time, proactive financial mind living in your pocket that watches your money 24 hours a day.",
      tags: ["solution", "x-thread", "linkedin", "email"],
      isHook: true,
      hasFactCheck: false,
    },
  ],
};

export const demoOutputs = [
  {
    id: "x-thread",
    label: "X Thread",
    badge: "3 Posts • 4.2k Retweets est.",
    highlightIds: ["line-1", "line-2", "line-5"],
    hookBadge: "STRONGEST HOOK",
    editorCheck: "CHECK: CBDT 2024-25 verified at 9.08 Cr",
    posts: [
      {
        index: "1/3",
        text: `Over 9 CRORE Indians filed a tax return last year.\n\nWe taught 6 LAKHS of them.\n\nThat's 0.67%.\n\nHere's what I did about it 🧵👇`,
        stamp: "STRONGEST HOOK",
      },
      {
        index: "2/3",
        text: `Indians don't have an income problem.\nIndians have a money guidance problem.\n\n"Should I buy a three crore flat?"\n"Should I prepay my home loan?"\n\nGoogle gives you 40 SEO blogs. It can't look at your bank account and tell you the truth.`,
        stamp: null,
      },
      {
        index: "3/3",
        text: `Teaching worked, but teaching can't scale to 9 crore families.\n\nEvery Indian deserves someone watching their money full-time. Not an Excel sheet. Not an annual review.\n\nMeet AICFO: your very own CFO in your pocket.\n\nLink in bio to test the private beta.`,
        stamp: "CONVERSION ANCHOR",
      },
    ],
  },
  {
    id: "linkedin",
    label: "LinkedIn Story",
    badge: "Story Format • Executive Audience",
    highlightIds: ["line-1", "line-3", "line-4", "line-5"],
    hookBadge: "THOUGHT LEADERSHIP",
    editorCheck: "CHECK: Tone calibrated to senior professionals",
    title: "The 0.67% Paradox in Indian Wealth",
    content: `Last year, 9 crore Indians filed a tax return.\n\nOver the past 4 years, our team personally taught 600,000 of them how to manage personal cash flow.\n\nThat number sounds impressive until you do the math: that is barely 0.67% of taxpayers.\n\nHere is the uncomfortable truth most financial institutions avoid:\n\nIndians do not have an income generation problem. We have a continuous guidance problem.\n\nWhen someone receives their first major bonus or ESOP buyout, their anxiety spikes. They ask friends. They search Google. They get generic calculators built by banks trying to sell them ULIPs.\n\nWhat high-earning professionals actually need is an objective CFO in their corner 24/7.\n\nTeaching was phase 1.\nAutonomous software is phase 2.\n\nToday, we're introducing AICFO: the first private financial officer built for the modern Indian balance sheet.\n\nWhat’s the one money decision keeping you up this quarter? Tell me below.`,
  },
  {
    id: "newsletter",
    label: "Newsletter Edition",
    badge: "Weekly Dispatch • 3 Min Read",
    highlightIds: ["line-1", "line-3", "line-4"],
    hookBadge: "HIGH OPEN-RATE SUBJECT",
    editorCheck: "CHECK: Subject line tested against 3 variants",
    subjectLine: "6 lakh out of 9 crore. That's 0.67%.",
    previewText: "Why financial advice collapses the moment you get a raise.",
    content: `DEAR INVESTOR,\n\nHere is a statistic that keeps me awake at night:\n\nLast year, official filings crossed 90,000,000 returns. In our bootcamps, we’ve trained 600,000 individuals.\n\n0.67%.\n\nThat means 99.33% of earning professionals in this country are operating with zero structured financial compass. They are winging it with advice from their uncle’s chartered accountant.\n\nThree realities we noticed:\n\n1. SALARY DOES NOT CURE ANXIETY: High earners suffer the exact same dread as entry-level grads because their lifestyle expands faster than their asset allocation.\n\n2. STATIC SPREADSHEETS ARE DEAD: Nobody logs into an Excel sheet on Sunday evening to categorize grocery receipts.\n\n3. REAL-TIME GUIDANCE WINS: The moment you ask "Can I afford this trip to Japan?", you need an immediate, balance-sheet-aware answer.\n\nThis is why we built AICFO. Read the full memo below.`,
  },
  {
    id: "email",
    label: "Direct Email Letter",
    badge: "1-on-1 Personal • High Click-Through",
    highlightIds: ["line-2", "line-4", "line-5"],
    hookBadge: "PERSONAL CONVERSATION",
    editorCheck: "CHECK: Direct link to beta access token",
    subjectLine: "'Should I buy that 3-crore flat?'",
    content: `Hey reader,\n\nA follower DM'd me that exact question yesterday afternoon.\n\nHe makes ₹45L a year. His family is pushing him to buy in Gurgaon. His EMI would be ₹2.1 lakhs a month.\n\nHe asked: "Will this ruin me?"\n\nGoogle can't answer that for him. His bank RM will tell him yes because of the commission. His parents will tell him yes because 'real estate never goes down.'\n\nNone of them have seen his net liquid runway, his health insurance coverage, or his career burn rate.\n\nThis is why I built AICFO.\n\nIt’s not a bot. It’s an executive financial partner in your phone that actually knows your balance sheet.\n\nI’m opening 500 spots for our private beta this week. If you’re tired of guessing with your life savings, reply to this email or click below.\n\nBest,\nAnkit`,
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    label: "DISPATCH THE LINK",
    timeframe: "Minute 0",
    description: "Send us one YouTube video link — live or unlisted draft. No briefs, no meetings, no homework.",
    annotation: "Zero creator effort required",
    stamp: "DROP & GO",
  },
  {
    step: "02",
    label: "EXCAVATE THE CORE",
    timeframe: "Hour 12",
    description: "We dissect the video like print editors: extracting strong mathematical proofs, counter-intuitive hooks, and the central thesis.",
    annotation: "We fact-check all cited figures",
    stamp: "FACT-CHECKED",
  },
  {
    step: "03",
    label: "CALIBRATE THE VOICE",
    timeframe: "Hour 24",
    description: "We don't use generic AI phrasing. We write in your exact cadence, vocabulary, and rhythm — tailored specifically for readers.",
    annotation: "Zero algorithmic slop",
    stamp: "HUMAN CRAFT",
  },
  {
    step: "04",
    label: "DELIVER THE PACK",
    timeframe: "Hour 48",
    description: "You receive a clean Notion docket or Markdown docket: 2-3 X threads, 1 LinkedIn post, 1 newsletter, 1 email letter. Ready to copy-paste.",
    annotation: "Formatted for one-click publishing",
    stamp: "READY TO POST",
  },
];

export const samplePacks = [
  {
    id: "aicfo-launch",
    title: "The 1% Club: AICFO Launch",
    category: "Wealth Tech & EdTech",
    videoStats: "18 Min Video • 420K Views",
    deliverables: "3 X Threads + 1 LinkedIn + 1 Newsletter + 1 Email",
    results: "+28,400 Newsletter Reads • 3,200 Beta Signups",
    summary: "Transformed an 18-minute video on India's 0.67% financial literacy gap into a 5-part multi-platform written campaign.",
    badge: "PRIMARY SHOWCASE",
  },
  {
    id: "home-loan-trap",
    title: "The 30-Year Home Loan Trap",
    category: "Real Estate & Debt Math",
    videoStats: "24 Min Video • 810K Views",
    deliverables: "2 X Threads + 1 LinkedIn Deep-Dive + 1 Newsletter",
    results: "+1.2M Total Impressions on X • 4,800 Bookmarks",
    summary: "Deconstructed the mathematics of amortization schedules into an irrefutable 7-part visual X thread that went viral across Indian FinTwit.",
    badge: "VIRAL SAMPLE",
  },
  {
    id: "index-vs-pms",
    title: "Index Funds vs ₹50L Active PMS",
    category: "HNW Investing & Asset Allocation",
    videoStats: "31 Min Video • 350K Views",
    deliverables: "1 Executive LinkedIn Post + 1 In-Depth Newsletter + 2 X Posts",
    results: "780 Qualified HNW Leads Generated",
    summary: "Distilled a 31-minute technical comparison of expense ratios and hurdle rates into an executive briefing that senior CXOs reposted.",
    badge: "HNW LEAD-GEN",
  },
];

export const founderLetter = {
  headline: "Why we make you read.",
  date: "October 2026 // Dispatch from the Desk",
  paragraphs: [
    "Most finance creators spend 30 hours researching, scripting, and filming a video. They publish it on YouTube, get 200,000 views, and then... that masterpiece sits in an algorithmic graveyard.",
    "Meanwhile, the people who actually have capital — the founders, the senior engineers, the partners at VC firms — are not watching 38-minute videos on their lunch break. They are scanning their inbox. They are scrolling LinkedIn during a 5-minute commute. They are reading on X at 6:30 in the morning.",
    "If your ideas only exist as spoken video, you are invisible to the readers who could become your highest-paying clients, investors, or advocates.",
    "We built Steadure to solve that single bottleneck: taking one spoken video and translating it into printed, editorial-grade written pieces. Not robotic summaries. Real writing, with sharp hooks and verified math.",
    "One video. Many pages. Built to keep your ideas moving.",
  ],
  signoff: "Rishi & The Steadure Editorial Desk",
  signature: "Rishi A.",
  location: "Bangalore & London",
};
