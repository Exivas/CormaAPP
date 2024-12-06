document.getElementById('deudaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los datos del formulario
    const deudor = document.getElementById('deudor').value;
    const monto = parseFloat(document.getElementById('monto').value);
    const fechaVencimiento = document.getElementById('fechaVencimiento').value;
  
    // Validación básica
    if (!deudor || !monto || !fechaVencimiento) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Crear una nueva fila en la tabla
    const tabla = document.getElementById('tablaDeudas').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();
  
    // Calcular el estado de la deuda
    const estado = calcularEstadoDeuda(fechaVencimiento);
  
    nuevaFila.insertCell(0).textContent = fechaVencimiento;
    nuevaFila.insertCell(1).textContent = deudor;
    nuevaFila.insertCell(2).textContent = `$${monto.toFixed(2)}`;
    const estadoCell = nuevaFila.insertCell(3);
    estadoCell.textContent = estado.text;
    estadoCell.className = estado.className;
    const accionesCell = nuevaFila.insertCell(4);
    accionesCell.innerHTML = `
      <button onclick="marcarPagada(this)">Marcar como Pagada</button>
      <button onclick="eliminarDeuda(this)">Eliminar</button>
    `;
  
    // Limpiar los campos del formulario
    document.getElementById('deudaForm').reset();
    actualizarResumen();
  });
  
  // Función para calcular el estado de la deuda
  function calcularEstadoDeuda(fechaVencimiento) {
    const hoy = new Date();
    const vencimiento = new Date(fechaVencimiento);
    const estado = {
      text: "Pendiente",
      className: "estado-pendiente"
    };
  
    if (vencimiento < hoy) {
      estado.text = "Vencida";
      estado.className = "estado-vencida";
    } else if (vencimiento <= hoy.setDate(hoy.getDate() + 7)) {
      estado.text = "Próxima a Vencer";
      estado.className = "estado-pendiente";
    }
  
    return estado;
  }
  
  // Función para marcar una deuda como pagada
  function marcarPagada(button) {
    const fila = button.parentElement.parentElement;
    const estadoCell = fila.cells[3];
    estadoCell.textContent = "Pagada";
    estadoCell.className = "estado-pagada";
    actualizarResumen();
  }
  
  // Función para eliminar una deuda
  function eliminarDeuda(button) {
    const fila = button.parentElement.parentElement;
    fila.remove();
    actualizarResumen();
  }
  
  // Función para actualizar el resumen de deudas
  function actualizarResumen() {
    const filas = document.getElementById('tablaDeudas').getElementsByTagName('tbody')[0].rows;
    let totalPendientes = 0;
    let totalPagadas = 0;
  
    for (let i = 0; i < filas.length; i++) {
      const monto = parseFloat(filas[i].cells[2].textContent.replace('$', ''));
      const estado = filas[i].cells[3].textContent;
  
      if (estado === "Pagada") {
        totalPagadas += monto;
      } else {
        totalPendientes += monto;
      }
    }
  
    document.getElementById('totalPendientes').textContent = `$${totalPendientes.toFixed(2)}`;
    document.getElementById('totalPagadas').textContent = `$${totalPagadas.toFixed(2)}`;
  }
  
  // Función para ordenar la tabla por una columna
  function ordenarPor(columna) {
    const tabla = document.getElementById("tablaDeudas");
    const filas = Array.from(tabla.rows).slice(1);
    const indiceColumna = {
      "fechaVencimiento": 0,
      "deudor": 1,
      "monto": 2
    }[columna];
  
    filas.sort((filaA, filaB) => {
      const valorA = filaA.cells[indiceColumna].textContent;
      const valorB = filaB.cells[indiceColumna].textContent;
  
      if (columna === "monto") {
        return parseFloat(valorA.replace('$', '')) - parseFloat(valorB.replace('$', ''));
      }
  
      return valorA.localeCompare(valorB);
    });
  
    filas.forEach(fila => tabla.appendChild(fila));
  }
  