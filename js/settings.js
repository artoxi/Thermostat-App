function submitProcess(){
  var dayTemp = document.getElementById('dayTemperature').value;
  var nightTemp = document.getElementById('nightTemperature').value;
  if(dayTemp >=5 && dayTemp <= 30 && nightTemp >= 5 && nightTemp <= 30){
    document.getElementById('nightTemperatureStatus').innerHTML = nightTemp;
    document.getElementById('dayTemperatureStatus').innerHTML = dayTemp;
    document.getElementById('dayTemperature').value="";
    document.getElementById('nightTemperature').value="";
    put("dayTemperature", "day_temperature", dayTemp);    
    put("nightTemperature", "night_temperature", nightTemp);
    alert("Day Temperature has been set to "+dayTemp+"\xB0C. "+"Night Temperature has been set to "+nightTemp+"\xB0C");
  }else if(nightTemp >=5 && nightTemp <= 30){
    document.getElementById('nightTemperatureStatus').innerHTML = nightTemp;
    document.getElementById('nightTemperature').value="";
    put("nightTemperature", "night_temperature", nightTemp);
    alert("Night Temperature has been set to "+nightTemp+"\xB0C");
  }else if(dayTemp >=5 && dayTemp <= 30){
    document.getElementById('dayTemperatureStatus').innerHTML = dayTemp;
    document.getElementById('dayTemperature').value="";
    put("dayTemperature", "day_temperature", dayTemp);
    alert("Day Temperature has been set to "+dayTemp+"\xB0C");
  }else{
    alert("Please make sure the Day and/or Night Temperature are valid. The Temperatures should be in the range 5-30.");
  }
}

function vacationMode(){
  var checkboxChecked = document.getElementById('vacationCheckbox').checked;
  if(checkboxChecked){
    document.getElementById('vacationModeExplanation').innerHTML = "<h5>Vacation mode will keep Temperature constant untill switched off</h5>"
    put("weekProgramState", "week_program_state", "off");
    alert("Vacation mode has been turned on.");
  }else{
    document.getElementById('vacationModeExplanation').innerHTML = " "
    put("weekProgramState", "week_program_state", "on");
    alert("Vacation mode has been turned off.");
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
      document.getElementById('vacationModeExplanation').innerHTML = "<h5>Vacation mode will keep Temperature constant untill switched off</h5>"

    }
    else{
     $("#vacationModeStatus").text("Off");
     $('#vacationCheckbox').prop('checked', false);
    }
  }
//$('#vacationModeStatus').prop('checked', true);
