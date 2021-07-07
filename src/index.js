import {default as cipher} from './cipher.js';

//window.addEventListener("load", inicio, true);

  //function inicio () {
    //document.getElementById("mensaje").addEventListener("keyup",function(){
      //this.value = this.value.toUpperCase();
    //});
  //}
let offset = document.getElementById ('selectoffset');
let text = document.getElementById ('mensaje');
let button1 = document.getElementById('buttoncipher');
let button2 = document.getElementById ('buttondecipher');
let printresult = document.getElementById ('mensaje2');
let resultEncrypt= [];
let resultDecrypt= [];

button1.addEventListener ('click' , () => {
    let textValue = text.value;
    let offsetValue = (parseInt(offset.value));
    resultEncrypt.toString;
    cipher.encode(textValue, offsetValue);
    printresult.innerHTML = resultEncrypt.join('');

});

button2.addEventListener ('click', () => {
    let offsetValue = parseInt(offset.value);
    resultEncrypt.toString;
    cipher.decode(resultEncrypt, offsetValue);
    printresult.innerHTML = resultDecrypt.join("");
    
});
export {resultDecrypt, resultEncrypt}