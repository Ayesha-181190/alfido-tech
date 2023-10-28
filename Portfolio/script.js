// JavaScript for image gallery
function openImage(imageUrl) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    
    modal.style.display = "block";
    modalImage.src = imageUrl;
}

function closeImage() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// JavaScript for form submission and confirmation
function submitForm(event) {
    event.preventDefault();
    var contactForm = document.getElementById("contactForm");
    var confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerText = "Your message has been sent. Thank you!";
    contactForm.reset();
}
