"use strict";

// Henter det gemte sprog fra Local Storage
const sprog = localStorage.getItem("sprog");
console.log("Selected language:", sprog);

//Her opretter vi et array med objekter på engelsk
//Hvert objekt repræsenterer en af Ovartacis identiteter

const identities = [
  {
    id: 1,
    Name: "Louisa Pupparpasta",
    Artist: "Ovartaci",
    Year: "",
    Description:"In the mid-1950s, Ovartaci wrote and sent a letter to the Ministry of Ecclesiastical Affairs and the Ministry of Justice, claiming that his birth name was Louisa Pupparpasta and that he wished to be addressed as 'Miss' and use the invented name Ovartaci Pupparpasta. He also requested permission to wear women's clothing.",
    Image: "/images/louisa.png",
    Link: "ar-view-eng.html?id=1",
  },

  {
    id: 2,
    Name: "The Buddhist",
    Artist: "Ovartaci",
    Year: "",
    Description:"Religious questions fascinated Ovartaci, and he leaned towards Buddhism. He often carried a small Buddha figure in his pocket.",
    Image: "/images/buddha.png",
    Link: "ar-view-eng.html?id=2",
  },

  {
    id: 3,
    Name: "Bird of Paradise",
    Artist: "Ovartaci",
    Year: "",
    Description:"I began as a bird of paradise, and during my flight I was eventually transformed into a seagull and arrived in Greenland many years ago.",
    Image: "/images/fuglen.png",
    Link: "ar-view-eng.html?id=3",
  },

  {
    id: 4,
    Name: "The Dragon",
    Artist: "Ovartaci",
    Year: "",
    Description:"In Ovartaci's cosmology, dragons were not monsters but spiritual symbols of happiness, dignity, transformation, and personal freedom.",
    Image: "/images/dragen.png",
    Link: "ar-view-eng.html?id=4",
  },

  {
    id: 5,
    Name: "The Tiger",
    Artist: "Ovartaci",
    Year: "",
    Description:"It is a human in the shape of a tiger or a tiger standing on its hind legs. I myself was once a tiger and transformed into a human.",
    Image: "/images/tigeren.png",
    Link: "ar-view-eng.html?id=5",
  },

  {
    id: 6,
    Name: "Ovartaci",
    Artist: "Ovartaci",
    Year: "",
    Description:"Ovartaci was born as Louis Marcussen and grew up in a poor family in Jutland. Later in life, his relationship with gender and identity changed significantly.",
    Image: "/images/ovartaci.png",
    Link: "ar-view-eng.html?id=6",
  },
];

// This is where all identity cards will be inserted
const grid = document.querySelector("#grid");

// Loop through all identities one at a time
identities.forEach((identity) => {
  // Create a new clickable link element
  const card = document.createElement("a");

  // Add CSS class for styling
  card.classList.add("identitet-card");

  // Make the card clickable
  card.href = identity.Link;
  
  // Save the selected identity in Local Storage
  card.addEventListener("click", () => {
    localStorage.setItem("valgtIdentitet", identity.id);
  });

  // Insert HTML content inside the card
  card.innerHTML = `

    <div class="identitet-cirkel">

      <img src="${identity.Image}" alt="${identity.Name}">

    </div>

    <h2>${identity.Name}</h2>

  `;

  // Add the finished card to the grid
  grid.appendChild(card);
});
