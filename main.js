
var accordionContainer, accordionGroupingToggle;

var accordionsGrouped = false;

const init = () => {
    scanDocumentForNecessaryElements();
    initEventListeners();
}

const scanDocumentForNecessaryElements = () => {
    accordionContainer = document.querySelector('#accordionContainer');
    accordionGroupingToggle = document.querySelector('#accordionGroupingToggle');
}

const initEventListeners = () => {
    document.querySelectorAll('.accordion').forEach((accordion) => {
        accordion.addEventListener("click", (ev) => {
            toggleAccordion(ev.target);
        });
    });

    accordionGroupingToggle.addEventListener("change", (ev) => {
        accordionsGrouped = ev.target.checked;
        document.querySelectorAll('.accordion').forEach((accordion) => {
            accordion.classList.remove("active");
        });
    });
}

const toggleAccordion = (acc) => {
    if (!acc) return;
    if (!acc.classList.contains("accordion")) {
        toggleAccordion(acc.parentElement);
        return;
    }
    if (accordionsGrouped) {
        document.querySelectorAll('.accordion').forEach((accordion) => {
            accordion.classList.remove("active");
        });
        acc.classList.add("active");
        return;
    }

    acc.classList.toggle("active");

}

window.addEventListener("load", function() {
    init();
});