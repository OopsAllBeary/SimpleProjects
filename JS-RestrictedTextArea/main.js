var textArea, textCounter;

const init = () => {
    scanDocumentForNecessaryElements();
    initEventListeners();
}

const scanDocumentForNecessaryElements = () => {
    textArea = document.querySelector('#restrictedTextArea');
    textCounter = document.querySelector('#textAreaCounter');
}

const initEventListeners = () => {
    textArea.addEventListener("input", function(textEvent) {
        const currentLength = textEvent.target.value.length;
        textCounter.innerHTML = currentLength + " / 150";

        if (currentLength >= textEvent.target.maxLength) {
            textArea.classList.add("maxed");
            textCounter.classList.add("maxed");
        } else if (textArea.classList.includes("maxed")) {
            textArea.classList.remove("maxed");
            textCounter.classList.remove("maxed");
        }
    })
}

window.addEventListener("load", function() {
    init();
});
