const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive:true });

  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  const bookingForm = document.getElementById('bookingForm');
  const formSuccess = document.getElementById('formSuccess');
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccess.classList.add('show');
    bookingForm.reset();
    formSuccess.scrollIntoView({ behavior:'smooth', block:'nearest' });
  });

  const dateInput = document.getElementById('date');
  dateInput.min = new Date().toISOString().split('T')[0];