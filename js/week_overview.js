window.addEventListener("load", doFirst, false);

function doFirst() {
    var button = document.getElementById('save_button');
    button.addEventListener("click", save, false);
    display();
}

function save(){
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    /*add various types of checks here*/
    if (one != "" && two != "" && sessionStorage.length < 5 && one < two) {
        sessionStorage.setItem(one,two);
        display();
        document.getElementById('one').value="";
        document.getElementById('two').value="";
    } else if (sessionStorage.length >= 5){
      alert("Maximum programs reached");
    } else if (one => two) {
      alert("This is not a valid time period")
    }else {
      alert("Please add a valid time")
    }
}


function removeItem(item){
    sessionStorage.removeItem(item);
    display();
    document.getElementById('one').value="";
    document.getElementById('two').value="";
}

function removeAll(){
    sessionStorage.clear();
    display();
    document.getElementById('one').value="";
    document.getElementById('two').value="";
}

function display() {
    var rightbox = document.getElementById('rightbox');
    rightbox.innerHTML="";
    if (sessionStorage.length==5) {
        document.getElementById('save_button').style="disabled";
    }
    for (var x=0;x<sessionStorage.length;x++) {
        var a = sessionStorage.key(x);
        var b = sessionStorage.getItem(a);
        /*add sorting here*/
        rightbox.innerHTML += "<div><img src='images/sun.png' width='50px' /> "+a+" <img src='images/moon.png' width='50px' /> "+b+
		"<input type='button' style='font-size:18px;margin-right:20px;font-weight:bold' value='Remove' onclick=\"removeItem('"+a+"'); \" /></div>";
    }
}
