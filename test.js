// let vowels = {
//     a: "ai",
//     e: "enter",
//     i: "imes",
//     o: "ober",
//     u: "ufat"
// };

// let cypher = [];

// if (word.length > 0) {
//     for (const letter of word) {

//         if ((!Object.keys(vowels).includes(letter))) {
//             cypher.push(letter);
//         }

//         if (Object.keys(vowels).includes(letter)) {
//             const valor = vowels[letter];
//             cypher.push(valor);
//         }
        
//     }
//     console.log(cypher);
// } else {
//     console.log("Digite una palabra");
// }



// function decypher(cipher_word) {
//     // Recorre cada propiedad en el objeto vowels
//     // key tomara los valores: a, e, i, o, u
//     for (let key in vowels) {
//         // console.log(key);
//         // Reemplaza cada ocurrencia de el valor de la propiedad con la clave
//         // valor  va a ser igual a: ai, enter, imes, ober, ufat  
//         let valor = vowels[key];
//         // console.warn(valor);
//         //RegExp recibe el valor de cada propiedad, 'g': Es un modificador que significa "global". Esto le dice a la expresión regular que busque y reemplace todas las ocurrencias del valor en lugar de solo la primera. key es el texto por el que queremos remplazar
//         cipher_word = cipher_word.replace(new RegExp(valor, 'g'), key);
//     }
//     return cipher_word;
// }

// let resultado = decypher("mientera");
// console.log(resultado); 







// ////////////////////////////////////////////////////////////////////////////////////////////











// // Otra manera


// toastr.options = {
//     "closeButton": false,
//     "progressBar": false,
//     "positionClass": "toast-bottom-right", // Cambiar la posición aquí
//     "timeOut": "1000",
//     "showMethod": "slideDown",
// };

// const vowels = {
//     a: "ai",
//     e: "enter",
//     i: "imes",
//     o: "ober",
//     u: "ufat",
// };
// let cypherArray = [];


// const messageResult = document.getElementById("messresult");
// const spanMessage = document.getElementById("spanMessage");
// const tileResult = document.getElementById("titlresult");
// const imageResult = document.getElementById("imgresult");
// const textToCopy = document.getElementById("textToCopy");
// const bttnCopy = document.getElementById("bttncopy");
// const bttnCypher = document.getElementById("bttnCypher");
// const bttnDecypher = document.getElementById("bttnDecypher");
// const inputTxt = document.getElementById("txtcontent");


// // Assign the function to the button's click event
// bttnCopy.addEventListener('click', copyText);
// bttnCypher.addEventListener("click", cypherText);
// bttnDecypher.addEventListener("click", decypherText);

// inputTxt.addEventListener("input", function() {
//     let text = inputTxt.value; // Obtiene el texto del campo
//     let valid = /^[a-z]*$/.test(text); // Verifica si el texto solo contiene letras mayúsculas y números

//     if (valid) {
//         bttnCypher.disabled = false;
//         bttnDecypher.disabled = false;
//         spanMessage.classList.remove("spanError");
        
//     } else{
//         bttnCypher.disabled = true;
//         bttnDecypher.disabled = true;
//         spanMessage.classList.add("spanError");

//     }
// });


// // Encription function
// function cypherText() {

//     let input_word= inputTxt.value;
    
    
//     if (input_word.trim() === "") {
//         console.log("Digite una palabra");
//         return;
//     }
//     for (const letter of input_word) {

//         if ((!Object.keys(vowels).includes(letter))) {
//             cypherArray.push(letter);
//         }

//         if (Object.keys(vowels).includes(letter)) {
//             const valor = vowels[letter];
//             cypherArray.push(valor);
//         }
//     }

//     let cypherWord = cypherArray.join("");

//     showCypherText(cypherWord);
//     cleanFields();

//     return cypherWord;


// }


// // Decryption function
// function decypherText() {

//     let input_word= inputTxt.value;
//     // Recorre cada propiedad en el objeto vowels
//     for (let key in vowels) {
//         // Reemplaza cada ocurrencia de el valor de la propiedad con la clave
//         let valor = vowels[key];
//         input_word = input_word.replace(new RegExp(valor, 'g'), key);
//     }
//     showCypherText(input_word);
//     cleanFields();

//     return input_word;
// }


// // Showing result function
// function showCypherText(word) {

