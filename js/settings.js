function submitProcess(){
  var dayTemp = document.getElementById('dayTemperature').value;
  var nightTemp = document.getElementById('nightTemperature').value;
  var vacationTemp = document.getElementById('vacationTemperature').value;
  var checkboxChecked = document.getElementById('vacationCheckbox').checked;
  if(dayTemp < 5 || dayTemp > 30 || dayTemp == null || dayTemp == " "){
    alert("Please enter a day Temperature between 5 and 30 degrees");
  }
  else if(nightTemp < 5 || nightTemp >30 || nightTemp == null || nightTemp == " "){
    alert("Please enter a night Temperature between 5 and 30 degrees");
  }
  else if(checkboxChecked){
  if(vacationTemp < 5 || vacationTemp > 30 || vacationTemp == null || vacationTemp == " " ){
    alert("Please enter a Vacation Temperature between 5 and 30 degrees")
  }
  else{
    alert("Settings Sucesfully saved");
  }
}
  else {
  alert("Settings succesfully saved");
}
}
