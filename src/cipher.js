import {resultDecrypt, resultEncrypt} from './index.js';
let cipher = {
    encode: (text, usseroffset) => {
      //Para sacar de ascii a letra
      let ascciToLetter;
      for (let i = 0; i < text.length; i++) {
        let ascii = text.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
          //MAYUSCULAS
          let formulamayus = ((ascii - 65 + usseroffset) % 26 + 65);
          resultEncrypt[i] = formulamayus;
        

        } else if (ascii >= 97 && ascii <= 122) {
          let formulaminus = ((ascii - 97 + usseroffset) % 26 + 97);
          resultEncrypt[i]= formulaminus;

        } else {
          //CUALQUIER OTRO CARACTER SE QUEDA IGUAL
          let formulaAscii = ascii;
          resultEncrypt[i] = formulaAscii;
        } 
      }
      //Imprimir a letra
      for (let j = 0; j < resultEncrypt.length; j++){
      ascciToLetter= String.fromCharCode(resultEncrypt[j]);
      resultEncrypt[j] = ascciToLetter;
      }
      return resultEncrypt;
    },

    decode: (resultEncrypt, usseroffset) => {      
      for (let k= 0; k < resultEncrypt.length; k++) {
        let ascii2 = resultEncrypt[k].charCodeAt();
        
        if (ascii2 <= 91 && ascii2 >= 61) {
          let formuladecif = (((ascii2 + 65) - usseroffset) % 26 + 65);
          resultDecrypt[k] = formuladecif;
        } else if (ascii2 <= 122 && ascii2 >= 95) {
          let formuladecifminus= (((ascii2 - 122) - usseroffset) % 26 + 122);
          resultDecrypt[k] = formuladecifminus;
        } else {
          let formulaAscii2 = ascii2;
          resultDecrypt[k] = formulaAscii2;
        }
      }
      for (let l = 0; l < resultDecrypt.length; l++){
       let ascciToLetter2 = String.fromCharCode(resultDecrypt[l]);
       resultDecrypt[l] = ascciToLetter2;
      }
      return resultDecrypt;
    }
};

export default cipher;