// Version 2: Con eventos y manipulacion dinamica
const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");
const mensajeError = document.querySelector("#mensajeError");
const inputBuscar = document.querySelector("#inputBuscar");

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = inputTarea.value.trim();

  if (texto === "") {
    mensajeError.textContent = "Por favor escribe una tarea valida.";
    return;
  }
  mensajeError.textContent = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto;

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Eliminar";
  btnBorrar.classList.add("btn-borrar");

  btnBorrar.addEventListener("click", () => {
    li.remove();
  });

  span.addEventListener("click", () => {
    li.classList.toggle("completada");
  });

  li.appendChild(span);
  li.appendChild(btnBorrar);
  listaTareas.appendChild(li);

  inputTarea.value = "";
});

inputBuscar.addEventListener("input", () => {
  const filtro = inputBuscar.value.toLowerCase();
  const items = listaTareas.querySelectorAll("li");

  items.forEach((item) => {
    const texto = item.querySelector("span").textContent.toLowerCase();
    if (texto.includes(filtro)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
