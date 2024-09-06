const menuIcon = document.querySelector('#menu-icone')
const navLinks = document.querySelector('.nav-Links')

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

(function(){
    emailjs.init("5jwy8S9rg7nnaYy6b"); // Remplacez par votre USER_ID EmailJS
  })();

document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page
    
        // Remplacez 'YOUR_SERVICE_ID' et 'YOUR_TEMPLATE_ID' par les vôtres
    emailjs.sendForm('service_9', 'template_vxb26h1', this)
        .then(function() {
            alert('Message envoyé avec succès !');
        }, function(error) {
            alert('Erreur lors de l\'envoi : ' + JSON.stringify(error));
        });
});