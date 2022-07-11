var myName = "Annika";
console.log (myName);
var a = 7;
var b = 13;
var c = 8;
var ergebnis = a + b;
console.log (ergebnis);
a +=a;
console.log (a);
console.log(Math.pow(c, 2));
var d = 41;
if(0===d % 2){
    console.log("The Number is even");
}
else {
    console.log("The Number is odd");
}
var i =1;
while (i<5){
    console.log (i);
    i++;

}
var zufall = Math.random();
console.log (zufall);

var inputfeld = "";
inputfeld = prompt("Gib rot oder schwarz ein", "rot");
console.log (inputfeld);

if(zufall<0.5 && inputfeld === "schwarz"){
    console.log ("Amazing! That was right.");

}
else if(zufall>0.5 && inputfeld === "rot"){
    console.log ("Right!");

}
else {console.log ("Nooo! Wroong.")}





var score = 0;
var zufall = "";
var inputfeld = "";

while (score >= 0){
    zufall = Math.random();
    
    console.log (zufall);

    inputfeld = prompt("Gib rot oder schwarz ein", "rot");
    console.log (inputfeld);
    
    if(zufall<0.5 && inputfeld === "schwarz"){
        console.log ("Amazing! That was right.");
        score++;
    }
    else if(zufall>0.5 && inputfeld === "rot"){
        console.log ("Right!");
        score++;
    }
    else {console.log ("Nooo! Wroong.")
    score = -7;
    }
    console.log ("Your score:" + score);
    
}


for (number = 5; number <= 10; number++) {
    console.log (number);
}





