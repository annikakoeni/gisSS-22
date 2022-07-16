console.log("5");
const ls = ["test1", "test2", "test3"]; //array
console.log(ls);
console.log(ls[1]); //wert aus array auslesen

function firstFunction (){

    console.log("doesthatwork")

}
firstFunction();


function secondfunction (input){
    let beispiel = input;
    console.log(beispiel);

}
secondfunction("blabla");
secondfunction ("hallo")



function addtoNumber (x, y){
    let resold = x +y;
    return resold;
}
console.log(addtoNumber (2, 8));


let Flobody = document.body; // #1
//let p = document.createElement("div"); // #4 element erstellen

Flobody.append("Ohne Element"); // #2 Append erklaeren

//adding , appendchild

//let body = document.body; // #1
//let p = document.createElement("div"); // #4 element erstellen

//body.append("Ohne Element"); // #2 Append erklaeren
//body.appendChild(p)
//c = body.getElements("p");
//console.log(c)
//p.textContent = "Mit Element"

//document.append()

//let body = document.body; // #1
//let p = document.createElement("div"); // #4 element erstellen

//body.append("Ohne Element"); // #2 Append erklaeren

let pimmel = document.getElementsByTagName("div");
pimmel[1].textContent = "Hier steht doch was!"

let body = document.body; 

body.append("Ohne Element");

let div = document.createElement("div");

div.textContent = "Mit Element";
body.appendChild(div); //geht nur mit Elementen

//changing 

let divs = document.getElementsByTagName("div");
console.log(divs)
divs[0].className = "infoBox";

// getting any element

let testID = document.getElementById("testId");
let pElements = testId.getElementsByTagName("p");
let secondElement = pElements[1];

function logElemenets() {
    console.log(body);
    console.log(testId);
    console.log(pElements);
    pElements[0].className = "infoBox";
}

// Vererbung in der DOM
//Appending
let newElement = document.createElement("p");
newElement.textContent = "blabla"
body.appendChild(newElement);

let search = document.getElementsByTagName ("p");
console.log(search);
let stelle = search[5];


body.insertBefore(newElement, stelle);

//

let texttausch = document.getElementsByTagName ("h3");
texttausch[0].textContent = "nööö"
body.appendChild(texttausch[0]);
console.log(texttausch);


//klonen

let newElement2 = newElement.cloneNode(true);
body.appendChild (newElement2);
newElement2.textContent = "yeees"


//Evetlistener

let katze = document.createElement ("p");
katze.textContent = "gato";
body.appendChild (katze);

katze.addEventListener("click", pushed);


function pushed() {

    if (katze.textContent === "gato"){
        katze.textContent = "Push me!";
    }
    else {
        katze.textContent = "neko!";
    }
}

let getInfobox = document.createElement ("h3");
getInfobox.textContent ="miau"
body.appendChild (getInfobox);
getInfobox.addEventListener ("click", gibBox);


let getInfobox2 = document.createElement ("h3");
getInfobox2.textContent ="wuff"
body.appendChild (getInfobox2);
getInfobox2.addEventListener ("click", gibBox)

function gibBox (event){
    event.currentTarget.className = "infoBox"


}


//up down
var number = 0;

let counter = document.createElement ("h2");
body.appendChild (counter);
counter.textContent = 0;

let buttonup = document.createElement ("button");
body.appendChild (buttonup);
buttonup.textContent = "Up";
buttonup.addEventListener ("click", upDown);

let buttondown = document.createElement ("button");
body.appendChild (buttondown);
buttondown.textContent = "Down"
buttondown.addEventListener ("click", upDown);



function upDown (event){
    if(event.currentTarget.textContent === "Up"){
        ++number;
        counter.textContent = number;


    }
    else {
    --number;
    counter.textContent = number;

    }

}