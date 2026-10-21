document.getElementById('yr').textContent = new Date().getFullYear();

// contato: os botões com data-contato (index e freelance) usam estes dados
const CONTATO = {
  whatsapp: '5511986755485',   // só números, com DDI e DDD
  email: 'paulo.dev0705@gmail.com',
  mensagem: 'Oi, Paulo! Vi seu portfólio e quero um orçamento para um projeto.',
};
document.querySelectorAll('[data-contato]').forEach(a=>{
  const tipo = a.dataset.contato, valor = CONTATO[tipo];
  if(!valor) return;
  const msg = encodeURIComponent(a.dataset.msg || CONTATO.mensagem);
  const assunto = encodeURIComponent(a.dataset.assunto || 'Orçamento de projeto');
  a.href = tipo === 'whatsapp'
    ? `https://wa.me/${valor}?text=${msg}`
    : `mailto:${valor}?subject=${assunto}&body=${msg}`;
  a.hidden = false;
});

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
},{threshold:.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay = (Math.min(i,6)*60)+'ms';
  io.observe(el);
});
