function add(){
    let x = parseInt(document.getElementById("value1").value);
    let y = parseInt(document.getElementById("value2").value);
    let a= x+y;
    document.getElementById("answer1").innerHTML="Addition is "+a;
}
function sub(){
    let x = parseInt(document.getElementById("value1").value);
    let y = parseInt(document.getElementById("value2").value);
    let s= x-y;
    document.getElementById("answer2").innerHTML="Substraction is "+s;
}
function mul(){
    let x = parseInt(document.getElementById("value1").value);
    let y = parseInt(document.getElementById("value2").value);
    let m= x*y;
    document.getElementById("answer3").innerHTML="Multipliction is "+m;
}
function div(){
    let x = parseInt(document.getElementById("value1").value);
    let y = parseInt(document.getElementById("value2").value);
    let d= x/y;
    document.getElementById("answer4").innerHTML="Addition is "+d;
}