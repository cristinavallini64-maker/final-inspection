/* Common Mistakes B2 · Blocco 3 (unità 7–9 + Test 3) — frasi originali */
window.TESTDATA = window.TESTDATA || {};
(function () {
const KWT = "Complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.";
const KWT_IT = "Usa la parola data senza cambiarla, da 2 a 5 parole.";
const FIX = "Each sentence contains a mistake (underlined). Write the correct words.";
const FIX_IT = "La parte sottolineata è sbagliata: riscrivila corretta.";
TESTDATA["cm3"] = {
  title: "Blocco 3 · Unità 7–9",
  units: [
    {
      n: 7, title: "must or have to?",
      rule: `<p><b>must</b> expresses an obligation that comes from the speaker (what I think is necessary); <b>have to</b> an obligation that comes from outside (rules, laws, other people):</p>
<ul><li><em>I <b>must</b> phone Giulia — I haven't spoken to her for weeks. · In my job I <b>have to</b> wear a helmet.</em></li></ul>
<p><b>must</b> has only the present form. For all the other forms we use <b>have to</b>:</p>
<ul><li><em>I <b>had to</b> queue for an hour. · We<b>'ll have to</b> leave soon. · She<b>'s had to</b> move twice. · I don't like <b>having to</b> wait.</em></li>
<li>Questions: <em><b>Do</b> you <b>have to</b> work on Saturdays?</em></li></ul>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with the correct form of must or have to.", it: "Decidi tu se serve must o have to, e in quale forma.", items: [
          { t: "Yesterday I ___ wait an hour for the bus.", a: ["had to"] },
          { t: "You ___ try this cake. It's delicious!", a: ["must", "have to"] },
          { t: "Next year we'll ___ choose our university course.", a: ["have to"] },
          { t: "___ you ___ wear a uniform at your school?", a: [["Do"], ["have to"]] },
          { t: "I hate ___ get up early on Saturdays.", a: ["having to"] },
          { t: "Since the accident she has ___ use a walking stick.", a: ["had to"] },
          { t: "Passengers ___ show their boarding pass at the gate.", a: ["have to", "must"] },
          { t: "When I was at primary school, we ___ stand up when the head teacher came in.", a: ["had to"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "I [musted] leave early yesterday.", a: ["had to"] },
          { t: "Did you [must] pay for the parking?", a: ["have to"] },
          { t: "We'll [must] book the tickets in advance.", a: ["have to"] },
          { t: "I don't like [to must] work at weekends.", a: ["having to", "to have to"] },
          { t: "She [has must] work late every evening this week.", a: ["has had to", "'s had to"] },
          { t: "He [must] go to hospital last month for an operation.", a: ["had to"] },
          { t: "In the future, drivers will [must] pay to use this road.", a: ["have to"] },
          { t: "I [must to] finish this essay tonight.", a: ["must", "have to"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "It was necessary for me to change trains twice.", w: "HAD", s2: "I ___ trains twice.", a: ["had to change"] },
          { s1: "I really need to stop eating so much chocolate.", w: "MUST", s2: "I ___ so much chocolate.", a: ["must stop eating"] },
          { s1: "Will it be necessary for us to bring our own food?", w: "HAVE", s2: "Will ___ our own food?", a: ["we have to bring"] },
          { s1: "Is it compulsory for students to attend every lesson?", w: "DO", s2: "___ to attend every lesson?", a: ["Do students have"] },
          { s1: "I don't enjoy being obliged to work on Sundays.", w: "HAVING", s2: "I don't enjoy ___ on Sundays.", a: ["having to work"] },
          { s1: "It's been necessary for us to cancel the trip.", w: "HAD", s2: "We ___ the trip.", a: ["have had to cancel", "'ve had to cancel"] }
        ]}
      ]
    },
    {
      n: 8, title: "mustn't or don't have to?",
      rule: `<p><b>mustn't</b> means that something is <b>not allowed</b>; <b>don't have to</b> means that it is <b>not necessary</b>:</p>
<ul><li><em>You <b>mustn't</b> run near the pool. (it's forbidden)</em></li>
<li><em>You <b>don't have to</b> print the ticket — you can show it on your phone. (it isn't necessary)</em></li></ul>
<p>In the past: <em>I <b>didn't have to</b> pay</em> (it wasn't necessary) · <em>We <b>weren't allowed to</b> / <b>couldn't</b> go out</em> (it was forbidden).</p>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with mustn't or the correct form of don't have to.", it: "Vietato (mustn't) o non necessario (don't have to)? Attenzione al soggetto e al tempo.", items: [
          { t: "You ___ use your phone during the exam. It's against the rules.", a: ["mustn't", "must not"] },
          { t: "It's Saturday tomorrow, so I ___ get up early.", a: ["don't have to", "do not have to"] },
          { t: "You ___ bring anything to the party, but a cake would be nice.", a: ["don't have to", "do not have to"] },
          { t: "We ___ tell Anna about the surprise. Keep it secret!", a: ["mustn't", "must not"] },
          { t: "He ___ work: his family is very rich.", a: ["doesn't have to", "does not have to"] },
          { t: "Visitors ___ feed the animals in the zoo.", a: ["mustn't", "must not"] },
          { t: "The museum was free, so we ___ pay to get in.", a: ["didn't have to", "did not have to"] },
          { t: "You ___ forget your passport, or they won't let you on the plane.", a: ["mustn't", "must not"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "It's a holiday, so the children [mustn't] go to school today.", a: ["don't have to", "do not have to"] },
          { t: "You [don't have to] touch that wire! It's dangerous.", a: ["mustn't", "must not"] },
          { t: "We [mustn't] hurry. The train leaves in an hour.", a: ["don't have to", "do not have to"] },
          { t: "She [mustn't] cook tonight: we're eating out.", a: ["doesn't have to", "does not have to"] },
          { t: "You [don't have to] park here. It's for ambulances only.", a: ["mustn't", "must not", "can't", "cannot"] },
          { t: "I [mustn't] pay for the course last year; it was free.", a: ["didn't have to", "did not have to"] },
          { t: "Students [don't have to] copy in exams.", a: ["mustn't", "must not"] },
          { t: "You [mustn't] come with us if you don't want to.", a: ["don't have to", "do not have to"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "It isn't necessary to book a table.", w: "HAVE", s2: "You ___ a table.", a: ["don't have to book", "do not have to book"] },
          { s1: "Smoking is not allowed in this building.", w: "MUSTN'T", s2: "You ___ in this building.", a: ["mustn't smoke"] },
          { s1: "It wasn't necessary for us to wait.", w: "HAVE", s2: "We ___ wait.", a: ["didn't have to", "did not have to"] },
          { s1: "Students are not allowed to leave before the bell.", w: "MUST", s2: "Students ___ before the bell.", a: ["must not leave", "mustn't leave"] },
          { s1: "She needn't wear a suit at work.", w: "HAVE", s2: "She ___ a suit at work.", a: ["doesn't have to wear", "does not have to wear"] },
          { s1: "Don't tell anyone our secret.", w: "MUSTN'T", s2: "You ___ our secret.", a: ["mustn't tell anyone", "mustn't tell anybody"] }
        ]}
      ]
    },
    {
      n: 9, title: "can, could or be able to?",
      rule: `<p>For general ability we use <b>can</b> (present) and <b>could</b> (past): <em>My grandfather <b>could</b> speak four languages.</em></p>
<p>For a <b>specific success</b> in the past (= managed to) we use <b>was / were able to</b>, not could. <b>couldn't</b> is always possible:</p>
<ul><li><em>The road was icy, but we <b>were able to</b> reach the village. (not <s>could reach</s>)</em></li></ul>
<p><b>be able to</b> gives us all the other forms: <em><b>will be able to</b> · <b>have been able to</b> · I'd like <b>to be able to</b>…</em></p>
<p>To ask for permission we use <b>can / could</b>, never <b>be able to</b>: <em><b>Could</b> I leave a bit earlier today?</em></p>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with the correct form of can, could or be able to.", it: "Decidi tu la forma: can, could o be able to.", items: [
          { t: "When she was five, she ___ already read.", a: ["could"] },
          { t: "I'm sorry, I ___ come to your party next Saturday.", a: ["won't be able to", "will not be able to", "can't", "cannot"] },
          { t: "The fire spread quickly, but everyone ___ escape.", a: ["was able to"] },
          { t: "___ I open the window? It's very hot in here.", a: ["Can", "Could", "May"] },
          { t: "I'd love ___ play the guitar.", a: ["to be able to"] },
          { t: "Since I broke my leg, I ___ go running.", a: ["haven't been able to", "have not been able to"] },
          { t: "If you practise every day, you ___ speak Spanish fluently in a year.", a: ["will be able to", "'ll be able to"] },
          { t: "We looked everywhere, but we ___ find the keys.", a: ["couldn't", "could not", "weren't able to", "were not able to"] }
        ]},
        { type: "fix", find: true, rubric: FIX, it: FIX_IT, items: [
          { t: "After hours of trying, I [could] fix the printer.", a: ["was able to", "managed to"] },
          { t: "[Am I able to] use your bathroom, please?", a: ["Can I", "Could I", "May I"] },
          { t: "One day robots [can] do all the housework.", a: ["will be able to", "'ll be able to"] },
          { t: "She hasn't [could] sleep since the accident.", a: ["been able to"] },
          { t: "I'd like to [can] speak Chinese.", a: ["be able to"] },
          { t: "When I was young I [can] run very fast.", a: ["could"] },
          { t: "Despite the traffic, we [could] catch the last train.", a: ["were able to", "managed to"] },
          { t: "[Will you can] help me tomorrow?", a: ["Will you be able to", "Can you", "Could you"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "I managed to finish the race.", w: "ABLE", s2: "I ___ the race.", a: ["was able to finish"] },
          { s1: "I can't come tomorrow.", w: "ABLE", s2: "I ___ come tomorrow.", a: ["won't be able to", "will not be able to"] },
          { s1: "Is it OK if I borrow your bike?", w: "CAN", s2: "___ your bike?", a: ["Can I borrow"] },
          { s1: "She hasn't managed to sleep well recently.", w: "BEEN", s2: "She ___ sleep well recently.", a: ["hasn't been able to", "has not been able to"] },
          { s1: "As a child, he knew how to swim.", w: "COULD", s2: "He ___ was a child.", a: ["could swim when he"] },
          { s1: "It would be great to have the ability to fly a plane.", w: "ABLE", s2: "I'd love ___ a plane.", a: ["to be able to fly"] }
        ]}
      ]
    }
  ],
  test: {
    title: "Test 3",
    ex: [
      { type: "gap", rubric: "Complete Sara's message with must, have to, can, could or be able to in the correct form. The words in brackets tell you the meaning.", it: "Le parole tra parentesi indicano il significato: scegli tu il modale e la forma.", items: [
        { t: "At my new school we ___ wear a uniform, which is great. (it isn't necessary)", a: ["don't have to", "do not have to"] },
        { t: "But we ___ use our phones in class. (it's forbidden)", a: ["mustn't", "must not", "can't", "cannot"] },
        { t: "Last week I ___ stay late for a meeting. (it was necessary)", a: ["had to"] },
        { t: "Luckily I ___ catch the last bus home. (I managed)", a: ["was able to"] },
        { t: "Next year we ___ choose a work placement. (it will be necessary)", a: ["will have to", "'ll have to"] },
        { t: "I really ___ study harder for maths. (I think it's important)", a: ["must"] },
        { t: "___ I call you on Sunday? (asking for permission)", a: ["Can", "Could", "May"] },
        { t: "I ___ call you last Sunday because my phone was broken. (it wasn't possible)", a: ["couldn't", "could not", "wasn't able to", "was not able to"] }
      ]},
      { type: "fix", find: true, rubric: FIX, it: FIX_IT, items: [
        { t: "You [don't have to] drive faster than 50 here. It's the law.", a: ["mustn't", "must not", "can't", "cannot"] },
        { t: "We [must] leave early yesterday because of the storm.", a: ["had to"] },
        { t: "In two years' time my little sister [can] drive.", a: ["will be able to", "'ll be able to"] },
        { t: "Tomorrow is a holiday, so I [mustn't] go to work.", a: ["don't have to", "do not have to"] },
        { t: "I'm sorry I [couldn't to] answer your call.", a: ["couldn't", "could not", "wasn't able to"] },
        { t: "Have you ever [must] work at night?", a: ["had to"] },
        { t: "Luckily, the firefighters [could] save the old building.", a: ["were able to", "managed to"] },
        { t: "[Do you must] wear a helmet on a scooter?", a: ["Do you have to", "Must you"] }
      ]},
      { type: "kwt", rubric: KWT, it: KWT_IT, items: [
        { s1: "Is it necessary to show my ID?", w: "HAVE", s2: "Do ___ my ID?", a: ["I have to show"] },
        { s1: "It wasn't possible for us to see the castle because it was closed.", w: "COULDN'T", s2: "We ___ the castle because it was closed.", a: ["couldn't see", "couldn't visit"] },
        { s1: "Talking is not allowed in the library.", w: "MUSTN'T", s2: "You ___ in the library.", a: ["mustn't talk", "mustn't speak"] },
        { s1: "She succeeded in passing her driving test at the first attempt.", w: "ABLE", s2: "She ___ her driving test at the first attempt.", a: ["was able to pass"] },
        { s1: "It's not necessary for you to come with me.", w: "HAVE", s2: "You ___ with me.", a: ["don't have to come", "do not have to come"] },
        { s1: "I really need to call my mother tonight.", w: "MUST", s2: "I ___ tonight.", a: ["must call my mother", "must call my mum", "must phone my mother", "must ring my mother"] }
      ]}
    ]
  }
};
})();
