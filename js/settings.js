function submitProcess(){
  var dayTemp = document.getElementById('dayTemperature').value;
  var nightTemp = document.getElementById('nightTemperature').value;
  if(dayTemp >=5 && dayTemp <= 30 && nightTemp >= 5 && nightTemp <= 30){
    document.getElementById('nightTemperatureStatus').innerHTML = nightTemp;
    document.getElementById('dayTemperatureStatus').innerHTML = dayTemp;
    document.getElementById('dayTemperature').value="";
    put("dayTemperature", "day_temperature", dayTemp);
    document.getElementById('nightTemperature').value="";
    put("nightTemperature", "night_temperature", nightT);
    alert("Day and Night Temperature have been set");
  }else if(nightTemp >=5 && nightTemp <= 30){
    document.getElementById('nightTemperatureStatus').innerHTML = nightTemp;
    document.getElementById('nightTemperature').value="";
    put("nightTemperature", "night_temperature", nightT);
    alert("Night Temperature has been set");
  }else if(dayTemp >=5 && dayTemp <= 30){
    document.getElementById('dayTemperatureStatus').innerHTML = dayTemp;
    document.getElementById('dayTemperature').value="";
    put("dayTemperature", "day_temperature", dayTemp);
    alert("Day Temperature has been set");
     
  }else{
    alert("Please make sure the Day and/or Night Temperature are valid.");
  }
}

function vacationMode(){
  var checkboxChecked = document.getElementById('vacationCheckbox').checked;
  if(checkboxChecked){
    document.getElementById('vacationModeStatus').innerHTML = "On";
    put("weekProgramState", "week_program_state", "off");
    alert("Vacation mode is On");
  }else{
    document.getElementById('vacationModeStatus').innerHTML = "Off";
    put("weekProgramState", "week_program_state", "on");
    alert("Vacation mode is Off");
  }
}
