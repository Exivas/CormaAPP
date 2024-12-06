document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los datos del formulario
    const cliente = document.getElementById('cliente').value;
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const fecha = document.getElementById('fecha').value;
  
    // Validación básica
    if (!cliente || !producto || !cantidad || !fecha) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Crear una nueva fila en la tabla
    const tabla = document.getElementById('tablaPedidos').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();
  
    nuevaFila.insertCell(0).textContent = fecha;
    nuevaFila.insertCell(1).textContent = cliente;
    nuevaFila.insertCell(2).textContent = producto;
    nuevaFila.insertCell(3).textContent = cantidad;
    const accionesCell = nuevaFila.insertCell(4);
    accionesCell.innerHTML = `<button onclick="eliminarPedido(this)">Eliminar</button>`;
  
    // Limpiar los campos del formulario
    document.getElementById('pedidoForm').reset();
  });
  
  // Función para eliminar un pedido
  function eliminarPedido(btn) {
    const fila = btn.closest('tr');
    fila.remove();
  }
  
  // Función para ordenar la tabla
  function ordenarPor(columna) {
    const tabla = document.getElementById('tablaPedidos');
    const filas = Array.from(tabla.rows).slice(1); // Omitir la cabecera
  
    filas.sort((a, b) => {
      const valorA = a.cells[columna === 'fecha' ? 0 : columna === 'cliente' ? 1 : columna === 'producto' ? 2 : 3].textContent.trim();
      const valorB = b.cells[columna === 'fecha' ? 0 : columna === 'cliente' ? 1 : columna === 'producto' ? 2 : 3].textContent.trim();
  
      if (columna === 'fecha') {
        return new Date(valorA) - new Date(valorB); // Ordenar por fecha
      } else {
        return valorA.localeCompare(valorB); // Ordenar alfabéticamente
      }
    });
  
    filas.forEach(fila => tabla.appendChild(fila));
  }
  