// Initialize EmailJS
emailjs.init("4Y53yA4ZJJHS6J1kI"); // Replace with your actual EmailJS user ID

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const serviceId = "service_z1oz3fn";
    const templateId = "template_ju0itkf";

    // Send the email via EmailJS
    emailjs.send(serviceId, templateId, params)
    .then(
        res => {
            // Clear form fields after sending the email
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully.");
        }
    )
    .catch(err => {
        console.error(err);
        alert("Something went wrong. Please try again.");
    });
}
