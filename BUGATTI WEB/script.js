const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", async function(e) {

    e.preventDefault();

    message.innerHTML = "Sending...";
    message.style.color="white";

    const formData = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: formData
        });

        if(response.ok){
            message.innerHTML = "✅ Form submitted successfully";
            form.reset();
        } else {
            message.innerHTML = "❌ Error sending form";
        }

    } catch(error) {
        message.innerHTML = "❌ Network error";
    }

});