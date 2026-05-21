function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let feedback = document.getElementById("feedback");

    // Form validation
    if (name === "" || email === "" || message === "") {
        feedback.style.color = "red";
        feedback.innerText = "Please fill in all fields.";
        return;
    }

    if (message.length > 300) {
        feedback.style.color = "red";
        feedback.innerText = "Message must be under 300 characters.";
        return;
    }

    feedback.style.color = "#22d3ee";
    feedback.innerText = "Message sent successfully!";

    event.target.submit(); 
}

let messageBox = document.getElementById("message");

if (messageBox) {
    messageBox.addEventListener("input", function () {
        let count = this.value.length;
        let charCount = document.getElementById("charCount");
        
        charCount.innerText = count + " / 300";
        
        // Character counter
        if (count > 300) {
            charCount.style.color = "red";
        } else {
            charCount.style.color = "#94a3b8";
        }
    });
}