(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
    link: document.querySelectorAll('.mobile-menu-nav-link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.link.forEach(link => link.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();