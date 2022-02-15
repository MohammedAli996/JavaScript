var speler1 = "";


document.getElementById("h1").innerHTML = "Speler 1";

document.getElementById("b3").style.visibility = "visible";
document.getElementById("b2").style.visibility = "visible";
document.getElementById("b1").style.visibility = "visible";

document.getElementById("b4").style.visibility = "hidden";
document.getElementById("b5").style.visibility = "hidden";
document.getElementById("b6").style.visibility = "hidden";

function papier1() {
    document.getElementById("b3").style.visibility = "hidden";
    document.getElementById("b2").style.visibility = "hidden";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("b4").style.visibility = "visible";
    document.getElementById("b5").style.visibility = "visible";
    document.getElementById("b6").style.visibility = "visible";
    document.getElementById("h1").innerHTML = "Speler 2";
    speler1 = "papier";
}
function steen1() {
    document.getElementById("b2").style.visibility = "hidden";
    document.getElementById("b3").style.visibility = "hidden";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("b4").style.visibility = "visible";
    document.getElementById("b5").style.visibility = "visible";
    document.getElementById("b6").style.visibility = "visible";
    document.getElementById("h1").innerHTML = "Speler 2";
    speler1 = "steen";
}

function schaar1() {
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("b2").style.visibility = "hidden";
    document.getElementById("b3").style.visibility = "hidden";
    document.getElementById("b4").style.visibility = "visible";
    document.getElementById("b5").style.visibility = "visible";
    document.getElementById("b6").style.visibility = "visible";
    document.getElementById("h1").innerHTML = "Speler 2";
    speler1 = "schaar";
}

function papier2() {
    if (speler1 == "schaar") {
        document.getElementById("winnaar").innerHTML = "Speler 1 heeft gewonnen!";
    } else if (speler1 == "papier") {
        document.getElementById("winnaar").innerHTML = "Het is gelijkspel!";
    } else if (speler1 == "steen") {
        document.getElementById("winnaar").innerHTML = "Speler 2 Heeft gewonnen!";
    }
    document.getElementById("b3").style.visibility = "visible";
    document.getElementById("b2").style.visibility = "visible";
    document.getElementById("b1").style.visibility = "visible";
    document.getElementById("b4").style.visibility = "hidden";
    document.getElementById("b5").style.visibility = "hidden";
    document.getElementById("b6").style.visibility = "hidden";
    document.getElementById("h1").innerHTML = "Speler 1";
    const timeout = setTimeout(timeoutFunctie, 2000);
}
function steen2() {
    if (speler1 == "schaar") {
        document.getElementById("winnaar").innerHTML = "Speler 2 Heeft gewonnen!";
    } else if (speler1 == "papier") {
        document.getElementById("winnaar").innerHTML = "Speler 1 heeft gewonnen!";
    } else if (speler1 == "steen") {
        document.getElementById("winnaar").innerHTML = "Het is gelijkspe!l";
    }
    document.getElementById("b2").style.visibility = "visible";
    document.getElementById("b3").style.visibility = "visible";
    document.getElementById("b1").style.visibility = "visible";
    document.getElementById("b4").style.visibility = "hidden";
    document.getElementById("b5").style.visibility = "hidden";
    document.getElementById("b6").style.visibility = "hidden";
    document.getElementById("h1").innerHTML = "Speler 1";
    const timeout = setTimeout(timeoutFunctie, 2000);
}
function schaar2() {
    if (speler1 == "schaar") {
        document.getElementById("winnaar").innerHTML = "Het is gelijkspel!";
    } else if (speler1 == "papier") {
        document.getElementById("winnaar").innerHTML = "Speler 2 heeft gewonnen!";
    } else if (speler1 == "steen") {
        document.getElementById("winnaar").innerHTML = "Speler 1 heeft gewonnen!";
    }
    document.getElementById("b1").style.visibility = "visible";
    document.getElementById("b2").style.visibility = "visible";
    document.getElementById("b3").style.visibility = "visible";
    document.getElementById("b4").style.visibility = "hidden";
    document.getElementById("b5").style.visibility = "hidden";
    document.getElementById("b6").style.visibility = "hidden";
    document.getElementById("h1").innerHTML = "Speler 1";
    const timeout = setTimeout(timeoutFunctie, 2000);
}

function timeoutFunctie() {
    document.getElementById("winnaar").innerHTML = ("");
}
