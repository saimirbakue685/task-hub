/* sophisticated_code.js */

// This code is a complex implementation of a weather application
// It fetches weather data from an API, displays it on a web page,
// and allows users to search for weather data by city name

// Initialize constants and variables
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
let currentCity = '';

// DOM manipulation helper functions
function createDOMElement(elementType, className, textContent) {
  const element = document.createElement(elementType);
  element.classList.add(className);
  element.textContent = textContent;
  return element;
}

function renderWeatherData(data) {
  const weatherContainer = document.querySelector('.weather-container');
  weatherContainer.innerHTML = '';

  const cityName = createDOMElement('h2', 'city-name', data.name);
  const temperature = createDOMElement('h3', 'temperature', `${Math.round(data.main.temp - 273.15)}°C`);
  const description = createDOMElement('p', 'description', data.weather[0].description);

  weatherContainer.append(cityName, temperature, description);
}

function displayError(message) {
  const errorContainer = document.querySelector('.error-container');
  errorContainer.innerHTML = '';

  const errorMessage = createDOMElement('p', 'error-message', message);
  errorContainer.appendChild(errorMessage);
}

// Event listener callback functions
function searchWeatherByCity(event) {
  event.preventDefault();
  const searchInput = document.querySelector('.search-input');
  const searchString = searchInput.value.trim();
  searchInput.value = '';

  // Check if the user has entered a city name
  if (searchString === '') {
    displayError('Please enter a city name');
    return;
  }

  // Check if the user has entered the same city name again
  if (searchString.toLowerCase() === currentCity.toLowerCase()) {
    displayError(`Weather data for ${currentCity} is already displayed`);
    return;
  }

  // Fetch weather data for the entered city
  fetch(`${apiUrl}?q=${searchString}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      // Check if the API response is successful
      if (data.cod !== 200) {
        displayError(data.message);
        return;
      }

      currentCity = data.name;
      renderWeatherData(data);
    })
    .catch((error) => {
      displayError('An error occurred while fetching weather data');
      console.error(error);
    });
}

// Initialize application
function init() {
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', searchWeatherByCity);
}

init();