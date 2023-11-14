// links.js

const baseURL = "https://isabel-yue.github.io/wdd230/";
const linksURL = "https://isabel-yue.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }

  getLinks();

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
  
      // Create week title
      const weekTitle = document.createElement("h3");
      weekTitle.textContent = week.week;
      weekElement.appendChild(weekTitle);
  
      // Create links list
      const linksList = document.createElement("ul");
  
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
    });
  }
  