//     if (word === undefined || word.trim() === "") {
//         defaultPage();
//     } else {
//         imageResult.style.display = "none";
//         tileResult.style.display = "none";
//         messageResult.style.display = "none";
//         textToCopy.style.display = "block";
//         textToCopy.innerHTML = word;
//         bttnCopy.style.display = "block";
//     }

// }


// function cleanFields() {
//     document.querySelector('#txtcontent').value = '';
//     cypherArray = [];
// }


// function copyText() {
//     // Use the Clipboard API method to copy the text
//     navigator.clipboard.writeText(textToCopy.textContent)
//     .then(() => {
//         toastr.success('The text has been copied to the clipboard.', 'Copied!');
//     })
//     .catch(err => {
//         toastr.error('Something went wrong!', 'Error');
//         console.error('Error copying text: ', err);
//     });
// }




// function defaultPage() {
//     cleanFields();
//     cypherArray = [];
//     bttnCopy.style.display = "none";
//     imageResult.style.display = "block";
//     tileResult.style.display = "block";
//     messageResult.style.display = "block";
// }

// defaultPage();









// Configuración de toastr
// toastr.options = {
//     closeButton: false,
//     progressBar: false,
//     positionClass: "toast-bottom-right",
//     timeOut: "1000",
//     showMethod: "slideDown",
// };

// // Mapa de vocales para cifrado
// const vowels = {
//     a: "ai",
//     e: "enter",
//     i: "imes",
//     o: "ober",
//     u: "ufat",
// };

// // Referencias a elementos del DOM
// const messageResult = document.getElementById("messresult");
// const spanMessage = document.getElementById("spanMessage");
// const titleResult = document.getElementById("titlresult");
// const imageResult = document.getElementById("imgresult");
// const textToCopy = document.getElementById("textToCopy");
// // const bttnCopy = document.getElementById("bttncopy");
// const sectionResult =document.getElementById("sectionResult");
// const bttnCypher = document.getElementById("bttnCypher");
// const bttnDecypher = document.getElementById("bttnDecypher");
// const inputTxt = document.getElementById("txtcontent");

// // Asignar funciones a eventos
// // sectionResult.addEventListener('click', copyText);
// bttnCypher.addEventListener("click", cypherText);
// bttnDecypher.addEventListener("click", decypherText);

// inputTxt.addEventListener("input", () => {
//     const text = inputTxt.value; 
//     const valid = /^[a-z]*$/.test(text);

//     bttnCypher.disabled = !valid;
//     bttnDecypher.disabled = !valid;
//     spanMessage.classList.toggle("spanError", !valid);
// });

// // Función de cifrado
// function cypherText() {
//     const inputWord = inputTxt.value.trim();
//     if (!inputWord) {
//         console.log("Digite una palabra");
//         return;
//     }

//     const cypherArray = Array.from(inputWord).map(letter =>
//         vowels[letter] || letter
//     );
//     const cypherWord = cypherArray.join("");

//     showCypherText(cypherWord);
//     cleanFields();
// }

// // Función de descifrado
// function decypherText() {
//     let inputWord = inputTxt.value;
//     for (const [key, value] of Object.entries(vowels)) {
//         inputWord = inputWord.replace(new RegExp(value, 'g'), key);
//     }
//     showCypherText(inputWord);
//     cleanFields();
// }

// // Mostrar texto cifrado
// function showCypherText(word) {
//     if (!word.trim()) {
//         defaultPage();
//     } else {
//         imageResult.style.display = "none";
//         titleResult.style.display = "none";
//         messageResult.style.display = "none";
//         textToCopy.style.display = "block";
//         textToCopy.textContent = word;
//         // bttnCopy.style.display = "block";
//         sectionResult.classList.add("txtCopy");
//         sectionResult.addEventListener('click', copyText);

//     }
// }

// // Limpiar campos
// function cleanFields() {
//     inputTxt.value = '';
// }

// // Copiar texto al portapapeles
// function copyText() {
//     navigator.clipboard.writeText(textToCopy.textContent)
//         .then(() => toastr.success('The text has been copied to the clipboard.', 'Copied!'))
//         .catch(err => {
//             toastr.error('Something went wrong!', 'Error');
//             console.error('Error copying text: ', err);
//         });
// }

// // Restablecer la página al estado predeterminado
// function defaultPage() {
//     cleanFields();
//     // bttnCopy.style.display = "none";
//     imageResult.style.display = "block";
//     titleResult.style.display = "block";
//     messageResult.style.display = "block";
//     sectionResult.classList.remove("txtCopy");

// }

// // Inicializar la página
// defaultPage();
