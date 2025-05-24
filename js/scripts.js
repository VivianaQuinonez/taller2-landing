// Obtener elementos del DOM
const formModal = document.getElementById('suscribir');
const confirmationModal = document.getElementById('confirmacion');
const contactForm = document.getElementById('contactForm');


function openModal(modal) {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = "none";
    });
    document.body.classList.remove("modal-open");
}

document.querySelector('.open-modal-btn').addEventListener('click', () => {
    closeAllModals();
    openModal(formModal);
    contactForm.reset();
});

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    document.getElementById('userName').textContent = name;
    document.getElementById('userEmail').textContent = email;
    
    closeAllModals();
    openModal(confirmationModal);
});

document.getElementById('returnButton').addEventListener('click', () => {
    closeAllModals();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Cerrar al hacer click fuera
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeAllModals();
    }
});



