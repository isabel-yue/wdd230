// links.js

// Step 2: Create a baseURL variable
const baseURL = "https://isabel-yue.github.io/wdd230/";

// Step 3: Add a variable named linksURL
const linksURL = "https://isabel-yue.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching or parsing JSON:", error);
  }
}

function displayLinks(data) {
  const learningActivitySection = document.getElementById("learning-activity");

  // Clear existing content
  learningActivitySection.innerHTML = "";

  // Check if the data is an array and has the expected structure
  if (Array.isArray(data.weeks)) {
    // Loop through each week
    data.weeks.forEach((week) => {
      const weekElement = document.createElement("div");
      weekElement.classList.add("week");

      // Create week title
      const weekTitle = document.createElement("h3");
      weekTitle.textContent = week.week;
      weekElement.appendChild(weekTitle);

      // Create links list
      const linksList = document.createElement("ul");

      // Check if the week object has a valid links array
      if (Array.isArray(week.links)) {
        // Loop through each link in the week
        week.links.forEach((link) => {
          const listItem = document.createElement("li");
          const anchor = document.createElement("a");
          anchor.href = link.url.startsWith("http") ? link.url : baseURL + link.url;
          anchor.textContent = link.title;
          listItem.appendChild(anchor);
          linksList.appendChild(listItem);
        });

        // Append links list to the week element
        weekElement.appendChild(linksList);

        // Append week element to the learning activity section
        learningActivitySection.appendChild(weekElement);
      } else {
        console.error(`Invalid data format for week ${week.week}. Expected a links array.`);
      }
    });
  } else {
    console.error("Invalid data format. Expected an array of weeks.");
  }
}

// Call the getLinks function to fetch and display the links
getLinks();
