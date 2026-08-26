/**
 * Dialiqo pure static site interactions (no React / Next.js)
 */
(function () {
  "use strict";

  /* ---------- Navbar mega menus ---------- */
  const nav = document.querySelector("[data-nav]");
  if (nav) {
    let active = null;
    const backdrop = nav.querySelector("[data-mega-backdrop]");
    const panels = [...nav.querySelectorAll("[data-mega-panel]")];

    function closeMega() {
      active = null;
      panels.forEach((p) => p.classList.add("hidden"));
      backdrop?.classList.add("hidden");
      nav.querySelectorAll(".mega-trigger").forEach((t) => {
        t.setAttribute("aria-expanded", "false");
        t.classList.remove("bg-slate-100", "dark:bg-slate-800", "text-blue-600", "dark:text-blue-400");
      });
      nav.classList.remove("bg-white", "dark:bg-slate-900", "shadow-md");
      nav.classList.add("bg-white/60", "dark:bg-slate-950/60");
    }

    function openMega(name, trigger) {
      active = name;
      panels.forEach((p) => {
        p.classList.toggle("hidden", p.getAttribute("data-mega-panel") !== name);
      });
      backdrop?.classList.remove("hidden");
      nav.querySelectorAll(".mega-trigger").forEach((t) => {
        const on = t.getAttribute("data-mega") === name;
        t.setAttribute("aria-expanded", on ? "true" : "false");
        t.classList.toggle("bg-slate-100", on);
        t.classList.toggle("dark:bg-slate-800", on);
        t.classList.toggle("text-blue-600", on);
        t.classList.toggle("dark:text-blue-400", on);
      });
      nav.classList.add("bg-white", "dark:bg-slate-900", "shadow-md");
      nav.classList.remove("bg-white/60", "dark:bg-slate-950/60");
      if (trigger) trigger.setAttribute("aria-expanded", "true");
    }

    nav.querySelectorAll("[data-mega]").forEach((el) => {
      const name = el.getAttribute("data-mega");
      el.addEventListener("mouseenter", () => openMega(name, el));
      el.addEventListener("click", (e) => {
        if (el.tagName === "BUTTON") {
          e.preventDefault();
          if (active === name) closeMega();
          else openMega(name, el);
        }
      });
    });

    nav.addEventListener("mouseleave", closeMega);
    nav.querySelectorAll("[data-close-mega]").forEach((a) =>
      a.addEventListener("click", closeMega)
    );

    /* Mobile drawer */
    const drawer = nav.querySelector("[data-mobile-drawer]");
    const toggle = nav.querySelector("[data-mobile-toggle]");
    toggle?.addEventListener("click", () => {
      const open = drawer?.classList.toggle("hidden") === false;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("[data-mobile-section]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-mobile-section");
        const panel = nav.querySelector(`[data-mobile-panel="${name}"]`);
        panel?.classList.toggle("hidden");
      });
    });
    nav.querySelectorAll("[data-close-mobile]").forEach((a) =>
      a.addEventListener("click", () => {
        drawer?.classList.add("hidden");
        toggle?.setAttribute("aria-expanded", "false");
      })
    );

    /* Scroll style */
    const onScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add("bg-white/90", "dark:bg-slate-950/90", "backdrop-blur-md", "shadow-md");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- FAQ accordions ---------- */
  document.querySelectorAll("[aria-expanded]").forEach((btn) => {
    if (btn.closest("[data-nav]")) return;
    const article = btn.closest("article");
    if (!article) return;
    const answer =
      article.querySelector("[data-faq-answer]") ||
      btn.nextElementSibling;
    if (!answer) return;

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      const parent = article.parentElement;
      if (parent) {
        parent.querySelectorAll("[aria-expanded='true']").forEach((b) => {
          if (b === btn) return;
          b.setAttribute("aria-expanded", "false");
          const a =
            b.closest("article")?.querySelector("[data-faq-answer]") ||
            b.nextElementSibling;
          a?.classList.add("hidden");
          b.querySelector("svg")?.classList.remove("rotate-180", "text-blue-500");
        });
      }
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      answer.classList.toggle("hidden", open);
      const chevron = btn.querySelector("svg");
      chevron?.classList.toggle("rotate-180", !open);
      chevron?.classList.toggle("text-blue-500", !open);
    });
  });

  /* ---------- Tabs (data-tab-panel siblings) ---------- */
  document.querySelectorAll("[data-tab-panel]").forEach((panel) => {
    const wrap = panel.parentElement;
    if (!wrap || wrap.dataset.tabsReady) return;
    const panels = [...wrap.querySelectorAll(":scope > [data-tab-panel]")];
    if (panels.length < 2) return;
    wrap.dataset.tabsReady = "1";
    const buttons = [...wrap.querySelectorAll(":scope > div button, :scope > .grid button")];
    if (!buttons.length) {
      const grid = wrap.querySelector(":scope > div");
      if (grid) {
        buttons.push(...grid.querySelectorAll("button"));
      }
    }
    const btns = [...wrap.querySelectorAll("button")].filter((b) =>
      panels.some((p) => p.previousElementSibling?.contains?.(b) || true)
    );
    // Prefer buttons in first child grid
    const gridBtns = [...(wrap.firstElementChild?.querySelectorAll("button") || [])];
    const tabBtns = gridBtns.length ? gridBtns : btns.slice(0, panels.length);

    tabBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b, j) => {
          const on = j === i;
          b.classList.toggle("bg-blue-600", on);
          b.classList.toggle("text-white", on);
          b.classList.toggle("bg-slate-900/40", !on);
          b.classList.toggle("border", !on);
          b.classList.toggle("border-white/20", !on);
        });
        panels.forEach((p, j) => p.classList.toggle("hidden", j !== i));
      });
    });
  });

  /* ---------- Forms (frontend only — no backend) ---------- */
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const honeypot = form.querySelector('[name="website"]');
      if (honeypot && honeypot.value) return;
      // Soft success without API
      window.location.href = "/thank-you/";
    });
  });

  /* ---------- Consultation modal (if present) ---------- */
  document.querySelectorAll("[data-open-consultation]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = document.querySelector("[data-consultation-modal]");
      modal?.classList.remove("hidden");
      modal?.setAttribute("aria-hidden", "false");
    });
  });
  document.querySelectorAll("[data-consultation-modal]").forEach((modal) => {
    modal.querySelector('[aria-label="Close modal"]')?.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
    });
  });
})();
