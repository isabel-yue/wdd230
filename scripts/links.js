// links.js

const baseURL = "https://isabel-yue.github.io/wdd230/";
const linksURL = "https://isabel-yue.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log("Received data:", data);
    displayLinks(data.weeks); // Assuming 'weeks' is the key containing the array of weeks
  } catch (error) {
    console.error("Error fetching or parsing JSON:", error);
  }
}

function displayLinks(weeks) {
  const learningActivitySection = document.getElementById("learning-activity");

  // Clear existing content
  learningActivitySection.innerHTML = "";

  // Ensure 'weeks' is an array
  if (Array.isArray(weeks)) {
    // Loop through each week
    weeks.forEach((week) => {
      const listItem = document.createElement("li");

      // Create a span to hold the week title
      const weekTitle = document.createElement("span");
      weekTitle.textContent = `${week.week}: `;

      // Append the week title to the list item
      listItem.appendChild(weekTitle);

      // Loop through each link in the week
      week.links.forEach((link, index) => {
        const anchor = document.createElement("a");
        anchor.href = link.url.startsWith("http") ? link.url : baseURL + link.url;
        anchor.textContent = link.title;

        // Append the anchor to the list item
        listItem.appendChild(anchor);

        // If it's not the last link, add a pipe separator
        if (index < week.links.length - 1) {
          listItem.appendChild(document.createTextNode(" | "));
        }
      });

      // Append the list item to the learning activity section
      learningActivitySection.appendChild(listItem);
    });
  } else {
    console.error("Invalid data format or empty data. Expected an array of weeks with the correct structure.");
  }
}

// Call the getLinks function to fetch and display the links
getLinks();
