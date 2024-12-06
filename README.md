# Proyecto CormaAPP

## Descripción
CormaAPP es una aplicación web diseñada para gestionar deudas y pedidos. La aplicación permite a los usuarios registrar, buscar y gestionar deudas y pedidos de manera eficiente.

## Estructura del Proyecto
- **src**
  - **pages**
    - **deudas**
      - `deudas.html`: Página para registrar y gestionar deudas.
      - `deudas.js`: Lógica para manejar el registro, estado y eliminación de deudas.
    - **pedidos**
      - `pedidos.html`: Página para registrar y gestionar pedidos.
      - `pedidos.js`: Lógica para manejar el registro y eliminación de pedidos.
  - `index.html`: Página principal de la aplicación.
  - `inicio.js`: Archivo JavaScript para la funcionalidad inicial.

## Estilo y Diseño
- **Paleta de Colores**: Utiliza colores en formato hexadecimal como #00c6ff (Primario) y #FFFFFF (Secundario).
- **Iconos**: Se utilizan iconos de la librería Font Awesome.
- **CSS**: Se recomienda no usar anidaciones en el CSS.

## Funcionalidades

### Gestión de Deudas
- Registro de nuevas deudas con información del deudor, monto y fecha de vencimiento.
- Cálculo del estado de la deuda (Pendiente, Vencida, Próxima a Vencer).
- Funcionalidad para marcar deudas como pagadas o eliminarlas.
- Resumen de deudas pendientes y pagadas.

### Gestión de Pedidos
- Registro de nuevos pedidos con información del cliente, producto, cantidad y fecha.
- Funcionalidad para eliminar pedidos.
- Ordenamiento de la tabla de pedidos por diferentes criterios.
  
## Uso
Los usuarios pueden interactuar con formularios para registrar deudas y pedidos, buscar elementos específicos y ver resúmenes de sus registros. La aplicación está diseñada para ser intuitiva y fácil de usar, con un enfoque en la gestión eficiente de información financiera y de pedidos.


# Futura ISUES

## 1. Mejora de la Seguridad en el Inicio de Sesión
- **Validación de Usuario:** Implementar una lógica de validación de usuario más robusta en el servidor en lugar de solo en el cliente.
- **Mensajes de Error:** Evitar mostrar mensajes de error genéricos. Proporcionar mensajes más específicos para mejorar la experiencia del usuario.

## 2. Mejora de la Experiencia de Usuario
- **Feedback Visual:** Añadir feedback visual al botón de inicio de sesión mientras se procesa la solicitud, como un spinner o un cambio de color.
- **Cierre Automático del Modal:** Considerar cerrar automáticamente el modal de éxito después de unos segundos para mejorar la fluidez de la experiencia.

