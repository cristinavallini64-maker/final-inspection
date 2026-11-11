/* Common Mistakes B2 · Blocco 8 (unità 22–24 + Test 8) — frasi originali */
window.TESTDATA = window.TESTDATA || {};
(function () {
const KWT = "Complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.";
const KWT_IT = "Usa la parola data senza cambiarla, da 2 a 5 parole.";
const FIX = "Each sentence contains a mistake (underlined). Write the correct words.";
const FIX_IT = "La parte sottolineata è sbagliata: riscrivila corretta.";
TESTDATA["cm8"] = {
  title: "Blocco 8 · Unità 22–24",
  units: [
    {
      n: 22, title: "hope or wish?",
      rule: `<p>We use <b>hope</b> for things that are possible, with a present or future verb: <em>I <b>hope</b> the bus <b>is</b> on time. · I <b>hope</b> you<b>'ll like</b> it.</em> Also for good wishes: <em>I <b>hope</b> you <b>have</b> a nice weekend.</em></p>
<p>We use <b>wish</b> for things that are impossible or unlikely:</p>
<ul><li><b>wish + past simple</b> (present situation): <em>I wish I <b>lived</b> by the sea.</em></li>
<li><b>wish + past perfect</b> (regret about the past): <em>I wish I <b>had taken</b> that job.</em></li>
<li><b>wish + would</b> (somebody's annoying behaviour): <em>I wish he <b>would</b> answer my messages.</em></li></ul>
<p>Don't use <b>wish</b> for good wishes with a present verb: <s>I wish you have a good trip</s> → <em>I <b>hope</b> you have a good trip.</em></p>`,
      ex: [
        { type: "gap", long: true, rubric: "Complete the sentences with the correct form of hope or wish and the words in brackets.", it: "Hope o wish? Attenzione al tempo del verbo che segue.", items: [
          { t: "I ___ (I / pass) my driving test tomorrow.", a: ["hope I pass", "hope I'll pass", "hope I will pass"] },
          { t: "I ___ (I / be) taller. I can never reach the top shelf.", a: ["wish I was", "wish I were"] },
          { t: "I ___ (I / not / eat) so much last night. I feel sick.", a: ["wish I hadn't eaten", "wish I had not eaten"] },
          { t: "I ___ (you / have) a good holiday!", a: ["hope you have", "hope you'll have", "hope you will have"] },
          { t: "I ___ (my neighbours / stop) making so much noise at night.", a: ["wish my neighbours would stop", "wish my neighbours'd stop"] },
          { t: "We ___ (we / can) come to your wedding, but we'll be abroad.", a: ["wish we could"] },
          { t: "I ___ (you / enjoy) the party last night.", a: ["hope you enjoyed"] },
          { t: "She ___ (she / study) medicine instead of law.", a: ["wishes she had studied", "wishes she'd studied"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "I [wish] you have a great time in Spain!", a: ["hope"] },
          { t: "I wish I [have] more free time.", a: ["had"] },
          { t: "I [hope] I had listened to my parents.", a: ["wish"] },
          { t: "I wish you [will stop] interrupting me.", a: ["would stop", "'d stop"] },
          { t: "I hope you [would enjoy] the meal tonight.", a: ["enjoy", "will enjoy", "'ll enjoy"] },
          { t: "I wish I [didn't say] that to her yesterday.", a: ["hadn't said", "had not said"] },
          { t: "We [wish] the weather will be good tomorrow.", a: ["hope"] },
          { t: "I wish I [can] speak Japanese.", a: ["could"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "I'm sorry I didn't go to the concert.", w: "WISH", s2: "I ___ to the concert.", a: ["wish I had gone", "wish I'd gone", "wish I had been", "wish I'd been"] },
          { s1: "It's a pity I can't drive.", w: "WISH", s2: "I ___ drive.", a: ["wish I could"] },
          { s1: "Please stop shouting! It really annoys me.", w: "WOULD", s2: "I wish ___ shouting.", a: ["you would stop"] },
          { s1: "I want you to get better soon.", w: "HOPE", s2: "I ___ better soon.", a: ["hope you get", "hope you will get", "hope you'll get", "hope you feel"] },
          { s1: "It's a pity I'm not on holiday.", w: "WISH", s2: "I ___ on holiday.", a: ["wish I was", "wish I were"] },
          { s1: "I regret not studying more.", w: "WISH", s2: "I ___ more.", a: ["wish I had studied", "wish I'd studied"] }
        ]}
      ]
    },
    {
      n: 23, title: "How do I express an opinion?",
      rule: `<ul><li><b>In my opinion</b> = what I think (not <s>According to me</s>): <em><b>In my opinion</b>, homework is useful.</em></li>
<li><b>According to</b> = what someone else says: <em><b>According to</b> my doctor, I should rest.</em></li>
<li><b>On the one hand … on the other hand</b> = two different points of view: <em><b>On the one hand</b>, the flat is central; <b>on the other hand</b>, it's noisy.</em></li>
<li><b>On the contrary</b> = the opposite of what was just said is true: <em>It wasn't boring. <b>On the contrary</b>, I loved it.</em></li>
<li><b>Firstly / First of all</b> = to introduce the first point.</li>
<li><b>At first</b> = at the beginning of a situation that later changes: <em><b>At first</b> I hated jazz, but now I love it.</em></li></ul>`,
      ex: [
        { type: "fix", find: true, rubric: FIX, it: FIX_IT, items: [
          { t: "[According to me], the film is too long.", a: ["In my opinion"] },
          { t: "He isn't lazy. [On the other hand], he works very hard.", a: ["On the contrary"] },
          { t: "[Firstly] I didn't like my new school, but now I love it.", a: ["At first"] },
          { t: "[On the contrary], cars are convenient; on the other hand, they pollute.", a: ["On the one hand"] },
          { t: "[In the opinion of me], we should leave now.", a: ["In my opinion"] },
          { t: "[At first], I'd like to thank everyone for coming.", a: ["First of all", "Firstly", "First"] },
          { t: "[According the] weather forecast, it will snow tonight.", a: ["According to the"] },
          { t: "The flat is small. [In the other hand], it's very cheap.", a: ["On the other hand"] }
        ]},
        { type: "gap", rubric: "Complete each sentence with one suitable word.", it: "Una sola parola per spazio.", items: [
          { t: "___ my opinion, school should start later in the morning.", a: ["In"] },
          { t: "On the one ___, living abroad is exciting; on the other, it can be lonely.", a: ["hand"] },
          { t: "___ to the teacher, the test will be quite easy.", a: ["According"] },
          { t: "___ first I was scared, but then I relaxed.", a: ["At"] },
          { t: "The exam wasn't easy. On the ___, it was really hard.", a: ["contrary"] },
          { t: "First ___ all, let me introduce myself.", a: ["of"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "I think this book is boring.", w: "OPINION", s2: "___ this book is boring.", a: ["In my opinion", "In my opinion,"] },
          { s1: "The newspaper says prices will rise.", w: "ACCORDING", s2: "___, prices will rise.", a: ["According to the newspaper"] },
          { s1: "In the beginning I didn't like coffee, but now I do.", w: "FIRST", s2: "___ I didn't like coffee, but now I do.", a: ["At first", "At first,"] },
          { s1: "The city is noisy, but there's a lot to do.", w: "HAND", s2: "The city is noisy. ___, there's a lot to do.", a: ["On the other hand"] },
          { s1: "Marco says the restaurant is excellent.", w: "ACCORDING", s2: "___, the restaurant is excellent.", a: ["According to Marco"] }
        ]}
      ]
    },
    {
      n: 24, title: "When do I use in and to?",
      rule: `<p>We use <b>in</b>:</p>
<ul><li>for something we read: <em><b>in</b> a newspaper, <b>in</b> a magazine, <b>in</b> an advert</em></li>
<li>for languages and subjects: <em>write <b>in</b> English, lessons <b>in</b> Arabic, a degree <b>in</b> chemistry</em></li>
<li>after <em>interested</em>: <em>interested <b>in</b> music</em></li></ul>
<p>We use <b>to</b>:</p>
<ul><li>after <em>look forward</em>, followed by a noun or <b>-ing</b>: <em>I look forward <b>to meeting</b> you.</em></li>
<li>after <em>explain / describe something</em> and <em>write / speak / listen</em> to somebody: <em>Can you explain the plan <b>to</b> us? · I listen <b>to</b> the radio.</em></li></ul>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with in or to.", it: "In o to?", items: [
          { t: "I read an article about it ___ a magazine.", a: ["in"] },
          { t: "I'm really looking forward ___ seeing you.", a: ["to"] },
          { t: "Can you explain the rules ___ me?", a: ["to"] },
          { t: "She's taking lessons ___ Chinese.", a: ["in"] },
          { t: "I'm very interested ___ astronomy.", a: ["in"] },
          { t: "Do you often listen ___ podcasts?", a: ["to"] },
          { t: "I wrote ___ the company to complain.", a: ["to"] },
          { t: "He has a degree ___ engineering.", a: ["in"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "I saw the job offer [on] the newspaper.", a: ["in"] },
          { t: "I look forward [to hear] from you.", a: ["to hearing"] },
          { t: "Can you describe [me the house]?", a: ["the house to me"] },
          { t: "I'm interested [to] learning Spanish.", a: ["in"] },
          { t: "He explained [me the problem].", a: ["the problem to me"] },
          { t: "She's doing a course [of] web design.", a: ["in"] },
          { t: "Please write your answers [with] English.", a: ["in"] },
          { t: "We're looking forward [to go] on holiday.", a: ["to going"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "I can't wait to see you.", w: "FORWARD", s2: "I'm ___ you.", a: ["looking forward to seeing", "really looking forward to seeing"] },
          { s1: "She told the police what the thief looked like.", w: "DESCRIBED", s2: "She ___ police.", a: ["described the thief to the"] },
          { s1: "I like learning about history.", w: "INTERESTED", s2: "I'm ___ history.", a: ["interested in", "very interested in", "really interested in"] },
          { s1: "He sent me a letter.", w: "TO", s2: "He ___ me.", a: ["wrote a letter to", "sent a letter to"] },
          { s1: "According to the advert, the flat has a garden.", w: "IN", s2: "It ___ the flat has a garden.", a: ["says in the advert", "said in the advert", "says in the advert that", "said in the advert that"] }
        ]}
      ]
    }
  ],
  test: {
    title: "Test 8",
    ex: [
      { type: "gap", rubric: "Complete each sentence with one suitable word, or with the correct form of the words in brackets.", it: "Una parola per spazio, oppure la forma corretta delle parole tra parentesi.", items: [
        { t: "I ___ (I / not / say) that to Lisa. Now she's upset.", a: ["wish I hadn't said", "wish I had not said"] },
        { t: "I ___ (you / like) the present I sent you.", a: ["hope you like", "hope you liked", "hope you'll like", "hope you will like"] },
        { t: "I read about the festival ___ the local newspaper.", a: ["in"] },
        { t: "___ my opinion, we should cancel the trip.", a: ["In"] },
        { t: "I wish my brother ___ (stop) using my things without asking.", a: ["would stop", "'d stop"] },
        { t: "___ first the job was hard, but now it's easy.", a: ["At"] },
        { t: "She's very interested ___ marine biology.", a: ["in"] },
        { t: "I'm looking forward ___ (meet) your family.", a: ["to meeting"] }
      ]},
      { type: "fix", find: true, rubric: FIX, it: FIX_IT, items: [
        { t: "I [hope] I knew the answer.", a: ["wish"] },
        { t: "[According to me], the city is too crowded.", a: ["In my opinion"] },
        { t: "I look forward [to see] you soon.", a: ["to seeing"] },
        { t: "I wish I [went] to bed earlier last night.", a: ["had gone", "'d gone"] },
        { t: "He's not tired. [On the other hand], he's full of energy.", a: ["On the contrary"] },
        { t: "I saw the offer [on] an advert.", a: ["in"] },
        { t: "We [wish] you get better soon.", a: ["hope"] },
        { t: "Could you explain [me how] this works?", a: ["to me how"] }
      ]},
      { type: "kwt", rubric: KWT, it: KWT_IT, items: [
        { s1: "I'm sorry I didn't bring my camera.", w: "WISH", s2: "I ___ my camera.", a: ["wish I had brought", "wish I'd brought"] },
        { s1: "I think the plan is good.", w: "OPINION", s2: "___ the plan is good.", a: ["In my opinion", "In my opinion,"] },
        { s1: "I'm excited about the holidays.", w: "FORWARD", s2: "I'm ___ the holidays.", a: ["looking forward to", "really looking forward to"] },
        { s1: "The weather forecast says it will rain.", w: "ACCORDING", s2: "___ forecast, it will rain.", a: ["According to the weather", "According to the"] },
        { s1: "It's a shame I can't sing.", w: "WISH", s2: "I ___ sing.", a: ["wish I could"] },
        { s1: "Could you describe the problem for me?", w: "TO", s2: "Could you describe ___?", a: ["the problem to me"] }
      ]}
    ]
  }
};
})();
