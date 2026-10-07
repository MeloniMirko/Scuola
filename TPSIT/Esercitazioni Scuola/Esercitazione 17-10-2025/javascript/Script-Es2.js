function checkPassword() {
    const name = document.getElementById("nameInput").value;
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "123";

    if (password === correctPassword) {
        alert(`Benvenuto, ${name}! Accesso consentito.`);
    } else {
        alert(`Spiacente, ${name}. Password errata. Accesso negato.`);
    }
}