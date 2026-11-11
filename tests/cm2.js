/* Common Mistakes B2 · Blocco 2 (unità 4–6 + Test 2) — frasi originali */
window.TESTDATA = window.TESTDATA || {};
(function () {
const KWT = "Complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.";
const KWT_IT = "Usa la parola data senza cambiarla, da 2 a 5 parole.";
const FIX = "Each sentence contains a mistake (underlined). Write the correct words.";
const FIX_IT = "La parte sottolineata è sbagliata: riscrivila corretta.";
TESTDATA["cm2"] = {
  title: "Blocco 2 · Unità 4–6",
  units: [
    {
      n: 4, title: "have or have got?",
      rule: `<p><b>have got</b> is used for possession, relationships, illnesses and appointments (mainly in the present):</p>
<ul><li><em>She<b>'s got</b> green eyes. · <b>Have</b> you <b>got</b> a minute?</em></li></ul>
<p>For actions and experiences we use <b>have</b>, never <b>have got</b>: <em>have breakfast, have a bath, have a party, have fun, have problems with…</em> In this case <b>have</b> can also be continuous:</p>
<ul><li><em>We<b>'re having</b> a barbecue — come and join us!</em></li></ul>
<p>Questions and negatives: <em>Have you got…? / Do you have…?</em> (never <s>Do you have got…?</s>). In the past we use <b>had</b>.</p>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with the correct form of have or have got. Use the words in brackets.", it: "Scegli tra have e have got e metti il verbo nella forma corretta.", items: [
          { t: "We ___ (have) lunch at the moment. Can I call you back?", a: ["are having", "'re having"] },
          { t: "___ (you / have got) a pen I could borrow?", a: ["Have you got"] },
          { t: "My brother ___ (not / have) breakfast on weekdays. He's always in a hurry.", a: ["doesn't have", "does not have"] },
          { t: "How often ___ (she / have) piano lessons?", a: ["does she have"] },
          { t: "Sorry, I can't come. I ___ (have got) a terrible cold.", a: ["'ve got", "have got"] },
          { t: "Last summer we ___ (have) a great time in Sicily.", a: ["had"] },
          { t: "They ___ (not / have got) a car, so they cycle everywhere.", a: ["haven't got", "have not got"] },
          { t: "I often ___ (have) problems with this old laptop.", a: ["have"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "I [am having] two sisters and a brother.", a: ["have", "have got", "'ve got"] },
          { t: "What time [have you got] dinner, usually?", a: ["do you have"] },
          { t: "[Do you have got] any brothers or sisters?", a: ["Have you got", "Do you have"] },
          { t: "She [had got] a shower when the phone rang.", a: ["was having"] },
          { t: "We [had got] a fantastic holiday in Greece last year.", a: ["had"] },
          { t: "He [doesn't have got] much free time.", a: ["hasn't got", "doesn't have", "has not got", "does not have"] },
          { t: "[Are you having] a car?", a: ["Have you got", "Do you have"] },
          { t: "Did you [have got] a nice weekend?", a: ["have"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "Do you have any idea where Pietro is?", w: "GOT", s2: "___ where Pietro is?", a: ["Have you got any idea"] },
          { s1: "My cousin owns two horses.", w: "GOT", s2: "My cousin ___ two horses.", a: ["has got", "'s got"] },
          { s1: "Lunch is not something I usually eat.", w: "HAVE", s2: "I don't ___.", a: ["usually have lunch"] },
          { s1: "We enjoyed ourselves a lot at the party.", w: "TIME", s2: "We ___ at the party.", a: ["had a great time", "had a good time", "had a lovely time", "had a wonderful time", "had a fantastic time", "had a brilliant time"] },
          { s1: "Is she in the shower right now?", w: "HAVING", s2: "___ a shower right now?", a: ["Is she having"] },
          { s1: "Phrasal verbs are difficult for me.", w: "DIFFICULTY", s2: "I ___ phrasal verbs.", a: ["have difficulty with", "have some difficulty with"] }
        ]}
      ]
    },
    {
      n: 5, title: "Past simple or present perfect?",
      rule: `<p>We use the <b>past simple</b> with a finished time (<em>yesterday, last year, in 2019, ago, when I was…</em>) and in questions with <b>When…? What time…?</b>:</p>
<ul><li><em>We <b>moved</b> here in 2015. · When <b>did</b> the match <b>finish</b>?</em></li></ul>
<p>We use the <b>present perfect</b> for experiences (<em>ever, never</em>), for unfinished periods (<em>today, this week</em>) and with <b>for / since</b> when the situation continues now:</p>
<ul><li><em><b>Have</b> you ever <b>been</b> to Malta? · She<b>'s worked</b> at the bank since March.</em></li></ul>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with the past simple or the present perfect of the verbs in brackets.", it: "Scegli tra past simple e present perfect.", items: [
          { t: "I ___ (start) learning English when I was six.", a: ["started"] },
          { t: "___ (you / ever / try) Japanese food?", a: ["Have you ever tried"] },
          { t: "My parents ___ (live) in this house since 1998.", a: ["have lived", "'ve lived", "have been living", "'ve been living"] },
          { t: "When ___ (you / buy) those trainers?", a: ["did you buy"] },
          { t: "We ___ (not / see) Paolo for ages. Is he OK?", a: ["haven't seen", "have not seen"] },
          { t: "Three years ago she ___ (move) to Berlin.", a: ["moved"] },
          { t: "I ___ (already / send) four emails this morning, and it's only ten o'clock.", a: ["have already sent", "'ve already sent"] },
          { t: "Marco ___ (break) his arm last winter while he was skiing.", a: ["broke"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "I [have seen] that film last Saturday.", a: ["saw"] },
          { t: "She [works] here since January.", a: ["has worked", "'s worked", "has been working", "'s been working"] },
          { t: "When [have you arrived] in Italy?", a: ["did you arrive"] },
          { t: "[Did you ever go] to Ireland?", a: ["Have you ever been"] },
          { t: "I [know] him for ten years.", a: ["have known", "'ve known"] },
          { t: "We [have visited] Prague two years ago.", a: ["visited"] },
          { t: "I'm exhausted. I [didn't sleep] well this week.", a: ["haven't slept", "have not slept"] },
          { t: "Who [has invented] the telephone?", a: ["invented"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "I bought this phone two years ago.", w: "HAD", s2: "I ___ two years.", a: ["have had this phone for", "'ve had this phone for", "have had it for", "'ve had it for"] },
          { s1: "This is my first visit to London.", w: "BEEN", s2: "I ___ to London before.", a: ["have never been", "'ve never been"] },
          { s1: "When did you start working here?", w: "LONG", s2: "How ___ here?", a: ["long have you worked", "long have you been working"] },
          { s1: "The last time I saw Clara was ages ago.", w: "FOR", s2: "I ___ ages.", a: ["haven't seen Clara for", "have not seen Clara for", "haven't seen her for", "have not seen her for"] },
          { s1: "We moved to Padua in 2020 and we still live there.", w: "LIVED", s2: "We ___ 2020.", a: ["have lived in Padua since", "'ve lived in Padua since"] },
          { s1: "Is this the first time you've eaten sushi?", w: "EVER", s2: "Have ___ sushi before?", a: ["you ever eaten", "you ever had", "you ever tried"] }
        ]}
      ]
    },
    {
      n: 6, title: "Past perfect",
      rule: `<p>We use the <b>past perfect</b> (<em>had + past participle</em>) for an action that happened <b>before</b> another action in the past:</p>
<ul><li><em>When I got to the bus stop, the bus <b>had</b> already <b>gone</b>.</em></li></ul>
<p>When actions happen one after the other, in order, we use the <b>past simple</b>:</p>
<ul><li><em>She opened the door, switched on the light and sat down.</em></li></ul>
<p>Don't use the past perfect instead of the present perfect: <em>I<b>'ve lost</b> my glasses. Can you help me?</em></p>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with the past simple or the past perfect of the verbs in brackets.", it: "Scegli tra past simple e past perfect.", items: [
          { t: "When we got to the cinema, the film ___ (already / start).", a: ["had already started", "'d already started"] },
          { t: "I didn't recognise Luca because he ___ (grow) a beard.", a: ["had grown", "'d grown"] },
          { t: "She was nervous because she ___ (never / fly) before.", a: ["had never flown", "'d never flown"] },
          { t: "By the time the police arrived, the thieves ___ (escape).", a: ["had escaped", "'d escaped"] },
          { t: "This morning I ___ (wake up), had a quick shower and left the house.", a: ["woke up"] },
          { t: "We were starving because we ___ (not / eat) since breakfast.", a: ["hadn't eaten", "had not eaten"] },
          { t: "At the station he ___ (realise) that he ___ (leave) his wallet at home.", a: [["realised", "realized"], ["had left", "'d left"]] },
          { t: "___ (you / ever / visit) Rome before you moved there?", a: ["Had you ever visited", "Had you ever been to"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "When I arrived at the station, the train [already left].", a: ["had already left", "'d already left"] },
          { t: "I was sure I [have met] her before.", a: ["had met", "'d met"] },
          { t: "Last night I [had cooked] dinner and then watched a film.", a: ["cooked"] },
          { t: "She missed the party because she [has caught] the flu.", a: ["had caught", "'d caught"] },
          { t: "[I've finished] my exams last week.", a: ["I finished"] },
          { t: "It was the best concert I [ever saw].", a: ["had ever seen", "'d ever seen"] },
          { t: "They told us that the museum [closes] two years earlier.", a: ["had closed", "'d closed", "closed"] },
          { t: "I [had lost] my keys. Have you seen them?", a: ["have lost", "'ve lost"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "I finished my homework, and then my friends arrived.", w: "HAD", s2: "When my friends arrived, I ___ my homework.", a: ["had already finished", "had finished"] },
          { s1: "She saw snow for the first time that winter.", w: "TIME", s2: "That winter was the ___ seen snow.", a: ["first time she had", "first time she'd", "first time she had ever", "first time she'd ever"] },
          { s1: "The guests left, and then we arrived.", w: "ALREADY", s2: "When we arrived, ___ left.", a: ["the guests had already", "they had already"] },
          { s1: "I lost my passport, so I couldn't travel.", w: "BECAUSE", s2: "I couldn't travel ___ my passport.", a: ["because I had lost", "because I'd lost"] },
          { s1: "He broke the machine first and read the instructions after that.", w: "UNTIL", s2: "He didn't read the instructions ___ the machine.", a: ["until he had broken", "until he'd broken", "until he broke"] },
          { s1: "We hadn't been to that restaurant before.", w: "FIRST", s2: "It was the ___ been to that restaurant.", a: ["first time we had", "first time we'd", "first time we had ever", "first time we'd ever"] }
        ]}
      ]
    }
  ],
  test: {
    title: "Test 2",
    ex: [
      { type: "gap", rubric: "Complete the text with the correct form of the verbs in brackets.", it: "Scegli tu il tempo verbale giusto.", items: [
        { t: "Last summer I ___ (go) to Scotland for the first time.", a: ["went"] },
        { t: "I ___ (always / want) to see the Highlands, so I was very excited.", a: ["had always wanted", "'d always wanted"] },
        { t: "Unfortunately, when I ___ (get) to the airport, I ___ (realise) that I ___ (forget) my passport at home.", a: [["got", "arrived"], ["realised", "realized"], ["had forgotten", "'d forgotten"]] },
        { t: "Luckily my brother ___ (have) a car at the time, so he brought it to me.", a: ["had"] },
        { t: "Since then I ___ (be) back to Scotland twice.", a: ["have been", "'ve been"] }
      ]},
      { type: "fix", find: true, rubric: FIX, it: FIX_IT, items: [
        { t: "I [have finished] primary school in 2014.", a: ["finished"] },
        { t: "[Have you got] a good time at the party last night?", a: ["Did you have"] },
        { t: "By the time I got up, everyone [has gone] out.", a: ["had gone", "'d gone"] },
        { t: "How long [do you know] your best friend?", a: ["have you known"] },
        { t: "I [didn't have got] enough money for the ticket.", a: ["didn't have", "did not have"] },
        { t: "She [has left] the office an hour ago.", a: ["left"] },
        { t: "Sorry I'm late. I [had missed] the bus.", a: ["missed", "have missed", "'ve missed"] },
        { t: "I've lived in this town [since] three years.", a: ["for"] }
      ]},
      { type: "kwt", rubric: KWT, it: KWT_IT, items: [
        { s1: "The last time I went to the dentist was in May.", w: "BEEN", s2: "I ___ the dentist since May.", a: ["haven't been to", "have not been to"] },
        { s1: "I've never had such a good meal.", w: "EVER", s2: "It's the best meal ___ had.", a: ["I have ever", "I've ever"] },
        { s1: "The guests left and then we had dinner.", w: "AFTER", s2: "We had dinner ___ left.", a: ["after the guests had", "after they had", "after they'd"] },
        { s1: "Do you have a driving licence?", w: "GOT", s2: "___ a driving licence?", a: ["Have you got"] },
        { s1: "The shop closed ten minutes before I arrived.", w: "ALREADY", s2: "When I arrived, the shop ___.", a: ["had already closed", "'d already closed"] },
        { s1: "When did you start studying Spanish?", w: "HOW", s2: "___ been studying Spanish?", a: ["How long have you"] }
      ]}
    ]
  }
};
})();
