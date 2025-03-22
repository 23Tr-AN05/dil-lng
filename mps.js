let passwords = {}; // Object to store the passwords

// Load the passwords from the external JSON file
fetch('passwords.json')
	.then(response => response.json())
	.then(data => {
		passwords = data;
	})
	.catch(error => {
		console.error('Error loading the passwords:', error);
	});

let activeTab = -1;

function showTab(index) {
	// Masquer tout le contenu
	for (let i = 0; i < document.querySelectorAll(".tab-content").length; i++) {
		document.getElementById("tab" + (i + 1)).classList.remove("active");
		document.getElementById("content-" + (i + 1)).style.display = "none";
		document.getElementById("password-box-" + (i + 1)).style.display = "none";
		document.getElementById("error-message-" + (i + 1)).style.display = "none";
	}

	if (activeTab !== index) {
		activeTab = index;
		document.getElementById("tab" + (index + 1)).classList.add("active");
		document.getElementById("password-box-" + (index + 1)).style.display = "block";
	}
}

function checkPassword(tabIndex) {
	const enteredPassword = document.getElementById("password-" + tabIndex).value;
	const correctPassword = passwords["tab" + tabIndex];
	const errorMessage = document.getElementById("error-message-" + tabIndex);
	const contentDiv = document.getElementById("content-" + tabIndex);

	if (enteredPassword === correctPassword) {
		errorMessage.style.display = "none";
		contentDiv.style.display = "block";
		document.getElementById("password-box-" + tabIndex).style.display = "none";
	} else {
		errorMessage.style.display = "block";
	}
}