var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var output = document.querySelector("#output");




function clickHandler() {
  output.innerText = "" + txtinput.value;
  
};

btnTranslate.addEventListener("click",clickHandler);
