// Fetch and parse JSON data
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    // Function to render members based on the view type
    function renderMembers(viewType) {
      const membersContainer = document.getElementById('members-container');
      membersContainer.innerHTML = ''; // Clear existing content

      data.member.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        const nameElement = document.createElement('h2');
        nameElement.textContent = member.name;

        const addressElement = document.createElement('p');
        addressElement.textContent = `Address: ${member.address}`;

        const phoneElement = document.createElement('p');
        phoneElement.textContent = `Phone: ${member.phone}`;

        const websiteElement = document.createElement('p');
        websiteElement.innerHTML = `Website: <a href="${member.website}" target="_blank">${member.website}</a>`;

        const membershipElement = document.createElement('p');
        membershipElement.textContent = `Membership Level: ${member.membershipLevel}`;

        memberCard.appendChild(nameElement);
        memberCard.appendChild(addressElement);
        memberCard.appendChild(phoneElement);
        memberCard.appendChild(websiteElement);
        memberCard.appendChild(membershipElement);

        if (viewType === 'grid') {
          // Display image only in grid view
          const imgElement = document.createElement('img');
          imgElement.src = member.image;
          imgElement.alt = member.name;
          memberCard.insertBefore(imgElement, memberCard.firstChild);
        }

        membersContainer.appendChild(memberCard);
      });

      // Toggle grid view class
      membersContainer.classList.toggle('grid-view', viewType === 'grid');
    }

    // Initial render (grid view by default)
    renderMembers('grid');

    // Add event listeners to the toggle buttons
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');

    gridViewBtn.addEventListener('click', () => renderMembers('grid'));
    listViewBtn.addEventListener('click', () => renderMembers('list'));
  })
  .catch(error => console.error('Error fetching members.json:', error));
