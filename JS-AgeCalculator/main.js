var birthdate, ageText;


const init = () => {
    scanDocumentForNecessaryElements();
    initEventListeners();
}

const scanDocumentForNecessaryElements = () => {
    birthdate = document.querySelector("#birthdate");
    ageText = document.querySelector('#ageText');
}

const initEventListeners = () => {
   birthdate.addEventListener("input", (ev) => {
    calculateAge(ev.target.value);
   })
}

const calculateAge = (userBirthDate) => {
    const now = luxon.DateTime.now();
    const compareDate = luxon.DateTime.fromISO(userBirthDate);

    const exactAge = now.diff(compareDate, ["years", "months", "days"]).toObject();
    ageText.innerHTML = "You are " + exactAge.years + " years old";
    
}

window.addEventListener("load", function() {
    init();
});