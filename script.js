document.getElementById('feelBetterButton').addEventListener('click', function() {
    let messages = [
        "You're strong and capable!",
        "Take a deep breath and relax. You've got this.",
        "Remember, self-care is important. Treat yourself gently."
    ];

    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('comfortMessage').textContent = messages[randomIndex];
});
