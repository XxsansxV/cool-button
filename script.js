const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     entry.target.classList.add('visible'); 
    }
  });
});

document.querySelectorAll('.PopsIn, .SlideFromRight').forEach((el, index) => {
  el.style.setProperty('--index', index);
  observer.observe(el);
});

document.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--mouse-x', e.clientX + 'px');
  document.body.style.setProperty('--mouse-y', e.clientY + 'px'); 
});
