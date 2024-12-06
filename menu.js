// Establecer la sección activa según la URL
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    // Asignar la clase "active" al enlace correspondiente
    links.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
});
