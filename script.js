const menuIcon = document.querySelector('#menu-icone')
const navLinks = document.querySelector('.nav-Links')

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
