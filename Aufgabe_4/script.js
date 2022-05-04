"use strict";
const timer = document.querySelector("#timer");
const button = document.querySelector("#startbutton");
const karten = document.querySelectorAll(".memorykarten");
var containerkarten = document.getElementById("memorygame");
var karten3 = document.getElementsByClassName("memorykarten").length;
const kart4 = document.getElementsByClassName("background");
var backfacesource = "Pictures/background.jpg";
var frontfacesource = ["Pictures/catbw.jpg", "Pictures/catfluffy.jpg", "Pictures/catgrumpy.jpg", "Pictures/cathand.jpg", "Pictures/catnos.jpg", "Pictures/catotongue.jpg", "Pictures/catsleepy.jpg", "Pictures/catstreet.jpg"];
var bilderArray = [];
var idindex = 0;
function kartenVerwalten() {
    let newImg = document.createElement("img");
    newImg.src = backfacesource;
    newImg.id = idindex.toString();
    newImg.classList.add("memorykarte"); //bilder in class memorykarte
    bilderArray.push(newImg);
    idindex++;
    containerkarten.appendChild(newImg);
    if (idindex < 8) {
        kartenVerwalten(); //rekursion, erstellt 8 karten, hört danach auf
    }
    newImg.addEventListener("click", function () {
        newImg.src = frontfacesource[parseFloat(newImg.id)];
    });
}
document.getElementById("memorygame").addEventListener("click", function () {
    alert(karten3);
});
document.getElementsByTagName("div");
 kard.addEventListener("click", function (): void {
     kard.classList.toggle("flip");
 })
 function karteUmdrehen() {
     console.log("nö");
 }
 karten.forEach(karten => {
     karten.addEventListener("click", karteUmdrehen);
 });
var timerLauft = false;
var seconds = 0;
var minutes = 0;
var startbutton = true;
button.addEventListener("click", function () {
    if (startbutton == true) {
        timerLauft = true;
        timerZählt();
        console.log("hallo");
        for (var i = 1; i <= 2; i++) {
            kartenVerwalten();
            idindex = 0; //nach erstem durchlauf (8karten), 2. durchlauf, muss auf null gesetzt werden
        }
        startbutton = false;
    }
});
function timerZählt() {
    setTimeout(() => {
        seconds++;
        if (seconds >= 60) { //sekunden in minuten
            seconds = 0;
            minutes++;
        }
        timerText(); //verändert anzeigezeit
        if (timerLauft)
            timerZählt(); //Rekursion, funktion wird nochmal aufgerufen
    }, 1000);
}
function timerText() {
    if (seconds < 10)
        timer.innerHTML = minutes.toString() + ":0" + seconds.toString(); // bei z.b. 5 sek wird eine null benötigt
    if (seconds >= 10 && seconds < 60)
        timer.innerHTML = minutes.toString() + ":" + seconds.toString(); // ab 10 wird keine null mhr benötigt
}
var karteUmdrehenbool = false;
var kartevar = [
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8
];
function zufälligeKarten() {
    Math.floor(Math.random() * 17);
}