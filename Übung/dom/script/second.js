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



//adding , appendchild

let body = document.body; // #1
//let p = document.createElement("div"); // #4 element erstellen

body.append("Ohne Element"); // #2 Append erklaeren