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