const boton = document.querySelector("#boton-importante");

boton.addEventListener("click", () => {
    boton.textContent = "Aplicado!";
    boton.style.backgroundColor = "#4caf50";
    boton.style.cursor = "not-allowed";
    boton.disabled = true;
});
