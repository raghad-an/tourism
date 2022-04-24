//console.log("hi");
var text = ["Welcome to our website", "hello our dear visitor ", "it is nice to know your opinion our visitor"];
var counter = 0;
var elem = document.getElementById("greeting");
var inst = setInterval(change, 3000);

function change() {
    console.log("hiiiiiiii");
    console.log("elem", elem);
    elem.innerHTML = text[counter];
    console.log(elem);
    counter++;
    if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}
//document.getElementsByClassName("form-control").onchange = ToUpperFun();
function ToUpperFun() {
    var x = document.getElementByClassName("form-control")
    x.value = x.value.toUpperCase();
    x.value = x.value.style.color = "blue";
}
function submitedFun() {
    document.createElement("p");
    p.innerText="your form is submited"
}