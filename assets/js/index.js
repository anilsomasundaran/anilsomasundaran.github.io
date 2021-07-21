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
