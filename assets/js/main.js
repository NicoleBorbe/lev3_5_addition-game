let zahl1 = document.getElementById("zahl1");
let zahl2 = document.getAnimations("zahl2");
let ergebnis = document.getElementById("ergebnis");
let feedback = document.getElementById("h2");

zahl1 = Math.floor(Math.random() * 100 + 1);
zahl2 = Math.floor(Math.random() * 100 + 1);
let ergebnisIntern = zahl1 + zahl2;

console.log(zahl1 + " + " + zahl2 + " = " + ergebnisIntern);
document.getElementById("zahl1").innerHTML = zahl1;
document.getElementById("zahl2").innerHTML = zahl2;

function send() {
    if (ergebnis.value == ergebnisIntern) {
        document.getElementById("feedback").style.color = "lightgreen";
        document.getElementById("feedback").innerHTML = "Das stimmt!";
        console.log("Das stimmt!");
    } else {
        document.getElementById("feedback").style.color = "red";
        document.getElementById("feedback").innerHTML = "Das ist leider falsch!";
        console.log("Das ist leider falsch!");
    }
}

