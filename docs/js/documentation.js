// window scroll top
const scrollToTop = () => {
   window.scrollTo(0, 0);
};

// modal
const modal = document.querySelector('#modal');
const openModalButton = document.querySelector('#open-modal-btn');
const closeModalButton = document.querySelector('#close-modal-btn');
const closeModalButtonIcon = document.querySelector('#close-modal-btn-icon');
const overlay = document.querySelector('#modal-overlay');

openModalButton.addEventListener('click', () => {
   modal.classList.add('open');
   overlay.classList.add('open');
});

closeModalButton.addEventListener('click', closeModal);
closeModalButtonIcon.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
   modal.classList.remove('open');
   overlay.classList.remove('open');
}

// nav
const sidebarOpen = document.querySelector('#sidebarCollapse');
const sidebarClose = document.querySelector('#sidebarCollapseX');
const sidebar = document.querySelector('.sidebar-nav');
const overlayNav = document.querySelector('.sidebar-overlay');

sidebarOpen.addEventListener('click', () => {
   sidebar.classList.add('active');
   overlayNav.classList.add('active');
});

function closeSidebar() {
   sidebar.classList.remove('active');
   overlayNav.classList.remove('active');
}

sidebarClose.addEventListener('click', closeSidebar);
overlayNav.addEventListener('click', closeSidebar);

// toast
const toast = document.querySelector('#toast-demo');
const openToastBtn = document.querySelector('#toast-demo-open');
const closeToastBtn = document.querySelector('#toast-demo-close');

openToastBtn.addEventListener('click', () => {
   toast.classList.add('open');
});
closeToastBtn.addEventListener('click', closeToast);

function closeToast() {
   toast.classList.remove('open');
}
