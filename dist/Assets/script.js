// ./dist/Assets/script.js
async function fetchWeatherData(zipCode) {
  try {
    const response = await fetch(`/.netlify/functions/getWeather?zip=${zipCode}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error; // Rethrow the error so it can be handled by the calling function
  }
}

function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const speedMph = data.wind.speed;
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp.toFixed(0) + "°F";
  document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Wind speed: " + speedMph.toFixed(0) + " mph";
  document.querySelector(".weather").classList.remove("loading");
  document.querySelector(".weather").style.display = "block";
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
}

function searchWeather() {
  const zipCodeInput = document.querySelector('.search-bar');
  const zipCode = zipCodeInput.value;
  fetchWeatherData(zipCode)
    .then((data) => {
      displayWeather(data);
      zipCodeInput.value = ''; // Clear the input field after successful fetch
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      // Handle the error appropriately, perhaps show a user-friendly message
    });
}

document.querySelector('.search button').addEventListener('click', searchWeather);
document.querySelector('.search-bar').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchWeather();
  }
});
