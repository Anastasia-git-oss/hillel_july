const btnModal = document.getElementById('modalBtn')
const tooltip = new bootstrap.Tooltip(btnModal);



btnModal.addEventListener('click', () => {
    const modalBox = document.querySelector('.modal');
    const modal = new bootstrap.Modal(modalBox);
    modal.show();

})

const btnAlert = document.getElementById('alertBtn');

const boxAlert = document.getElementById('alert');

btnAlert.addEventListener('click', () => {
    boxAlert.classList.toggle('d-none');
})