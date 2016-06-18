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
    put("nightTemperature", "night_temperature", nightTemp);
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
    document.getElementById('vacationModeExplanation').innerHTML = "<h5>Vacation mode will keep Temperature constant untill switched off</h5>"
    put("weekProgramState", "week_program_state", "off");
    alert("Vacation mode is On");
  }else{
    document.getElementById('vacationModeExplanation').innerHTML = " "
    put("weekProgramState", "week_program_state", "on");
    alert("Vacation mode is Off");
  }
}

function updateTemperature(){
      var curDayTemp = get("dayTemperature", "day_temperature");
      var curNightTemp = get("nightTemperature", "night_temperature");
      var curVacationMode = get("weekProgramState", "week_program_state");
      $("#dayTemperatureStatus").text(curDayTemp);
      $("#nightTemperatureStatus").text(curNightTemp);
      if(curVacationMode == "off"){
      $("#vacationModeStatus").text("On");
      $('#vacationCheckbox').prop('checked', true);

    }
    else{
     $("#vacationModeStatus").text("Off");
     $('#vacationCheckbox').prop('checked', false);
    }
  }
//$('#vacationModeStatus').prop('checked', true);
