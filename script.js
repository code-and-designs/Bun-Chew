/**
 * Bun Chew Café - Interactive Scripts
 * Handles mobile navigation drawer, header scroll state, and interactive controls
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  // --------------------------------------------------------------------------
  // Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  function openDrawer() {
    mobileMenuBtn.classList.add('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeDrawer() {
    mobileMenuBtn.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.classList.remove('active');
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

    // Close drawer when mobile link is clicked
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        closeDrawer();
      });
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  // --------------------------------------------------------------------------
  // Header Scroll State
  // --------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // Navigation Active State Indicator
  // --------------------------------------------------------------------------
  desktopNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      desktopNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Section Observer to automatically update active nav item on scroll
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              desktopNavLinks.forEach(l => l.classList.remove('active'));
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(section => observer.observe(section));
  }

  // --------------------------------------------------------------------------
  // Premium Scroll-Triggered Reveal Animations
  // --------------------------------------------------------------------------
  if ('IntersectionObserver' in window) {
    const revealTargets = [
      { selector: '.menu-header', effect: 'reveal-item' },
      { selector: '.menu-card', effect: 'reveal-item' },
      { selector: '.story-image-wrap', effect: 'reveal-item reveal-left' },
      { selector: '.story-content', effect: 'reveal-item reveal-right' },
      { selector: '.locations-header', effect: 'reveal-item' },
      { selector: '.location-card', effect: 'reveal-item reveal-scale' },
      { selector: '.red-footer-banner-row', effect: 'reveal-item' },
      { selector: '.red-footer-contact-row', effect: 'reveal-item' }
    ];

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealTargets.forEach(group => {
      const elements = document.querySelectorAll(group.selector);
      elements.forEach((el, index) => {
        group.effect.split(' ').forEach(cls => el.classList.add(cls));
        // Stagger entrance for menu cards
        if (group.selector === '.menu-card') {
          el.style.transitionDelay = `${index * 0.1}s`;
        }
        revealObserver.observe(el);
      });
    });
  }
});

