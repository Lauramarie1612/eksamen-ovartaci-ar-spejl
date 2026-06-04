"use strict";

// Henter det gemte sprog fra Local Storage
const sprog = localStorage.getItem("sprog");
console.log("Valgt sprog:", sprog);

//Her opretter vi et array med objekter
//Hvert objekt repræsenterer en af Ovartacis identiteter

const identiteter = [
  {
    id: 1,
    Navn: "Louisa Pupparpasta",
    Kunster: "Ovartaci",
    Årstal: "1955",
    Beskrivelse:
      "I midten af 1950'erne skriver og sender Ovartaci et brev til Kirkeministeriet og Justitsministeriet, hvor han hævder, at hans fødenavn er Louisa Pupparpasta, og at han fremover ønsker at blive tiltalt som 'Frøken' og bruge det opfundne navn Ovartaci Pupparpasta. Han ønsker også tilladelse til at gå i kvindetøj. Retslægerådet bliver involveret i sagen og udarbejder en erklæring, der hovedsageligt fokuserer på spørgsmålet om kvindebeklædning. Rådet argumenterer for, at Marcussen lider af skizofreni, og at det er en del af hans sygdom, at han forestiller sig selv som en kvinde og ønsker at klæde sig som en, hvorfor han bør nægtes muligheden for at gøre det.",
    Billede: "/images/louisa.png",
    Link: "ar-view.html?id=1",
    Spørgsmål: "Hvordan har din identitet ændret sig gennem årene?",
  },

  {
    id: 2,
    Navn: "Buddhisten",
    Kunster: "Ovartaci",
    Årstal: "1954",
    Beskrivelse:
      "Religiøse spørgsmål optager Ovartaci, og selvom der synes at være en ret stabil kerne i hans religiøse verdenssyn, er der også nogle mærkelige afvigelser. Ovartaci hælder mod buddhismen ('Jeg er buddhist og tilhænger af den buddhistiske lære – den buddhistiske overbevisning'), og han går rundt med en lille Buddhafigur i lommen.",
    Billede: "/images/buddha.png",
    Link: "ar-view.html?id=2",
    Spørgsmål: "Hvilke labels har andre givet dig?",
  },

  {
    id: 3,
    Navn: "Fuglen i paradis",
    Kunster: "Ovartaci",
    Årstal: "1935",
    Beskrivelse:
      "Jeg begyndte som en paradisfugl, og under min flugt blev jeg til sidst forvandlet til en måge og ankom til Grønland, men det er mange år siden.",
    Billede: "/images/fuglen.png",
    Link: "ar-view.html?id=3",
    Spørgsmål: "Hvem bestemmer, hvem vi er?",
  },

  {
    id: 4,
    Navn: "Dragen",
    Kunster: "Ovartaci",
    Årstal: "1957",
    Beskrivelse:
      "Drager i Ovartacis kosmologi fungerede ikke som monstre, men som spirituelle symboler på lykke, værdighed, transformation og personlig frihed. Personlig frihed: En flugtvej og et sindbillede på at kunne bryde ud af psykiatriens fysiske og mentale rammer. Værdighed og styrke: Dragen stod for stolthed og livskvalitet. Transformation: En sjælelig forvandling, der ofte blev kædet sammen med genfødsel og kvindens psyke.",
    Billede: "/images/dragen.png",
    Link: "ar-view.html?id=4",
    Spørgsmål: "Hvordan har din identitet ændret sig gennem årene?",
  },

  {
    id: 5,
    Navn: "Tigeren",
    Kunster: "Ovartaci",
    Årstal: "1966",
    Beskrivelse:
      "'Det er et menneske i tigerskikkelse eller en tiger, der rejser sig på bagbenene, men se, den har jo tæer som mennesket og ikke som en tiger. Det er et menneske i tigerskikkelse. Jeg var selv tiger og blev forvandlet til menneske'. Sådan fortæller Ovartaci i samtalebogen 'Ovartaci - Pictures, Thoughts and Visions of an Artist'. Netop denne flydende tilstand mellem dyr og mennesker er kendetegnende for Ovartaci.",
    Billede: "/images/tigeren.png",
    Link: "ar-view.html?id=5",
    Spørgsmål: "Hvem bestemmer, hvem vi er?",
  },

  {
    id: 6,
    Navn: "Ovartaci",
    Kunster: "Ovartaci",
    Årstal: "1970",
    Beskrivelse:
      "Ovartaci blev født som Louis Marcussen og voksede op i en fattig familie i Jylland. Som ung mand arbejdede han blandt andet som malersvend og rejste også i en periode til Argentina, hvor han arbejdede under hårde forhold. Rejserne og oplevelserne gjorde stort indtryk på ham og blev senere en del af hans fantasiverden i kunsten. I sine yngre år levede han udadtil som mand og blev beskrevet som intelligent, kreativ og meget fantasifuld. Senere i livet ændrede hans forhold til køn og identitet sig markant. Han ønskede i lange perioder at leve som kvinde og skabte mange kvindelige figurer og selvfremstillinger i kunsten.",
    Billede: "/images/ovartaci.png",
    Link: "ar-view.html?id=6",
    Spørgsmål: "Hvilke labels har andre givet dig?",
  },
];

//Det er her alle identitets-kanpperne skal indsættes
//Her finder vi HTML-elementet med id="grid"
const grid = document.querySelector("#grid");

//Vi gennemgår arrayet "identiter" én identitet ad gangen
identiteter.forEach((identitet) => {
  //Opretter et nye <a>-element
  //<a> bruges fordi hele kortet skal fungere som et klikbart link
  const card = document.createElement("a");

  //Tilføjer CSS-klassen "identitet-card"
  //Klassen bruges til styling i CSS
  card.classList.add("identitet-card");

  card.href = identitet.Link;

  card.addEventListener("click", () => {
    localStorage.setItem("valgtIdentitet", identitet.id);
  });

  //Her indsætter vi HTML-indholdet inde i kortet
  //${} bruges til at hente data fra objektet
  card.innerHTML = `
  
    <div class="identitet-cirkel">

      <!-- Viser identitetens billede -->
      <img src="${identitet.Billede}" alt="${identitet.Navn}">
    </div>

    <!-- Viser identitetens navn -->
    <h2>${identitet.Navn}</h2>
  `;

  //Tilføjer det færdige kort til grid-containeren i HTML
  grid.appendChild(card);
});
