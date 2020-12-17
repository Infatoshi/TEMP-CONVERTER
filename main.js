
document.getElementById("inputbutton").addEventListener('click', calculate);
let ansOutEl = document.getElementById('RadiusOutput');




// used to find volume of a cube given one of the sides



function calculate() {
    let radiusValue = +document.getElementById('enterRadius').value;
    ansOutEl.innerHTML = circumference(radiusValue);
}

function circumference(r) {
    return r * Math.PI * 2; 
       
}