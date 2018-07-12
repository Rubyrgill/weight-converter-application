
//FUNCTIONS

//Grabbing the input id, and adding eventlistener
document.getElementById("lbs").addEventListener('input', function () {

    //creating a variable to store the value entered in input
    var pounds = event.target.value;
    //calculating conversation and displaying in HTML
    //GRAMS
    document.getElementById("gramsOut").innerHTML =
        pounds / 0.0022046;
    //KILOGRAMS
    document.getElementById("kgOut").innerHTML =
        pounds / 2.2046;
    //OUNCES
    document.getElementById("ounceOut").innerHTML =
        pounds * 16;
})

