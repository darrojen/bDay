
let birthdays = JSON.parse(localStorage.getItem("birthdays")) || [];

function saveBirthdays() {
    localStorage.setItem("birthdays", JSON.stringify(birthdays));
}

function addBirthday() {
    const nameInput = document.getElementById("name-input").value;
    const dateInput = document.getElementById("date-input").value;

    if (nameInput && dateInput) {
        birthdays.push({ name: nameInput, date: dateInput });
        saveBirthdays();
        displayBirthdays();

        document.getElementById("name-input").value = "";
        document.getElementById("date-input").value = "";
    }
}

function removeBirthday(index) {
    birthdays.splice(index, 1);
    saveBirthdays();
    displayBirthdays();
}

function displayBirthdays() {
    const container = document.getElementById("birthday-container");
    container.innerHTML = "";

    if (birthdays.length > 0) {
        birthdays.forEach((bday, index) => {
            const card = document.createElement("div");
            card.className = "birthday-card";
            card.innerHTML = `
                <span>${bday.name} - ${bday.date}</span>
                <button onclick="removeBirthday(${index})">×</button>
            `;
            container.appendChild(card);
        });
    } else {
        container.innerHTML = "<p class='empty'>No birthdays yet.</p>";
    }
}

// Highlight active navigation link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

displayBirthdays();