document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tickets = document.getElementById('tickets').value;

    // Create confirmation message
    const confirmationMessage = `Thank you, ${name}! Your booking for ${tickets} ticket(s) has been received. A confirmation email will be sent to ${email}.`;

    // Show confirmation
    document.getElementById('confirmationMessage').textContent = confirmationMessage;
    document.getElementById('confirmation').classList.remove('hidden');
    
    // Optionally clear the form
    document.getElementById('bookingForm').reset();
});
