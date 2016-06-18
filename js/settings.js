function submitProcess(){
  var dayTemp = document.getElementById('dayTemperature').value;
  var nightTemp = document.getElementById('nightTemperature').value;
  if(dayTemp >=5 && dayTemp <= 30 && nightTemp >= 5 && nightTemp <= 30){
    document.getElementById('nightTemperatureStatus').innerHTML = nightTemp;
    document.getElementById('dayTemperatureStatus').innerHTML = dayTemp;
    alert("Day and Night Temperature have been set");
  }else if(nightTemp >=5 && nightTemp <= 30){
    document.getElementById('nightTemperatureStatus').innerHTML = nightTemp;
    alert("Night Temperature has been set");
  }else if(dayTemp >=5 && dayTemp <= 30){
    document.getElementById('dayTemperatureStatus').innerHTML = dayTemp;
    alert("Day Temperature has been set");
  }else{
    alert("Please make sure the Day and/or Night Temperature are valid.");
  }
}

function vacationMode(){
  var checkboxChecked = document.getElementById('vacationCheckbox').checked;
  if(checkboxChecked){
    document.getElementById('vacationModeStatus').innerHTML = "On";
    alert("Vacation mode is On");
  }else{
    document.getElementById('vacationModeStatus').innerHTML = "Off";
    alert("Vacation mode is Off");
  }
}
