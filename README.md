# eksamen-exd

# Ovartaci AR Mirror

**Multimediedesign**
**Udvikler:** Benedicte, clara, Emilia og Laura (2026)

Dette projekt er udviklet som en digital prototype inspireret af Ovartacis identiteter og kunstneriske univers. Formålet med løsningen er at skabe en interaktiv AR-/LED-spejloplevelse, hvor brugeren kan udforske forskellige identiteter gennem et visuelt og immersivt interface.

Projektet er udviklet i HTML, CSS og JavaScript.

# Projekt struktur


Indsæt billede 


project/
│
├── .vscode/
│ └── settings.json
│
├── css/
│ └── style.css
│
├── html/
│ ├── index.html
│ ├── index-eng.html
│ ├── ovartaci.html
│ ├── ovartaci-eng.html
│ ├── kvinden.html
│ ├── kvinden-eng.html
│ ├── dragen.html
│ ├── dragen-eng.html
│ ├── fuglen.html
│ ├── fuglen-eng.html
│ ├── tiger.html
│ └── tiger-eng.html
│
├── images/
│
├── js/
│ └── ovartaci-ar-spejl.js
│
└── README.md

- HTML-mappen indeholder projektets sider.
- CSS-mappen indeholder styling og animationer.
- JavaScript-mappen indeholder dynamisk funktionalitet.
- Images-mappen indeholder billeder og videoelementer.

## Navngivningskonventioner

Projektet anvender konsistente filnavne for at skabe struktur og overskuelighed.

Danske og engelske versioner af siderne adskilles gennem suffixet "-eng".

Eksempler:

- dragen.html
- dragen-eng.html

JavaScript-variabler og funktioner navngives med camelCase, mens CSS-klasser navngives med kebab-case.

## Navngivning af variabler og funktioner

Der er anvendt korte variabelnavne for at gøre koden mere læsbar og overskuelig.

Eksempler:

- identiteter → array med alle identitetsobjekter
- identitet → repræsenterer ét objekt ad gangen
- grid → HTML-container til identitetskort
- card → dynamisk oprettet identitetskort
Sprog

CSS-klasser er navngivet på engelsk for at skabe en ensartet struktur mellem HTML, CSS og JavaScript.

Eksempler:

- mirror-frame
- mirror-led
- start-btn
- language-selector

## Centrale valg i udviklingen

Et centralt valg i udviklingen var at skabe en futuristisk og interaktiv brugeroplevelse inspireret af et LED-/AR-spejl.

Derfor blev følgende designvalg truffet:

- mørkt interface
- neon/LED glow-effekter
- video-baggrund
- glassmorphism-effekter
- store klikbare elementer
- minimalistisk navigation

Der blev desuden valgt at generere identitetskort dynamisk med JavaScript fremfor statisk HTML. Dette gør løsningen mere fleksibel og lettere at udvide.

## ORCA-tabel og datastruktur

Projektets indhold er organiseret ud fra en ORCA-struktur, hvor identiteterne er opbygget som objekter i et JavaScript-array.

Eksempel på datastruktur:

const identiteter = [
{
id: 1,
Navn: "Louisa Pupparpasta",
Beskrivelse: "...",
Billede: "/images/louisa.png",
Link: "ar-view.html?id=1"
}
]

Denne struktur gør det muligt dynamisk at generere indhold på siden samt hente information ud fra brugerens valg.

## Anvendelse af localStorage

I projektet har vi anvendt Local Storage til at gemme brugerens valg direkte i browseren.

Gemme valgt sprog:

Når brugeren vælger mellem dansk og engelsk på forsiden, gemmes sproget i Local Storage ved hjælp af:
localStorage.setItem("sprog", language);
På den måde husker browseren, hvilket sprog brugeren har valgt.

Hente gemt sprog:

På de efterfølgende sider hentes det gemte sprog igen med:
const sprog = localStorage.getItem("sprog");
Dette gør det muligt at se, hvilket sprog der tidligere er blevet valgt.

## Anvendte JavaScript-teknologier

Følgende JavaScript-teknologier er anvendt i projektet:

- Arrays
- Objekter
- forEach-loops
- DOM manipulation
- Event listeners
- localStorage
- emplate literals
- Dynamisk HTML-generering

Disse teknologier bruges til at skabe interaktivitet og dynamisk indhold.

## Konklusion

Projektet kombinerer HTML, CSS og JavaScript i en interaktiv prototype med fokus på brugeroplevelse, identitet og digital formidling. Der er arbejdet med både æstetik, funktionalitet og dynamisk indhold for at skabe en immersiv oplevelse inspireret af Ovartacis univers.
