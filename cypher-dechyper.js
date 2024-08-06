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
const inputTxt = document.getElementById("txtcontent");
const spanMessage = document.getElementById("spanMessage");
const bttnCypher = document.getElementById("bttnCypher");
const bttnDecypher = document.getElementById("bttnDecypher");
const defaultResult = document.getElementById("defaultResult");
const showResult = document.getElementById("showResult");
const bttnCopy = document.getElementById("bttncopy");
const bttnPaste = document.getElementById("bttnpaste");
const bttnResetPage = document.getElementById("bttnResetPage");

/*Inicializa el boton (deshabilitado) */
bttnResetPage.disabled = true;

// Asignar funciones a eventos
bttnCypher.addEventListener("click", cypherText);
bttnDecypher.addEventListener("click", decypherText);
bttnCopy.addEventListener('click', copyText);
bttnPaste.addEventListener("click", pasteText);
bttnResetPage.addEventListener("click", resetPage);
// Toma lo que se digita para validar
inputTxt.addEventListener("input", () => {
    const text = inputTxt.value;
    const valid = /^[a-z \n]*$/.test(text);

    bttnCypher.disabled = !valid; /*Deshabilita el boton */
    bttnDecypher.disabled = !valid;
    spanMessage.classList.toggle("spanError", !valid);
});


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

    showResult.textContent = word;
    bttnResetPage.disabled = false;

    defaultResult.style.display = "none";
    showResult.style.display = "block";
    bttnCopy.style.display = "block";
    bttnPaste.style.display = "none";

}

// Limpiar campos
function cleanFields() {
    inputTxt.value = '';
}

// Copiar texto al portapapeles
function copyText() {

    if (showResult.textContent == "") {
        return;
    }

    const txtCopied = showResult.textContent;
    navigator.clipboard.writeText(txtCopied)
        .then(() => toastr.success(`The text "${txtCopied}" has been copied to the clipboard.', 'Copied!`),
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
            bttnPaste.style.display = "block";
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
function resetPage() {
    location.reload();
}


