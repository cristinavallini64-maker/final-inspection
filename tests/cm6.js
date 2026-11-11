/* Common Mistakes B2 · Blocco 6 (unità 16–18 + Test 6) — frasi originali.
   Qui la correzione è "strict": maiuscole, apostrofi e virgole contano. */
window.TESTDATA = window.TESTDATA || {};
(function () {
const FIX = "Each sentence contains a mistake (underlined). Write the correct words.";
const STRICT_IT = "Attenzione: maiuscole, apostrofi e virgole contano.";
TESTDATA["cm6"] = {
  title: "Blocco 6 · Unità 16–18",
  units: [
    {
      n: 16, title: "When do I use an apostrophe?",
      rule: `<p>We use an apostrophe:</p>
<ul><li>in place of the missing letters in short forms: <em>they're = they are · it's = it is / it has · who's = who is / who has</em></li>
<li>for the possessive: <b>'s</b> after singular nouns, irregular plurals and names: <em>my aunt's car · the women's team · Giorgio's phone</em></li>
<li>after the <b>-s</b> of regular plurals: <em>my parents' friends</em> (two parents)</li></ul>
<p>We <b>don't</b> use an apostrophe:</p>
<ul><li>in possessive pronouns and adjectives: <em>its, hers, ours, yours, theirs, whose</em> → <em>The bird hurt <b>its</b> wing.</em></li>
<li>to make a normal plural: <em>two coffees</em> (not <s>coffee's</s>)</li></ul>`,
      ex: [
        { type: "fix", find: true, ok: [3, 7], strict: true, rubric: FIX, it: STRICT_IT, items: [
          { t: "Excuse me, where are the [mens] toilets?", a: ["men's"] },
          { t: "The dog is wagging [it's] tail.", a: ["its"] },
          { t: "[Whos] coming to the cinema tonight?", a: ["Who's"] },
          { t: "My [parents] car is red. They bought it together.", a: ["parents'"] },
          { t: "[Theyre] going to be late again.", a: ["They're"] },
          { t: "This is [Giulias] bike, not mine.", a: ["Giulia's"] },
          { t: "The [childrens] playground is closed today.", a: ["children's"] },
          { t: "I [cant] find my keys anywhere.", a: ["can't"] }
        ]},
        { type: "fix", find: true, ok: [0, 6], strict: true, rubric: FIX, it: STRICT_IT, items: [
          { t: "I bought three [apple's] and a melon.", a: ["apples"] },
          { t: "[Its] raining again!", a: ["It's"] },
          { t: "All the [students] names are on the list.", a: ["students'"] },
          { t: "[Whose] that man over there?", a: ["Who's"] },
          { t: "That scarf isn't mine. It's [her's].", a: ["hers"] },
          { t: "My only [sisters] best friend is called Lea.", a: ["sister's"] },
          { t: "We [dont] have any milk left.", a: ["don't"] },
          { t: "The company has changed [it's] logo.", a: ["its"] }
        ]},
        { type: "gap", strict: true, rubric: "Rewrite the phrases using a possessive with an apostrophe.", it: STRICT_IT, items: [
          { t: "the bedroom of my sister → my ___ bedroom", a: ["sister's"] },
          { t: "the shoes of the women → the ___ shoes", a: ["women's"] },
          { t: "the opinions of the teachers → the ___ opinions", a: ["teachers'"] },
          { t: "the house of Marco → ___ house", a: ["Marco's"] },
          { t: "the toys of the children → the ___ toys", a: ["children's"] },
          { t: "the office of the manager → the ___ office", a: ["manager's"] }
        ]}
      ]
    },
    {
      n: 17, title: "Capital letters and commas",
      rule: `<p>We use a <b>capital letter</b> for:</p>
<ul><li>languages and nationalities: <em>Polish, Brazilian</em></li>
<li>days, months, festivals and religions: <em>Tuesday, October, Ramadan, Christmas</em> — but <b>not</b> for seasons: <em>spring, autumn</em></li>
<li>names and titles of people, places, books and films: <em>Lake Garda, the University of Padua, Pride and Prejudice</em></li></ul>
<p>We use a <b>comma</b>:</p>
<ul><li>to separate words in a list (the comma before <em>and</em> is optional): <em>pens, pencils(,) and rulers</em></li>
<li>before <em>but, yet, while</em> joining two long clauses</li>
<li>after expressions at the beginning of a sentence: <em>Of course, … · In my opinion, … · First of all, … · However, …</em></li></ul>`,
      ex: [
        { type: "fix", find: true, strict: true, rubric: "Correct the underlined words: add capital letters where necessary, or remove them.", it: STRICT_IT, items: [
          { t: "We're going to [paris] for the weekend.", a: ["Paris"] },
          { t: "My birthday is in [april].", a: ["April"] },
          { t: "She speaks fluent [german].", a: ["German"] },
          { t: "Do you celebrate [easter] in your country?", a: ["Easter"] },
          { t: "I usually play tennis on [saturdays].", a: ["Saturdays"] },
          { t: "I love going to the mountains in [Winter].", a: ["winter"] },
          { t: "He studies at the [university of bologna].", a: ["University of Bologna"] },
          { t: "We spent a week in the [united states].", a: ["United States"] }
        ]},
        { type: "fix", find: true, ok: [2, 7], strict: true, rubric: "Rewrite the underlined words adding commas where necessary.", it: STRICT_IT, items: [
          { t: "For the cake we need [eggs flour sugar and] butter.", a: ["eggs, flour, sugar and", "eggs, flour, sugar, and"] },
          { t: "[In my opinion this] film is far too long.", a: ["In my opinion, this"] },
          { t: "I wanted to go to the [beach but it] was raining all day.", a: ["beach, but it"] },
          { t: "[First of all I'd] like to thank you all for coming.", a: ["First of all, I'd"] },
          { t: "[Of course you] can borrow my bike.", a: ["Of course, you"] },
          { t: "Last year I visited [Spain Portugal and] Greece.", a: ["Spain, Portugal and", "Spain, Portugal, and"] },
          { t: "We had planned everything. [However the] weather was terrible.", a: ["However, the"] },
          { t: "He was exhausted after the [trip yet he] kept on working.", a: ["trip, yet he"] }
        ]},
        { type: "fix", find: true, ok: [0, 3], strict: true, rubric: "Rewrite the underlined words with the correct capital letters and commas.", it: STRICT_IT, items: [
          { t: "[on monday] I'm going to the dentist.", a: ["On Monday"] },
          { t: "My favourite subjects are [english maths and] physics.", a: ["English, maths and", "English, maths, and"] },
          { t: "[in my opinion christmas] is the best time of the year.", a: ["In my opinion, Christmas"] },
          { t: "She was born in [dublin in june] 2008.", a: ["Dublin in June"] },
          { t: "[first of all we] need a plan.", a: ["First of all, we"] },
          { t: "They travelled to [france spain and italy] last summer.", a: ["France, Spain and Italy", "France, Spain, and Italy"] }
        ]}
      ]
    },
    {
      n: 18, title: "Common spelling mistakes",
      rule: `<p>When a word ends in <b>one vowel + one consonant</b>, we usually double the consonant before <b>-ing, -ed, -er, -est</b>: <em>sit → sitting · fat → fatter</em>.</p>
<p>With words of two or more syllables, we double it if the last syllable is stressed (<em>refer → referred</em>). In British English we also double final <b>-l</b>: <em>cancel → cancelled</em>.</p>
<p>Adjectives ending in <b>-ful</b> have only one <b>l</b>: <em>helpful, peaceful</em>.</p>
<p>In British English <b>practise</b> is the verb and <b>practice</b> is the noun; <b>centre</b>, not <s>center</s>.</p>
<p>Words that are often misspelt: <em>accommodation, advertisement, because, beginning, bicycle, comfortable, definitely, different, disappointing, environment, government, grateful, really, which</em>.</p>`,
      ex: [
        { type: "fix", strict: true, rubric: "Correct the spelling of the underlined words.", it: "Scrivi la parola con l'ortografia corretta (inglese britannico).", items: [
          { t: "I'm looking for cheap [accomodation] in Oxford.", a: ["accommodation"] },
          { t: "She was very [dissapointed] with her mark.", a: ["disappointed"] },
          { t: "We will [definately] come to your party.", a: ["definitely"] },
          { t: "We must all protect the [enviroment].", a: ["environment"] },
          { t: "What a [beautifull] day!", a: ["beautiful"] },
          { t: "They're [traveling] to Japan next month.", a: ["travelling"] },
          { t: "I saw an [advertisment] for the job in the paper.", a: ["advertisement"] },
          { t: "The film was [realy] good.", a: ["really"] }
        ]},
        { type: "gap", strict: true, rubric: "Complete the sentences with the correct form of the words in brackets.", it: "Attenzione al raddoppio delle consonanti.", items: [
          { t: "We're ___ (shop) for a new sofa.", a: ["shopping"] },
          { t: "In the end I ___ (prefer) the first hotel we saw.", a: ["preferred"] },
          { t: "This box is ___ (big) than that one.", a: ["bigger"] },
          { t: "She's ___ (run) a marathon next month.", a: ["running"] },
          { t: "Yesterday was the ___ (hot) day of the year.", a: ["hottest"] },
          { t: "They ___ (stop) the car and got out.", a: ["stopped"] },
          { t: "He's ___ (begin) to understand the problem.", a: ["beginning"] },
          { t: "Be ___ (care)! The floor is wet.", a: ["careful"] }
        ]},
        { type: "fix", strict: true, rubric: "Correct the spelling of the underlined words.", it: "Scrivi la parola con l'ortografia corretta (inglese britannico).", items: [
          { t: "Let's meet in the city [center].", a: ["centre"] },
          { t: "I need to [practice] my English more.", a: ["practise"] },
          { t: "Is this chair [confortable]?", a: ["comfortable"] },
          { t: "[Wich] bus goes to the station?", a: ["Which"] },
          { t: "I'm very [greatful] for your help.", a: ["grateful"] },
          { t: "He came to school by [bycicle].", a: ["bicycle"] },
          { t: "The [goverment] has announced new taxes.", a: ["government"] },
          { t: "Thank you for your [usefull] advice.", a: ["useful"] }
        ]}
      ]
    }
  ],
  test: {
    title: "Test 6",
    ex: [
      { type: "fix", find: true, strict: true, rubric: "Read Lisa's email. Each sentence contains a mistake (underlined). Write the correct words.", it: STRICT_IT, items: [
        { t: "Dear Anna, thank you for the [wonderfull] party on Saturday.", a: ["wonderful"] },
        { t: "[Its] the best party I've been to this year.", a: ["It's"] },
        { t: "My two [friends] names are Leo and Sam, by the way.", a: ["friends'"] },
        { t: "On Sunday we drove to [verona] to see the Arena.", a: ["Verona"] },
        { t: "The [accomodation] was perfect and very cheap.", a: ["accommodation"] },
        { t: "We had a great time. [however the] traffic was awful.", a: ["However, the"] },
        { t: "The [childrens] room was a bit small, though.", a: ["children's"] },
        { t: "I'll [definitly] come and visit you again soon.", a: ["definitely"] }
      ]},
      { type: "gap", strict: true, rubric: "Complete the sentences with the correct form of the words in brackets.", it: STRICT_IT, items: [
        { t: "the bags of the tourists → the ___ bags", a: ["tourists'"] },
        { t: "We saw your ___ (advertise) in the newspaper.", a: ["advertisement"] },
        { t: "I'm ___ (plan) a trip to Wales.", a: ["planning"] },
        { t: "the bike of my brother → my ___ bike", a: ["brother's"] },
        { t: "It was the ___ (sad) film I've ever seen.", a: ["saddest"] },
        { t: "We ___ (travel) round Ireland last year.", a: ["travelled"] }
      ]},
      { type: "fix", find: true, strict: true, rubric: FIX, it: STRICT_IT, items: [
        { t: "At school I study [french and spanish].", a: ["French and Spanish"] },
        { t: "We need [bread milk cheese and] eggs.", a: ["bread, milk, cheese and", "bread, milk, cheese, and"] },
        { t: "The cat hasn't touched [it's] dinner.", a: ["its"] },
        { t: "[Whos] responsible for this mess?", a: ["Who's"] },
        { t: "The weather was [realy] bad all week.", a: ["really"] },
        { t: "I [cant] remember his name.", a: ["can't"] }
      ]}
    ]
  }
};
})();
