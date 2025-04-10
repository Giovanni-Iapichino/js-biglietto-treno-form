//todo Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero
//todo Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//* - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//* - va applicato uno sconto del 20% per i minorenni
//* - va applicato uno sconto del 40% per gli over 65.
//! MILESTONE 1:
//? Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
//! MILESTONE 2:
//? Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//! MILESTONE 3:
//? Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
//Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

//todo FORM ELEMENT
const inputNameEl = document.querySelector("#full-name");
const inputKmEl = document.querySelector("#km-to-travel");
const inputAge = document.querySelector("#age");
const generateTicketButtonEl = document.getElementById("generate-button");
const deleteButton = document.getElementById("delete-button");
const generateTicketFormEl = document.getElementById("generate-ticket-form");
const priceForKm = 0.21;
let ticketFinalPrice = 0;

console.log("Nome e Cognome: ", inputNameEl.value);
console.log("Km da percorrere: ", inputKmEl.value);
console.log("Età :", inputAge.value);

//todo CARD ELEMENT
const nameCardEl = document.querySelector("#name-card .card-body");
const ageCardEl = document.querySelector("#age-card .card-body");
const priceCardEl = document.querySelector("#price-card .card-body");

generateTicketFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = inputNameEl.value;
  const kmToTravel = parseInt(inputKmEl.value);
  const age = inputAge.value;
  const ticketFullPrice = priceForKm * kmToTravel;

  let validData = false;
  if (!fullName || !isNaN(fullName)) validData = true;
  if (!kmToTravel || isNaN(kmToTravel)) validData = true;

  if (age === "1") {
    ticketFinalPrice = (ticketFullPrice - (ticketFullPrice * 20) / 100).toFixed(
      2
    );
  }
  if (age === "3") {
    ticketFinalPrice = (ticketFullPrice - (ticketFullPrice * 40) / 100).toFixed(
      2
    );
  }
  if (age === "2") {
    ticketFinalPrice = ticketFullPrice.toFixed(2);
  }

  console.log("Biglietto generato");
  console.log("Nome: ", fullName);
  console.log("Fascia d'età: ", age);
  console.log("Km percorsi: ", kmToTravel);
  console.log("Prezzo Finale: €", ticketFinalPrice);

  nameCardEl.innerText = `${"Nome e Cognome: "} ${fullName}`;
  ageCardEl.innerText = `${"Fascia d'età: "} ${age}`;
  priceCardEl.innerText = `${"Prezzo finale: €"} ${ticketFinalPrice}`;
});
