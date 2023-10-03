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

// dark mode //
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌚")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🌝";
	} else {
		main.style.background = "white";
		main.style.color = "#000";
		modeButton.textContent = "🌚";
	}
});


