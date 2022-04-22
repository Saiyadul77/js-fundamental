var ricePrice = 1120;
var polawPrice = 550;
var biranyPrice = 1320;
var kacchiPrice = 200;
var mybudget = 300;
var packwall = false;
if (ricePrice < mybudget)
    if (packwall == true) {
        console.log('Eaten rice');
    }
    else if (polawPrice < mybudget) {
        console.log('Eaten Polaw');
    }
    else if (biranyPrice < mybudget) {
        console.log('Eaten Birany');
    }
    else if (kacchiPrice < mybudget) {
        console.log('Eaten Kacchi');
    }
    else {
        console.log('Only drink water');
    }