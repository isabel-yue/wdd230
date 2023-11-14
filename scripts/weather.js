// select HTML elements in the document
const currentTemp = document.querySelector(`#current-temp`);
const weatherIcon = document.querySelector(`#weather-icon`);
const captionDesc = document.querySelector(`figcaption`);

// Declare and assign URL
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.81&lon=-111.48&units=imperial&appid=db0af141a6c1426e9777be9c2d558fb6';

// Define asynchronous function for API fetch
async function apiFetch() {
    try {
        // Fetch data from the URL
        const response = await fetch(url);

        // Check if the response is OK
        if (response.ok) {
            // Convert response to JSON
            const data = await response.json();

            // Output data to the console for testing
            console.log(data);

            // Assuming you have a function to update the HTML elements
            displayResults(data);

        } else {
            // Throw an error with the response text
            throw new Error(await response.text());
        }
    } catch (error) {
        // Output any errors to the console
        console.error(error);
    }
}

// Assuming you have a function to update the HTML elements
function displayResults(data) {
    // Update HTML elements with the retrieved data
    currentTemp.textContent = `${data.main.temp}°F`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    captionDesc.textContent = data.weather[0].description;

    // Output to console for testing
    console.log(`Temperature: ${data.main.temp}°F`);
    console.log(`Weather Description: ${data.weather[0].description}`);
    console.log(`Icon URL: https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
}

// Invoke the apiFetch function
apiFetch();
