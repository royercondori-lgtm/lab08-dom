# Tarea: Mi componente interactivo

## Componente elegido

Lista de tareas interactiva (Gestor de tareas) con buscador en tiempo real, marca de completado, eliminación de elementos y validación.

## Version 1: solo DOM

En esta primera versión agregué un elemento inicial de lista dinámicamente usando JavaScript.

- **Qué agregué:** Creación de un elemento `<li>` mediante `document.createElement` e inserción con `appendChild`.
- **Por qué:** Para verificar la estructura básica de manipulación del árbol DOM.
- **Qué cambió:** La página muestra un texto dinámico insertado directamente desde JavaScript al cargar.

```javascript
const listaTareas = document.querySelector("#listaTareas");
const liPrueba = document.createElement("li");
liPrueba.textContent = "Tarea de prueba inicial (DOM)";
listaTareas.appendChild(liPrueba);
```
