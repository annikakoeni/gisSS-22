

const timer: HTMLElement = document.querySelector("#timer");
const button: HTMLElement = document.querySelector("#startbutton");
const karten = document.querySelectorAll(".memorykarten");
var containerkarten: HTMLElement = document.getElementById("memorygame");
var karten3 = document.getElementsByClassName("memorykarten").length;
const kart4 = document.getElementsByClassName("backface");
var backfacesource: string = "Medien/back.jpg";
var frontfacesource: string[] = ["Medien/bild1.jpg", "Medien/bild2.jpg", "Medien/bild3.jpg", "Medien/bild4.png", "Medien/bild5.jpg", "Medien/bild6.jpg", "Medien/bild7.jpg", "Medien/bild8.jpg"];
var bilderArray: HTMLImageElement[] = [];
var idindex: number = 0;


function kartenVerwalten() {
    let newImg: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    newImg.src = backfacesource;
    newImg.id = idindex.toString();
    newImg.classList.add("memorykarte");    //bilder in class memorykarte
    bilderArray.push(newImg);
    idindex++;
    containerkarten.appendChild(newImg);
    if (idindex < 8) {
        kartenVerwalten();      //rekursion, erstellt 8 karten, hört danach auf


    }
    newImg.addEventListener("click", function (): void {
            newImg.src = frontfacesource[parseFloat(newImg.id)];
        });

    }


document.getElementById("memorygame").addEventListener("click", function () {
        alert(karten3);

    });

    document.getElementsByTagName("div");

    // kard.addEventListener("click", function (): void {
    //     kard.classList.toggle("flip");

    // })

    // function karteUmdrehen() {
    //     console.log("Penis");


    // }

    // karten.forEach(karten => {
    //     karten.addEventListener("click", karteUmdrehen);
    // });




    var timerLauft: boolean = false;
    var seconds: number = 0;
    var minutes: number = 0;
    var startbutton: boolean = true;


    button.addEventListener("click", function (): void {        //Funktion innerhalb event listener
        if (startbutton == true) {
            timerLauft = true;
            timerZählt();
            console.log("hallo");
            for (var i: number = 1; i <= 2; i++) {
                kartenVerwalten();
                idindex = 0;            //nach erstem durchlauf (8karten), 2. durchlauf, muss auf null gesetzt werden

            }
            startbutton = false;
        }



    });

    function timerZählt(): void {
        setTimeout(() => {      //timer stoppt eine sekunde nach ausführung
            seconds++;
            if (seconds >= 60) {          //sekunden in minuten
                seconds = 0;
                minutes++;
            }
            timerText();            //verändert anzeigezeit
            if (timerLauft)
                timerZählt(); //Rekursion, funktion wird nochmal aufgerufen
        }, 1000);


    }
    function timerText(): void {
        if (seconds < 10)
            timer.innerHTML = minutes.toString() + ":0" + seconds.toString();     // bei z.b. 5 sek wird eine null benötigt
        if (seconds >= 10 && seconds < 60)
            timer.innerHTML = minutes.toString() + ":" + seconds.toString();          // ab 10 wird keine null mhr benötigt

    }
    var karteUmdrehenbool: boolean = false;
    var kartevar = [
        1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8
    ];

    function zufälligeKarten(): void {
        Math.floor(Math.random() * 17);

    }

// addEventListener("onclick", function(karteUmdrehen) {
//     document.querySelector("karten").getAttribute("class");
//     // button.addEventListener("click", handleClick);
// }


// const button = document.querySelector("button");
// button.addEventListener("click", handleClick);

// function handleClick() {
//     console.log("Clicked!");
//     karten.removeEventListener("click", handleClick);
// }

// function kartenVergleichen(): void {
//         var karte1 = 0;
//         var karte2 = 1;
//         if (karten[karte1] == karten[karte2]) {
//             //bilder identisch

//         }
//         else {
//             //bilder nicht identisch
//         }

//         //   if (click == true)
//         //     document.getElementById("bild1").
//     }
