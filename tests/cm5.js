/* Common Mistakes B2 · Blocco 5 (unità 13–15 + Test 5) — frasi originali */
window.TESTDATA = window.TESTDATA || {};
(function () {
const KWT = "Complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.";
const KWT_IT = "Usa la parola data senza cambiarla, da 2 a 5 parole.";
const FIX = "Each sentence contains a mistake (underlined). Write the correct words.";
const FIX_IT = "La parte sottolineata è sbagliata: riscrivila corretta.";
TESTDATA["cm5"] = {
  title: "Blocco 5 · Unità 13–15",
  units: [
    {
      n: 13, title: "like or as?",
      rule: `<p>We use <b>like</b>:</p>
<ul><li>to say that something is <b>similar</b>: <em>This tastes <b>like</b> chicken.</em></li>
<li>to ask for a description: <em>What's the weather <b>like</b> in Dublin?</em></li>
<li>to give examples: <em>sports <b>like</b> rugby and hockey</em></li></ul>
<p>We use <b>as</b>:</p>
<ul><li>for a job or a role: <em>She works <b>as</b> a pharmacist.</em></li>
<li>in comparisons: <em>not <b>as</b> expensive <b>as</b> · the same <b>as</b></em></li></ul>
<p>Compare: <em>He talks <b>like</b> a lawyer</em> (he isn't one) · <em>He works <b>as</b> a lawyer</em> (that's his job).</p>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with like or as.", it: "Like o as?", items: [
          { t: "She works ___ a nurse in a big hospital.", a: ["as"] },
          { t: "Your brother looks just ___ you!", a: ["like"] },
          { t: "My phone isn't ___ new as yours.", a: ["as"] },
          { t: "'What's your new teacher ___?' 'Strict but fair.'", a: ["like"] },
          { t: "I've got the same bike ___ you.", a: ["as"] },
          { t: "It was so hot that it was ___ being in an oven.", a: ["like"] },
          { t: "He used his jacket ___ a pillow.", a: ["as"] },
          { t: "I love tropical fruit ___ mangoes and pineapples.", a: ["like"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "My dad works [like] an engineer.", a: ["as"] },
          { t: "She sings [as] an angel.", a: ["like"] },
          { t: "'[How is she like]?' 'Very friendly.'", a: ["What is she like", "What's she like"] },
          { t: "Her eyes are not as blue [like] her sister's.", a: ["as"] },
          { t: "I want to do the same course [like] you.", a: ["as"] },
          { t: "My cousin is very tall, [as] a basketball player.", a: ["like"] },
          { t: "He's famous [like] a chef, but he's also a writer.", a: ["as"] },
          { t: "Cities [as] Rome and Florence are full of tourists.", a: ["like", "such as"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "Paola and her mother look very similar.", w: "LIKE", s2: "Paola ___ her mother.", a: ["looks like", "looks very like", "looks just like", "looks a lot like"] },
          { s1: "My job is being a waiter in a hotel.", w: "AS", s2: "I ___ in a hotel.", a: ["work as a waiter"] },
          { s1: "Tell me about your new flat.", w: "LIKE", s2: "What ___?", a: ["is your new flat like", "'s your new flat like"] },
          { s1: "My car is older than yours.", w: "NOT", s2: "My car ___ yours.", a: ["is not as new as"] },
          { s1: "Their shoes are identical to mine.", w: "SAME", s2: "They have ___ me.", a: ["the same shoes as"] }
        ]}
      ]
    },
    {
      n: 14, title: "Uncountable nouns",
      rule: `<p>Some nouns are <b>uncountable</b> in English: they have no plural and we can't use <b>a / an</b> with them. The verb is singular.</p>
<ul><li><em>advice, information, news, luggage, furniture, equipment, research, knowledge, accommodation, damage, homework, software, stuff, weather, travel, scenery, work</em></li></ul>
<p>We can use <b>some</b>, <b>much</b>, <b>a lot of</b>, or <b>a piece of / a bit of</b> to talk about a single item:</p>
<ul><li><em>The news <b>is</b> good. · I need <b>some</b> equipment. · Let me give you <b>a piece of</b> advice.</em></li></ul>
<p>A few nouns are both: <em>a job</em> (countable) · <em>work</em> (uncountable); <em>experiences</em> (things that happened to you) · <em>experience</em> (knowledge from doing something).</p>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with the correct form of the verb in brackets.", it: "Il soggetto è numerabile o non numerabile? Metti il verbo nella forma corretta.", items: [
          { t: "The news ___ (be) really good today!", a: ["is"] },
          { t: "All the furniture in the flat ___ (be) brand new.", a: ["is"] },
          { t: "My jeans ___ (be) too short for me now.", a: ["are"] },
          { t: "The information on this website ___ (not / be) up to date.", a: ["isn't", "is not"] },
          { t: "Your advice ___ (be) always useful.", a: ["is"] },
          { t: "The people in my class ___ (be) very friendly.", a: ["are"] },
          { t: "The weather ___ (be) terrible last weekend.", a: ["was"] },
          { t: "My luggage ___ (weigh) more than 25 kilos.", a: ["weighs"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "Can you give me [an advice]?", a: ["some advice", "a piece of advice", "advice", "a bit of advice"] },
          { t: "I need [some informations] about the course.", a: ["some information"] },
          { t: "We bought [new furnitures] for the living room.", a: ["new furniture", "some new furniture"] },
          { t: "She is doing [a research] on climate change.", a: ["research", "some research"] },
          { t: "[How many luggages] have you got?", a: ["How much luggage"] },
          { t: "The storm caused [a lot of damages].", a: ["a lot of damage"] },
          { t: "I've got [a homework] to do tonight.", a: ["some homework", "homework"] },
          { t: "There [are] some good news for you.", a: ["is"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "Could you advise me?", w: "ADVICE", s2: "Could you ___?", a: ["give me some advice", "give me advice"] },
          { s1: "I've got two bags and a suitcase.", w: "LUGGAGE", s2: "I've got three ___.", a: ["pieces of luggage"] },
          { s1: "How many suitcases are you taking?", w: "MUCH", s2: "How ___ are you taking?", a: ["much luggage"] },
          { s1: "She told me two interesting facts.", w: "INFORMATION", s2: "She gave me two ___.", a: ["pieces of information", "interesting pieces of information"] },
          { s1: "Their house is full of tables, chairs and sofas.", w: "FURNITURE", s2: "Their house ___.", a: ["is full of furniture", "has a lot of furniture", "has lots of furniture"] }
        ]}
      ]
    },
    {
      n: 15, title: "good or well?",
      rule: `<p><b>good</b> is an adjective: it goes before a noun or after verbs like <em>be, look, sound, taste, smell</em>. <b>well</b> is an adverb: it goes after the verb.</p>
<ul><li><em>He's a <b>good</b> painter. · He paints <b>well</b>. · This bread smells <b>good</b>.</em></li></ul>
<p><b>well</b> can also be an adjective meaning 'healthy': <em>I don't feel very <b>well</b>.</em></p>
<p>We use <b>well</b> with some past participles: <em><b>well</b> paid, <b>well</b> known, <b>well</b> dressed, <b>well</b> organised</em>.</p>`,
      ex: [
        { type: "gap", rubric: "Complete the sentences with good or well.", it: "Good o well?", items: [
          { t: "She speaks English very ___.", a: ["well"] },
          { t: "That's a really ___ idea!", a: ["good"] },
          { t: "'How are you?' 'Not very ___. I've got a headache.'", a: ["well"] },
          { t: "This soup smells ___. What's in it?", a: ["good"] },
          { t: "He's a ___ driver: he never takes risks.", a: ["good", "very good"] },
          { t: "Their children are always ___ behaved.", a: ["well"] },
          { t: "She's a ___-known writer in Spain.", a: ["well"] },
          { t: "The concert was really ___.", a: ["good"] }
        ]},
        { type: "fix", rubric: FIX, it: FIX_IT, items: [
          { t: "He plays the piano really [good].", a: ["well"] },
          { t: "She's a [well] cook.", a: ["good"] },
          { t: "You did [good] in the exam!", a: ["well"] },
          { t: "The team played [good] but lost.", a: ["well"] },
          { t: "He's always very [good] dressed.", a: ["well"] },
          { t: "The pizza tastes [well].", a: ["good"] },
          { t: "Everything went [good] at the interview.", a: ["well"] },
          { t: "Her new job is very [good] paid.", a: ["well"] }
        ]},
        { type: "kwt", rubric: KWT, it: KWT_IT, items: [
          { s1: "Maria is an excellent swimmer.", w: "WELL", s2: "Maria ___.", a: ["swims very well", "swims really well", "swims extremely well"] },
          { s1: "He doesn't speak French very well.", w: "GOOD", s2: "He's not ___ French.", a: ["very good at", "good at", "good at speaking", "very good at speaking"] },
          { s1: "This hotel is famous.", w: "KNOWN", s2: "This hotel is ___.", a: ["well known", "very well known"] },
          { s1: "Lucia dances beautifully.", w: "DANCER", s2: "Lucia is ___.", a: ["a very good dancer", "a good dancer", "a beautiful dancer", "an excellent dancer", "a really good dancer"] },
          { s1: "I'm ill today.", w: "FEELING", s2: "I ___ today.", a: ["am not feeling well", "'m not feeling well", "am not feeling very well", "'m not feeling very well"] }
        ]}
      ]
    }
  ],
  test: {
    title: "Test 5",
    ex: [
      { type: "gap", rubric: "Complete each sentence with one suitable word.", it: "Una sola parola per spazio.", items: [
        { t: "My new flatmate is a bit ___ my brother: messy but funny.", a: ["like"] },
        { t: "In the summer she works ___ a tour guide.", a: ["as"] },
        { t: "Can I ask you for a ___ of advice?", a: ["piece", "bit"] },
        { t: "Your English is getting really ___!", a: ["good"] },
        { t: "He's not ___ tall as his father.", a: ["as", "so"] },
        { t: "I'm afraid the news ___ not good.", a: ["is"] },
        { t: "She did very ___ in her driving test.", a: ["well"] },
        { t: "We need ___ information about train times.", a: ["some", "more"] }
      ]},
      { type: "fix", rubric: FIX, it: FIX_IT, items: [
        { t: "I'd like [an information] about the timetable.", a: ["some information", "information"] },
        { t: "He looks [as] a film star in that suit.", a: ["like"] },
        { t: "You speak Italian very [good]!", a: ["well"] },
        { t: "My sister works [like] a lawyer in Rome.", a: ["as"] },
        { t: "We took [too many luggages] on holiday.", a: ["too much luggage"] },
        { t: "The meal was very [well].", a: ["good"] },
        { t: "The scenery in the Dolomites [are] amazing.", a: ["is"] },
        { t: "What's the weather [as] today?", a: ["like"] }
      ]},
      { type: "kwt", rubric: KWT, it: KWT_IT, items: [
        { s1: "Can you describe the new manager?", w: "LIKE", s2: "What ___?", a: ["is the new manager like", "'s the new manager like"] },
        { s1: "He's an excellent tennis player.", w: "WELL", s2: "He ___.", a: ["plays tennis very well", "plays tennis really well", "plays tennis extremely well"] },
        { s1: "Could you suggest where I should stay?", w: "ADVICE", s2: "Could you ___ where I should stay?", a: ["give me some advice on", "give me some advice about", "give me advice on", "give me advice about"] },
        { s1: "My sister's eyes and mine are very similar.", w: "LIKE", s2: "My sister's eyes ___ mine.", a: ["are like", "look like", "are just like", "are very like", "are a lot like"] },
        { s1: "She has done this kind of job before.", w: "EXPERIENCE", s2: "She ___ this kind of job.", a: ["has experience of", "has experience in", "has experience with", "'s got experience of", "has some experience of"] },
        { s1: "I want to find out about the course.", w: "INFORMATION", s2: "I'd like ___ about the course.", a: ["some information", "more information"] }
      ]}
    ]
  }
};
})();
