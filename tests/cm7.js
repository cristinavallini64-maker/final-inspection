/* Common Mistakes B2 · Blocco 7 (unità 19–21 + Test 7) — frasi originali */
window.TESTDATA = window.TESTDATA || {};
(function () {
const KWT = "Complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.";
const KWT_IT = "Usa la parola data senza cambiarla, da 2 a 5 parole.";
const FIX = "Each sentence contains a mistake (underlined). Write the correct words.";
const FIX_IT = "La parte sottolineata è sbagliata: riscrivila corretta.";
TESTDATA["cm7"] = {
  title: "Blocco 7 · Unità 19–21",
  units: [
    {
      n: 19, title: "Confusing nouns",
      rule: `<p><b>nature, countryside or environment?</b></p>
<ul><li><b>nature</b> = everything in the world not made by people (animals, plants, the weather…). No article: <em>I love being close to <b>nature</b>.</em></li>
<li><b>the countryside</b> = land outside towns, with fields, farms and woods: <em>They live in <b>the countryside</b> near Asolo.</em></li>
<li><b>the environment</b> = the natural world we live in and must protect: <em>Cars are bad for <b>the environment</b>.</em></li></ul>
<p><b>travel, journey, way or trip?</b></p>
<ul><li><b>travel</b> = the general activity of travelling (uncountable): <em><b>Travel</b> broadens the mind.</em></li>
<li><b>journey</b> = going from one place to another: <em>The <b>journey</b> took six hours.</em></li>
<li><b>way</b> = the route, or the direction: <em>Is this the <b>way</b> to the beach?</em></li>
<li><b>trip</b> = a short visit, usually for pleasure: <em>a <b>trip</b> to the zoo</em></li></ul>`,
      ex: [
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "I love walking in [the nature].", a: ["the countryside", "nature"] },
          { t: "Plastic bags are very bad for the [nature].", a: ["environment"] },
          { t: "We live in the [environment], far from the city.", a: ["countryside"] },
          { t: "Did you have a good [travel] home?", a: ["journey", "trip"] },
          { t: "Excuse me, can you tell me the [journey] to the station?", a: ["way"] },
          { t: "We're going on a school [travel] to Florence.", a: ["trip"] },
          { t: "[Journey] is one of my favourite things: I love seeing new places.", a: ["Travel", "Travelling"] },
          { t: "The train [trip] from Rome to Milan takes three hours.", a: ["journey"] }
        ]},
        { type: "gap", rubric: "Complete each sentence with one suitable noun.", it: "Un nome per spazio: il contesto ti dice quale.", items: [
          { t: "The ___ to school takes me forty minutes by bus.", a: ["journey"] },
          { t: "We should all protect the ___ by recycling more.", a: ["environment"] },
          { t: "On the ___ home, I stopped at the supermarket.", a: ["way"] },
          { t: "My grandparents left the city and moved to the ___.", a: ["countryside", "country"] },
          { t: "Next Sunday we're going on a day ___ to the lake.", a: ["trip"] },
          { t: "Air ___ is becoming more and more expensive.", a: ["travel"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "How do I get to the museum?", w: "WAY", s2: "Can you tell me ___ to the museum?", a: ["the way"] },
          { s1: "It takes two hours to travel to Venice.", w: "JOURNEY", s2: "The ___ two hours.", a: ["journey to Venice takes"] },
          { s1: "We spent a weekend in Paris last month.", w: "TRIP", s2: "We went ___ Paris last month.", a: ["on a trip to", "on a weekend trip to"] },
          { s1: "I prefer living outside the city.", w: "COUNTRYSIDE", s2: "I prefer living ___.", a: ["in the countryside"] },
          { s1: "Pollution damages our planet.", w: "ENVIRONMENT", s2: "Pollution is bad ___.", a: ["for the environment"] }
        ]}
      ]
    },
    {
      n: 20, title: "Confusing adjectives",
      rule: `<p><b>-ed</b> adjectives describe how we feel; <b>-ing</b> adjectives describe the thing that makes us feel that way:</p>
<ul><li><em>I'm <b>bored</b>. → The lesson is <b>boring</b>. · She was <b>amazed</b>. → The show was <b>amazing</b>.</em></li></ul>
<p><b>fun</b> = enjoyable (an activity); <b>funny</b> = it makes us laugh:</p>
<ul><li><em>Camping is great <b>fun</b>. · That cartoon is really <b>funny</b>.</em></li></ul>
<p><b>nervous</b> = worried before something difficult (an exam, a speech); <b>irritable</b> = easily annoyed:</p>
<ul><li><em>I'm always <b>nervous</b> before a match. · He's <b>irritable</b> when he's hungry.</em></li></ul>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with an adjective in -ed or -ing made from the word in brackets.", it: "Scegli tra -ed e -ing.", items: [
          { t: "I was really ___ (bore) during the lesson.", a: ["bored"] },
          { t: "The ending of the film was very ___ (surprise).", a: ["surprising"] },
          { t: "She felt ___ (embarrass) when she fell over in front of everyone.", a: ["embarrassed"] },
          { t: "I find history really ___ (interest).", a: ["interesting"] },
          { t: "We were very ___ (disappoint) with the hotel.", a: ["disappointed"] },
          { t: "That was a long and ___ (tire) journey.", a: ["tiring"] },
          { t: "Are you ___ (interest) in photography?", a: ["interested"] },
          { t: "Your test results are a bit ___ (worry).", a: ["worrying"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "I'm very [interesting] in science.", a: ["interested"] },
          { t: "The party was really [funny]: we danced all night.", a: ["fun"] },
          { t: "He told a very [fun] joke.", a: ["funny"] },
          { t: "I always get [irritable] before an exam.", a: ["nervous"] },
          { t: "The lecture was so [bored] that I fell asleep.", a: ["boring"] },
          { t: "She gets [nervous] when people interrupt her all the time.", a: ["irritable", "annoyed", "angry"] },
          { t: "We were [amazing] by the view from the top.", a: ["amazed"] },
          { t: "It's [embarrassed] when you forget someone's name.", a: ["embarrassing"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "The museum bored me.", w: "BORED", s2: "I ___ the museum.", a: ["was bored in", "was bored at", "got bored in", "was bored by", "got bored at"] },
          { s1: "The news surprised everybody.", w: "SURPRISED", s2: "Everybody ___ the news.", a: ["was surprised by", "was surprised at", "was surprised to hear"] },
          { s1: "Skiing is very enjoyable.", w: "FUN", s2: "Skiing ___.", a: ["is a lot of fun", "is great fun", "is really fun", "is lots of fun", "is so much fun"] },
          { s1: "Physics interests me a lot.", w: "INTERESTED", s2: "I'm ___ physics.", a: ["very interested in", "really interested in"] },
          { s1: "The comedian made us laugh a lot.", w: "FUNNY", s2: "The comedian ___.", a: ["was very funny", "was really funny", "was so funny", "was extremely funny"] },
          { s1: "The results disappointed her.", w: "DISAPPOINTED", s2: "She ___ the results.", a: ["was disappointed with", "was disappointed by"] }
        ]}
      ]
    },
    {
      n: 21, title: "How do I use get?",
      rule: `<ul><li><b>get</b> = obtain, buy: <em>Where can I <b>get</b> a ticket?</em></li>
<li><b>get to</b> = arrive (not <s>arrive to</s>): <em>We <b>got to</b> Bari at midnight.</em> (also <b>get home</b>)</li>
<li><b>get to know</b> = meet somebody and learn about them: <em>I <b>got to know</b> Ivan at a summer camp.</em></li>
<li><b>get</b> + adjective = become: <em>It <b>gets</b> cold in the evening.</em></li></ul>
<p>Don't use <b>get</b> when you mean:</p>
<ul><li><b>take</b> = carry something with you: <em><b>Take</b> some water with you.</em></li>
<li><b>go</b> to talk about the means of transport: <em>I <b>go</b> to work by tram.</em></li></ul>`,
      ex: [
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "Don't forget to [get] your umbrella with you.", a: ["take"] },
          { t: "It took me two hours to [arrive to] the airport.", a: ["get to"] },
          { t: "I [get] to school by bike every day.", a: ["go"] },
          { t: "I [knew] my best friend at a summer camp: before that we were strangers.", a: ["got to know", "met"] },
          { t: "Can you [take] some bread from the shop on your way home?", a: ["get", "buy"] },
          { t: "When did you [arrive to] London?", a: ["arrive in", "get to"] },
          { t: "I'd like to [know better] my new classmates.", a: ["get to know"] },
          { t: "I need to [take] some cash from the cashpoint.", a: ["get", "withdraw"] }
        ]},
        { type: "gap", rubric: "Complete the sentences with the correct form of get, go or take.", it: "Get, go o take? Metti il verbo nella forma corretta.", items: [
          { t: "I usually ___ to work by train.", a: ["go"] },
          { t: "How long does it ___ to get to the beach from here?", a: ["take"] },
          { t: "Where did you ___ that jacket? It's lovely.", a: ["get", "buy"] },
          { t: "We ___ to know each other at university.", a: ["got"] },
          { t: "___ a jumper with you: it'll be cold tonight.", a: ["Take"] },
          { t: "What time do you usually ___ home after school?", a: ["get"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "How long is your journey to school?", w: "TAKE", s2: "How long does ___ to school?", a: ["it take you to get", "it take to get", "it take you to go", "it take to go"] },
          { s1: "I met Sara on holiday and we became friends.", w: "KNOW", s2: "I ___ Sara on holiday.", a: ["got to know"] },
          { s1: "We arrived at the hotel at midnight.", w: "GOT", s2: "We ___ midnight.", a: ["got to the hotel at"] },
          { s1: "I travel to work by bus.", w: "GO", s2: "I ___.", a: ["go to work by bus"] },
          { s1: "I bought a new phone yesterday.", w: "GOT", s2: "I ___ yesterday.", a: ["got a new phone"] }
        ]}
      ]
    }
  ],
  test: {
    title: "Test 7",
    ex: [
      { type: "gap", rubric: "Complete each sentence with one suitable word. Where there is a word in brackets, use it in the correct form.", it: "Una sola parola per spazio.", items: [
        { t: "I'm really ___ (excite) about the school trip.", a: ["excited"] },
        { t: "On the ___ to the airport we got stuck in traffic.", a: ["way"] },
        { t: "It was a very ___ (tire) day.", a: ["tiring"] },
        { t: "I'd like to ___ to know my new neighbours.", a: ["get"] },
        { t: "We should do more to protect the ___.", a: ["environment"] },
        { t: "That comedian is so ___: I couldn't stop laughing.", a: ["funny"] },
        { t: "Don't forget to ___ your passport with you.", a: ["take", "bring"] },
        { t: "It was really ___ (embarrass) when I fell off the stage.", a: ["embarrassing"] }
      ]},
      { type: "fix", find: true, rubric: FIX, it: FIX_IT, items: [
        { t: "I'm [boring]: there's nothing to do.", a: ["bored"] },
        { t: "Did you have a nice [travel] to London?", a: ["journey", "trip"] },
        { t: "We [arrived to] Milan at noon.", a: ["arrived in", "got to"] },
        { t: "Ice skating is great [funny].", a: ["fun"] },
        { t: "I love being in contact with [the nature].", a: ["nature"] },
        { t: "I [go] my laptop with me everywhere.", a: ["take"] },
        { t: "He's [interesting] in buying a new car.", a: ["interested"] },
        { t: "It [takes] dark very early in winter.", a: ["gets"] }
      ]},
      { type: "kwt", rubric: KWT, it: KWT_IT, items: [
        { s1: "The film was disappointing.", w: "DISAPPOINTED", s2: "We ___ the film.", a: ["were disappointed with", "were disappointed by"] },
        { s1: "Is this the right road for the station?", w: "WAY", s2: "Is this ___ the station?", a: ["the right way to", "the way to"] },
        { s1: "It took four hours to travel to Turin.", w: "JOURNEY", s2: "The ___ took four hours.", a: ["journey to Turin"] },
        { s1: "Football doesn't interest me.", w: "INTERESTED", s2: "I'm ___ football.", a: ["not interested in"] },
        { s1: "When did you meet Jo and become friends?", w: "KNOW", s2: "When did you ___?", a: ["get to know Jo", "get to know her", "get to know him"] },
        { s1: "Living in the country is relaxing.", w: "COUNTRYSIDE", s2: "Living ___ relaxing.", a: ["in the countryside is"] }
      ]}
    ]
  }
};
})();
