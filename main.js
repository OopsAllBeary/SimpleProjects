const uselessAPIEndpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
const catFactsAPIEndpoint = 'https://catfact.ninja/fact';
const pokemonFactsAPIEndpoint = 'https://pokefacts.vercel.app/';

var uselessFactDiv;
var catFactDiv;
var pokemonFactDiv;

var refreshUselessButton;
var refreshCatButton;
var refreshPokemonButton;

var uselessTabButton;
var catTabButton;
var pokemonTabButton;

var uselessContentWrapper;
var catContentWrapper;
var pokemonContentWrapper;

const init = () => {
  scanDomForNeccessaryElements();

  setUselessFact();
  setCatFact();
  setPokemonFact();

  initEventListeners();
};

const scanDomForNeccessaryElements = () => {
    uselessFactDiv = document.querySelector('#uselessContent');
    catFactDiv = document.querySelector('#catContent');
    pokemonFactDiv = document.querySelector('#pokemonContent');

    refreshUselessButton = document.querySelector('#refreshUselessButton');
    refreshCatButton = document.querySelector('#refreshCatButton');
    refreshPokemonButton = document.querySelector('#refreshPokemonButton');

    uselessTabButton = document.querySelector('#uselessButton');
    catTabButton = document.querySelector('#catButton');
    pokemonTabButton = document.querySelector('#pokemonButton');

    uselessContentWrapper = document.querySelector('#uselessContentWrapper');
    catContentWrapper = document.querySelector('#catContentWrapper');
    pokemonContentWrapper = document.querySelector('#pokemonContentWrapper');
}

const initEventListeners = () => {
    refreshUselessButton.addEventListener("click", function() {
        setUselessFact();
    });
    refreshCatButton.addEventListener("click", function() {
        setCatFact();
    });
    refreshPokemonButton.addEventListener("click", function() {
        setPokemonFact();
    });

    uselessTabButton.addEventListener("click", function() {
        triggerTab(0);
    })
    catTabButton.addEventListener("click", function() {
        triggerTab(1);
    })
    pokemonTabButton.addEventListener("click", function() {
        triggerTab(2);
    })
}

const triggerTab = (tabNumber) => {
    const activeDivs = document.querySelectorAll('.active');
    activeDivs.forEach(el => {
        el.classList.remove('active');
    })
    switch (tabNumber) {
        case 0:
            uselessContentWrapper.classList.add('active');
            uselessTabButton.classList.add('active');
            return;
        case 1:
            catContentWrapper.classList.add('active');
            catTabButton.classList.add('active');
            return;
        case 2:
            pokemonContentWrapper.classList.add('active');
            pokemonTabButton.classList.add('active');
            return;
    }

}

const setUselessFact = async () => {
    const newUselessFact = await fetchAPI(uselessAPIEndpoint);
    uselessFactDiv.innerHTML = '<p>' + newUselessFact.text + '</p>';
}

const setCatFact = async () => {
    const newCatFact = await fetchAPI(catFactsAPIEndpoint);
    catFactDiv.innerHTML = '<p>' + newCatFact.fact + '</p>';
}

const setPokemonFact = async () => {
    const newPokemonFact = await fetchAPI(pokemonFactsAPIEndpoint);
    pokemonFactDiv.innerHTML = '<p>' + newPokemonFact.data[0] + '</p>';
}

const fetchAPI = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('fetchAPI error:', error);
    throw error;
  }
};

window.addEventListener("load", function() {
    init();
});