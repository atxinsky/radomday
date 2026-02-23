export interface CopyLine {
  en: string;
  cn: string;
  tone: ('savage' | 'warm' | 'chaotic')[];
}

// ---------------------------------------------------------------------------
// Destiny Lines -- fun one-liners about tonight's entertainment fate
// ---------------------------------------------------------------------------
export const destinyLines: CopyLine[] = [
  // ── savage ──────────────────────────────────────────────────────────────
  {
    en: 'The algorithm has spoken. Resistance is futile.',
    cn: '算法已经替你做了决定，挣扎是没有用的。',
    tone: ['savage'],
  },
  {
    en: 'You had 4 hours to decide. Now I decide for you.',
    cn: '你纠结了四个小时，现在轮到我了。',
    tone: ['savage'],
  },
  {
    en: 'Your indecisiveness brought you here. You deserve this.',
    cn: '你的选择困难症把你带到了这里，活该。',
    tone: ['savage'],
  },
  {
    en: 'Free will is overrated. Tonight, fate runs the show.',
    cn: '自由意志被高估了。今晚，命运说了算。',
    tone: ['savage'],
  },
  {
    en: 'Your Netflix "Continue Watching" list filed a restraining order. Try this instead.',
    cn: '你的Netflix待看列表已经申请了人身保护令，换个口味吧。',
    tone: ['savage'],
  },
  {
    en: 'I consulted your browser history. This is an intervention.',
    cn: '我参考了你的浏览记录。这是一次干预。',
    tone: ['savage'],
  },
  {
    en: 'Your taste? Questionable. My pick? Immaculate.',
    cn: '你的品味？存疑。我的推荐？无可挑剔。',
    tone: ['savage'],
  },
  {
    en: 'I picked this while you were still scrolling through thumbnails like a maniac.',
    cn: '你还在疯狂刷封面图的时候，我已经替你选好了。',
    tone: ['savage'],
  },
  {
    en: 'Congratulations, you outsourced your personality to an app. Bold move.',
    cn: '恭喜，你把人格外包给了一个App。够大胆的。',
    tone: ['savage'],
  },
  {
    en: 'I know you were about to rewatch The Office again. Denied.',
    cn: '我知道你又打算重刷老友记了。驳回。',
    tone: ['savage'],
  },
  {
    en: 'Stop pretending you have plans. Open this.',
    cn: '别装了，你今晚没别的安排。打开吧。',
    tone: ['savage'],
  },
  {
    en: 'Your Spotify Wrapped was embarrassing enough. Let me handle tonight.',
    cn: '你的年度歌单已经够社死了，今晚交给我吧。',
    tone: ['savage'],
  },
  {
    en: 'You scrolled past 200 options and picked nothing. Classic you.',
    cn: '你划过了200个选项然后什么都没选。经典的你。',
    tone: ['savage'],
  },
  {
    en: 'This was chosen with more care than your last three life decisions.',
    cn: '这个推荐比你最近三个人生决定都用心。',
    tone: ['savage'],
  },

  // ── warm ────────────────────────────────────────────────────────────────
  {
    en: 'Tonight, the universe curated something special just for you.',
    cn: '今晚，宇宙专门为你策划了一点小惊喜。',
    tone: ['warm'],
  },
  {
    en: 'You showed up. That is enough. Now let the night take care of the rest.',
    cn: '你来了就好，剩下的交给今晚。',
    tone: ['warm'],
  },
  {
    en: 'Some nights just need a little randomness to become unforgettable.',
    cn: '有些夜晚，只需要一点随机，就能变得难忘。',
    tone: ['warm'],
  },
  {
    en: 'This one found you for a reason. Trust the vibe.',
    cn: '这个推荐找到你是有原因的，相信感觉。',
    tone: ['warm'],
  },
  {
    en: 'Wherever tonight takes you, I hope it makes you smile.',
    cn: '不管今晚去向哪里，希望它让你笑一笑。',
    tone: ['warm'],
  },
  {
    en: 'You deserve a night where you do not have to think too hard.',
    cn: '你值得一个不用费脑子的夜晚。',
    tone: ['warm'],
  },
  {
    en: 'Let tonight be soft. You have been strong enough today.',
    cn: '让今晚温柔一点吧，你今天已经够坚强了。',
    tone: ['warm'],
  },
  {
    en: 'A little surprise never hurt anyone. Enjoy.',
    cn: '小惊喜从不伤人。享受吧。',
    tone: ['warm'],
  },
  {
    en: 'The best memories start with "I had no idea what I was getting into."',
    cn: '最好的回忆，都始于"我当时完全不知道会怎样"。',
    tone: ['warm'],
  },
  {
    en: 'Tonight is a gift. No returns, no exchanges.',
    cn: '今晚是一份礼物，不退不换。',
    tone: ['warm'],
  },
  {
    en: 'Consider this a little love letter from the void.',
    cn: '就当这是虚空寄来的一封小情书吧。',
    tone: ['warm'],
  },
  {
    en: 'Your future self will thank you for pressing that button.',
    cn: '未来的你会感谢现在按下按钮的自己。',
    tone: ['warm'],
  },
  {
    en: 'Not everything needs a reason. Sometimes joy just shows up.',
    cn: '不是所有事都需要理由，有时候快乐就是会突然出现。',
    tone: ['warm'],
  },

  // ── chaotic ─────────────────────────────────────────────────────────────
  {
    en: 'Your cat walked across the keyboard and picked this. Thank the cat.',
    cn: '你的猫踩过键盘选了这个。谢谢猫。',
    tone: ['chaotic'],
  },
  {
    en: 'A squirrel in a server room flipped a switch. Here we are.',
    cn: '一只松鼠在机房里拨了个开关，于是你看到了这个。',
    tone: ['chaotic'],
  },
  {
    en: 'I asked Mercury retrograde for advice. Do not blame me.',
    cn: '我问了水逆的意见。别怪我。',
    tone: ['chaotic'],
  },
  {
    en: 'Shook a Magic 8-Ball. It said "Why not?" Good enough.',
    cn: '摇了摇魔法八号球，它说"为什么不呢？"够了。',
    tone: ['chaotic'],
  },
  {
    en: 'This was selected by a coin flip, three dice, and a ouija board.',
    cn: '这是通过一次抛硬币、三颗骰子和一块占卜板选出来的。',
    tone: ['chaotic'],
  },
  {
    en: 'I generated this recommendation using pure chaos energy and zero logic.',
    cn: '这个推荐由纯粹的混沌能量驱动，不含任何逻辑。',
    tone: ['chaotic'],
  },
  {
    en: 'A random pigeon outside my window made the final call.',
    cn: '窗外一只路过的鸽子做了最终决定。',
    tone: ['chaotic'],
  },
  {
    en: 'Plot twist: you do not pick the entertainment. The entertainment picks you.',
    cn: '反转：不是你选娱乐，是娱乐选了你。',
    tone: ['chaotic'],
  },
  {
    en: 'Blame the butterfly effect. A moth sneezed in Brazil and now you have this.',
    cn: '要怪就怪蝴蝶效应吧。巴西的一只飞蛾打了个喷嚏，然后你就看到了这个。',
    tone: ['chaotic'],
  },
  {
    en: 'This was the universe doing an A/B test. You are group B.',
    cn: '这是宇宙在做A/B测试。你是B组。',
    tone: ['chaotic'],
  },
  {
    en: 'I rolled a natural 20. You are welcome.',
    cn: '我掷出了天然20。不用谢。',
    tone: ['chaotic'],
  },
  {
    en: 'Selected via ancient ritual: eeny, meeny, miny, moe.',
    cn: '通过古老仪式选定：点兵点将。',
    tone: ['chaotic'],
  },
  {
    en: 'My intern picked this. He is a golden retriever. Literally.',
    cn: '这是我实习生选的。它是一只金毛，真的那种。',
    tone: ['chaotic'],
  },

  // ── mixed tones ─────────────────────────────────────────────────────────
  {
    en: 'Fate does not care about your to-do list. Neither do I.',
    cn: '命运不在乎你的待办清单。我也不在乎。',
    tone: ['savage', 'chaotic'],
  },
  {
    en: 'Some call it random. I call it destiny with a sense of humor.',
    cn: '有人叫它随机，我叫它有幽默感的命运。',
    tone: ['warm', 'chaotic'],
  },
  {
    en: 'You could plan everything, or you could trust the chaos. Chaos is more fun.',
    cn: '你可以计划好一切，也可以相信混沌。混沌更好玩。',
    tone: ['warm', 'chaotic'],
  },
  {
    en: 'Your screen time is already wrecked. Might as well make it count.',
    cn: '你的屏幕使用时间已经废了，不如废得有价值一点。',
    tone: ['savage', 'warm'],
  },
  {
    en: 'I threw your comfort zone out the window. You will thank me later.',
    cn: '我把你的舒适区扔出了窗外。你以后会感谢我的。',
    tone: ['savage', 'warm'],
  },
  {
    en: 'Tonight is sponsored by bad decisions and good vibes.',
    cn: '今晚由糟糕的决定和美好的氛围赞助播出。',
    tone: ['chaotic', 'warm'],
  },
  {
    en: 'The stars aligned. Unfortunately, they aligned into a middle finger.',
    cn: '星星连成了一线。不幸的是，连成了一个竖中指的形状。',
    tone: ['savage', 'chaotic'],
  },
  {
    en: 'Embrace the unknown. What is the worst that could happen? (Do not answer that.)',
    cn: '拥抱未知吧。最坏能怎样？（别回答这个问题。）',
    tone: ['chaotic', 'warm'],
  },
  {
    en: 'Your plans were mid anyway. This is an upgrade.',
    cn: '你原来的计划也就那样。这是一次升级。',
    tone: ['savage', 'chaotic'],
  },
  {
    en: 'Somewhere in a parallel universe, another you picked this too. It is meant to be.',
    cn: '在某个平行宇宙里，另一个你也选了这个。这就是命中注定。',
    tone: ['warm', 'chaotic'],
  },
];

