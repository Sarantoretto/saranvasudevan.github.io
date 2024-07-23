document.getElementById('feelBetterButton').addEventListener('click', function() {
    let messages = [
        "Thrishna, it's perfectly normal to experience mood swings during your period."
	"Thrishna, remember to stay hydrated to alleviate cramps."
	"Thrishna, take some time to relax and pamper yourself."
	"Thrishna, hot water bottles can be soothing for abdominal discomfort."
	"Thrishna, try gentle exercises like yoga to ease tension."
	"Thrishna, dark chocolate can boost your mood and energy levels."
	"Thrishna, it's okay to take breaks and prioritize self-care."
	"Thrishna, talking to loved ones can provide emotional support."
	"Thrishna, herbal teas like chamomile may help you unwind."
	"Thrishna, consider wearing comfortable clothing during this time."
	"Thrishna, a warm bath can be very comforting."
	"Thrishna, ensure you're getting enough rest to recharge."
	"Thrishna, nutritious meals with iron-rich foods can help replenish your energy."
	"Thrishna, journaling your feelings can be cathartic."
	"Thrishna, journaling your feelings can be cathartic."
	"Thrishna, practice deep breathing to calm your nerves."
	"Thrishna, don't hesitate to seek medical advice if you have concerns."
	"Thrishna, distractions like a good book or movie can be uplifting."
	"Thrishna, remember that this phase is temporary and will pass."
	"Thrishna, listen to your body's needs and take things at your own pace."
	"Thrishna, you're strong and capable of handling this with grace."
    ];

    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('comfortMessage').textContent = messages[randomIndex];
});
