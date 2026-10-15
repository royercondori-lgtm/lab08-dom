// Version 3: Orientada a Objetos (Clase Tarea y GestorTareas)
class Tarea {
  constructor(id, titulo) {
    this.id = id;
    this.titulo = titulo;
    this.completada = false;
  }

  toggleCompletada() {
    this.completada = !this.completada;
  }

  obtenerEstado() {
    return this.completada ? "Completada" : "Pendiente";
  }
}

class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(titulo) {
    const nuevaTarea = new Tarea(Date.now(), titulo);
    this.tareas.push(nuevaTarea);
    return nuevaTarea;
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
  }
}

const gestor = new GestorTareas();

const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");
const mensajeError = document.querySelector("#mensajeError");
const inputBuscar = document.querySelector("#inputBuscar");

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = inputTarea.value.trim();

  if (texto === "") {
    mensajeError.textContent = "Por favor, escribe una tarea valida.";
    return;
  }
  mensajeError.textContent = "";

  const objetoTarea = gestor.agregarTarea(texto);
  renderizarTarea(objetoTarea);

  inputTarea.value = "";
});

function renderizarTarea(tareaObj) {
  const li = document.createElement("li");
  li.dataset.id = tareaObj.id;

  const span = document.createElement("span");
  span.textContent = tareaObj.titulo;

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Eliminar";
  btnBorrar.classList.add("btn-borrar");

  btnBorrar.addEventListener("click", () => {
    gestor.eliminarTarea(tareaObj.id);
    li.remove();
  });

  span.addEventListener("click", () => {
    tareaObj.toggleCompletada();
    li.classList.toggle("completada");
  });

  li.appendChild(span);
  li.appendChild(btnBorrar);
  listaTareas.appendChild(li);
}

inputBuscar.addEventListener("input", () => {
  const filtro = inputBuscar.value.toLowerCase();
  const items = listaTareas.querySelectorAll("li");

  items.forEach((item) => {
    const texto = item.querySelector("span").textContent.toLowerCase();
    item.style.display = texto.includes(filtro) ? "flex" : "none";
  });
});
