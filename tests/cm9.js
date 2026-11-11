/* Common Mistakes B2 · Blocco 9 (unità 25–27 + Test 9) — frasi originali */
window.TESTDATA = window.TESTDATA || {};
(function () {
const KWT = "Complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.";
const KWT_IT = "Usa la parola data senza cambiarla, da 2 a 5 parole.";
const FIX = "Each sentence contains a mistake (underlined). Write the correct words.";
const FIX_IT = "La parte sottolineata è sbagliata: riscrivila corretta.";
TESTDATA["cm9"] = {
  title: "Blocco 9 · Unità 25–27",
  units: [
    {
      n: 25, title: "still, yet or already?",
      rule: `<ul><li><b>still</b> = something continues, often longer than expected: <em>Are you <b>still</b> at the office? It's 9 pm!</em></li>
<li><b>already</b> = something has happened sooner than expected: <em>She's <b>already</b> booked the flights.</em></li>
<li><b>yet</b> = something we expect to happen; in questions and negatives, at the end of the sentence: <em>Has the post arrived <b>yet</b>? · It hasn't arrived <b>yet</b>.</em></li></ul>
<p>Position: <b>still</b> and <b>already</b> go before the main verb, but after <b>be</b> and after the first auxiliary: <em>He <b>still</b> works there. · I'm <b>already</b> late. · We've <b>already</b> eaten.</em></p>
<p>With a negative verb, <b>still</b> goes before the auxiliary: <em>I <b>still</b> haven't replied.</em></p>`,
      ex: [
        { type: "rw", rubric: "Add still, yet or already to the sentences in bold. Write the whole sentence.", it: "Riscrivi la frase in grassetto aggiungendo still, yet o already al posto giusto.", items: [
          { ctx: "You don't need to buy any milk.", t: "I've bought some.", a: ["I've already bought some.", "I have already bought some."] },
          { ctx: "Luca has been looking for a flat for months.", t: "He hasn't found one.", a: ["He still hasn't found one.", "He hasn't found one yet.", "He still has not found one.", "He has not found one yet."] },
          { ctx: "Don't tell Marta how the film ends!", t: "She hasn't seen it.", a: ["She hasn't seen it yet.", "She still hasn't seen it.", "She has not seen it yet.", "She still has not seen it."] },
          { ctx: "My son is only four.", t: "He can swim.", a: ["He can already swim.", "He can swim already."] },
          { ctx: "I sent the form two weeks ago.", t: "Nobody has replied.", a: ["Nobody has replied yet.", "Nobody has replied to me yet.", "Still nobody has replied."] },
          { ctx: "We're leaving in ten minutes.", t: "Have you packed your suitcase?", a: ["Have you packed your suitcase yet?", "Have you already packed your suitcase?"] },
          { ctx: "It's past midnight!", t: "Are you studying?", a: ["Are you still studying?"] },
          { ctx: "We got there at nine, but it was too late.", t: "The shop had closed.", a: ["The shop had already closed."] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "I can [yet] remember my first day at school.", a: ["still"] },
          { t: "Have you decided [still]?", a: ["yet", "already"] },
          { t: "Hurry up! The film has [yet] started.", a: ["already"] },
          { t: "I'm hungry: I [haven't already eaten].", a: ["haven't eaten yet", "have not eaten yet", "still haven't eaten"] },
          { t: "Don't worry about Anna. She [already is] here.", a: ["is already", "'s already"] },
          { t: "He has [yet] left the office. You've just missed him.", a: ["already"] },
          { t: "Are you [yet] living in Rome?", a: ["still"] },
          { t: "We've waited for an hour and the bus [hasn't already come].", a: ["hasn't come yet", "still hasn't come", "has not come yet"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "I started my essay but it isn't finished.", w: "YET", s2: "I haven't ___.", a: ["finished my essay yet", "finished it yet"] },
          { s1: "He's been ill for a week and he's not better.", w: "STILL", s2: "He ___ ill.", a: ["is still", "'s still"] },
          { s1: "Paolo left before we arrived.", w: "ALREADY", s2: "When we arrived, Paolo ___.", a: ["had already left", "'d already left", "had already gone", "'d already gone"] },
          { s1: "Do you continue to play tennis?", w: "STILL", s2: "Do you ___?", a: ["still play tennis"] },
          { s1: "There's no need to buy the tickets; I've done it.", w: "ALREADY", s2: "I ___ the tickets.", a: ["have already bought", "'ve already bought", "have already got", "'ve already got"] }
        ]}
      ]
    },
    {
      n: 26, title: "very, too or enough?",
      rule: `<ul><li><b>very</b> = a lot, extremely: <em>The test was <b>very</b> difficult.</em> We don't use very with strong adjectives (<em>amazing, astonished, awful, enormous, fantastic, freezing…</em>): <em>The view was <b>amazing</b>.</em></li>
<li><b>too</b> = more than necessary, so there is a problem: <em>It's <b>too</b> cold to go swimming.</em></li>
<li><b>enough</b> = sufficient. It goes <b>after</b> an adjective or adverb, but <b>before</b> a noun: <em>Is it warm <b>enough</b>? · We haven't got <b>enough</b> chairs.</em></li></ul>
<p>Often: <em><b>too</b> + adjective + <b>to</b> do · adjective + <b>enough to</b> do</em>.</p>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with very, too or enough and the word in brackets. Sometimes no extra word is needed.", it: "Scrivi anche la parola tra parentesi, nell'ordine giusto.", items: [
          { t: "This coffee is ___ (hot) to drink. I'll wait a bit.", a: ["too hot"] },
          { t: "He isn't ___ (tall) to play in the basketball team.", a: ["tall enough"] },
          { t: "I was ___ (surprised) to hear the news.", a: ["very surprised"] },
          { t: "The concert was ___ (fantastic)!", a: ["fantastic", "absolutely fantastic", "really fantastic"] },
          { t: "We haven't got ___ (time) to visit the museum.", a: ["enough time"] },
          { t: "She's ___ (young) to drive: she's only fifteen.", a: ["too young"] },
          { t: "The test was ___ (easy), so everyone passed.", a: ["very easy"] },
          { t: "You're driving ___ (fast)! Slow down!", a: ["too fast"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "The exam was [too easy]: I got full marks.", a: ["very easy"] },
          { t: "I'm not [enough old] to vote.", a: ["old enough"] },
          { t: "The view from the castle was [very amazing].", a: ["amazing", "absolutely amazing", "really amazing"] },
          { t: "There isn't [room enough] in the car for all of us.", a: ["enough room"] },
          { t: "It's [very] hot to sit in the sun. Let's find some shade.", a: ["too"] },
          { t: "I was [too] happy to see you yesterday.", a: ["very", "so", "really"] },
          { t: "This bag isn't [enough big] for my laptop.", a: ["big enough"] },
          { t: "We were [very astonished] by the news.", a: ["astonished", "absolutely astonished", "really astonished"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "The suitcase is so heavy that I can't lift it.", w: "TOO", s2: "The suitcase ___ lift.", a: ["is too heavy to", "'s too heavy to"] },
          { s1: "She is not old enough to stay out late.", w: "TOO", s2: "She is ___ out late.", a: ["too young to stay"] },
          { s1: "We need more chairs.", w: "ENOUGH", s2: "There ___.", a: ["aren't enough chairs", "are not enough chairs"] },
          { s1: "He's too short to reach the shelf.", w: "TALL", s2: "He isn't ___ reach the shelf.", a: ["tall enough to"] },
          { s1: "The sea was very cold, so we couldn't swim.", w: "TOO", s2: "The sea was ___ swim in.", a: ["too cold to", "too cold for us to"] }
        ]}
      ]
    },
    {
      n: 27, title: "When do I use of and on?",
      rule: `<p>We use <b>of</b> in expressions such as: <em>be fond <b>of</b>, have experience <b>of</b>, in spite <b>of</b>, most <b>of</b> the / my…</em></p>
<p>We <b>don't</b> use <b>of</b>:</p>
<ul><li>after <b>despite</b>: <em><b>Despite</b> the cold, they went for a swim.</em></li>
<li>between <b>most</b> and a noun without <em>the / my</em>: <em><b>Most</b> shops close at 7.</em> (but <em><b>Most of the</b> shops in my street…</em>)</li></ul>
<p>We use <b>on</b> in expressions such as: <em>depend <b>on</b>, be keen <b>on</b></em>.</p>
<p>We don't use <b>on</b> before <b>last / next</b>: <em>I'm leaving <b>next</b> Tuesday.</em></p>`,
      ex: [
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "[Despite of the rain], we went for a walk.", a: ["Despite the rain", "In spite of the rain"] },
          { t: "[Most of people] like music.", a: ["Most people"] },
          { t: "I'm very fond [with] cats.", a: ["of"] },
          { t: "It all depends [of] the weather.", a: ["on"] },
          { t: "She starts her new job [on next] Monday.", a: ["next"] },
          { t: "Are you keen [of] jazz?", a: ["on"] },
          { t: "[Most of restaurants] in this street are expensive.", a: ["Most restaurants", "Most of the restaurants"] },
          { t: "I saw her [on last] Friday.", a: ["last"] }
        ]},
        { type: "rw", rubric: "Insert of or on where necessary. Write the whole sentence. If no word is needed, write CORRECT.", it: "Riscrivi la frase con of o on al posto giusto. Se non manca niente, scrivi CORRECT.", items: [
          { t: "I'm not very keen spicy food.", a: ["I'm not very keen on spicy food."] },
          { t: "Most my classmates live in town.", a: ["Most of my classmates live in town."] },
          { t: "We'll meet again next Thursday.", a: ["CORRECT", "We'll meet again next Thursday."] },
          { t: "Our plans depend the weather.", a: ["Our plans depend on the weather."] },
          { t: "In spite the traffic, we arrived on time.", a: ["In spite of the traffic, we arrived on time."] },
          { t: "Most hotels in the town were full.", a: ["CORRECT", "Most hotels in the town were full."] },
          { t: "My grandfather is very fond his garden.", a: ["My grandfather is very fond of his garden."] },
          { t: "Whether I get the job depends my interview.", a: ["Whether I get the job depends on my interview."] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "Although it rained, the match went on.", w: "DESPITE", s2: "The match went on ___.", a: ["despite the rain"] },
          { s1: "I really like horror films.", w: "KEEN", s2: "I'm really ___ horror films.", a: ["keen on"] },
          { s1: "The price changes according to the season.", w: "DEPENDS", s2: "The price ___ the season.", a: ["depends on"] },
          { s1: "Nearly all the students passed.", w: "MOST", s2: "___ passed.", a: ["Most students", "Most of the students"] },
          { s1: "I've never worked in a shop.", w: "EXPERIENCE", s2: "I have ___ in a shop.", a: ["no experience of working", "no experience of work", "no experience working"] },
          { s1: "She adores her dog.", w: "FOND", s2: "She's ___ her dog.", a: ["very fond of", "really fond of", "so fond of"] }
        ]}
      ]
    }
  ],
  test: {
    title: "Test 9",
    ex: [
      { type: "gap", rubric: "Complete each sentence with one suitable word.", it: "Una sola parola per spazio.", items: [
        { t: "Is your sister ___ at university?", a: ["still"] },
        { t: "I'm not tall ___ to reach the top shelf.", a: ["enough"] },
        { t: "It all depends ___ the price.", a: ["on"] },
        { t: "The water is ___ cold to swim in.", a: ["too"] },
        { t: "Have you met the new teacher ___?", a: ["yet"] },
        { t: "Most ___ the people at the party were strangers.", a: ["of"] },
        { t: "We've ___ booked the hotel, so don't worry.", a: ["already"] },
        { t: "My little brother is very fond ___ animals.", a: ["of"] }
      ]},
      { type: "fix", find: true, rubric: FIX, it: FIX_IT, items: [
        { t: "I'm [very] tired to go out tonight.", a: ["too"] },
        { t: "[Despite of] the cold, we went swimming.", a: ["Despite", "In spite of"] },
        { t: "I [haven't still received] your email.", a: ["still haven't received", "haven't received"] },
        { t: "[Most of students] hate exams.", a: ["Most students"] },
        { t: "The film was [very brilliant].", a: ["brilliant", "absolutely brilliant", "really brilliant"] },
        { t: "See you [on next] week!", a: ["next"] },
        { t: "There aren't [chairs enough] for everyone.", a: ["enough chairs"] },
        { t: "Has the bus [yet] left? I can't see it.", a: ["already"] }
      ]},
      { type: "kwt", rubric: KWT, it: KWT_IT, items: [
        { s1: "The museum was too far to walk to.", w: "ENOUGH", s2: "The museum wasn't ___ walk to.", a: ["close enough to", "near enough to"] },
        { s1: "My cousin doesn't like football much.", w: "KEEN", s2: "My cousin ___ football.", a: ["isn't keen on", "is not keen on", "isn't very keen on", "is not very keen on"] },
        { s1: "The train left before we got to the station.", w: "ALREADY", s2: "When we got to the station, ___.", a: ["the train had already left", "the train had already gone", "it had already left"] },
        { s1: "Although he was tired, he finished the race.", w: "DESPITE", s2: "He finished the race ___.", a: ["despite being tired", "despite his tiredness", "despite feeling tired"] },
        { s1: "Do you continue to live in the same flat?", w: "STILL", s2: "Are you ___ the same flat?", a: ["still living in"] },
        { s1: "Whether we go out is up to you.", w: "DEPENDS", s2: "It ___ you.", a: ["depends on"] }
      ]}
    ]
  }
};
})();
