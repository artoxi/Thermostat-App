window.addEventListener("load", doFirst, false);

function doFirst() {
    var button = document.getElementById('save_button');
    button.addEventListener("click", save, false);
    display();
}

function save(){
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    /*add various types of checks here
    if (one != "" && two != "" && sessionStorage.length < 5 && one < two) {
        sessionStorage.setItem(one,two);
        display();
        document.getElementById('one').value="";
        document.getElementById('two').value="";
    } else if (sessionStorage.length >= 5){
      alert("Maximum programs reached");
    } else if (one => two) {
      alert("This is not a valid time period")
    }/*else {
      alert("Please enter a valid time")
    }*/

    for(var i=0; i < 5; i++){
        var newOne = one.replace(":", "");
        var newTwo = two.replace(":", "");
        var checkOne = sessionStorage.key(i);
        var checkTwo = sessionStorage.getItem(checkOne);
        checkOne = toString(checkOne);
        checkTwo = toString(checkTwo);
        var oldOne = checkOne.replace(":", "");
        var oldTwo = checkTwo.replace(":", "");
        if(oldOne > newOne && oldTwo < newTwo){
                sessionStorage.setItem(newOne,newTwo);
        } else if(oldOne < newOne && oldTwo < newTwo){
                sessionStorage.setItem(oldOne,newTwo);
        } else if(oldOne > newOne && oldTwo < newTwo){
                sessionStorage.setItem(newOne,oldTwo);
        } else if(oldOne > newOne && oldTwo < newTwo){
                sessionStorage.setItem(oldOne, oldTwo);
        }
    }
    if (one != "" && two != "" && sessionStorage.length < 5 && one < two) {
        sessionStorage.setItem(one,two);
        display();
        document.getElementById('one').value="";
        document.getElementById('two').value="";
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
        rightbox.innerHTML +=  rightbox.innerHTML += "<div><img src='images/sun.png' width='50px' /> "+a+" <img src='images/moon.png' width='50px' /> "+b+
        "<input type='button' style='font-size:18px;margin-right:20px;font-weight:bold' value='Remove' onclick=\"removeItem('"+a+"'); \" /></div>";
        }
}


 /*function getStuff(strippedDay) {

        $("#rightbox").html("");
                $.get('http://wwwis.win.tue.nl/2id40-ws/3', function(d) {
                    $(d).find('day').each(function(f) {
                        var name = $(this).attr('name');
                        var html = "";
                        var a = 0;
                        var titleName = $("#mondaySet .title").html();
                        if (name == strippedDay) {
                            $(this).find('switch').each(function() {
 
                                var sw = $(this);
                                var state = sw.attr("state");
                                var type = sw.attr("type");
                                var hoi;
                                var hoiTwo;
 
 
                                if (state == "on" && type == "day") {
                                    hoi = $(this).text();
                                    html += '<div class="settings-list-item ex" data-id='+a+' data-tag="' + hoi + '"><div class="caption no-mar-left interval-item"><span>';
                                    html += hoi; //dagtijd
                                    html += ' untill ';
 
 
                                    a++;
                                };
 
                                if (state == "on" && type == "night") {
                                    hoiTwo = $(this).text();
                                    html += hoiTwo; //nachttijd
                                    html += '</span></div><div class="icon interval-icon delete" data-tag="' + hoiTwo + '"><i class="material-icons">delete</i></div><div class="icon interval-icon edit"></div></div>';
                   
                                    
                                };
                            });
                            $('#rightbox').append(html);
                        };
                    });
                });
 
 
   
            };
*/


         