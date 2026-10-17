/**
 * Steadure Site Configuration & Verbatim Content Pack
 * Brand: Steadure (steadure.com)
 * All editable copy, config, and sample data live here.
 */

export const siteConfig = {
  brand: {
    name: 'Steadure',
    tagline: 'build to keep you moving.',
    domain: 'steadure.com',
    contactEmail: 'contact@steadure.com',
    xUrl: 'https://x.com/steadure',
    linkedInUrl: 'https://linkedin.com/company/steadure',
  },
  creator: {
    name: 'Creator Name',
    handle: '@creatorhandle',
    avatarInitial: 'C',
    headline: 'Founder & Educator · 1.2M followers',
    email: 'hello@example.com',
  },
  // Single clear configurable line for any future promise (empty by default)
  customPromise: '',
};

export const heroData = {
  h1: 'build to keep you moving.',
  subhead: 'One finance video in. Threads, posts, a newsletter and an email out.',
  ctaPrimary: 'See it work',
  ctaSecondary: 'Send a video',
};

export const howItWorksData = {
  title: 'How it works',
  panels: [
    {
      step: 1,
      caption: 'Send the link',
      shortDesc: 'You send a video link.'
    },
    {
      step: 2,
      caption: 'We write it',
      shortDesc: 'We pick the best lines.'
    },
    {
      step: 3,
      caption: 'You post it',
      shortDesc: 'You get the posts.'
    }
  ]
};

