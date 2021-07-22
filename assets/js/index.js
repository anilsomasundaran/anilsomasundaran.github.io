//Show - Hide Menu
const SHOW_MENU_CLASS = "show-menu";
const menu = document.getElementById("nav-menu"),
  menuToggle = document.getElementById("nav-toggle"),
  menuClose = document.getElementById("nav-close");

let handleCloseMenu = () => {
  console.log(menu);
  menu.classList.remove(SHOW_MENU_CLASS);
};

let handleShowMenu = () => {
  menu.classList.add(SHOW_MENU_CLASS);
};

if (menuToggle) {
  menuToggle.addEventListener("click", handleShowMenu);
}

if (menuClose) {
  menuClose.addEventListener("click", handleCloseMenu);
}

//Menu navigation

const menuItem = document.querySelectorAll(".nav__link");
//console.log(menuItem);

menuItem.forEach((item) => {
  item.addEventListener("click", handleCloseMenu);
});

//show & hide Skill - accordian
const skillHeaders = document.querySelectorAll(".skill__header"),
  skillContent = document.getElementsByClassName("skill__content");

function handleAccordianClick() {
  let parentClass = this.parentNode.className;
  for (var i = 0; i < skillContent.length; i++) {
    skillContent[i].className = "skill__content skill__close";
  }
  console.log(skillContent);
  if (parentClass === "skill__content skill__close")
    this.parentNode.className = "skill__content skill__open";
}

skillHeaders.forEach((ele) => {
  ele.addEventListener("click", handleAccordianClick);
});

//Experience Tab Selection

const tabs = document.querySelectorAll("[data-target]"),
  tabSections = document.querySelectorAll(".qualification__section"),
  ACTIVE_CLASS = "qualification__active",
  INACTIVE_CLASS = "qualification__inactive";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.dataset.target;
    tabs.forEach((t) => {
      t.classList.remove("tab-active");
    });
    tab.classList.add("tab-active");

    tabSections.forEach((section) => {
      if (section.classList.contains(ACTIVE_CLASS)) {
        section.classList.remove(ACTIVE_CLASS);
        section.classList.add(INACTIVE_CLASS);
      }

      if (section.getAttribute("id") === tabId) {
        section.classList.remove(INACTIVE_CLASS);
        section.classList.add(ACTIVE_CLASS);
      }
    });
  });
});

//open and close model

const modelOpenBtns = document.querySelectorAll(".project__button"),
  modelCloseBtns = document.querySelectorAll(".project__modal-close");

modelOpenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //console.log(btn);
    //console.log(btn.dataset.target);
    const model = document.querySelector(btn.dataset.target);
    model.classList.add("project__modal-active");
  });
});

modelCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //console.log(btn);
    //console.log(btn.parentElement.parentElement.getAttribute("id"));
    const modelId = btn.parentElement.parentElement.getAttribute("id");
    document.getElementById(modelId).classList.remove("project__modal-active");
  });
});

//console.log(modelOpenBtns);

const sections = document.querySelectorAll("section[id]");
console.log(sections);
function scrollActiveSection() {
  const scrollY = window.pageYOffset;
  sections.forEach((curSection) => {
    const height = curSection.offsetHeight;
    const secTop = curSection.offsetTop - 50;
    const sectionId = curSection.getAttribute("id");

    if (scrollY > secTop && scrollY <= secTop + height) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActiveSection);

function stickyHeaderOnScroll() {
  const headerSec = document.getElementById("header");
  if (this.scrollY >= 80) {
    headerSec.classList.add("sticky-header");
  } else {
    headerSec.classList.remove("sticky-header");
  }
}

window.addEventListener("scroll", stickyHeaderOnScroll);

//show scroll up button

function showScrollUpBtnOnScroll() {
  const scrollUp = document.getElementById("scrollup");
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll-up");
  } else {
    scrollUp.classList.remove("show-scroll-up");
  }
}

window.addEventListener("scroll", showScrollUpBtnOnScroll);

//theme selection

const themSelector = document.getElementById("theme-selector");
const darkThemeClass = "dark-theme";
const darkThemeIcon = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkThemeClass) ? "dark" : "light";

const getCurrentIcon = () =>
  themSelector.classList.contains(darkThemeIcon) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkThemeClass
  );
  themSelector.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    darkThemeIcon
  );
}

themSelector.addEventListener("click", () => {
  document.body.classList.toggle(darkThemeClass);
  themSelector.classList.toggle(darkThemeIcon);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-theme", getCurrentIcon());
});
