/* Common Mistakes B2 · Blocco 4 (unità 10–12 + Test 4) — frasi originali */
window.TESTDATA = window.TESTDATA || {};
(function () {
const KWT = "Complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.";
const KWT_IT = "Usa la parola data senza cambiarla, da 2 a 5 parole.";
const FIX = "Each sentence contains a mistake (underlined). Write the correct words.";
const FIX_IT = "La parte sottolineata è sbagliata: riscrivila corretta.";
TESTDATA["cm4"] = {
  title: "Blocco 4 · Unità 10–12",
  units: [
    {
      n: 10, title: "say or tell?",
      rule: `<p><b>tell</b> is followed by the person: we <b>tell somebody</b> (something):</p>
<ul><li><em>He <b>told me</b> he was moving to Spain.</em></li></ul>
<p><b>say</b> is not followed directly by the person. We <b>say something</b>, or <b>say something to somebody</b>:</p>
<ul><li><em>She <b>said</b> (that) the shop was closed. · What did he <b>say to you</b>?</em></li></ul>
<p>Some expressions use <b>tell</b> without a person: <em>tell a lie, tell the truth, tell a joke, tell a story, tell the time, tell the difference</em>.</p>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with the correct form of say or tell.", it: "Say o tell? Metti il verbo nella forma corretta.", items: [
          { t: "Can you ___ me the way to the station?", a: ["tell"] },
          { t: "What did the teacher ___ about the test?", a: ["say"] },
          { t: "She ___ us a funny story about her holiday in Crete.", a: ["told"] },
          { t: "He never ___ the truth, so nobody trusts him.", a: ["tells"] },
          { t: "Did he ___ goodbye before he left?", a: ["say"] },
          { t: "Yesterday I ___ to my boss that I needed a day off.", a: ["said"] },
          { t: "Stop ___ lies!", a: ["telling"] },
          { t: "Can you ___ the difference between these two shades of blue?", a: ["tell"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "She [said me] that she was tired.", a: ["told me", "said"] },
          { t: "He [told] that he would be late.", a: ["said"] },
          { t: "Why didn't you [say me] the truth?", a: ["tell me"] },
          { t: "Can you [say] us a joke?", a: ["tell"] },
          { t: "My mum always [tells] 'Be careful!' when I go out.", a: ["says"] },
          { t: "I [said to him] the answer.", a: ["told him"] },
          { t: "They [told to us] that the shop was closed.", a: ["told us", "said to us"] },
          { t: "Please [say] me your name again.", a: ["tell"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "'I'm busy,' Sara said to Tom.", w: "TOLD", s2: "Sara ___ busy.", a: ["told Tom she was", "told Tom that she was", "told him she was", "told him that she was"] },
          { s1: "'Don't lie to me!' my dad said.", w: "TRUTH", s2: "My dad told me ___.", a: ["to tell the truth", "to tell him the truth"] },
          { s1: "He said to me that he loved the film.", w: "TOLD", s2: "He ___ loved the film.", a: ["told me he", "told me that he"] },
          { s1: "'What time is it?' I asked.", w: "TELL", s2: "Can you ___ is?", a: ["tell me what time it"] },
          { s1: "Marco told us he was leaving.", w: "SAID", s2: "Marco ___ he was leaving.", a: ["said to us that", "said that", "said to us"] }
        ]}
      ]
    },
    {
      n: 11, title: "make or do?",
      rule: `<p>In general we use <b>do</b> for jobs, work and activities: <em>do the washing-up, do the housework, do a course, do exercise, do your best, do business, do somebody a favour</em>.</p>
<p>We use <b>make</b> when we create or build something (<em>make a dress, make a sandwich</em>) and in many fixed expressions:</p>
<ul><li><em>make a decision, a mistake, an effort, an excuse, friends, fun of somebody, a mess, money, a noise, a phone call, a plan, progress, a promise, a suggestion, an appointment</em></li></ul>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with the correct form of make or do.", it: "Make o do? Metti il verbo nella forma corretta.", items: [
          { t: "I ___ the washing-up after dinner every evening.", a: ["do"] },
          { t: "Try not to ___ any noise: the baby is asleep.", a: ["make"] },
          { t: "Have you ___ your homework yet?", a: ["done"] },
          { t: "She ___ a lot of friends at university.", a: ["made"] },
          { t: "Could you ___ me a favour and post this letter?", a: ["do"] },
          { t: "We need to ___ a decision by Friday.", a: ["make"] },
          { t: "He's ___ great progress with his English this year.", a: ["made"] },
          { t: "At the moment I'm ___ an online course in graphic design.", a: ["doing"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "I always [do] mistakes with prepositions.", a: ["make"] },
          { t: "She [makes] exercise three times a week.", a: ["does"] },
          { t: "Can you stop [doing] fun of me?", a: ["making"] },
          { t: "We [did] a plan for the weekend.", a: ["made"] },
          { t: "Who's going to [make] the shopping today?", a: ["do"] },
          { t: "He [did] an appointment with the doctor.", a: ["made"] },
          { t: "You've [done] such a mess in the kitchen!", a: ["made"] },
          { t: "Don't worry, just [make] your best.", a: ["do"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "I have to decide which university to choose.", w: "DECISION", s2: "I have to ___ which university to choose.", a: ["make a decision about", "make a decision on"] },
          { s1: "She tried hard to be polite.", w: "EFFORT", s2: "She ___ to be polite.", a: ["made an effort", "made a big effort", "made a real effort", "made a great effort"] },
          { s1: "Who cleans the house in your family?", w: "HOUSEWORK", s2: "Who ___ in your family?", a: ["does the housework"] },
          { s1: "My English is getting much better.", w: "PROGRESS", s2: "I'm ___ with my English.", a: ["making a lot of progress", "making good progress", "making great progress", "making progress", "making lots of progress"] },
          { s1: "He earns a lot as a programmer.", w: "MONEY", s2: "He ___ as a programmer.", a: ["makes a lot of money", "makes lots of money", "makes good money"] },
          { s1: "Could you help me, please?", w: "FAVOUR", s2: "Could you ___, please?", a: ["do me a favour"] }
        ]}
      ]
    },
    {
      n: 12, title: "find out, make up, bring up, grow up, take off",
      rule: `<ul><li><b>find (something) out</b> = discover information: <em>I want to <b>find out</b> how this works.</em></li>
<li><b>make (something) up</b> = invent: <em>It isn't true — she <b>made</b> it <b>up</b>.</em></li>
<li><b>bring (somebody) up</b> = look after a child until he/she is an adult: <em>He was <b>brought up</b> on a farm.</em></li>
<li><b>grow up</b> = become an adult (no object): <em>I <b>grew up</b> by the sea.</em></li>
<li><b>take (something) off</b> = remove clothes · deduct an amount: <em><b>Take off</b> your hat. · They <b>took</b> €20 <b>off</b> the bill.</em> A plane <b>takes off</b> when it leaves the ground.</li></ul>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with the correct form of a phrasal verb made from the verb in brackets.", it: "Aggiungi la particella giusta e metti il verbo nella forma corretta.", items: [
          { t: "I was born in Naples, but I ___ (grow) in Turin.", a: ["grew up"] },
          { t: "Please ___ (take) your shoes when you come in.", a: ["take off"] },
          { t: "How did you ___ (find) about the party?", a: ["find out"] },
          { t: "Nobody believes him: they think he ___ (make) the whole story.", a: ["made up", "has made up", "'s made up"] },
          { t: "He was ___ (bring) by his aunt after his parents moved abroad.", a: ["brought up"] },
          { t: "If you pay in cash, they'll ___ (take) 10% ___ the price.", a: [["take"], ["off"]] },
          { t: "Our plane ___ (take) two hours late because of the fog.", a: ["took off"] },
          { t: "I need to ___ (find) what time the shop opens.", a: ["find out"] }
        ]},
        { type: "fix", find: true, rubric: FIX, it: FIX_IT, items: [
          { t: "I [grew] in a small village near the sea.", a: ["grew up"] },
          { t: "Can you [find] who sent this email?", a: ["find out"] },
          { t: "My grandparents [grew me up] because my parents worked abroad.", a: ["brought me up"] },
          { t: "That's not true! You're [doing it up]!", a: ["making it up"] },
          { t: "It's hot in here. I'm going to [take out] my jacket.", a: ["take off"] },
          { t: "She [brought up] in Milan, but now she lives in London.", a: ["grew up", "was brought up"] },
          { t: "When I [will grow up], I want to be an engineer.", a: ["grow up"] },
          { t: "The teacher [found] that we had copied the homework.", a: ["found out"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "My aunt raised me.", w: "BROUGHT", s2: "I ___ my aunt.", a: ["was brought up by"] },
          { s1: "He invented an excuse for being late.", w: "MADE", s2: "He ___ for being late.", a: ["made up an excuse", "made an excuse up"] },
          { s1: "I spent my childhood in Verona.", w: "GREW", s2: "I ___ Verona.", a: ["grew up in"] },
          { s1: "Remove your coat, please.", w: "TAKE", s2: "Please ___.", a: ["take off your coat", "take your coat off"] },
          { s1: "How did you discover the truth?", w: "FIND", s2: "How did you ___?", a: ["find out the truth", "find the truth out"] }
        ]}
      ]
    }
  ],
  test: {
    title: "Test 4",
    ex: [
      { type: "gap", rubric: "Complete the sentences with the correct form of say, tell, make, do or a phrasal verb with find, grow, bring or take.", it: "Scegli tu il verbo e mettilo nella forma corretta.", items: [
        { t: "I can't come out tonight. I have to ___ my homework.", a: ["do", "finish"] },
        { t: "She ___ me she would be late.", a: ["told"] },
        { t: "When I ___ the truth, I was furious.", a: ["found out"] },
        { t: "'Sorry,' he ___, and left the room.", a: ["said"] },
        { t: "My little brother always ___ a mess in the bathroom.", a: ["makes"] },
        { t: "The plane ___ on time, so we arrived early.", a: ["took off"] },
        { t: "Stop ___ excuses and start studying!", a: ["making"] },
        { t: "I ___ in a big city, so I'm not used to the countryside.", a: ["grew up", "was brought up"] }
      ]},
      { type: "fix", find: true, rubric: FIX, it: FIX_IT, items: [
        { t: "He [said] us about his new job.", a: ["told"] },
        { t: "I [made] a course in first aid last year.", a: ["did"] },
        { t: "My parents [grew me up] to respect others.", a: ["brought me up"] },
        { t: "Can you [tell] something to the class?", a: ["say"] },
        { t: "She's [done] friends with everyone in her new school.", a: ["made"] },
        { t: "Don't believe her: she's [making it out].", a: ["making it up"] },
        { t: "I'll [say] you a secret.", a: ["tell"] },
        { t: "We'd better [make] the washing-up before Mum gets home.", a: ["do"] }
      ]},
      { type: "kwt", rubric: KWT, it: KWT_IT, items: [
        { s1: "'I'll call you tomorrow,' Rita said to me.", w: "TOLD", s2: "Rita ___ call me the next day.", a: ["told me she would", "told me that she would", "told me she'd", "told me that she'd"] },
        { s1: "Please try as hard as you can.", w: "BEST", s2: "Please ___.", a: ["do your best", "do your very best"] },
        { s1: "Have you discovered who broke the window?", w: "FOUND", s2: "Have ___ broke the window?", a: ["you found out who"] },
        { s1: "I hate it when people laugh at me.", w: "FUN", s2: "I hate it when people ___ me.", a: ["make fun of"] },
        { s1: "I was raised in the countryside.", w: "BROUGHT", s2: "I ___ in the countryside.", a: ["was brought up"] },
        { s1: "Please phone the hotel.", w: "CALL", s2: "Please ___ to the hotel.", a: ["make a phone call", "make a call"] }
      ]}
    ]
  }
};
})();
