var acceptCookiesButton, denyCookiesButton, clearCookiesButton, cookiesWrapper, mainContent;

const init = () => {
    scanDocumentForNeccessaryElements();
    setupEventListeners();
    checkCookies();
}

const scanDocumentForNeccessaryElements = () => {
    acceptCookiesButton = document.querySelector('#acceptCookies');
    denyCookiesButton = document.querySelector('#denyCookies');
    clearCookiesButton = document.querySelector('#clearCookies');
    cookiesWrapper = document.querySelector('#cookieWrapper');
    mainContent = document.querySelector('#mainContent');
}

const setupEventListeners = () => {
    acceptCookiesButton.addEventListener("click", function() {
        setCookies("accept");
        cookiesHandler("accept");
    });

    denyCookiesButton.addEventListener("click", function () {
        setCookies("deny");
        cookiesHandler("deny");
    });

    clearCookiesButton.addEventListener("click", function() {
        deleteCookies();
    });
}

const checkCookies = () => {
    const cookiesAllowed = document.cookie.split('; ').find(row => row.startsWith(`areCookiesAllowed=`))?.split('=')[1];
    cookiesHandler(cookiesAllowed);
}

const setCookies = (cookie) => {
    document.cookie = "areCookiesAllowed=" + cookie;
}

const deleteCookies = () => {
    document.cookie = "areCookiesAllowed=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    location.reload();
}

const cookiesHandler = (cookiesAllowed) => {
    if (cookiesAllowed == null) {
        return;
    }

    if (cookiesAllowed == "accept") {
        cookiesWrapper.classList.add("disabled");
        return;
    }
    cookiesWrapper.classList.add("disabled");
    mainContent.innerHTML = "YOU DENIED COOKIES!??!!?!?!?"
    return;
}

window.addEventListener("load", function() {
    init();
});

