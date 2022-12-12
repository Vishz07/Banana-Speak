var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
var serverurl = "https://api.funtranslations.com/translate/minion.json"

function Translator(text){
  return serverurl + "?" + "text=" + text
}

function errorhandler(error){
  console.log("error occured,error");

}

function clickHandler() {
  var inputtxt = txtinput.value;

  fetch(Translator(inputtxt))
    .then(response => response.json())
    .then (json => {
    var translatedjson = json.contents.translated;
    output.innerText = translatedjson;
  })
};

btnTranslate.addEventListener("click",clickHandler);

