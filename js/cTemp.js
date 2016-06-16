function changeTemp(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.innerHTML = y.value;
}

function minTemp() {
    var t = document.getElementById("slider").value;
    if (t > 10) {
        t=t-0.1;
        t=Math.round(t*10)/10;
        document.getElementById("slider").value=t;
        document.getElementById("cTemp").innerHTML=t;
    }
}

function plusTemp() {
    var t = document.getElementById("slider").value;
    if (t < 30) {
        t=t-(-0.1);
        t=Math.round(t*10)/10;
        document.getElementById("slider").value=t;
        document.getElementById("cTemp").innerHTML=t;
    }
}
