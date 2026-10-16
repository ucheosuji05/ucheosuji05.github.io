document.getElementById('y').textContent = new Date().getFullYear();
const io = 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 }) : null;
document.querySelectorAll('.card').forEach(c => { if (io) { c.classList.add('rv'); io.observe(c); } });
