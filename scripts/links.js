// links.js

const baseURL = "https://isabel-yue.github.io/wdd230/";
const linksURL = "https://isabel-yue.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const learningActivitySection = document.getElementById("learning-activity");

  // Clear existing content
  learningActivitySection.innerHTML = "";

  // Loop through each week
  weeks.forEach((week) => {
    const weekElement = document.createElement("div");
    weekElement.classList.add("week");

    // Create a single list item for the week with its links
    const listItem = document.createElement("li");

    // Create a span to hold the week title
    const weekTitle = document.createElement("span");
    weekTitle.textContent = `${week.week}: `;

    // Append the week title to the list item
    listItem.appendChild(weekTitle);

    // Create a span to hold all the links for the week
    const linksSpan = document.createElement("span");

    // Loop through each link in the week
    week.links.forEach((link, index) => {
      const anchor = document.createElement("a");
      anchor.href = link.url.startsWith("http") ? link.url : baseURL + link.url;
      anchor.textContent = link.title;

      // Append the anchor to the links span
      linksSpan.appendChild(anchor);

      // If it's not the last link, add a pipe separator
      if (index < week.links.length - 1) {
        linksSpan.appendChild(document.createTextNode(" | "));
      }
    });

    // Append the links span to the list item
    listItem.appendChild(linksSpan);

    // Append the list item to the week element
    weekElement.appendChild(listItem);

    // Append week element to the learning activity section
    learningActivitySection.appendChild(weekElement);
  });
}

// Call the getLinks function to fetch and display the links
getLinks();
