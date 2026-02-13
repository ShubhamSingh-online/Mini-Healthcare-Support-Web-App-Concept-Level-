function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

// Form submissions (demo alert; replace with email.js or backend)
document.getElementById('patientForm').addEventListener('submit', e => { e.preventDefault(); alert('Patient support request sent!'); });
document.getElementById('volunteerForm').addEventListener('submit', e => { e.preventDefault(); alert('Volunteer registered!'); });
document.getElementById('contactForm').addEventListener('submit', e => { e.preventDefault(); alert('Message sent!'); });

// Chatbot (AI concept: rule-based FAQ matcher)
const faqs = {
    'fever': 'Fever symptoms: High temperature, chills, sweating. Rest, hydrate, see doctor if >101°F.',
    'cold': 'Common cold: Runny nose, sore throat. Use OTC meds, fluids; lasts 7-10 days.',
    'headache': 'Headache: Drink water, rest. If severe/persistent, consult doctor.',
    'appointment': 'Book via form or call +91-XXX-XXXXXXX.'
};

function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const query = input.value.toLowerCase();
    chatBox.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;
    
    let response = 'Sorry, I don\'t know that. Try: fever, cold, headache, appointment.';
    for (let key in faqs) {
        if (query.includes(key)) { response = faqs[key]; break; }
    }
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = '';
}
