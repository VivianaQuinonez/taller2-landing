// Obtener elementos del DOM
const modal = document.getElementById("suscribir");
const confirmationModal = document.getElementById('confirmacion');
const btn = document.querySelector(".open-modal-btn");
const span = document.getElementsByClassName("close")[0];
const body = document.body;
const returnButton = document.getElementById('returnButton');

// Abrir modal al hacer clic en el botón
btn.onclick = function() {
    modal.style.display = "block";
    body.classList.add("modal-open");
}

// Cerrar modal al hacer clic en la X
span.onclick = function() {
    modal.style.display = "none";
    body.classList.remove("modal-open");
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.classList.remove("modal-open");
    }
}

// Manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    modal.style.display = "none";
    body.classList.remove("modal-open");
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Insertar los valores en el modal de confirmación
    document.getElementById('userName').textContent = name;
    document.getElementById('userEmail').textContent = email;
    
    // Cerrar el modal del formulario
    window.location.hash = '#';
    
    // Abrir el modal de confirmación
    window.location.hash = '#confirmacion';
});

// Agregar evento click para volver al inicio
returnButton.addEventListener('click', function() {
    // Cerrar el modal de confirmación
    confirmationModal.style.display = "none";
    body.classList.remove("modal-open");
    
    // Volver al inicio (puedes ajustar esto según necesites)
    window.location.href = "#"; // Para ir al inicio de la página
    // O alternativamente: window.location.href = "tu-url-de-inicio.html";
});