/* Common Mistakes B2 · Blocco 10 (unità 28–30 + Test 10) — frasi originali */
window.TESTDATA = window.TESTDATA || {};
(function () {
const KWT = "Complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.";
const KWT_IT = "Usa la parola data senza cambiarla, da 2 a 5 parole.";
const FIX = "Each sentence contains a mistake (underlined). Write the correct words.";
const FIX_IT = "La parte sottolineata è sbagliata: riscrivila corretta.";
TESTDATA["cm10"] = {
  title: "Blocco 10 · Unità 28–30",
  units: [
    {
      n: 28, title: "When do I use take?",
      rule: `<ul><li><b>take</b> = move something away from where the speaker is; <b>bring</b> = move something to where the speaker is: <em><b>Take</b> this parcel to the post office. · Can you <b>bring</b> me a glass of water?</em></li>
<li>We <b>take</b> a photo, an exam, a break, a seat (not <s>make</s>).</li>
<li><b>take advantage of</b> = use an opportunity: <em>We <b>took advantage of</b> the sales.</em></li>
<li><b>profit from</b> = gain money from something.</li>
<li><b>take care of</b> = look after: <em>Who <b>takes care of</b> your plants?</em></li>
<li><b>pay attention to</b> = concentrate on: <em>Nobody <b>paid attention to</b> the warning.</em></li></ul>`,
      ex: [
        { type: "gap", long: true, rubric: "Complete the sentences with a suitable expression. Write the verb in the correct form and any other words needed.", it: "Scrivi tutta l'espressione: il verbo nella forma corretta e, se servono, il nome e la preposizione.", items: [
          { t: "My grandmother is ill, so my mum ___ her at the moment.", a: ["is taking care of", "'s taking care of", "is looking after", "'s looking after"] },
          { t: "Excuse me, could you ___ of us in front of the fountain?", a: ["take a photo", "take a picture", "take a photograph"] },
          { t: "Next time you come to my house, ___ your guitar with you.", a: ["bring"] },
          { t: "The teacher got angry because nobody ___ her explanation.", a: ["was paying attention to", "paid attention to", "paid any attention to", "was paying any attention to"] },
          { t: "Lots of people ___ the cheap flights last summer and went abroad.", a: ["took advantage of"] },
          { t: "Some companies ___ the energy crisis by selling solar panels.", a: ["profited from", "have profited from", "benefited from", "made a profit from"] },
          { t: "You look exhausted. Why don't you ___ and have a coffee?", a: ["take a break", "have a break"] },
          { t: "She's very nervous because she ___ her driving test tomorrow.", a: ["is taking", "'s taking", "is doing", "'s doing"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "Can you [make] a photo of me?", a: ["take"] },
          { t: "Come to the party and [take] your sister with you!", a: ["bring"] },
          { t: "Students must [make attention] in class.", a: ["pay attention"] },
          { t: "We should [profit of] the good weather and go to the beach.", a: ["take advantage of", "make the most of"] },
          { t: "Who [takes care for] your dog when you're away?", a: ["takes care of", "looks after"] },
          { t: "I'm [making] my English exam tomorrow.", a: ["taking", "doing"] },
          { t: "Let's [do] a short break.", a: ["take", "have"] },
          { t: "Some companies [profited by] the crisis.", a: ["profited from"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "Who looks after the children?", w: "CARE", s2: "Who ___ the children?", a: ["takes care of"] },
          { s1: "Listen carefully to what I say.", w: "ATTENTION", s2: "___ what I say.", a: ["Pay attention to", "Pay careful attention to"] },
          { s1: "We should use this opportunity.", w: "ADVANTAGE", s2: "We should ___ this opportunity.", a: ["take advantage of"] },
          { s1: "Let's stop working for a while.", w: "BREAK", s2: "Let's ___.", a: ["take a break", "have a break"] },
          { s1: "Come to my party with your friends.", w: "BRING", s2: "___ to my party.", a: ["Bring your friends"] }
        ]}
      ]
    },
    {
      n: 29, title: "When do I use the?",
      rule: `<p>We use <b>the</b> when the speaker and the listener know which thing or person we mean: <em>Where's <b>the</b> remote control?</em></p>
<p>We usually <b>don't</b> use <b>the</b>:</p>
<ul><li>to talk about people or things in general: <em><b>Cats</b> sleep a lot. · <b>Money</b> isn't everything.</em></li>
<li>with most countries, lakes and mountains: <em>Spain, Lake Garda, Mount Etna</em> — but <em><b>the</b> UK, <b>the</b> Netherlands, <b>the</b> Alps</em></li>
<li>with meals: <em>have breakfast, after dinner</em></li>
<li>in some common expressions: <em>go to school / to work / to bed, at home, by bus, watch TV</em></li></ul>
<p>We use <b>a / an</b> the first time we mention something, and <b>the</b> when we mention it again.</p>`,
      ex: [
        { type: "fix", rubric: "Correct the underlined words: add or remove the.", it: "Aggiungi o togli the.", items: [
          { t: "I love [the animals], especially horses.", a: ["animals"] },
          { t: "[The life] is too short to worry about small things.", a: ["Life"] },
          { t: "We usually have [the lunch] at one o'clock.", a: ["lunch"] },
          { t: "My uncle lives in [United States].", a: ["the United States"] },
          { t: "Can you pass me [salt], please? It's next to you.", a: ["the salt"] },
          { t: "[The Lake Como] is very beautiful in autumn.", a: ["Lake Como"] },
          { t: "I go to [the school] by bike.", a: ["school"] },
          { t: "I really liked [film] you recommended.", a: ["the film"] }
        ]},
        { type: "gap", rubric: "Complete the sentences with the, a or an.", it: "The, a o an?", items: [
          { t: "I saw ___ interesting documentary last night.", a: ["an"] },
          { t: "___ documentary was about penguins in Antarctica.", a: ["The"] },
          { t: "We went skiing in ___ Alps for a week.", a: ["the"] },
          { t: "Is there ___ bank near here?", a: ["a"] },
          { t: "___ moon was very bright last night.", a: ["The"] },
          { t: "She works as ___ engineer for a big company.", a: ["an"] }
        ]},
        { type: "rw", rubric: "Insert the where necessary. Write the whole sentence. If no word is needed, write CORRECT.", it: "Riscrivi la frase aggiungendo the dove serve (anche più di una volta). Se non manca niente, scrivi CORRECT.", items: [
          { t: "Sun rises in east.", a: ["The sun rises in the east."] },
          { t: "I usually have breakfast in kitchen.", a: ["I usually have breakfast in the kitchen."] },
          { t: "We spent a week in Maldives.", a: ["We spent a week in the Maldives."] },
          { t: "Keys you gave me don't work.", a: ["The keys you gave me don't work."] },
          { t: "Children need a lot of sleep.", a: ["CORRECT", "Children need a lot of sleep."] },
          { t: "Can you close window, please? It's cold.", a: ["Can you close the window, please? It's cold."] },
          { t: "Lake Garda is the largest lake in Italy.", a: ["CORRECT", "Lake Garda is the largest lake in Italy."] },
          { t: "Who invented radio?", a: ["Who invented the radio?"] }
        ]}
      ]
    },
    {
      n: 30, title: "Which verbs need an object?",
      rule: `<p>Some verbs always need an object. When there is no other object, we use <b>it / them</b> or a reflexive pronoun:</p>
<ul><li><b>enjoy</b>: <em>I saw the play and I <b>enjoyed it</b>. · Did you <b>enjoy yourself</b>?</em></li>
<li><b>appreciate</b>: <em>I'd <b>appreciate it</b> if you could call me back.</em></li>
<li><b>find it</b> + adjective: <em>I <b>find it</b> hard to get up early.</em></li>
<li><b>can't stand / can't bear</b>: <em>I <b>can't stand it</b> when people chew gum loudly.</em></li>
<li><b>love / like / hate</b>: <em>Have you tried sushi? I <b>love it</b>!</em></li>
<li><b>regret, need, prefer</b>: <em>I bought the jacket and I don't <b>regret it</b>. · Where are my glasses? I <b>need them</b>.</em></li></ul>`,
      ex: [
        { type: "fix", rubric: "Each sentence has a missing or wrong word in the underlined part. Rewrite it correctly.", it: "Riscrivi correttamente la parte sottolineata.", items: [
          { t: "We went to the concert and we really [enjoyed].", a: ["enjoyed it"] },
          { t: "I'd [appreciate if] you could reply soon.", a: ["appreciate it if"] },
          { t: "I [find difficult] to concentrate with music on.", a: ["find it difficult"] },
          { t: "Have you been to Rome? I [love]!", a: ["love it"] },
          { t: "She can't [stand when] people are late.", a: ["stand it when", "bear it when"] },
          { t: "If you sell your guitar, you'll [regret]!", a: ["regret it"] },
          { t: "Did you [enjoy] at the party?", a: ["enjoy yourself", "enjoy yourselves"] },
          { t: "Here are the dictionaries. Do you still [need]?", a: ["need them"] }
        ]},
        { type: "rw", rubric: "Insert it where necessary. Write the whole sentence. If no word is needed, write CORRECT.", it: "Riscrivi la frase aggiungendo it al posto giusto. Se non manca niente, scrivi CORRECT.", items: [
          { t: "I find hard to remember new words.", a: ["I find it hard to remember new words."] },
          { t: "We tried the new pizzeria and we loved.", a: ["We tried the new pizzeria and we loved it."] },
          { t: "She enjoys reading in bed.", a: ["CORRECT", "She enjoys reading in bed."] },
          { t: "He can't stand when his phone rings in class.", a: ["He can't stand it when his phone rings in class."] },
          { t: "I'd appreciate if you turned the music down.", a: ["I'd appreciate it if you turned the music down."] },
          { t: "I don't regret leaving my old job.", a: ["CORRECT", "I don't regret leaving my old job."] },
          { t: "This jacket was expensive, but I don't regret.", a: ["This jacket was expensive, but I don't regret it."] },
          { t: "I think you'll find useful to have a dictionary.", a: ["I think you'll find it useful to have a dictionary."] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "I had a great time at the beach.", w: "ENJOYED", s2: "I really ___ at the beach.", a: ["enjoyed myself"] },
          { s1: "Waking up early is hard for me.", w: "FIND", s2: "I ___ to wake up early.", a: ["find it hard", "find it difficult"] },
          { s1: "I hate it when people shout.", w: "STAND", s2: "I ___ when people shout.", a: ["can't stand it", "cannot stand it"] },
          { s1: "Please answer quickly; I'd be grateful.", w: "APPRECIATE", s2: "I'd ___ answered quickly.", a: ["appreciate it if you"] },
          { s1: "I'm sorry I sold my bike.", w: "REGRET", s2: "I sold my bike and now I ___.", a: ["regret it"] }
        ]}
      ]
    }
  ],
  test: {
    title: "Test 10",
    ex: [
      { type: "gap", rubric: "Complete each sentence with one suitable word.", it: "Una sola parola per spazio.", items: [
        { t: "Don't forget to ___ your sunglasses with you to the beach!", a: ["take", "bring"] },
        { t: "I find ___ hard to sleep when it's hot.", a: ["it"] },
        { t: "___ sun is very strong today. Wear a hat.", a: ["The"] },
        { t: "Can you ___ care of my plants while I'm away?", a: ["take"] },
        { t: "I really enjoyed ___ at the party.", a: ["myself"] },
        { t: "Please ___ attention to the safety rules.", a: ["pay"] },
        { t: "My brother lives in ___ UK.", a: ["the"] },
        { t: "If you leave now, I'm sure you'll regret ___.", a: ["it"] }
      ]},
      { type: "fix", find: true, ok: [3, 6], rubric: FIX, it: FIX_IT, items: [
        { t: "[The unemployment] is a serious problem in many countries.", a: ["Unemployment"] },
        { t: "I'd [appreciate if] you helped me.", a: ["appreciate it if"] },
        { t: "Could you [make] a photo of the group?", a: ["take"] },
        { t: "We have [the breakfast] at seven.", a: ["breakfast"] },
        { t: "She [profited of] the sales and bought three dresses.", a: ["took advantage of", "profited from"] },
        { t: "I can't [stand] when the bus is late.", a: ["stand it"] },
        { t: "Next time you visit, [take] me a souvenir from Greece!", a: ["bring"] },
        { t: "Did you [enjoy] at the concert?", a: ["enjoy yourself", "enjoy yourselves", "enjoy it"] }
      ]},
      { type: "kwt", rubric: KWT, it: KWT_IT, items: [
        { s1: "Who will look after the cat?", w: "CARE", s2: "Who ___ the cat?", a: ["will take care of", "'ll take care of"] },
        { s1: "Learning grammar is difficult for me.", w: "FIND", s2: "I ___ grammar.", a: ["find it difficult to learn", "find it hard to learn"] },
        { s1: "Please listen carefully to the teacher.", w: "ATTENTION", s2: "Please ___ the teacher.", a: ["pay attention to", "pay careful attention to"] },
        { s1: "I had fun at the party.", w: "ENJOYED", s2: "I ___ at the party.", a: ["enjoyed myself"] },
        { s1: "Shall we stop for ten minutes?", w: "BREAK", s2: "Shall we ___ ten minutes?", a: ["take a break for", "have a break for"] },
        { s1: "We should use the good weather.", w: "ADVANTAGE", s2: "We should ___ the good weather.", a: ["take advantage of"] }
      ]}
    ]
  }
};
})();