// ---------------------------------------------------------------------------
// Taboo Lines -- fun "tonight you must NOT..." restrictions
// ---------------------------------------------------------------------------
export const tabooLines: CopyLine[] = [
  // ── savage ──────────────────────────────────────────────────────────────
  {
    en: 'Do NOT open TikTok. Your screen time report is already crying.',
    cn: '不许打开抖音。你的屏幕使用时间报告已经在哭了。',
    tone: ['savage'],
  },
  {
    en: 'Forbidden: texting your ex. The block button exists for a reason.',
    cn: '禁止：给前任发消息。拉黑功能的存在是有原因的。',
    tone: ['savage'],
  },
  {
    en: 'You are NOT allowed to say "I have nothing to watch." You have 6 streaming subscriptions.',
    cn: '不许说"没什么好看的"。你有6个流媒体会员。',
    tone: ['savage'],
  },
  {
    en: 'Tonight is a no-doomscrolling zone. Your serotonin is begging.',
    cn: '今晚是禁止刷负面新闻区。你的血清素在求你了。',
    tone: ['savage'],
  },
  {
    en: 'Absolutely no "just five more minutes" on social media. We both know it is never five.',
    cn: '绝对不许说"再刷五分钟"。我们都知道不可能只有五分钟。',
    tone: ['savage'],
  },
  {
    en: 'Do not look at your bank balance tonight. Ignorance is bliss.',
    cn: '今晚不许看余额。无知是福。',
    tone: ['savage'],
  },
  {
    en: 'You may NOT restart the show you have already seen 4 times. Move on.',
    cn: '不许重刷你已经看了四遍的剧。往前走吧。',
    tone: ['savage'],
  },
  {
    en: 'Banned: googling symptoms at 2 AM. You do not have that disease.',
    cn: '禁止：凌晨两点搜索症状。你没有那个病。',
    tone: ['savage'],
  },
  {
    en: 'Tonight you must not compare your life to anyone on Instagram. Their brunch was mid.',
    cn: '今晚不许拿自己跟Instagram上的人比。他们的早午餐也就那样。',
    tone: ['savage'],
  },
  {
    en: 'No online shopping. Your cart has been full since 2024. Just close the tab.',
    cn: '不许网购。你的购物车从2024年就满了。关掉页面吧。',
    tone: ['savage'],
  },
  {
    en: 'Do NOT check your work email. It is 10 PM. The spreadsheet can wait.',
    cn: '不许查工作邮件。都晚上十点了，表格可以等。',
    tone: ['savage'],
  },
  {
    en: 'Forbidden: watching movie trailers for 2 hours and then watching nothing.',
    cn: '禁止：看两小时预告片然后什么正片都不看。',
    tone: ['savage'],
  },
  {
    en: 'You cannot spend 40 minutes picking a show and then "not being in the mood."',
    cn: '不许花40分钟选片然后说"没心情了"。',
    tone: ['savage'],
  },
  {
    en: 'No reading one-star reviews of things you already enjoy. Protect your peace.',
    cn: '不许去看你已经喜欢的东西的一星差评。保护好你的心态。',
    tone: ['savage'],
  },

  // ── warm ────────────────────────────────────────────────────────────────
  {
    en: 'Tonight\'s taboo: no overthinking. Just vibes.',
    cn: '今晚的禁忌：不许想太多。只要氛围。',
    tone: ['warm'],
  },
  {
    en: 'You are not allowed to feel guilty about doing nothing productive tonight.',
    cn: '今晚不许因为没做正事而感到愧疚。',
    tone: ['warm'],
  },
  {
    en: 'Forbidden: being hard on yourself. Tonight you are kind to you.',
    cn: '禁止：苛责自己。今晚你要对自己好一点。',
    tone: ['warm'],
  },
  {
    en: 'No apologizing for enjoying what you enjoy. Your taste is valid.',
    cn: '不许为喜欢自己喜欢的东西道歉。你的品味是对的。',
    tone: ['warm'],
  },
  {
    en: 'Tonight you must not worry about tomorrow. Tomorrow-you can handle it.',
    cn: '今晚不许担心明天。明天的你会搞定的。',
    tone: ['warm'],
  },
  {
    en: 'Banned: skipping the fun part to "be responsible." Not tonight.',
    cn: '禁止：为了"负责任"而跳过好玩的部分。今晚不行。',
    tone: ['warm'],
  },
  {
    en: 'Do not rush through this. Savor the night. You earned it.',
    cn: '不要着急。慢慢享受这个夜晚，你值得。',
    tone: ['warm'],
  },
  {
    en: 'No setting alarms for tomorrow until you have enjoyed tonight.',
    cn: '享受完今晚之前，不许设明天的闹钟。',
    tone: ['warm'],
  },
  {
    en: 'Forbidden: thinking about Monday. Monday does not exist right now.',
    cn: '禁止：想周一的事。周一现在不存在。',
    tone: ['warm'],
  },
  {
    en: 'You shall not multitask. One screen. Full attention. Full joy.',
    cn: '不许多线程。一块屏幕，全部注意力，全部快乐。',
    tone: ['warm'],
  },
  {
    en: 'Tonight\'s rule: no "I should be doing something else." This IS the something.',
    cn: '今晚规则：不许说"我应该做点别的"。这就是那个别的。',
    tone: ['warm'],
  },
  {
    en: 'Do not judge yourself for eating snacks at midnight. Midnight snacks are sacred.',
    cn: '不许因为半夜吃零食而评判自己。夜宵是神圣的。',
    tone: ['warm'],
  },
  {
    en: 'No planning, no scheduling, no optimizing. Just be here.',
    cn: '不许计划，不许排期，不许优化。就待在这里。',
    tone: ['warm'],
  },

  // ── chaotic ─────────────────────────────────────────────────────────────
  {
    en: 'Absolutely forbidden: making rational decisions before midnight.',
    cn: '午夜之前严禁做出任何理性决定。',
    tone: ['chaotic'],
  },
  {
    en: 'You must NOT google "what should I do tonight." You already have the answer.',
    cn: '不许搜索"今晚做什么"。答案你已经有了。',
    tone: ['chaotic'],
  },
  {
    en: 'Banned: having a backup plan. Commit to the chaos.',
    cn: '禁止：留后路。拥抱混沌吧。',
    tone: ['chaotic'],
  },
  {
    en: 'Do not, under any circumstances, be normal tonight.',
    cn: '今晚无论如何都不许正常。',
    tone: ['chaotic'],
  },
  {
    en: 'Tonight\'s forbidden act: using common sense. Vibes only.',
    cn: '今晚的禁止事项：使用常识。只凭感觉。',
    tone: ['chaotic'],
  },
  {
    en: 'You may not consult a second opinion. The blind box has spoken.',
    cn: '不许征求第二意见。盲盒已经开口了。',
    tone: ['chaotic'],
  },
  {
    en: 'Forbidden: pausing to think "is this a good idea?" The answer is always yes.',
    cn: '禁止停下来想"这是个好主意吗？"答案永远是"是"。',
    tone: ['chaotic'],
  },
  {
    en: 'No Googling spoilers. Walk into this blind like a true agent of chaos.',
    cn: '不许搜剧透。像一个真正的混沌使者一样盲入。',
    tone: ['chaotic'],
  },
  {
    en: 'Tonight you must not use the word "maybe." It is yes or absolutely yes.',
    cn: '今晚不许说"也许"。要么"好"，要么"太好了"。',
    tone: ['chaotic'],
  },
  {
    en: 'Banned: checking reviews or ratings. Stars are for the sky, not for movies.',
    cn: '禁止：查评分。星星是属于天空的，不是属于电影的。',
    tone: ['chaotic'],
  },
  {
    en: 'Do not attempt to understand the recommendation. Just surrender.',
    cn: '不要试图理解这个推荐。投降吧。',
    tone: ['chaotic'],
  },
  {
    en: 'You are forbidden from closing this app to open another decision-making app.',
    cn: '禁止关掉这个App然后打开另一个帮你做决定的App。',
    tone: ['chaotic'],
  },
  {
    en: 'No asking friends what they think. Their taste is a controlled demolition.',
    cn: '不许问朋友觉得怎么样。他们的品味是一场可控爆破。',
    tone: ['chaotic'],
  },

  // ── mixed tones ─────────────────────────────────────────────────────────
  {
    en: 'Do not open a group chat to ask "what should we do." You will still be deciding at 3 AM.',
    cn: '不许在群里问"我们干嘛"。不然你们会讨论到凌晨三点。',
    tone: ['savage', 'chaotic'],
  },
  {
    en: 'Tonight\'s ban: productivity guilt. You are a human, not a KPI.',
    cn: '今晚禁止：效率焦虑。你是个人，不是KPI。',
    tone: ['savage', 'warm'],
  },
  {
    en: 'Forbidden: doom-scrolling through options. You already have the perfect one.',
    cn: '禁止：在选项里无尽地滑。你已经有了最好的那个。',
    tone: ['warm', 'chaotic'],
  },
  {
    en: 'You shall not say "meh" until you have actually tried it. Then you can say "meh."',
    cn: '在真正尝试之前不许说"一般"。试过之后你可以说。',
    tone: ['savage', 'warm'],
  },
  {
    en: 'No Wikipedia rabbit holes after midnight. You do not need to know about 14th-century bread.',
    cn: '午夜之后不许掉进维基百科。你不需要知道14世纪的面包史。',
    tone: ['savage', 'chaotic'],
  },
  {
    en: 'Absolutely no FOMO tonight. Whatever everyone else is doing, this is better.',
    cn: '今晚绝对不许FOMO。别人在干什么不重要，你这个更好。',
    tone: ['warm', 'chaotic'],
  },
  {
    en: 'Banned: telling yourself "I will watch this later." Later never comes and you know it.',
    cn: '禁止对自己说"我回头再看"。"回头"永远不会来，你心里清楚。',
    tone: ['savage', 'warm'],
  },
  {
    en: 'Do not let your inner critic pick tonight\'s vibe. Fire that guy. Hire your inner gremlin.',
    cn: '别让内心的批评家决定今晚的氛围。炒了他，雇你内心的小怪兽。',
    tone: ['chaotic', 'warm'],
  },
  {
    en: 'Tonight you may not say "but what if there is something better." There is not. This is it.',
    cn: '今晚不许说"万一有更好的呢"。没有了。就是这个。',
    tone: ['savage', 'chaotic'],
  },
  {
    en: 'Forbidden: any sentence starting with "I probably should not..." Just do it.',
    cn: '禁止任何以"我大概不应该……"开头的句子。做就是了。',
    tone: ['chaotic', 'warm'],
  },
];
