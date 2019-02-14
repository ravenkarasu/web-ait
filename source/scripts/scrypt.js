/*
*init
*called when body loaded
*/
var direction = 0;
var step = 0;
var nb = 0;

function init() {
    document.getElementById("test").innerHTML = "init says hi";
}

function test_button() {
    document.getElementById("test").innerHTML = "<img src='https://www.coindusalarie.fr/sites/default/files/styles/grande-image/public/fichiers/documents-et-images/articles/Doigt%20d%27honneur.png?itok=BvsmIuuZ'/>";
}

setInterval("move_square()", 10);

function move_square() {

    if (direction == 0) {
        document.getElementById("cube").style.right = pas + "px"
        step += 3;
        if (step >= 500) {
            direction = 1;
        }

    }
    if (direction == 1) {
        document.getElementById("cube").style.right = pas + "px"
        step -= 3;
        if (step <= 0) {
            direction = 0;
            nb++;
        }
        if (nb >= 3) {
            direction = 2;
        }
    }
    if (direction == 3) { }

}

