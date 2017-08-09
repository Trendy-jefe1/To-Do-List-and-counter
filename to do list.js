window.onload = function(){

document.getElementById('add')  .onclick=function() {
   var text = document.getElementById('input').value;
   text= document .createTextNode(text);

   var li= document.createElement('LI');
   li.onclick = function()  {
     li.parentNode.removeChild(this);
   }


   li.appendChild(text);
   document.getElementById('list').appendChild(li);
 };

document.getElementById("inc").onclick=function() {
var counter = document.getElementById('counter').innerHTML
var num = parseInt(counter);
num++;
document.getElementById("counter").innerHTML = num;

}
document.getElementById("dec").onclick=function() {
var counter = document.getElementById('counter').innerHTML
var num = parseInt(counter);
num--;
document.getElementById("counter").innerHTML = num;

}


};
