document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
  
    // Simulación de un inicio de sesión exitoso para demostración
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Previene que el formulario recargue la página
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Lógica de validación de usuario 
   
        // Mostrar modal de éxito
        openModal();
        // Redirigir a menu.html después de un retraso
        setTimeout(function() {
          window.location.href = "./src/Pages/menu/menu.html"; 
        }, 2000); // 2 segundos de retraso antes de redirigir
       
        // Mostrar mensaje de error
        errorMessage.style.display = "block";
    
    });
  
    // Función para abrir el modal de éxito
    function openModal() {
      const modal = document.getElementById('success-modal');
      modal.classList.add('show');
    }
  
    // Función para cerrar el modal de éxito
    function closeModal() {
      const modal = document.getElementById('success-modal');
      modal.classList.remove('show');
    }
  });
  