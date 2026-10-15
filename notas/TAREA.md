# Tarea: Mi componente interactivo

## Componente elegido

Lista de tareas interactiva (Gestor de Tareas) con buscador en tiempo real, marca de completado, eliminación y validaciones.

## Version 1: solo DOM

En esta primera versión inserté un elemento de forma dinámica usando JavaScript al cargar la página.

- **Qué agregué:** Creación de un elemento `<li>` mediante `createElement` e inserción con `appendChild`.
- **Por qué:** Para verificar la integración básica con el DOM.
- **Qué cambió:** Aparece una tarea por defecto en la lista al abrir la página.

## Version 2: con eventos

Agregué interactividad directa mediante la escucha de eventos del usuario en tiempo real.

- **Qué agregué:** Listeners de eventos para `submit` (formulario), `click` (para tachar y borrar tareas) e `input` (para el buscador en tiempo real).
- **Por qué:** Para permitir al usuario manipular la lista dinámicamente sin necesidad de recargar la página.
- **Qué cambió:** La página reacciona inmediatamente al tipear texto, hacer clic sobre una tarea o presionar el botón de eliminar.

## Version 3: con clases y objetos

## Version 3: con clases y objetos

Estructuré la solución aplicando Programación Orientada a Objetos para separar la lógica de negocio y los datos de la representación en el DOM.

- **Qué agregué:** Implementación de la clase `Tarea` (con id, título y estado completado) y la clase `GestorTareas` para administrar el listado.
- **Por qué:** Para encapsular las propiedades y métodos de cada registro y mantener un estado desacoplado de la interfaz.
- **Qué cambió:** Las tareas se crean, modifican y eliminan a través de métodos de instancia (`toggleCompletada`, `eliminarTarea`), garantizando una arquitectura más limpia y escalable.

## Donde uso DOM, eventos y objetos

## Donde uso DOM, eventos y objetos

| Pieza  | Linea de tu codigo donde aparece                  | Para que sirve                                                                     |
| ------ | ------------------------------------------------- | ---------------------------------------------------------------------------------- |
| DOM    | `listaTareas.appendChild(li);`                    | Inserta dinámicamente el elemento HTML de la tarea dentro de la lista visible      |
| Evento | `formTarea.addEventListener("submit", ...)`       | Escucha el envío del formulario para agregar tareas sin recargar la página         |
| Objeto | `const objetoTarea = gestor.agregarTarea(texto);` | Instancia la tarea mediante la clase `Tarea` asignando ID, título y estado inicial |

## Pruebas realizadas

## Pruebas realizadas

| Accion                             | Resultado esperado                     | Resultado obtenido                             | Cumple (Si/No) |
| ---------------------------------- | -------------------------------------- | ---------------------------------------------- | -------------- |
| Enviar formulario vacío            | Muestra mensaje de error en la página  | Muestra "Por favor, escribe una tarea valida." | Sí             |
| Agregar tarea "Estudiar JS"        | Crea el elemento `<li>` en la lista    | La tarea aparece junto a su botón Eliminar     | Sí             |
| Hacer clic en el texto de la tarea | Tacha el texto y cambia su estado      | El texto se tacha y cambia a color gris        | Sí             |
| Hacer clic en "Eliminar"           | Remueve la tarea del DOM y de la lista | La tarea desaparece completamente              | Sí             |
| Escribir en el buscador "Estudiar" | Filtra las tareas en tiempo real       | Muestra solo los elementos coincidentes        | Sí             |

## Por que me diseño asi mi clase

## Por que me diseño asi mi clase

Diseñé la clase `Tarea` con los atributos `id`, `titulo` y `completada` para mantener organizada la información esencial de cada tarea de forma independiente. Usé el método `toggleCompletada()` para permitir alternar el estado entre pendiente y completado directamente en el objeto, y `obtenerEstado()` para consultar de forma sencilla cómo se encuentra la tarea. Esta estructura encapsula la lógica de los datos, evitando variables globales dispersas y haciendo que el código sea modular, fácil de mantener y extensible para futuras funcionalidades.
