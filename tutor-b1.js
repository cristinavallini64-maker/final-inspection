/* Istruzioni del Writing Tutor B1 (caricate sempre fresche dalla pagina b1-preliminary.html).
   Modificando questo file le pagine usano subito le nuove istruzioni, senza aspettare la cache del sito. */
(function () {
const SCALES = {
  p2: `Scala Cambridge per il messaggio breve (punteggio da 0 a 5):
5 = tutti e tre i punti richiesti sono trattati in modo appropriato; il messaggio è chiaro per il lettore.
4 = tutti e tre i punti sono trattati in modo adeguato; nel complesso il messaggio arriva.
3 = tutti i punti sono tentati ma il lettore deve fare qualche sforzo, OPPURE manca un punto ma gli altri sono chiari.
2 = due punti mancano o non sono riusciti; il messaggio arriva solo in parte; OPPURE testo un po' corto (20–25 parole).
1 = poco contenuto pertinente, il lettore fa molta fatica, OPPURE testo molto corto (10–19 parole).
0 = contenuto del tutto non pertinente o incomprensibile, oppure meno di 10 parole.
Gli errori piccoli non tolgono punti se il messaggio è chiaro.
Sii rigoroso come un vero esaminatore Cambridge: per ogni punto richiesto controlla che risponda ESATTAMENTE alla consegna (informazione precisa, tempo verbale e funzione richiesti, per esempio un'intenzione futura se la consegna chiede cosa farà). Se un punto è vago, impreciso o risponde a una domanda diversa, è trattato solo in parte. Il 5 si dà solo se tutti i punti sono pienamente appropriati e il messaggio è chiarissimo; con un punto trattato solo in parte il massimo è 4. Un punto conta come presente SOLO se lo studente fa esplicitamente quello che la consegna chiede (es. "proporre un altro giorno" = deve proporre di vedersi e indicare quando). Non "salvare" un punto interpretando una frase che non lo esprime: in quel caso il punto MANCA e il voto massimo è 3. Superare un po' il numero di parole non toglie punti.`,
  p3: `Valuta la lettera / storia con QUATTRO punteggi separati, ciascuno da 1 a 5. Leggi le descrizioni con attenzione e non dare 4 o 5 se il testo non corrisponde davvero alla descrizione.

CHIAREZZA (quanto sforzo deve fare il lettore per capire il testo; nella griglia Cambridge: "effect on the target reader" / "effort required of the reader"):
5 = nessuno sforzo per il lettore · 4 = poco sforzo · 3 = qualche sforzo · 2 = sforzo notevole · 1 = difficile da capire.
Non si toglie punteggio se manca un dettaglio della consegna, basta che il testo sia pertinente.

LINGUA (varietà e ambizione di strutture e lessico — è il criterio più importante):
5 = sicura e ambiziosa: molte strutture diverse (subordinate, tempi verbali vari, frasi complesse), lessico ricco e non ripetuto.
4 = abbastanza ambiziosa: una buona varietà di strutture e lessico, qualche frase complessa.
3 = adeguata ma poco ambiziosa: soprattutto frasi semplici, alcune strutture ripetute ("I love… so I love…"), lessico quotidiano. Una o due frasi più complesse NON bastano per il 4.
2 = semplicistica e ripetitiva: quasi solo frasi brevi soggetto-verbo-complemento.
1 = molto limitata.

ORGANIZZAZIONE (ordine e collegamenti):
5 = ben organizzato, connettivi vari usati bene · 4 = organizzato con diversi collegamenti · 3 = qualche connettivo semplice (and, so, but, because, then) · 2 = frasi messe una dopo l'altra, quasi senza collegamenti · 1 = incoerente.

CORRETTEZZA:
5 = solo errori minori o nati da tentativi ambiziosi · 4 = alcuni errori che non ostacolano · 3 = diversi errori non gravi (ortografia, preposizioni, maiuscole) · 2 = molti errori di base (tempi, articoli, soggetto mancante) che a volte costringono a rileggere · 1 = errori continui.

Riferimenti reali Cambridge: una lettera sicura con frasi complesse varie, connettivi semplici e 2-3 errori minori = Lingua 5. Una lettera chiara ma con frasi semplici, strutture ripetute ("I love X so I love Y") e diversi errori di ortografia = Lingua 3, Correttezza 3. Una storia di frasi brevi in fila con errori di base frequenti = Lingua 2, Organizzazione 2, Correttezza 2.`
};
  function wtWords(s) { return s.trim() ? s.trim().split(/\s+/).length : 0; }

  /* banda della Part 3: la Lingua conta tre volte (è il criterio che decide nella griglia Cambridge),
     a metà strada si arrotonda per difetto, e la banda non può superare di più di 1 né Lingua né Correttezza */
  window.wtBand = function (res) {
    const all = res.textContent, mi = all.search(/MARK/i), t = mi >= 0 ? all.slice(mi) : all;
    const g = k => { const m = t.match(new RegExp(k + '\\s*:?\\s*(\\d)')); return m ? +m[1] : null; };
    const c = g('Chiarezza') ?? g('Effetto'), l = g('Lingua'), o = g('Organizzazione'), k = g('Correttezza');
    if ([c, l, o, k].some(x => x === null)) return;
    let band = Math.ceil((c + 3 * l + o + k) / 6 - 0.5);
    band = Math.max(0, Math.min(5, band, l + 1, k + 1));
    const div = document.createElement('div');
    div.className = 'wt-band';
    div.innerHTML = 'BANDA: <b>' + band + '/5</b>';
    const corr = [...res.querySelectorAll('h3')].find(x => /CORREZION/i.test(x.textContent));
    if (corr) res.insertBefore(div, corr); else res.appendChild(div);
  };
  window.WT = {
    version: '2 ott 17:40',
    SCALES,
    prompt(info, it, text, pts) {
      const WT_SCALES = SCALES;
  const prompt = `Sei un esaminatore ufficiale Cambridge B1 Preliminary (PET for Schools). Lo studente è un adolescente italiano di livello B1.
Rispondi in italiano, citando tra virgolette le frasi originali in inglese quando correggi.

Tipologia di task: ${info.name}
Lunghezza richiesta: ${info.target}. Il testo dello studente ha ${wtWords(text)} parole.
Consegna: ${it.task}
${pts ? 'Punti di contenuto obbligatori:\n- ' + pts.join('\n- ') : ''}

${WT_SCALES[info.scale]}

Rispondi SOLO con queste tre parti, come nei commenti d'esame Cambridge, in tutto al massimo 70 parole:
EXAMINER COMMENTS
${info.scale === 'p2' ? 'Una o due frasi in italiano: quali punti della consegna sono stati trattati bene e quale manca o è trattato solo in parte, e se il messaggio arriva al lettore.' : 'Una o due frasi in italiano sul testo nel suo insieme: effetto sul lettore, varietà e ambizione della lingua (con un esempio citato), connettivi e organizzazione, gravità degli errori.'}
${info.scale === 'p3' ? 'MARK: Chiarezza X · Lingua X · Organizzazione X · Correttezza X   (scrivi solo i quattro numeri, NON scrivere la banda finale: la calcola il programma)' : 'MARK: X/5'}
CORREZIONI
Al massimo 4 errori di grammatica o di lessico, una riga ciascuno nel formato: "frase sbagliata" → forma corretta.
Nient'altro: niente consigli, niente introduzioni, niente saluti. Non riscrivere il testo.

Testo dello studente:
"""
${text}
"""`;
      return prompt;
    }
  };
})();
