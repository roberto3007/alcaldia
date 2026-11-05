document.addEventListener('DOMContentLoaded',()=>{
  const mobileBtn=document.getElementById('mobileMenuBtn'), mobileNav=document.getElementById('mobileNav');
  mobileBtn?.addEventListener('click',()=>{mobileNav.classList.toggle('open');mobileBtn.innerHTML=mobileNav.classList.contains('open')?'<i class="bi bi-x-lg"></i>':'<i class="bi bi-list"></i>';});
  mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');mobileBtn.innerHTML='<i class="bi bi-list"></i>';}));

  document.querySelectorAll('[data-filter-group="calls"] .filter-chip').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-filter-group="calls"] .filter-chip').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter=btn.dataset.filter;
      document.querySelectorAll('#callsGrid [data-category]').forEach(card=>{
        card.style.display=(filter==='all'||card.dataset.category===filter)?'':'none';
      });
    });
  });

  const modalEl=document.getElementById('detailModal');
  const detailModal=window.bootstrap?new bootstrap.Modal(modalEl):null;
  document.querySelectorAll('.detail-btn').forEach(btn=>btn.addEventListener('click',()=>{
    document.getElementById('modalTitle').textContent=btn.dataset.title||'Información';
    document.getElementById('modalDescription').textContent=btn.dataset.description||'Contenido demostrativo.';
    detailModal?.show();
  }));

  const toastEl=document.getElementById('demoToast');
  const toast=window.bootstrap?new bootstrap.Toast(toastEl,{delay:2600}):null;
  document.querySelectorAll('.search-trigger,.event-action').forEach(btn=>btn.addEventListener('click',()=>toast?.show()));

  const launcher=document.getElementById('chatLauncher'),panel=document.getElementById('chatPanel'),close=document.getElementById('chatClose');
  const messages=document.getElementById('chatMessages'),form=document.getElementById('chatForm'),input=document.getElementById('chatInput');
  const openChat=()=>{panel.classList.add('open');panel.setAttribute('aria-hidden','false');input.focus();};
  const closeChat=()=>{panel.classList.remove('open');panel.setAttribute('aria-hidden','true');};
  launcher.addEventListener('click',()=>panel.classList.contains('open')?closeChat():openChat());close.addEventListener('click',closeChat);
  function addMessage(text,who){const el=document.createElement('div');el.className=who==='user'?'user-message':'bot-message';el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight;}
  function answer(q){
    const s=q.toLowerCase();
    if(s.includes('tram'))return 'En la sección “Trámites y servicios” encontrarás accesos de orientación. Los requisitos y procedimientos deben confirmarse en los canales oficiales.';
    if(s.includes('convoc'))return 'Puedes consultar las convocatorias en la sección correspondiente. Esta propuesta contiene ejemplos demostrativos, no convocatorias vigentes verificadas.';
    if(s.includes('program'))return 'La sección de programas presenta tarjetas informativas de ejemplo. Para conocer apoyos vigentes, consulta la información oficial de la Alcaldía.';
    if(s.includes('evento')||s.includes('cultura')||s.includes('deport'))return 'La agenda muestra eventos de demostración. Las fechas, sedes y registros reales deben validarse con la Alcaldía.';
    if(s.includes('contact')||s.includes('tel')||s.includes('ubic'))return 'Para información vigente y canales de contacto, visita el portal institucional: vcarranza.cdmx.gob.mx.';
    if(s.includes('horario'))return 'No tengo un horario oficial verificado en esta demostración. Te recomiendo confirmarlo directamente en el portal institucional.';
    return 'Puedo orientarte sobre trámites, convocatorias, programas, eventos y contacto. ¿Qué tema te interesa?';
  }
  function send(q){const clean=q.trim();if(!clean)return;addMessage(clean,'user');input.value='';setTimeout(()=>addMessage(answer(clean),'bot'),500);}
  form.addEventListener('submit',e=>{e.preventDefault();send(input.value);});
  messages.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>send(b.dataset.question)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeChat();});
  /* ============ CARRUSEL HERO: interacciones ============ */
document.addEventListener('DOMContentLoaded', function () {
  // Pausar autoplay si el usuario prefiere movimiento reducido
  const carouselEl = document.getElementById('eventsCarousel');
  if (carouselEl) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      carouselEl.setAttribute('data-bs-interval', 'false');
    }
    // Reiniciar intervalo al interactuar (Bootstrap lo hace solo, pero por claridad)
    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl, {
      interval: prefersReduced ? false : 5500,
      ride: prefersReduced ? false : 'carousel',
      pause: 'hover'
    });
  }

  // Botones "Registrarme" del carrusel → toast de demostración
  document.querySelectorAll('.register-demo').forEach(btn => {
    btn.addEventListener('click', () => {
      const toastEl = document.getElementById('demoToast');
      if (toastEl && window.bootstrap) {
        const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 3200 });
        toast.show();
      }
    });
  });
});
});
