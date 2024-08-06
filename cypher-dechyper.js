// Configuración de toastr
toastr.options = {
    closeButton: false,
    progressBar: false,
    positionClass: "toast-bottom-right",
    timeOut: "2000",
    showMethod: "slideDown",
};

// Mapa de vocales para cifrado
const vowels = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

// Referencias a elementos del DOM
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const messageResult = document.getElementById("messresult");
const spanMessage = document.getElementById("spanMessage");
const titleResult = document.getElementById("titlresult");
const imgMan = document.getElementById("imgMan");
const imgCircles = document.getElementById("imgCircles");
const imgDiamond = document.getElementById("imgDiamond");
const textToCopy = document.getElementById("textToCopy");
const bttnCopy = document.getElementById("bttncopy");
const bttnPaste = document.getElementById("bttnpaste");
const bttnCypher = document.getElementById("bttnCypher");
const bttnDecypher = document.getElementById("bttnDecypher");
const inputTxt = document.getElementById("txtcontent");

// Asignar funciones a eventos
bttnCopy.addEventListener('click', copyText);
bttnPaste.addEventListener("click", pasteText);
bttnCypher.addEventListener("click", cypherText);
bttnDecypher.addEventListener("click", decypherText);

inputTxt.addEventListener("input", () => {
    const text = inputTxt.value;
    const valid = /^[a-z \n]*$/.test(text);

    bttnCypher.disabled = !valid;
    bttnDecypher.disabled = !valid;
    spanMessage.classList.toggle("spanError", !valid);
});

// Agrega el evento click al botón y llama a la función
// document.getElementById('pasteButton').addEventListener('click', pasteText);


// Función de cifrado
function cypherText() {
    const inputWord = inputTxt.value;
    if (!inputWord) {
        console.log("Digite una palabra");
        toastr.warning('The input cannot be empty!', 'Warning');
        return;
    }

    const cypherArray = Array.from(inputWord).map(letter =>
        vowels[letter] || letter
    );
    const cypherWord = cypherArray.join("");
    
    scrollToFooter(); /* Desplazamiento hacia el header si la dimension de pantalla es menor o igual a 768 */ 
    showCypherText(cypherWord);
    cleanFields();
}

// Función de descifrado
function decypherText() {
    let inputWord = inputTxt.value;

    if (!inputWord) {
        console.log("Digite una palabra");
        toastr.warning('The input cannot be empty!', 'Warning');
        return;
    }
    for (const [key, value] of Object.entries(vowels)) {
        inputWord = inputWord.replace(new RegExp(value, 'g'), key);
    }
    scrollToFooter(); /* Desplazamiento hacia el header si la dimension de pantalla es menor o igual a 768 */ 
    showCypherText(inputWord);
    cleanFields();
}

// Mostrar texto cifrado
function showCypherText(word) {
    if (!word.trim()) {
        defaultPage();
    } else {
        imgMan.style.display = "none";
        imgCircles.style.display = "none";
        imgDiamond.style.display = "none";
        titleResult.style.display = "none";
        messageResult.style.display = "none";
        textToCopy.style.display = "block";
        textToCopy.textContent = word;
        bttnCopy.style.display = "block";
        bttnPaste.style.display = "none";
    }
}

// Limpiar campos
function cleanFields() {
    inputTxt.value = '';
}

// Copiar texto al portapapeles
function copyText() {

    if(textToCopy.textContent == "") {
        return;
    }
    
    const txtCopied = textToCopy.textContent;
    navigator.clipboard.writeText(txtCopied)
        .then(() => toastr.success(`The text ${txtCopied} has been copied to the clipboard.', 'Copied!`),
        textToCopy.textContent = '', /*Formatear el campo de resultado */
        bttnPaste.style.display = "block",
    )
        .catch(err => {
            toastr.error('Something went wrong!', 'Error');
            console.error('Error copying text: ', err);
        });

}


function pasteText() {
    navigator.clipboard.readText()
        .then(text => {
            inputTxt.value = text;
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });

        /* Desplazamiento hacia el header si la dimension de pantalla es menor o igual a 768 */
        scrollToHeader();
}


function scrollToFooter() {
    /* Desplazamiento hacia el header si la dimension de pantalla es menor o igual a 768 */
    if (window.innerWidth <= 768) { // Puedes ajustar el valor según tus necesidades
        footer.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToHeader() {
    /* Desplazamiento hacia el header si la dimension de pantalla es menor o igual a 768 */
    if (window.innerWidth <= 768) { // Puedes ajustar el valor según tus necesidades
        header.scrollIntoView({ behavior: 'smooth' });
    }
}




// Restablecer la página al estado predeterminado
function defaultPage() {
    cleanFields();
    bttnCopy.style.display = "none";
    bttnPaste.style.display = "none";
    imgMan.style.display = "block";
    imgCircles.style.display = "block";
    imgDiamond.style.display = "block";
    titleResult.style.display = "block";
    messageResult.style.display = "block";
}

// Inicializar la página
defaultPage();