export const sampleData = {
  title: 'One video. Four pieces.',
  disclaimer: 'Sample. Not posted on any platform.',
  
  // Left transcript panel (spoken-style lines with typewriter timestamps)
  transcriptLines: [
    {
      id: 't1',
      time: '00:12',
      text: 'Over nine crore Indians filed a tax return last year. Six lakh learned money from us. That\'s 0.67%.',
      activeFor: ['x', 'linkedin', 'newsletter', 'email']
    },
    {
      id: 't2',
      time: '00:45',
      text: 'Indians don\'t have a money problem. Indians have a money guidance problem.',
      activeFor: ['x', 'linkedin', 'newsletter']
    },
    {
      id: 't3',
      time: '01:30',
      text: 'We can\'t reach nine crore Indians with courses and advisory calls.',
      activeFor: ['x', 'linkedin', 'newsletter', 'email']
    },
    {
      id: 't4',
      time: '02:15',
      text: 'What if every Indian had someone watching their money full-time?',
      activeFor: ['x', 'linkedin', 'newsletter']
    },
    {
      id: 't5',
      time: '03:00',
      text: 'Every answer comes from your real money.',
      activeFor: ['newsletter', 'email']
    }
  ],

  // Platform pieces
  xThread: {
    standard: [
      {
        num: '1/',
        isHook: true,
        text: 'Over 9 CRORE Indians filed a tax return last year. We taught 6 LAKHS of them. That\'s 0.67%. Here\'s what I did about it.'
      },
      {
        num: '2/',
        isHook: false,
        text: 'Four years ago, we started The 1% Club, with one belief. Indians don\'t have a money problem. Indians have a money guidance problem.'
      },
      {
        num: '3/',
        isHook: false,
        text: 'We earn well. We save. And we want to invest. But nobody taught us how.'
      },
      {
        num: '4/',
        isHook: false,
        text: 'So we started teaching! Over four years, more than six lakh Indians learned how to handle their money from us.'
      },
      {
        num: '5/',
        isHook: false,
        text: 'But we can\'t reach nine crore Indians with courses and advisory calls. It\'s physically impossible in my entire lifetime…'
      },
      {
        num: '6/',
        isHook: false,
        text: 'Every Indian deserves someone watching their money full-time. So we put everything we\'ve learned into one brain.'
      },
      {
        num: '7/',
        isHook: false,
        text: 'Meet AICFO. Your very own CFO in your pocket, powered by AI and backed by real expertise.'
      },
      {
        num: '8/',
        isHook: false,
        text: 'It\'s inside The 1% Club app. Thank you for reading, guys. Check it out today.'
      }
    ],
    tighter: [
      {
        num: '1.',
        isHook: true,
        text: 'Over nine crore Indians filed a tax return last year. We taught six lakh of them. That\'s 0.67%. Here\'s what I did about it.'
      },
      {
        num: '2.',
        isHook: false,
        text: 'Four years ago, we started The 1% Club with one belief. Indians don\'t have a money problem. Indians have a money guidance problem.'
      },
      {
        num: '3.',
        isHook: false,
        text: 'We earn well. We save. We want to invest. But nobody taught us how.'
      },
      {
        num: '4.',
        isHook: false,
        text: 'So we started teaching. Over four years, more than six lakh Indians learned how to handle their money from us.'
      },
      {
        num: '5.',
        isHook: false,
        text: 'But we can\'t reach nine crore Indians with courses and advisory calls. It\'s physically impossible in my entire lifetime.'
      },
      {
        num: '6.',
        isHook: false,
        text: 'Every Indian deserves someone watching their money full-time. So we put everything we\'ve learned into one brain.'
      },
      {
        num: '7.',
        isHook: false,
        text: 'Meet AICFO. Your very own CFO in your pocket, powered by AI and backed by real expertise.'
      },
      {
        num: '8.',
        isHook: false,
        text: 'It\'s inside The 1% Club app. Thank you for reading, guys. Check it out today.'
      }
    ]
  },

  linkedIn: {
    standard: {
      hook: 'Over 9 crore Indians filed a tax return last year. From which, 6 lakh learned money from us. That\'s 0.67%.',
      paragraphs: [
        'Four years ago, we started The 1% Club with one simple belief. Indians don\'t have a money problem. Indians have a money guidance problem.',
        'We earn well. We save. We want to invest. But nobody taught us how.',
        'So we started teaching. Over four years! More than six lakh Indians learned how to handle their money from us. I\'m proud of that.',
        'But 0.67% is not the number I wanted.',
        'Here\'s the truth… We can\'t reach nine crore Indians with courses and advisory calls. It\'s physically impossible in my entire lifetime…',
        'So we asked a different question. What if every Indian had someone watching their money full-time?',
        'That\'s AICFO. Four years of teaching, every lesson, every mistake we\'ve seen people make with money, all in one brain inside The 1% Club app.',
        'Thank you for reading, guys. Check out AICFO in the app today.'
      ],
      checkNote: 'CHECK: confirm the source and year for \'nine crore filed a tax return last year\''
    },
    tighter: {
      hook: 'Over nine crore Indians filed a tax return last year. Six lakh learned money from us. That\'s 0.67%.',
      paragraphs: [
        'Four years ago, we started The 1% Club with one simple belief. Indians don\'t have a money problem. Indians have a money guidance problem.',
        'We earn well. We save. We want to invest. But nobody taught us how.',
        'So we started teaching. Over four years, more than six lakh Indians learned how to handle their money from us. I\'m proud of that.',
        'But 0.67% is not the number I wanted.',
        'Here\'s the harsh reality. We can\'t reach nine crore Indians with courses and advisory calls. It\'s physically impossible in my entire lifetime.',
        'So we asked a different question. What if every Indian had someone watching their money full-time?',
        'That\'s AICFO. Four years of teaching, every lesson, every mistake we\'ve seen people make with money, all in one brain inside The 1% Club app.',
        'Thank you for reading, guys. Check out AICFO in the app today.'
      ],
      checkNote: 'CHECK: confirm the source and year for \'nine crore filed a tax return last year\''
    }
  },

  newsletter: {
    subject: "6 lakh out of 9 crore. That's 0.67%.",
    sheet1: [
      'Hey guys,',
      'Over nine crore Indians filed a tax return last year. Over four years, six lakh Indians learned how to handle their money from us. That\'s 0.67%.',
      'I\'ll be honest with you. That number bothered me.',
      'Four years ago, we started The 1% Club with one simple belief. Indians don\'t have a money problem. Indians have a money guidance problem. We earn well, we save, we want to invest, but nobody taught us how.',
      'Teaching worked. But here\'s the harsh reality. We can\'t reach nine crore Indians with courses and advisory calls. It\'s physically impossible in my entire lifetime.',
      'And every Indian deserves someone watching their money full-time.'
    ],
    sheet2: [
      'So we took everything we had. Four years of teaching, thousand crores of real wealth management, every lesson, every insight, every mistake we\'ve seen people make with money. We put all of it into one brain in The 1% Club app.',
      'It\'s called AICFO. Your very own CFO in your pocket, powered by AI and backed by real expertise.',
      'Here\'s how it works. You connect your bank, your cards and your mutual funds. It knows your complete financial picture better than you do. Then you ask it anything.',
      'Should I buy that car this year? Which car gets me the free flight for that Europe trip? Should I buy a three crore house? Can I fund my kids\' education abroad in 10 years? Can I take that two-month break and travel?',
      'Every answer comes from your real money, not generic gyan from the internet.',
      'It reads your mutual fund like how a doctor would read a report. You don\'t have to worry about decoding it. It tells you exactly what to do next.',
      'For the first time, someone is monitoring your money 24 hours a day. And you don\'t need to delete any app on your phone. The 1% Club app sits on top of everything you already use.',
      'The takeaway: stop taking advice built for everyone. Get answers built on your real money.',
      'Thank you so much for reading. Open The 1% Club app and try AICFO today.',
      'I will see you in the next one.'
    ],
    checkNote: "CHECK: confirm 'nine crore' source and year"
  },

  email: {
    subject: "6 lakh out of 9 crore. That's 0.67%.",
    salutation: 'Hey guys,',
    opener: "Over nine crore Indians filed a tax return last year. Over four years, six lakh learned money from us. That's 0.67%.",
    problem: "Teaching worked, but we can't reach nine crore Indians with courses and calls. It's physically impossible in my lifetime.",
    whatItDoes: [
      'Connect your bank, cards, and mutual funds into one brain.',
      'Ask anything: from buying that car to funding your kids\' education abroad.',
      'Every answer comes from your real money, not generic gyan from the internet.'
    ],
    buttonText: 'Open The 1% Club app',
    signoff: 'Best,\nCreator Name'
  }
};

export const contactData = {
  heading: 'Send us one video.',
  subhead: 'Drop your link. We handle the rest.',
  email: 'contact@steadure.com',
  fields: {
    name: 'Your name',
    email: 'Your email',
    videoLink: 'YouTube video link',
    submit: 'Send'
  }
};
