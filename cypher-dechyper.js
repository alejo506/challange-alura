// Configuración de toastr
toastr.options = {
    closeButton: false,
    progressBar: false,
    positionClass: "toast-bottom-right",
    timeOut: "1500",
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
const messageResult = document.getElementById("messresult");
const spanMessage = document.getElementById("spanMessage");
const titleResult = document.getElementById("titlresult");
let imgMan = document.getElementById("imgMan");
let imgCircles = document.getElementById("imgCircles");
let imgDiamond = document.getElementById("imgDiamond");
const textToCopy = document.getElementById("textToCopy");
const bttnCopy = document.getElementById("bttncopy");
const bttnCypher = document.getElementById("bttnCypher");
const bttnDecypher = document.getElementById("bttnDecypher");
const inputTxt = document.getElementById("txtcontent");

// Asignar funciones a eventos
bttnCopy.addEventListener('click', copyText);
bttnCypher.addEventListener("click", cypherText);
bttnDecypher.addEventListener("click", decypherText);

inputTxt.addEventListener("input", () => {
    const text = inputTxt.value;
    const valid = /^[a-z ]*$/.test(text);

    bttnCypher.disabled = !valid;
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
    }
}

// Limpiar campos
function cleanFields() {
    inputTxt.value = '';
}

// Copiar texto al portapapeles
function copyText() {
    navigator.clipboard.writeText(textToCopy.textContent)
        .then(() => toastr.success('The text has been copied to the clipboard.', 'Copied!'))
        .catch(err => {
            toastr.error('Something went wrong!', 'Error');
            console.error('Error copying text: ', err);
        });
}

// Restablecer la página al estado predeterminado
function defaultPage() {
    cleanFields();
    bttnCopy.style.display = "none";
    imgMan.style.display = "block";
    imgCircles.style.display = "block";
    imgDiamond.style.display = "block";
    titleResult.style.display = "block";
    messageResult.style.display = "block";
}

// Inicializar la página
defaultPage();
