/* =========================================================
   MAISON SAFFRON — script.js
   Restaurant e-commerce: menu, gallery, google reviews, wifi,
   cart, checkout, payment, social share, mobile navigation
   ========================================================= */

(function () {
  'use strict';

  /* =======================================================
     MENU DATA
     ======================================================= */
  var MENU = [
    { id: 'st1', cat: 'COFFEE', name: 'Espresso', desc: 'Strong and bold single-short espresso', price: 99, veg: true },
    { id: 'st2', cat: 'COFFEE', name: 'Americano', desc: 'Dubble-shot espresso finished with hot water', price: 119, veg: true }, 
    { id: 'st3', cat: 'COFFEE', name: 'Cappuccino', desc: 'Espresso topped with steamed milk and velvety foam', price: 169, veg: true },
    { id: 'st4', cat: 'COFFEE', name: 'Cafe Latte', desc: 'Smooth espresso blended with steamed milk', price: 169, veg: true },
    { id: 'st5', cat: 'COFFEE', name: 'Cafe Mocha', desc: 'Espresso blended with richchocolate and steamed milk', price: 189, veg: true },
    { id: 'st6', cat: 'COFFEE', name: 'Cafe Frappe', desc: 'Refreshing blended cold coffee.', price: 199, veg: true },
  
    { id: 'mn1', cat: 'CHILLED DRINKS', name: 'Ice Chocolate', desc: 'Rich, chilled chocolate drink.', price: 199,  veg: true, tag: "*Classic",tag:"*Oreo      +₹30",tag:"*KitKat      +₹30",tag:"*Nutella      +₹30" }, 
    { id: 'mn2', cat: 'CHILLED DRINKS', name: 'Blue Lagoon Mocktail', desc: 'A refreshing blend of Citus flavours with Sparkling soda.', price: 159, veg: true, tag: "Signature" },
    { id: 'mn3', cat: 'CHILLED DRINKS', name: 'Virgin Mojito', desc: 'A refreshing blend of mint, lime and sparkling soda.', price: 159, veg: true, tag: "Signature" },
    { id: 'mn4', cat: 'CHILLED DRINKS', name: 'TMT Signature Shake ', desc: 'Our signature creamy mango shake, served chilled.', price: 179, veg: true },
    { id: 'mn5', cat: 'CHILLED DRINKS', name: 'Strawberry Shake', desc: 'Creamy strawberry shake, served chilled.', price: 179, veg: true },

    { id: 'br1', cat: 'Biryani', name: 'Hyderabadi Chicken Biryani', desc: 'Dum-cooked long grain rice, saffron, fried onion, mirchi ka salan.', price: 690, veg: false, tag: 'Signature' },
    { id: 'br2', cat: 'Biryani', name: 'Vegetable Dum Biryani', desc: 'Seasonal vegetables, kewra, rose, mint, burani raita.', price: 590, veg: true },
    { id: 'br3', cat: 'Biryani', name: 'Prawn Biryani', desc: 'Tiger prawns, coastal masala, coconut, curry leaf.', price: 820, veg: false },

    { id: 'bd1', cat: 'Breads', name: 'Truffle Garlic Naan', desc: 'Black truffle butter, roasted garlic, coriander.', price: 180, veg: true },
    { id: 'bd2', cat: 'Breads', name: 'Laccha Paratha', desc: 'Layered whole wheat, ghee, flaked sea salt.', price: 140, veg: true },
    { id: 'bd3', cat: 'Breads', name: 'Kashmiri Naan', desc: 'Sweet naan, cherries, almond, coconut.', price: 190, veg: true },

    { id: 'ds1', cat: 'Desserts', name: 'Saffron Kulfi', desc: 'Slow-reduced milk, Iranian saffron, pistachio, rose syrup.', price: 320, veg: true, tag: "Chef's Pick" },
    { id: 'ds2', cat: 'Desserts', name: 'Gulab Jamun Cheesecake', desc: 'Baked cheesecake, cardamom, rose, warm jamun.', price: 380, veg: true },
    { id: 'ds3', cat: 'Desserts', name: 'Dark Chocolate Halwa', desc: '70% single-origin chocolate, atta halwa, sea salt, gold leaf.', price: 360, veg: true },

    { id: 'bv1', cat: 'Beverages', name: 'Masala Chai Flight', desc: 'Three brews — cardamom, ginger, saffron.', price: 260, veg: true },
    { id: 'bv2', cat: 'Beverages', name: 'Rose Lassi', desc: 'House yoghurt, rose petal, pistachio, honey.', price: 240, veg: true },
    { id: 'bv3', cat: 'Beverages', name: 'Kokum Cooler', desc: 'Coastal kokum, black salt, mint, soda.', price: 220, veg: true }
  ];

  var CATEGORIES = ['All'].concat(
    MENU.map(function (d) { return d.cat; })
        .filter(function (c, i, a) { return a.indexOf(c) === i; })
  );

  /* =======================================================
     GALLERY DATA
     ======================================================= */
  var GALLERY = [
    { src: '01.webp', caption: 'The Dining Hall', hint: 'Featured',  featured: true },
    { src: '04.webp', caption: 'Balcony',   hint: '1200×1200' },
    { src: '05.webp', caption: 'Front ', hint: '1200×1200' },
    { src: '02.webp', caption: 'Private Dining',  hint: '1200×1200' },
    { src: '03.webp', caption: 'Dessert Counter', hint: '1200×1200' },
    { src: '06.webp', caption: 'The Dining Hall',     hint: '1200×1200' },
    { src: '07.webp', caption: 'A dining hall Snapshot',      hint: '1200×1200' },
    { src: '08.webp', caption: 'Front View', hint: '1200×1200' }
  ];

  /* =======================================================
     GOOGLE REVIEWS DATA
     ======================================================= */
  var REVIEWS = [
    {
      name: 'NITYANAND SINGH',
      initials: 'NS',
      rating: 5,
      text: 'One of the asthetic retro cafe bistro resort in Chapra city Food is super testy Best Ingredients Best place to hangout in Chapra city Best price restaurant.',
      date: '4 months ago',
      verified: true
    },
    {
      name: 'The Bihari Guys',
      initials: 'TBG',
      rating: 5,
      text: ' Hey This is Vishal Sharma From The Bihari Guys YouTube Channel...Love to Explore New Places &Making Videos...Subscribe My Channel for Funny Videos & Celebrities Interviews...',
      date: '4 month ago',
      verified: true
    },
    {
      name: 'Sunny Singh',
      initials: 'SS',
      rating: 5,
      text: 'One of the best cafe near chapra good vibes and peaceful environment Went for the Hyderabadi biryani and stayed for the dessert. Long grain rice cooked perfectly, mirchi ka salan had a real kick. Portions are generous. Great value for the quality.',
      date: '4 month ago',
      verified: true
    },
    {
      name: 'Ajitesh Prakash',
      initials: 'AP',
      rating: 4,
      text: 'Loved this café experience! The cold coffee was perfectly chilled, rich, creamy, and super refreshing. The ambience was warm, cozy, and beautifully designed—such a relaxing place to sit and enjoy. Great vibe,friendly staff, and perfect spot to unwind. Highly recommended! ☕✨.',
      date: '4 months ago',
      verified: true
    },
    {
      name: 'Himanshu Ranjan (Anshu)',
      initials: 'HR',
      rating: 5,
      text: 'Amazing ambience with elegant architecture and a peaceful atmosphere. Beautiful place for coffee and photos. Clean, cozy, and definitely worth visiting..',
      date: '4 months ago',
      verified: true
    },
    {
      name: 'Biki Kumar Singh',
      initials: 'BKS',
      rating: 5,
      text: 'Super and delicious food item. My favourite dish is Maggie masala and capachino. Service and behaviour is too good. 👍 ',
      date: '6 months ago',
      verified: true
    }
  ];

  /* =======================================================
     SOCIAL MEDIA ICONS + DATA
     ======================================================= */
  var SOCIAL_ICONS = {
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="3" y="3" width="18" height="18" rx="5"/>' +
      '<circle cx="12" cy="12" r="4"/>' +
      '<circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/>' +
      '</svg>',

    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3-.04-1.3-.13-2.47-.13-2.44 0-4.11 1.49-4.11 4.23v2.2H7.4V14h2.72v8h3.38z"/>' +
      '</svg>',

    x:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.3l8-9.2L1 2h7l4.9 6.4L18.9 2zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20z"/>' +
      '</svg>',

    youtube:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M23 12s0-3.6-.45-5.3a2.8 2.8 0 0 0-1.97-2C18.9 4.25 12 4.25 12 4.25s-6.9 0-8.58.45a2.8 2.8 0 0 0-1.97 2C1 8.4 1 12 1 12s0 3.6.45 5.3a2.8 2.8 0 0 0 1.97 2c1.68.45 8.58.45 8.58.45s6.9 0 8.58-.45a2.8 2.8 0 0 0 1.97-2C23 15.6 23 12 23 12zM9.75 15.5v-7l6 3.5-6 3.5z"/>' +
      '</svg>',

    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M20.5 3.5A11 11 0 0 0 3.3 18.2L2 22l3.9-1.3a11 11 0 0 0 14.6-17.2zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.3.8.8-2.2-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41l-.46-.01c-.16 0-.42.06-.64.3s-.84.82-.84 2c0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>' +
      '</svg>'
  };

  var SOCIAL = [
    { key: 'instagram', name: 'Instagram',   handle: '@maisonsaffron', count: '48.2K', url: 'https://instagram.com/maisonsaffron' },
    { key: 'facebook',  name: 'Facebook',    handle: '/maisonsaffron', count: '32.7K', url: 'https://facebook.com/maisonsaffron' },
    { key: 'x',         name: 'X (Twitter)', handle: '@maisonsaffron', count: '12.4K', url: 'https://x.com/maisonsaffron' },
    { key: 'youtube',   name: 'YouTube',     handle: '/maisonsaffron', count: '8.9K',  url: 'https://youtube.com/@maisonsaffron' },
    { key: 'whatsapp',  name: 'WhatsApp',    handle: 'Chat with us',   count: '24/7',  url: 'https://wa.me/914445678900' }
  ];

  /* =======================================================
     CONFIG
     ======================================================= */
  var DELIVERY_FEE = 49;
  var FREE_DELIVERY_ABOVE = 999;
  var TAX_RATE = 0.05;
  var COD_HANDLING = 20;
  var COD_HANDLING_BELOW = 500;
  var MOBILE_NAV_BREAKPOINT = 900;

  /* =======================================================
     STATE
     ======================================================= */
  var cart = [];
  var activeCategory = 'All';
  var isPaying = false;
  var toastTimer = null;
  var scrollLockCount = 0;

  /* =======================================================
     HELPERS
     ======================================================= */
  function $(id) { return document.getElementById(id); }

  function money(n) {
    return '\u20B9' + Number(n).toLocaleString('en-IN');
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function rand(n) {
    var s = '';
    for (var i = 0; i < n; i++) s += Math.floor(Math.random() * 10);
    return s;
  }

  function findDish(id) {
    for (var i = 0; i < MENU.length; i++) {
      if (MENU[i].id === id) return MENU[i];
    }
    return null;
  }

  function lockScroll() {
    scrollLockCount++;
    document.body.style.overflow = 'hidden';
  }

  function unlockScroll() {
    scrollLockCount = Math.max(0, scrollLockCount - 1);
    if (scrollLockCount === 0) document.body.style.overflow = '';
  }

  /* =======================================================
     TOAST
     ======================================================= */
  function toast(msg) {
    var el = $('toast');
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 2600);
  }

  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */
  function openMobileNav() {
    var nav = $('mobileNav');
    var ov  = $('mobileNavOverlay');
    var btn = $('menuToggle');
    if (!nav || !ov || !btn) return;
    nav.hidden = false;
    ov.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    lockScroll();
  }

  function closeMobileNav() {
    var nav = $('mobileNav');
    var ov  = $('mobileNavOverlay');
    var btn = $('menuToggle');
    if (!nav || !ov || !btn) return;
    if (nav.hidden) return;
    nav.hidden = true;
    ov.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    unlockScroll();
  }

  /* =======================================================
     CART CALCULATIONS
     ======================================================= */
  function cartCount() {
    return cart.reduce(function (s, l) { return s + l.qty; }, 0);
  }

  function cartSubtotal() {
    return cart.reduce(function (s, l) {
      var d = findDish(l.id);
      return s + (d ? d.price * l.qty : 0);
    }, 0);
  }

  function cartTotals() {
    var sub = cartSubtotal();
    var tax = Math.round(sub * TAX_RATE);
    var del = (sub === 0 || sub >= FREE_DELIVERY_ABOVE) ? 0 : DELIVERY_FEE;
    return { sub: sub, tax: tax, del: del, total: sub + tax + del };
  }

  function currentMethod() {
    var radios = document.querySelectorAll('input[name="payMethod"]');
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) return radios[i].value;
    }
    return 'card';
  }

  function codHandling() {
    if (currentMethod() !== 'cod') return 0;
    var t = cartTotals();
    return (t.sub > 0 && t.sub < COD_HANDLING_BELOW) ? COD_HANDLING : 0;
  }

  function grandTotal() {
    return cartTotals().total + codHandling();
  }

  /* =======================================================
     RENDER — FILTERS
     ======================================================= */
  function renderFilters() {
    var box = $('filters');
    if (!box) return;
    var html = '';
    for (var i = 0; i < CATEGORIES.length; i++) {
      var c = CATEGORIES[i];
      html += '<button type="button" class="filter' +
        (c === activeCategory ? ' is-active' : '') +
        '" data-cat="' + esc(c) + '" role="tab" aria-selected="' +
        (c === activeCategory) + '">' + esc(c) + '</button>';
    }
    box.innerHTML = html;
  }

  /* =======================================================
     RENDER — MENU
     ======================================================= */
  function renderMenu() {
    var grid = $('menuGrid');
    if (!grid) return;

    var list = activeCategory === 'All'
      ? MENU
      : MENU.filter(function (d) { return d.cat === activeCategory; });

    if (!list.length) {
      grid.innerHTML = '<p class="muted">No dishes in this category yet.</p>';
      return;
    }

    var html = '';
    for (var i = 0; i < list.length; i++) {
      var d = list[i];
      var vegChip = d.veg
        ? '<span class="chip chip-veg">Veg</span>'
        : '<span class="chip chip-nonveg">Non-Veg</span>';
      var tagChip = d.tag ? '<span class="chip chip-gold">' + esc(d.tag) + '</span>' : '';

      html += '' +
        '<article class="dish">' +
          '<div class="dish-top">' +
            '<h3>' + esc(d.name) + '</h3>' +
            '<span class="dish-price">' + money(d.price) + '</span>' +
          '</div>' +
          '<p class="dish-desc">' + esc(d.desc) + '</p>' +
          '<div class="dish-meta">' + vegChip + tagChip +
            '<span class="chip">' + esc(d.cat) + '</span>' +
          '</div>' +
          '<button type="button" class="dish-add" data-add="' + d.id + '">Add to Cart</button>' +
        '</article>';
    }
    grid.innerHTML = html;
  }

  /* =======================================================
     RENDER — GALLERY
     ======================================================= */
  var PHOTO_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="3" y="3" width="18" height="18" rx="3"/>' +
    '<circle cx="8.6" cy="9" r="1.5"/>' +
    '<path d="M21 16.5 16.5 12 7 21"/>' +
    '</svg>';

  function renderGallery() {
    var grid = $('galleryGrid');
    if (!grid) return;

    var html = '';
    for (var i = 0; i < GALLERY.length; i++) {
      var g = GALLERY[i];
      var hasImage = g.src && g.src.trim() !== '';
      var featuredClass = g.featured ? ' is-featured' : '';

      if (hasImage) {
        html += '' +
          '<button type="button" class="gallery-item' + featuredClass + '" ' +
            'data-src="' + esc(g.src) + '" ' +
            'data-caption="' + esc(g.caption || '') + '" ' +
            'aria-label="View ' + esc(g.caption || 'gallery image') + '">' +
            '<img src="' + esc(g.src) + '" alt="' + esc(g.caption || '') + '" loading="lazy" />' +
            (g.caption ? '<span class="gallery-caption">' + esc(g.caption) + '</span>' : '') +
          '</button>';
      } else {
        html += '' +
          '<div class="gallery-item' + featuredClass + '" aria-label="Empty photo slot">' +
            '<div class="gallery-empty">' +
              '<span class="g-icon">' + PHOTO_ICON + '</span>' +
              '<span class="g-label">' + esc(g.caption || 'Add your photo') + '</span>' +
              '<span class="g-hint">' + esc(g.hint || '1200 × 1200') + '</span>' +
            '</div>' +
          '</div>';
      }
    }
    grid.innerHTML = html;
  }

  /* =======================================================
     RENDER — GOOGLE REVIEWS
     ======================================================= */
  function starsHtml(rating) {
    var html = '';
    for (var i = 1; i <= 5; i++) {
      html += '<span class="' + (i <= rating ? 's-on' : '') + '">★</span>';
    }
    return html;
  }

  function renderReviews() {
    var grid = $('reviewsGrid');
    if (!grid) return;

    var html = '';
    for (var i = 0; i < REVIEWS.length; i++) {
      var r = REVIEWS[i];

      html += '' +
        '<article class="review-card">' +
          '<div class="review-head">' +
            '<span class="review-avatar" aria-hidden="true">' + esc(r.initials) + '</span>' +
            '<span class="review-meta">' +
              '<span class="review-name">' + esc(r.name) + '</span>' +
              '<span class="review-date">' + esc(r.date) + '</span>' +
            '</span>' +
            (r.verified ? '<span class="review-badge">Verified</span>' : '') +
          '</div>' +
          '<div class="review-stars" aria-label="' + r.rating + ' out of 5 stars">' +
            starsHtml(r.rating) +
          '</div>' +
          '<p class="review-text">&ldquo;' + esc(r.text) + '&rdquo;</p>' +
          '<span class="review-source">' +
            '<span class="reviews-google-badge" aria-hidden="true">' +
              '<span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span>' +
              '<span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>' +
            '</span>' +
            'Posted on Google' +
          '</span>' +
        '</article>';
    }
    grid.innerHTML = html;
  }

  /* =======================================================
     RENDER — SOCIAL
     ======================================================= */
  function renderSocial() {
    var grid = $('socialGrid');
    if (!grid) return;

    var html = '';
    for (var i = 0; i < SOCIAL.length; i++) {
      var s = SOCIAL[i];
      var icon = SOCIAL_ICONS[s.key] || '';

      html += '' +
        '<a class="social-card" href="' + esc(s.url) + '" target="_blank" rel="noopener" ' +
           'aria-label="' + esc(s.name) + ' — ' + esc(s.handle) + '">' +
          '<span class="social-icon">' + icon + '</span>' +
          '<span class="social-meta">' +
            '<strong>' + esc(s.name) + '</strong>' +
            '<span>' + esc(s.handle) + '</span>' +
          '</span>' +
          '<span class="social-count">' + esc(s.count) + '</span>' +
        '</a>';
    }
    grid.innerHTML = html;
  }

  /* =======================================================
     WI-FI — copy password
     ======================================================= */
  function handleCopyWifi() {
    var passEl = $('wifiPass');
    if (!passEl) return;
    var text = passEl.textContent.trim();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(function () { toast('Wi-Fi password copied'); })
        .catch(function () { toast('Password: ' + text); });
      return;
    }

    // Fallback for old browsers / insecure contexts
    try {
      var tmp = document.createElement('textarea');
      tmp.value = text;
      tmp.setAttribute('readonly', '');
      tmp.style.position = 'absolute';
      tmp.style.left = '-9999px';
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      document.body.removeChild(tmp);
      toast('Wi-Fi password copied');
    } catch (err) {
      toast('Password: ' + text);
    }
  }

  /* =======================================================
     LIGHTBOX
     ======================================================= */
  function openLightbox(src, caption) {
    var box = $('lightbox');
    if (!box) return;
    $('lightboxImg').src = src;
    $('lightboxImg').alt = caption || '';
    $('lightboxCaption').textContent = caption || '';
    box.hidden = false;
    lockScroll();
  }

  function closeLightbox() {
    var box = $('lightbox');
    if (!box || box.hidden) return;
    box.hidden = true;
    $('lightboxImg').src = '';
    $('lightboxCaption').textContent = '';
    unlockScroll();
  }

  /* =======================================================
     CART ACTIONS
     ======================================================= */
  function addToCart(id) {
    var line = null;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id) { line = cart[i]; break; }
    }
    if (line) line.qty += 1;
    else cart.push({ id: id, qty: 1 });

    syncCart();
    var d = findDish(id);
    toast((d ? d.name : 'Item') + ' added to cart');
  }

  function setQty(id, qty) {
    if (qty <= 0) {
      cart = cart.filter(function (l) { return l.id !== id; });
    } else {
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) { cart[i].qty = qty; break; }
      }
    }
    syncCart();
  }

  function clearCart() {
    if (!cart.length) return;
    cart = [];
    syncCart();
    toast('Cart cleared');
  }

  /* =======================================================
     SYNC CART UI
     ======================================================= */
  function syncCart() {
    var t = cartTotals();

    var cc = $('cartCount');
    if (cc) cc.textContent = cartCount();

    var cs = $('cartSubtotal');
    if (cs) cs.textContent = money(t.sub);

    var ct = $('cartTax');
    if (ct) ct.textContent = money(t.tax);

    var cd = $('cartDelivery');
    if (cd) cd.textContent = t.del === 0 ? 'Free' : money(t.del);

    var cT = $('cartTotal');
    if (cT) cT.textContent = money(t.total);

    var co = $('checkoutBtn');
    if (co) co.disabled = (cart.length === 0 || isPaying);

    renderCartLines();
    syncCheckout();
  }

  function renderCartLines() {
    var box = $('cartBody');
    if (!box) return;

    if (!cart.length) {
      box.innerHTML =
        '<div class="empty-cart">' +
          '<span class="big">Your cart is empty</span>' +
          'Browse the menu and add a dish to begin your order.' +
        '</div>';
      return;
    }

    var html = '';
    for (var i = 0; i < cart.length; i++) {
      var l = cart[i];
      var d = findDish(l.id);
      if (!d) continue;

      html += '' +
        '<div class="cart-line">' +
          '<div>' +
            '<h4>' + esc(d.name) + '</h4>' +
            '<span class="unit">' + money(d.price) + ' each</span>' +
            '<div class="qty">' +
              '<button type="button" data-dec="' + d.id + '" aria-label="Decrease quantity">−</button>' +
              '<span>' + l.qty + '</span>' +
              '<button type="button" data-inc="' + d.id + '" aria-label="Increase quantity">+</button>' +
            '</div>' +
            '<button type="button" class="remove-btn" data-remove="' + d.id + '">Remove</button>' +
          '</div>' +
          '<div class="line-total">' + money(d.price * l.qty) + '</div>' +
        '</div>';
    }
    box.innerHTML = html;
  }

  /* =======================================================
     CART DRAWER
     ======================================================= */
  function openCart() {
    var ov = $('cartOverlay');
    var dr = $('cartDrawer');
    if (!ov || !dr) return;
    ov.hidden = false;
    dr.hidden = false;
    lockScroll();
  }

  function closeCart() {
    var dr = $('cartDrawer');
    if (!dr || dr.hidden) return;
    $('cartOverlay').hidden = true;
    dr.hidden = true;
    unlockScroll();
  }

  /* =======================================================
     CHECKOUT MODAL
     ======================================================= */
  function openCheckout() {
    if (!cart.length) { toast('Your cart is empty'); return; }
    closeCart();
    syncCheckout();
    applyMethod();
    var m = $('checkoutModal');
    if (!m) return;
    m.hidden = false;
    lockScroll();
  }

  function closeCheckout() {
    var m = $('checkoutModal');
    if (!m || m.hidden) return;
    m.hidden = true;
    unlockScroll();
  }

  function syncCheckout() {
    var t = cartTotals();

    var items = $('summaryItems');
    if (items) {
      if (!cart.length) {
        items.innerHTML = '<p class="note">No items in your order.</p>';
      } else {
        var html = '';
        for (var i = 0; i < cart.length; i++) {
          var l = cart[i];
          var d = findDish(l.id);
          if (!d) continue;
          html += '' +
            '<div class="summary-line">' +
              '<span class="n">' + esc(d.name) +
                ' <span class="q">× ' + l.qty + '</span></span>' +
              '<span class="p">' + money(d.price * l.qty) + '</span>' +
            '</div>';
        }
        items.innerHTML = html;
      }
    }

    var sSub = $('sSubtotal'); if (sSub) sSub.textContent = money(t.sub);
    var sTax = $('sTax');      if (sTax) sTax.textContent = money(t.tax);
    var sDel = $('sDelivery'); if (sDel) sDel.textContent = t.del === 0 ? 'Free' : money(t.del);
    var sTot = $('sTotal');    if (sTot) sTot.textContent = money(grandTotal());

    updatePayButton();
  }

  /* =======================================================
     PAYMENT METHOD
     ======================================================= */
  function applyMethod() {
    var m = currentMethod();

    var bc = $('block-card'); if (bc) bc.hidden = (m !== 'card');
    var bu = $('block-upi');  if (bu) bu.hidden = (m !== 'upi');
    var bd = $('block-cod');  if (bd) bd.hidden = (m !== 'cod');

    var labels = document.querySelectorAll('.pay-option');
    for (var i = 0; i < labels.length; i++) {
      var key = labels[i].getAttribute('data-pay');
      if (key === m) labels[i].classList.add('is-selected');
      else labels[i].classList.remove('is-selected');
    }

    var errBox = $('payError');
    if (errBox) errBox.hidden = true;

    clearErrors();
    syncCheckout();
  }

  function updatePayButton() {
    var btn = $('payBtn');
    if (!btn) return;

    if (isPaying) {
      btn.disabled = true;
      btn.textContent = 'Processing…';
      return;
    }

    btn.disabled = (cart.length === 0);
    var m = currentMethod();
    btn.textContent = (m === 'cod' ? 'Place Order · ' : 'Pay ') + money(grandTotal());
  }

  /* =======================================================
     VALIDATION HELPERS
     ======================================================= */
  function setErr(name, msg) {
    var el = document.querySelector('[data-err="' + name + '"]');
    if (el) el.textContent = msg || '';

    var input = $(name);
    if (input) {
      if (msg) input.classList.add('is-invalid');
      else input.classList.remove('is-invalid');
    }
  }

  function clearErrors() {
    var errs = document.querySelectorAll('.err');
    for (var i = 0; i < errs.length; i++) errs[i].textContent = '';

    var inv = document.querySelectorAll('.input.is-invalid');
    for (var j = 0; j < inv.length; j++) inv[j].classList.remove('is-invalid');
  }

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v);
  }

  function luhn(digits) {
    var sum = 0;
    var alt = false;
    for (var i = digits.length - 1; i >= 0; i--) {
      var n = parseInt(digits.charAt(i), 10);
      if (isNaN(n)) return false;
      if (alt) {
        n *= 2;
        if (n > 9) n -= 9;
      }
      sum += n;
      alt = !alt;
    }
    return sum % 10 === 0;
  }

  function detectBrand(digits) {
    if (/^4/.test(digits)) return 'Visa';
    if (/^(5[1-5]|2[2-7])/.test(digits)) return 'Mastercard';
    if (/^3[47]/.test(digits)) return 'American Express';
    if (/^6/.test(digits)) return 'RuPay / Discover';
    return 'Card';
  }

  function formatCardNumber(value) {
    var digits = value.replace(/\D/g, '').slice(0, 19);
    return digits.replace(/(.{4})/g, '$1 ').trim();
  }

  function formatExpiry(value) {
    var digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + '/' + digits.slice(2);
    return digits;
  }

  /* =======================================================
     CHECKOUT VALIDATION
     ======================================================= */
  function validateCheckout() {
    clearErrors();
    var ok = true;

    var nameEl  = $('custName');
    var phoneEl = $('custPhone');
    var emailEl = $('custEmail');
    var addrEl  = $('custAddress');

    var name  = nameEl  ? nameEl.value.trim()  : '';
    var phone = phoneEl ? phoneEl.value.trim() : '';
    var email = emailEl ? emailEl.value.trim() : '';
    var addr  = addrEl  ? addrEl.value.trim()  : '';

    if (name.length < 2) { setErr('custName', 'Please enter your full name.'); ok = false; }
    if (!/^[0-9+\-\s()]{10,15}$/.test(phone)) {
      setErr('custPhone', 'Enter a valid phone number (10–15 digits).'); ok = false;
    }
    if (!isEmail(email)) { setErr('custEmail', 'Enter a valid email address.'); ok = false; }
    if (addr.length < 8) { setErr('custAddress', 'Enter a complete delivery address.'); ok = false; }

    var method = currentMethod();

    if (method === 'card') {
      var cardNumEl = $('cardNumber');
      var cardNameEl = $('cardName');
      var cardExpEl = $('cardExpiry');
      var cardCvvEl = $('cardCvv');

      var digits = cardNumEl ? cardNumEl.value.replace(/\s/g, '') : '';
      var cname  = cardNameEl ? cardNameEl.value.trim() : '';
      var exp    = cardExpEl ? cardExpEl.value.trim() : '';
      var cvv    = cardCvvEl ? cardCvvEl.value.trim() : '';

      if (digits.length < 13 || digits.length > 19) {
        setErr('cardNumber', 'Card number must be 13–19 digits.'); ok = false;
      } else if (!luhn(digits)) {
        setErr('cardNumber', 'This card number is not valid.'); ok = false;
      }

      if (cname.length < 2) { setErr('cardName', 'Enter the name printed on the card.'); ok = false; }

      var m = exp.match(/^(\d{2})\/(\d{2})$/);
      if (!m) {
        setErr('cardExpiry', 'Use MM/YY format.'); ok = false;
      } else {
        var mm = parseInt(m[1], 10);
        var yy = parseInt(m[2], 10);
        var now = new Date();
        var curYY = now.getFullYear() % 100;
        var curMM = now.getMonth() + 1;

        if (mm < 1 || mm > 12) {
          setErr('cardExpiry', 'Month must be 01–12.'); ok = false;
        } else if (yy < curYY || (yy === curYY && mm < curMM)) {
          setErr('cardExpiry', 'This card has expired.'); ok = false;
        }
      }

      if (!/^\d{3,4}$/.test(cvv)) {
        setErr('cardCvv', 'CVV must be 3 or 4 digits.'); ok = false;
      }
    }

    if (method === 'upi') {
      var upiEl = $('upiId');
      var upi = upiEl ? upiEl.value.trim() : '';
      if (!/^[a-zA-Z0-9._-]{2,}@[a-zA-Z]{2,}$/.test(upi)) {
        setErr('upiId', 'Enter a valid UPI ID (e.g. name@okbank).'); ok = false;
      }
    }

    return ok;
  }

  /* =======================================================
     PAYMENT GATEWAY SIMULATION
     ======================================================= */
  function processPayment(payload) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {

        if (payload.method === 'cod') {
          resolve({ ok: true, txn: 'COD' + rand(9), brand: 'Cash on Delivery' });
          return;
        }

        if (payload.method === 'upi') {
          if (/fail/i.test(payload.upiId)) {
            reject(new Error('UPI collect request was declined by the bank.'));
            return;
          }
          resolve({ ok: true, txn: 'UPI' + rand(11), brand: 'UPI' });
          return;
        }

        var digits = payload.cardNumber.replace(/\s/g, '');

        if (/0000$/.test(digits)) {
          reject(new Error('Card declined — insufficient funds. Please try another card.'));
          return;
        }
        if (digits === '4000000000000002') {
          reject(new Error('Card declined by the issuing bank.'));
          return;
        }

        resolve({
          ok: true,
          txn: 'TXN' + rand(11),
          brand: detectBrand(digits)
        });

      }, 1500);
    });
  }

  /* =======================================================
     SUBMIT CHECKOUT
     ======================================================= */
  function handleCheckoutSubmit(e) {
    e.preventDefault();
    if (isPaying) return;
    if (!cart.length) { toast('Your cart is empty'); return; }

    if (!validateCheckout()) {
      var errBox = $('payError');
      if (errBox) {
        errBox.textContent = 'Please correct the highlighted fields before paying.';
        errBox.hidden = false;
      }
      var modal = $('checkoutModal');
      if (modal) modal.scrollTop = 0;
      return;
    }

    var method = currentMethod();
    var grand  = grandTotal();

    var cnEl = $('cardNumber');
    var cnmEl = $('cardName');
    var ceEl = $('cardExpiry');
    var upiEl = $('upiId');

    var payload = {
      method: method,
      cardNumber: cnEl ? cnEl.value : '',
      cardName:   cnmEl ? cnmEl.value.trim() : '',
      cardExpiry: ceEl ? ceEl.value.trim() : '',
      upiId:      upiEl ? upiEl.value.trim() : '',
      amount: grand
    };

    isPaying = true;
    var pe = $('payError'); if (pe) pe.hidden = true;
    updatePayButton();

    var snapshot = cart.map(function (l) {
      var d = findDish(l.id);
      return { name: d.name, qty: l.qty, price: d.price };
    });

    var cnEl2 = $('custName');
    var caEl = $('custAddress');
    var customerName    = cnEl2 ? cnEl2.value.trim() : '';
    var customerAddress = caEl  ? caEl.value.trim()  : '';

    processPayment(payload)
      .then(function (res) {
        isPaying = false;

        closeCheckout();

        showConfirmation({
          txn: res.txn,
          brand: res.brand,
          method: method,
          amount: grand,
          items: snapshot,
          name: customerName,
          address: customerAddress
        });

        cart = [];
        var form = $('checkoutForm');
        if (form) form.reset();
        applyMethod();
        syncCart();
      })
      .catch(function (err) {
        isPaying = false;
        updatePayButton();
        var box = $('payError');
        if (box) {
          box.textContent = err.message || 'Payment could not be completed. Please try again.';
          box.hidden = false;
        }
      });
  }

  /* =======================================================
     CONFIRMATION
     ======================================================= */
  function showConfirmation(data) {
    var rO = $('rOrderId'); if (rO) rO.textContent = 'MS-' + rand(6);
    var rT = $('rTxnId');   if (rT) rT.textContent = data.txn;
    var rM = $('rMethod');  if (rM) rM.textContent = data.brand;
    var rA = $('rAmount');  if (rA) rA.textContent = money(data.amount);
    var rC = $('rCustomer');if (rC) rC.textContent = data.name;
    var rAd = $('rAddress');if (rAd) rAd.textContent = data.address;

    var now = new Date();
    var from = new Date(now.getTime() + 35 * 60000);
    var to   = new Date(now.getTime() + 45 * 60000);
    var fmt = function (d) {
      return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    };
    var rE = $('rEta'); if (rE) rE.textContent = fmt(from) + ' – ' + fmt(to);

    var html = '';
    for (var i = 0; i < data.items.length; i++) {
      var it = data.items[i];
      html += '<div class="ci"><span>' + esc(it.name) + ' × ' + it.qty +
        '</span><b>' + money(it.price * it.qty) + '</b></div>';
    }
    var ri = $('rItems'); if (ri) ri.innerHTML = html;

    var cs = $('confirmSub');
    if (cs) {
      cs.textContent = data.method === 'cod'
        ? 'Your order is confirmed. Please keep cash ready on delivery.'
        : 'Payment received. Thank you for dining with Maison Saffron.';
    }

    var cm = $('confirmModal');
    if (cm) {
      cm.hidden = false;
      lockScroll();
    }
  }

  function closeConfirm() {
    var m = $('confirmModal');
    if (!m || m.hidden) return;
    m.hidden = true;
    unlockScroll();
  }

  /* =======================================================
     SHARE
     ======================================================= */
  function handleShare() {
    var shareData = {
      title: 'Maison Saffron',
      text: 'Fine dining in Chennai — slow-cooked tradition, served with quiet luxury.',
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch(function () { /* cancelled */ });
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareData.url)
        .then(function () { toast('Link copied to clipboard'); })
        .catch(function () { toast('Share: ' + shareData.url); });
      return;
    }

    toast('Share: ' + shareData.url);
  }

  /* =======================================================
     EVENT WIRING
     ======================================================= */
  function wireEvents() {

    // Mobile nav toggle
    var menuToggle = $('menuToggle');
    if (menuToggle) menuToggle.addEventListener('click', openMobileNav);

    var closeMobileNavBtn = $('closeMobileNav');
    if (closeMobileNavBtn) closeMobileNavBtn.addEventListener('click', closeMobileNav);

    var mobileNavOverlay = $('mobileNavOverlay');
    if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);

    var mobileNav = $('mobileNav');
    if (mobileNav) {
      mobileNav.addEventListener('click', function (e) {
        var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
        if (link) closeMobileNav();
      });
    }

    window.addEventListener('resize', function () {
      if (window.innerWidth >= MOBILE_NAV_BREAKPOINT) {
        var mn = $('mobileNav');
        if (mn && !mn.hidden) closeMobileNav();
      }
    });

    // Filters
    var filters = $('filters');
    if (filters) {
      filters.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('.filter') : null;
        if (!btn) return;
        activeCategory = btn.getAttribute('data-cat');
        renderFilters();
        renderMenu();
      });
    }

    // Menu add-to-cart
    var menuGrid = $('menuGrid');
    if (menuGrid) {
      menuGrid.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('[data-add]') : null;
        if (!btn) return;
        addToCart(btn.getAttribute('data-add'));
      });
    }

    // Gallery lightbox
    var galleryGrid = $('galleryGrid');
    if (galleryGrid) {
      galleryGrid.addEventListener('click', function (e) {
        var item = e.target.closest ? e.target.closest('.gallery-item[data-src]') : null;
        if (!item) return;
        openLightbox(item.getAttribute('data-src'), item.getAttribute('data-caption'));
      });
    }

    var lbClose = $('lightboxClose');
    if (lbClose) lbClose.addEventListener('click', closeLightbox);

    var lb = $('lightbox');
    if (lb) {
      lb.addEventListener('click', function (e) {
        if (e.target === lb) closeLightbox();
      });
    }

    // Cart drawer line controls
    var cartBody = $('cartBody');
    if (cartBody) {
      cartBody.addEventListener('click', function (e) {
        var t = e.target;

        var inc = t.closest ? t.closest('[data-inc]') : null;
        if (inc) {
          var idI = inc.getAttribute('data-inc');
          for (var i = 0; i < cart.length; i++) {
            if (cart[i].id === idI) { setQty(idI, cart[i].qty + 1); return; }
          }
          return;
        }

        var dec = t.closest ? t.closest('[data-dec]') : null;
        if (dec) {
          var idD = dec.getAttribute('data-dec');
          for (var j = 0; j < cart.length; j++) {
            if (cart[j].id === idD) { setQty(idD, cart[j].qty - 1); return; }
          }
          return;
        }

        var rem = t.closest ? t.closest('[data-remove]') : null;
        if (rem) {
          setQty(rem.getAttribute('data-remove'), 0);
        }
      });
    }

    // Open / close cart
    var cartBtn = $('cartBtn');       if (cartBtn) cartBtn.addEventListener('click', openCart);
    var closeCartBtn = $('closeCart'); if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    var co = $('cartOverlay');        if (co) co.addEventListener('click', closeCart);
    var ccBtn = $('clearCartBtn');    if (ccBtn) ccBtn.addEventListener('click', clearCart);
    var chk = $('checkoutBtn');       if (chk) chk.addEventListener('click', openCheckout);

    // Checkout modal
    var closeCheckoutBtn = $('closeCheckout');
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);

    var checkoutForm = $('checkoutForm');
    if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Payment method radios
    var radios = document.querySelectorAll('input[name="payMethod"]');
    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener('change', applyMethod);
    }

    // Card input formatting
    var cardNum = $('cardNumber');
    if (cardNum) {
      cardNum.addEventListener('input', function () {
        this.value = formatCardNumber(this.value);
      });
    }

    var cardExp = $('cardExpiry');
    if (cardExp) {
      cardExp.addEventListener('input', function () {
        this.value = formatExpiry(this.value);
      });
    }

    var cardCvv = $('cardCvv');
    if (cardCvv) {
      cardCvv.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '').slice(0, 4);
      });
    }

    // Live error clearing on checkout inputs
    var checkoutIds = [
      'custName', 'custPhone', 'custEmail', 'custAddress',
      'cardNumber', 'cardName', 'cardExpiry', 'cardCvv', 'upiId'
    ];
    for (var k = 0; k < checkoutIds.length; k++) {
      (function (id) {
        var el = $(id);
        if (!el) return;
        el.addEventListener('input', function () {
          setErr(id, '');
          var box = $('payError');
          if (box) box.hidden = true;
        });
      })(checkoutIds[k]);
    }

    // Confirmation
    var newOrderBtn = $('newOrderBtn');
    if (newOrderBtn) newOrderBtn.addEventListener('click', closeConfirm);

    // Wi-Fi copy
    var copyWifiBtn = $('copyWifiBtn');
    if (copyWifiBtn) copyWifiBtn.addEventListener('click', handleCopyWifi);

    // Share button
    var shareBtn = $('shareBtn');
    if (shareBtn) shareBtn.addEventListener('click', handleShare);

    // Escape closes overlays in the right order
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;

      var lbx = $('lightbox');
      if (lbx && !lbx.hidden) { closeLightbox(); return; }

      var cm = $('confirmModal');
      if (cm && !cm.hidden) { closeConfirm(); return; }

      var chm = $('checkoutModal');
      if (chm && !chm.hidden) { closeCheckout(); return; }

      var mn = $('mobileNav');
      if (mn && !mn.hidden) { closeMobileNav(); return; }

      var cd = $('cartDrawer');
      if (cd && !cd.hidden) { closeCart(); }
    });
  }

  /* =======================================================
     INIT
     ======================================================= */
  function init() {
    var yearEl = $('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    renderFilters();
    renderMenu();
    renderGallery();
    renderReviews();
    renderSocial();
    wireEvents();

    applyMethod();
    syncCart();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();