/* ============================================
   CRAFTED WEBWORKS — MAIN JS
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll effects ── */
  const nav = document.getElementById('main-nav');
  const topBtn = document.getElementById('top-btn');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', scrollY > 50);
    topBtn?.classList.toggle('show', scrollY > 400);
  }, { passive: true });

  /* ── Back to top ── */
  topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── Hamburger ── */
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob-nav');
  ham?.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob?.classList.toggle('open');
  });
  mob?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham?.classList.remove('open');
    mob?.classList.remove('open');
  }));

  /* ── Reveal on scroll ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ── Portfolio filter ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.port-card').forEach(card => {
        card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
      });
    });
  });

  /* ── Typewriter ── */
  const tw = document.getElementById('typewriter');
  if (tw) {
    const words = ['Business Portals', 'Portfolio Sites', 'Online Stores', 'Web Applications', 'Landing Pages'];
    let wi = 0, ci = 0, del = false;
    const tick = () => {
      const w = words[wi];
      tw.textContent = del ? w.slice(0, ci--) : w.slice(0, ci++);
      if (!del && ci > w.length) { del = true; setTimeout(tick, 1400); return; }
      if (del && ci < 0) { del = false; wi = (wi + 1) % words.length; }
      setTimeout(tick, del ? 55 : 95);
    };
    tick();
  }

  /* ── Counter ── */
  document.querySelectorAll('[data-count]').forEach(el => {
    const io2 = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const target = +el.dataset.count;
      const sfx = el.dataset.suffix || '';
      let cur = 0;
      const s = target / 50;
      const t = setInterval(() => {
        cur = Math.min(cur + s, target);
        el.textContent = Math.floor(cur) + sfx;
        if (cur >= target) clearInterval(t);
      }, 20);
      io2.unobserve(el);
    }, { threshold: 0.5 });
    io2.observe(el);
  });

  /* ── Contact form ── */
  const form = document.getElementById('cw-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const orig = btn.textContent;
    btn.textContent = 'Sending...'; btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Sent! We\'ll be in touch soon.';
      btn.style.background = '#16A34A';
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; btn.style.background = ''; form.reset(); }, 3500);
    }, 1200);
  });

  /* ── FAQ ── */
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

});
