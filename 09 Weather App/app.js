const apiKey = "[API KEY]";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

searchBtn.addEventListener('click', () => getData(cityInput.value));

async function getData(city) {
    document.getElementById("loading").style.display = "block";


    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404) {
            document.getElementById("loading").style.display = "none";
            document.getElementById("error").textContent = "City Not Found";
        } else if(response.ok){
            const data = await response.json();
            console.log("Data received:", data);

            document.getElementById("loading").style.display = "none";

            document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById('weatherDescription').innerText = data.weather[0].description;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp }°C`;
            document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        } else {
            throw new Error("Something went wrong with the API request");
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("loading").style.display = "none";
        document.getElementById("error").textContent = "An error occurred. Please try again later.";
    }
}
