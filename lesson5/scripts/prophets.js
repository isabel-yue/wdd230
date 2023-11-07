const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayProphets(data.prophets);
        } else {
            console.error('Failed to fetch data. Status:', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        const portrait = document.createElement('img');
        portrait.src = prophet.imageurl;
        portrait.alt = `${prophet.name} ${prophet.lastname}`;
        portrait.loading = "lazy";
        portrait.width = 200;
        portrait.height = 300;

        // Create elements for birthdate 
        const birthDate = document.createElement('p');
        birthDate.textContent = `Birthdate: ${prophet.birthdate}`;
   
        // Create elements for other information
        const birthplace = document.createElement('p');
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;


        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();
