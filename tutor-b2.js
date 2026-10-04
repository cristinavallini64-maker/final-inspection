/* =====================================================================
   Tutor di writing B2 First dentro i test (b2-first.html).
   Viene caricato sempre fresco (?v=...), quindi le modifiche qui
   arrivano subito agli studenti senza toccare la pagina.
   Usa lo stesso Worker del tutor B2 della pagina I.
   Criteri: scala ufficiale B2 First di oggi (4 criteri da 0 a 5, totale su 20).
   ===================================================================== */
window.WT = {
  version: '4 ott 2026 · scala ufficiale',
  SCALE: `SCALA UFFICIALE CAMBRIDGE B2 FIRST (ogni criterio da 0 a 5; 4 e 2 sono a metà tra le descrizioni):
CONTENT
5 = tutto il contenuto è pertinente; il lettore è pienamente informato.
3 = possono esserci piccole irrilevanze o omissioni; il lettore è nel complesso informato.
1 = irrilevanze o fraintendimento del compito; il lettore è informato solo in minima parte.
COMMUNICATIVE ACHIEVEMENT
5 = usa le convenzioni del tipo di testo in modo efficace per tenere l'attenzione del lettore e comunicare idee semplici e complesse.
3 = usa le convenzioni del tipo di testo per tenere l'attenzione del lettore e comunicare idee semplici.
1 = usa le convenzioni del tipo di testo in modo generalmente appropriato per comunicare idee semplici.
ORGANISATION
5 = testo ben organizzato e coerente, con una varietà di connettivi e schemi organizzativi usati con buon effetto.
3 = testo nel complesso ben organizzato e coerente, con vari connettivi e pochi altri elementi di coesione.
1 = testo collegato e coerente, con connettivi di base.
LANGUAGE
5 = lessico vario, anche meno comune, usato in modo appropriato; strutture semplici e complesse usate con controllo e flessibilità; errori occasionali che non ostacolano la comunicazione.
3 = lessico quotidiano vario usato in modo appropriato; strutture semplici e alcune complesse con buon controllo; gli errori non ostacolano la comunicazione.
1 = lessico quotidiano generalmente appropriato; strutture semplici con buon controllo; errori evidenti ma il significato si capisce.

TARATURA (come valutano i veri esaminatori Cambridge, da rispettare):
- 3 è la prestazione adeguata al livello B2, NON un voto basso. Un testo che tratta tutti i punti, è organizzato con connettivi semplici e ha diversi errori che però non ostacolano la comunicazione merita circa 3 in ogni criterio.
- Gli errori che non ostacolano la comunicazione sono normali a livello B2: da soli non portano Language sotto il 3 e non abbassano gli altri criteri.
- Un testo con tutti i punti trattati e sviluppati, ben organizzato, con buona varietà di strutture e lessico e pochi errori merita 4-5 in ogni criterio, anche se non è perfetto.
- Si scende sotto il 3 solo se manca un punto della consegna (Content), se gli errori rendono difficile capire (Language) o se il testo è disordinato (Organisation).

ESITO dal totale su 20: 17-20 = Distinction (Grade A) · 15-16 = Merit (Grade B) · 12-14 = Pass (Grade C) · 10-11 = vicino alla sufficienza (Level B1) · sotto 10 = non sufficiente.`,
  prompt(info, it, text, pts, words) {
    return `Sei un esaminatore ufficiale Cambridge B2 First (FCE). Lo studente è un adolescente italiano.
Rispondi in italiano, citando tra virgolette le frasi originali in inglese quando correggi.

Tipologia di task: ${info.name}
Lunghezza richiesta: ${info.target}. Il testo dello studente ha ${words} parole.
Consegna:
${it.task}
${pts ? '\nPunti di contenuto richiesti dalla consegna (per Content controlla che ci siano tutti):\n- ' + pts.join('\n- ') : ''}

${this.SCALE}

Dai i quattro punteggi seguendo ESATTAMENTE la scala e la taratura qui sopra, poi scrivi il totale su 20 e l'esito corrispondente.
Sii breve, lo studente deve poter leggere tutto in un minuto:
- una sola frase di motivazione per ogni criterio;
- al massimo 2 punti di forza;
- al massimo 5 correzioni di grammatica o lessico, una riga ciascuna: "frase sbagliata" -> correzione (spiegazione brevissima);
- nell'esito scrivi "Totale: X/20" e l'esito della tabella;
- niente introduzioni, niente saluti, non riscrivere il testo.

Testo dello studente:
"""
${text}
"""`;
  }
};
