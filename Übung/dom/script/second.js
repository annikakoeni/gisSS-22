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



