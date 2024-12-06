document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
  
    // Validación básica
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor, introduce un correo válido.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
  
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
  
    // Mostrar modal de éxito
    const modal = document.getElementById('successModal');
    modal.classList.add('show');
  
    // Limpiar los campos del formulario al cerrar el modal
    document.getElementById('closeModal').addEventListener('click', function () {
      modal.classList.remove('show');
      document.getElementById('registrationForm').reset();
    });
  });
  