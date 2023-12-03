const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const today = new Date();

let year = today.getFullYear();
let yearElement = document.querySelector(`#year`)

yearElement.textContent = year.toString();

// let copyright = document.querySelector(`#copyRight`);
// copyright.innerHTML = `&copy; ${year.toString()} | `)

let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector(`#lastModified`);

if (lastModified) {
    lastModifiedElement.textContent = lastModified;
}

// Define the OpenWeatherMap API key and URL
const apiKey = "db0af141a6c1426e9777be9c2d558fb6";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Boise,us&appid=db0af141a6c1426e9777be9c2d558fb6&units=imperial";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Boise,us&appid=db0af141a6c1426e9777be9c2d558fb6&units=imperial";

// Define HTML elements
const currentTemp = document.getElementById("current-temp");
const weatherDescription = document.getElementById("weather-description");
const weatherIcon = document.querySelector(`#weather-icon`);
const forecastList = document.getElementById("forecast-list");

// Fetch current weather data
fetch(weatherUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        displayCurrentWeather(data);
    })
    .catch(error => {
        console.error(error);
    });

// Fetch 3-day forecast data
fetch(forecastUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Full Forecast Data:', data); // Log the entire forecast data for debugging
        displayForecast(data);
    })
    .catch(error => {
        console.error(error);
    });

// Function to display current weather data
function displayCurrentWeather(data) {
    currentTemp.textContent = `${data.main.temp}°F`;
	weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherDescription.textContent = data.weather[0].description;
}

// Function to display 3-day forecast
function displayForecast(data) {
    const uniqueDates = []; // Array to store unique dates
    const nextThreeDays = [];

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Iterate through forecastData and collect one entry per day
    data.list.forEach(entry => {
        const entryDate = new Date(entry.dt * 1000);
        entryDate.setHours(0, 0, 0, 0);

        // Check if the date is after today and not in uniqueDates array
        if (entryDate > today && !uniqueDates.includes(entryDate.toDateString()) && nextThreeDays.length < 3) {
            uniqueDates.push(entryDate.toDateString());
            nextThreeDays.push(entry);
        }
    });

    console.log('Next Three Days:', nextThreeDays);

    // Clear existing forecast list
    forecastList.innerHTML = '';

    // Iterate through nextThreeDays and display forecast
    nextThreeDays.forEach(entry => {
        const forecastItem = document.createElement('li');
        forecastItem.textContent = `${new Date(entry.dt * 1000).toLocaleDateString()}: ${entry.main.temp}°F`;
        forecastList.appendChild(forecastItem);
    });
}
  // Fetch members from the JSON file
  fetch('data/members.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch members. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Function to filter members by silver or gold membership level
      function filterSilverGoldMembers(members) {
        return members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
      }

      // Function to randomly select members from the filtered list
      function getRandomMembers(members, count) {
        const shuffledMembers = members.sort(() => Math.random() - 0.5);
        return shuffledMembers.slice(0, count);
      }

      // Display spotlight advertisements on the home page
      const filteredMembers = filterSilverGoldMembers(data.member);
      const randomMembers = getRandomMembers(filteredMembers, 3); // Adjust the count as needed

      // Display spotlight advertisements on the home page
      const spotlightContainer = document.getElementById('spotlight-advertisements');
      randomMembers.forEach(member => {
        const spotlightAd = document.createElement('div');
        spotlightAd.classList.add('spotlight-ad');
        spotlightAd.innerHTML = `
		<img src="${member.image}" alt="${member.name} Logo">
          <h3>${member.name}</h3>
          <p>Membership Level: ${member.membershipLevel}</p> <br>
          <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;
        spotlightContainer.appendChild(spotlightAd);
      });
    })
    .catch(error => {
      console.error(error.message);
    });
	
	function closeMeetAndGreetBanner() {
		document.getElementById('meetAndGreetBanner').style.display = 'none';
	  }
  
	  function isMeetAndGreetDay() {
		const today = new Date().getDay();
		return today >= 1 && today <= 3; // Monday is 1, Tuesday is 2, Wednesday is 3
	  }
  
	  function displayMeetAndGreetBanner() {
		if (isMeetAndGreetDay()) {
		  document.getElementById('meetAndGreetBanner').style.display = 'block';
		} else {
		  document.getElementById('meetAndGreetBanner').style.display = 'none';
		}
	  }
  
	  // Call the function to display the banner when the page loads
	  displayMeetAndGreetBanner();
