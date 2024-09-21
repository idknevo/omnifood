"use strict";

// mobile navigation
const headerEl = document.getElementById("header");
const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const navLinks = document.querySelectorAll(".main-nav-link");
const heroSection = document.querySelector(".hero-section");

// mobile navigation
mobileNavBtn.addEventListener("click", function () {
  headerEl.classList.toggle("mobile-nav");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (headerEl.classList.contains("mobile-nav")) {
      headerEl.classList.remove("mobile-nav");
    }
  });
});

// sticky navigation bar
let headerHeight = 80;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    headerHeight = headerEl.getBoundingClientRect().height;
    heroSection.style.marginTop = `${headerHeight}px`;
    headerEl.classList.add("sticky");
  } else {
    headerEl.classList.remove("sticky");
    heroSection.style.marginTop = `0px`;
    headerHeight = headerEl.getBoundingClientRect().height;
  }
};

const stickyNavObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

stickyNavObserver.observe(heroSection);
