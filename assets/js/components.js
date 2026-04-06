/* ============================================
   CRAFTED WEBWORKS — SHARED COMPONENTS
   ============================================ */

const CW = {

  /* Detect path prefix */
  p: () => location.pathname.includes('/pages/') ? '../' : './',

  /* Logo */
  logo: (size=40) => `
  <img src="${CW.p()}assets/images/logo.png" alt="Crafted Webworks" width="${size}" height="${size}"/>  
  `,

  navbar: (active='') => {
    const p = CW.p();
    const links = [
      ['Home', p+'index.html', 'home'],
      ['About', p+'pages/about.html', 'about'],
      ['Services', p+'pages/services.html', 'services'],
      ['Portfolio', p+'pages/portfolio.html', 'portfolio'],
      ['Pricing', p+'pages/pricing.html', 'pricing'],
    ];
    const navLinks = links.map(([label, href, key]) =>
      `<a href="${href}" class="${active===key?'active':''}">${label}</a>`
    ).join('');
    const mobileLinks = links.map(([label, href]) =>
      `<a href="${href}">${label}</a>`
    ).join('');

    return `
    <nav class="navbar" id="main-nav">
      <a href="${p}index.html" class="nav-logo">
        ${CW.logo(70)}
        <div>
          <div class="logo-text">Crafted <span>Webworks</span></div>
        </div>
      </a>
      <div class="nav-links">
        ${navLinks}
        <a href="${p}pages/contact.html" class="btn-nav">Get a Quote</a>
      </div>
      <div class="hamburger" id="ham"><span></span><span></span><span></span></div>
    </nav>
    <div class="mobile-nav" id="mob-nav">
      ${mobileLinks}
      <a href="${p}pages/contact.html" class="btn-primary" style="justify-content:center;margin-top:.25rem;">Get a Quote →</a>
    </div>`;
  },

  footer: () => {
    const p = CW.p();
    return `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${p}index.html" class="nav-logo" style="margin-bottom:.75rem;display:inline-flex;">
            ${CW.logo(34)}
            <div style="margin-left:10px;">
              <div class="logo-text" style="color:#fff;">Crafted <span>Webworks</span></div>
            </div>
          </a>
          <p>We build websites, portals & apps that help businesses grow online. Just starting up — and ready to craft your digital presence.</p>
          <div class="footer-socials">
            <a href="https://www.instagram.com/CRAFTED_WEBWORKS/" target="_blank" rel="noopener" class="soc-btn" title="Instagram">📸</a>
            <a href="https://wa.me/918977655682?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20web%20project!" target="_blank" rel="noopener" class="soc-btn" title="WhatsApp">💬</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="${p}index.html">Home</a></li>
            <li><a href="${p}pages/about.html">About</a></li>
            <li><a href="${p}pages/services.html">Services</a></li>
            <li><a href="${p}pages/portfolio.html">Portfolio</a></li>
            <li><a href="${p}pages/pricing.html">Pricing</a></li>
            <li><a href="${p}pages/contact.html">Contact</a></li>
            <li><a href="${p}pages/privacypolicy.html">Privacy Policy</a></li>
            <li><a href="${p}pages/termsandconditions.html">Terms & Conditions</a></li>

          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:craftedwebworks@gmail.com">craftedwebworks@gmail.com</a></li>
            <li><a href="https://wa.me/918977655682" target="_blank">+91 89776 55682</a></li>
            <li><a href="https://www.instagram.com/CRAFTED_WEBWORKS/" target="_blank">@CRAFTED_WEBWORKS</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom hidden">
        <p>© ${new Date().getFullYear()} <span>CRAFTED WEBWORKS</span>. All rights reserved.</p>
        <p style="font-size:.78rem;color:#475569;">Built with ❤️</p>
      </div>
    </footer>

    <!-- Floating Buttons -->
    <div class="float-actions">
      <a href="https://wa.me/918977655682?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20web%20project!" target="_blank" rel="noopener" class="float-btn fb-wa" aria-label="WhatsApp">
        <span class="float-tip">Chat on WhatsApp</span>💬
      </a>
      <a href="https://www.instagram.com/CRAFTED WEBWORKS/" target="_blank" rel="noopener" class="float-btn fb-ig" aria-label="Instagram">
        <span class="float-tip">@CRAFTED WEBWORKS</span>📸
      </a>
      <button class="float-btn fb-top" id="top-btn" aria-label="Back to top">
        <span class="float-tip">Back to top</span>↑
      </button>
    </div>`;
  },

  init: (activePage='') => {
    document.getElementById('nav-root')?.insertAdjacentHTML('afterbegin', CW.navbar(activePage));
    document.getElementById('footer-root')?.insertAdjacentHTML('afterbegin', CW.footer());
  }
};
