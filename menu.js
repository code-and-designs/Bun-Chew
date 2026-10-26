/**
 * Bun Chew Café - Full Menu Page Logic
 * Handles real-time search, category filtering, card rendering, and mobile navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const searchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const menuGrid = document.getElementById('menuCardsGrid');
  const itemCountEl = document.getElementById('menuItemCount');
  const emptyStateEl = document.getElementById('menuEmptyState');
  const emptyQueryText = document.getElementById('emptyQueryText');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Mobile Drawer Elements
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  // State
  let activeCategory = 'all';
  let searchQuery = '';

  // --------------------------------------------------------------------------
  // Category SVG Placeholders (Branded, Minimal, Professional)
  // --------------------------------------------------------------------------
  function getCategoryPlaceholderSvg(category) {
    switch (category) {
      case 'buns':
        return `
          <svg class="placeholder-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="52" rx="30" ry="14" fill="#E8D9C8" stroke="#182848" stroke-width="2.5"/>
            <path d="M12 48C12 28 24 16 40 16C56 16 68 28 68 48C68 54 60 56 40 56C20 56 12 54 12 48Z" fill="#F0E3D3" stroke="#182848" stroke-width="2.5"/>
            <path d="M40 22V50M26 28L48 44M54 28L32 44" stroke="#A61B22" stroke-width="2" stroke-linecap="round"/>
            <circle cx="34" cy="30" r="1.5" fill="#182848"/>
            <circle cx="46" cy="32" r="1.5" fill="#182848"/>
            <circle cx="40" cy="40" r="1.5" fill="#182848"/>
          </svg>`;
      case 'hot-beverages':
        return `
          <svg class="placeholder-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 34H58V54C58 63 51 70 40 70C29 70 22 63 22 54V34Z" fill="#F0E3D3" stroke="#182848" stroke-width="2.5"/>
            <path d="M58 40H64C68 40 71 43 71 47C71 51 68 54 64 54H58" stroke="#182848" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="16" y1="70" x2="64" y2="70" stroke="#182848" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M32 26C32 20 36 18 36 12" stroke="#A61B22" stroke-width="2" stroke-linecap="round"/>
            <path d="M40 26C40 20 44 18 44 12" stroke="#A61B22" stroke-width="2" stroke-linecap="round"/>
            <path d="M48 26C48 20 52 18 52 12" stroke="#A61B22" stroke-width="2" stroke-linecap="round"/>
          </svg>`;
      case 'cold-beverages':
        return `
          <svg class="placeholder-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 26L32 68C32 71 35 73 38 73H46C49 73 52 71 52 68L58 26H26Z" fill="#F0E3D3" stroke="#182848" stroke-width="2.5"/>
            <rect x="23" y="21" width="38" height="6" rx="3" fill="#E8D9C8" stroke="#182848" stroke-width="2.5"/>
            <line x1="42" y1="8" x2="48" y2="21" stroke="#A61B22" stroke-width="3" stroke-linecap="round"/>
            <circle cx="38" cy="42" r="3" fill="#A61B22" fill-opacity="0.3"/>
            <circle cx="44" cy="54" r="2.5" fill="#A61B22" fill-opacity="0.3"/>
          </svg>`;
      case 'bubble-smoothie':
        return `
          <svg class="placeholder-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 28L31 68C31 71 34 73 37 73H47C50 73 53 71 53 68L59 28H25Z" fill="#F0E3D3" stroke="#182848" stroke-width="2.5"/>
            <path d="M24 28C24 18 31 12 42 12C53 12 60 18 60 28H24Z" fill="#F8EDE1" stroke="#182848" stroke-width="2.5"/>
            <line x1="42" y1="6" x2="42" y2="28" stroke="#A61B22" stroke-width="3" stroke-linecap="round"/>
            <circle cx="36" cy="62" r="3" fill="#182848"/>
            <circle cx="44" cy="64" r="3" fill="#182848"/>
            <circle cx="48" cy="56" r="3" fill="#182848"/>
            <circle cx="36" cy="52" r="3" fill="#182848"/>
          </svg>`;
      case 'shakes':
        return `
          <svg class="placeholder-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 30L33 68C33 71 36 73 39 73H45C48 73 51 71 51 68L57 30H27Z" fill="#F0E3D3" stroke="#182848" stroke-width="2.5"/>
            <path d="M28 30C28 22 34 14 42 14C50 14 56 22 56 30H28Z" fill="#F8EDE1" stroke="#182848" stroke-width="2.5"/>
            <line x1="47" y1="8" x2="52" y2="28" stroke="#A61B22" stroke-width="3" stroke-linecap="round"/>
            <path d="M34 40C38 43 46 43 50 40" stroke="#A61B22" stroke-width="2" stroke-linecap="round"/>
            <path d="M34 50C38 53 46 53 50 50" stroke="#A61B22" stroke-width="2" stroke-linecap="round"/>
          </svg>`;
      case 'burgers':
        return `
          <svg class="placeholder-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 36C20 22 28 16 40 16C52 16 60 22 60 36H20Z" fill="#F0E3D3" stroke="#182848" stroke-width="2.5"/>
            <rect x="18" y="40" width="44" height="6" rx="2" fill="#8B141A" stroke="#182848" stroke-width="2"/>
            <path d="M19 46C24 49 28 47 32 50C36 53 40 50 44 50C48 50 52 53 61 46" stroke="#E5A93C" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M22 56H58C58 64 50 68 40 68C30 68 22 64 22 56Z" fill="#F0E3D3" stroke="#182848" stroke-width="2.5"/>
            <circle cx="32" cy="24" r="1.5" fill="#182848"/>
            <circle cx="48" cy="24" r="1.5" fill="#182848"/>
            <circle cx="40" cy="28" r="1.5" fill="#182848"/>
          </svg>`;
      case 'bun-chew-signature':
        return `
          <svg class="placeholder-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="56" rx="30" ry="12" fill="#E8D9C8" stroke="#182848" stroke-width="2.5"/>
            <path d="M16 52C16 34 26 22 40 22C54 22 64 34 64 52H16Z" fill="#F0E3D3" stroke="#182848" stroke-width="2.5"/>
            <circle cx="40" cy="18" r="4" fill="#A61B22" stroke="#182848" stroke-width="2"/>
            <path d="M40 32L42 38L48 38L43 42L45 48L40 44L35 48L37 42L32 38L38 38Z" fill="#E5A93C"/>
          </svg>`;
      case 'french-fries':
        return `
          <svg class="placeholder-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 36L30 70H50L54 36H26Z" fill="#A61B22" stroke="#182848" stroke-width="2.5"/>
            <rect x="30" y="16" width="5" height="26" rx="1.5" fill="#FFD15C" stroke="#182848" stroke-width="2"/>
            <rect x="38" y="12" width="5" height="30" rx="1.5" fill="#FFD15C" stroke="#182848" stroke-width="2"/>
            <rect x="46" y="18" width="5" height="24" rx="1.5" fill="#FFD15C" stroke="#182848" stroke-width="2"/>
            <path d="M26 46C34 50 46 50 54 46" stroke="#FFFFFF" stroke-width="2"/>
          </svg>`;
      default:
        return `
          <svg class="placeholder-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="28" fill="#F0E3D3" stroke="#182848" stroke-width="2.5"/>
            <path d="M30 40H50M40 30V50" stroke="#A61B22" stroke-width="2.5" stroke-linecap="round"/>
          </svg>`;
    }
  }

  // --------------------------------------------------------------------------
  // Render Menu Card HTML
  // --------------------------------------------------------------------------
  function createMenuCardHtml(item, index = 0) {
    const hasCustomPhoto = Boolean(item.image);
    const imgSrc = item.image || 'assets/Bun Chew Cup and Pastry Sticker.png';
    const hasDescription = Boolean(item.description);
    const animDelay = ((index % 12) * 0.035).toFixed(3);

    const mediaHtml = `
      <img 
        src="${imgSrc}" 
        alt="${item.name}" 
        class="all-card-img ${hasCustomPhoto ? '' : 'placeholder-sticker'}" 
        loading="lazy"
        onerror="this.onerror=null; this.src='assets/Bun Chew Cup and Pastry Sticker.png'; this.classList.add('placeholder-sticker');"
      >
    `;

    const descriptionHtml = hasDescription
      ? `<p class="all-card-desc">${item.description}</p>`
      : '';

    return `
      <article class="all-menu-card ${hasDescription ? 'has-description' : ''}" data-category="${item.category}" id="${item.id}" style="animation-delay: ${animDelay}s;">
        <div class="all-card-media ${hasCustomPhoto ? 'has-photo' : 'is-placeholder'}">
          ${mediaHtml}
          ${item.isFeatured ? '<span class="card-badge-featured">Popular</span>' : ''}
        </div>
        <div class="all-card-body">
          <div class="all-card-header">
            <span class="all-card-cat">${item.categoryName}</span>
            <div class="all-card-price-tag">
              <span class="currency-symbol">₹</span>
              <span class="price-value">${item.price}</span>
            </div>
          </div>
          <h3 class="all-card-name">${item.name}</h3>
          ${descriptionHtml}
        </div>
      </article>
    `;
  }

  // --------------------------------------------------------------------------
  // Filter & Render Menu Items
  // --------------------------------------------------------------------------
  function renderMenu() {
    const query = searchQuery.trim().toLowerCase();

    const filteredItems = MENU_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = query === '' || 
        item.name.toLowerCase().includes(query) || 
        item.categoryName.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    // Update count display
    if (itemCountEl) {
      if (query) {
        itemCountEl.textContent = `Showing ${filteredItems.length} result${filteredItems.length === 1 ? '' : 's'} for "${searchQuery}"`;
      } else if (activeCategory !== 'all') {
        const catObj = MENU_CATEGORIES.find(c => c.id === activeCategory);
        const catName = catObj ? catObj.name : 'Category';
        itemCountEl.textContent = `Showing ${filteredItems.length} item${filteredItems.length === 1 ? '' : 's'} in ${catName}`;
      } else {
        itemCountEl.textContent = `Showing all ${filteredItems.length} items`;
      }
    }

    // Render items or empty state
    if (filteredItems.length === 0) {
      menuGrid.innerHTML = '';
      if (emptyStateEl) {
        emptyStateEl.style.display = 'block';
        if (emptyQueryText) {
          emptyQueryText.textContent = searchQuery ? `"${searchQuery}"` : 'selected category';
        }
      }
    } else {
      if (emptyStateEl) {
        emptyStateEl.style.display = 'none';
      }
      menuGrid.innerHTML = filteredItems.map(createMenuCardHtml).join('');
    }
  }

  // --------------------------------------------------------------------------
  // Event Listeners: Search Input (if present)
  // --------------------------------------------------------------------------
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
      }
      renderMenu();
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        searchQuery = '';
        if (clearSearchBtn) clearSearchBtn.style.display = 'none';
        renderMenu();
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderMenu();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
      }
      searchQuery = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      activeCategory = 'all';
      categoryTabs.forEach(tab => {
        if (tab.dataset.category === 'all') {
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
        } else {
          tab.classList.remove('active');
          tab.setAttribute('aria-selected', 'false');
        }
      });
      renderMenu();
    });
  }

  // --------------------------------------------------------------------------
  // Event Listeners: Category Filter Tabs
  // --------------------------------------------------------------------------
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      activeCategory = tab.dataset.category || 'all';
      renderMenu();
    });
  });

  // --------------------------------------------------------------------------
  // Item Description Popup Modal Logic
  // --------------------------------------------------------------------------
  const menuItemModal = document.getElementById('menuItemModal');
  const closeItemModalBtn = document.getElementById('closeItemModalBtn');
  const modalItemImg = document.getElementById('modalItemImg');
  const modalItemCategory = document.getElementById('modalItemCategory');
  const modalItemTitle = document.getElementById('modalItemTitle');
  const modalItemPrice = document.getElementById('modalItemPrice');
  const modalItemDesc = document.getElementById('modalItemDesc');

  function openItemModal(item) {
    if (!menuItemModal) return;
    if (modalItemImg) {
      modalItemImg.src = item.image || 'assets/Bun Chew Cup and Pastry Sticker.png';
      modalItemImg.alt = item.name;
    }
    if (modalItemCategory) modalItemCategory.textContent = item.categoryName;
    if (modalItemTitle) modalItemTitle.textContent = item.name;
    if (modalItemPrice) modalItemPrice.textContent = `₹${item.price}`;
    if (modalItemDesc) {
      modalItemDesc.textContent = item.description || 'Freshly prepared with authentic ingredients and signature Bun Chew taste.';
    }
    menuItemModal.classList.add('active');
    menuItemModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeItemModal() {
    if (!menuItemModal) return;
    menuItemModal.classList.remove('active');
    menuItemModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (menuGrid) {
    menuGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.all-menu-card');
      if (card && card.id) {
        const item = MENU_DATA.find(i => i.id === card.id);
        if (item) {
          openItemModal(item);
        }
      }
    });
  }

  if (closeItemModalBtn) {
    closeItemModalBtn.addEventListener('click', closeItemModal);
  }

  if (menuItemModal) {
    menuItemModal.addEventListener('click', (e) => {
      if (e.target === menuItemModal) {
        closeItemModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // Mobile Navigation Drawer Toggle
  // --------------------------------------------------------------------------
  function openDrawer() {
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.add('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
    }
    if (drawerBackdrop) {
      drawerBackdrop.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeDrawer);
    }

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', closeDrawer);
    }

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (menuItemModal && menuItemModal.classList.contains('active')) {
        closeItemModal();
      } else if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    }
  });

  // --------------------------------------------------------------------------
  // Header Scroll State
  // --------------------------------------------------------------------------
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // Scroll Reveal for Footer
  // --------------------------------------------------------------------------
  if ('IntersectionObserver' in window) {
    const footerTargets = document.querySelectorAll('.red-footer-banner-row, .red-footer-contact-row');
    const footerObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

    footerTargets.forEach(el => {
      el.classList.add('reveal-item');
      footerObserver.observe(el);
    });
  }

  // --------------------------------------------------------------------------
  // Initial Render
  // --------------------------------------------------------------------------
  renderMenu();
});
