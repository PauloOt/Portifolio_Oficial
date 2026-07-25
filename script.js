document.getElementById('yr').textContent = new Date().getFullYear();

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
},{threshold:.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay = (Math.min(i,6)*60)+'ms';
  io.observe(el);
});
