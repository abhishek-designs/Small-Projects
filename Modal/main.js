const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const modalBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',modalOut);

function openModal(e)
{
    modal.style.opacity = 1;
    modal.style.pointerEvents = 'all';
    modalContent.style.transform = 'translateY(0)';
    modalContent.style.opacity = 1;

}

function closeModal(e)
{
    modal.style.opacity = 0;
    modal.style.pointerEvents = 'none';
    modalContent.style.transform = 'translateY(-50px)';
    modalContent.style.opacity = 0;
}

function modalOut(e)
{
    if(e.target == modal)
    {
        closeModal();
    }
}
// setTimeout(openModal,800);