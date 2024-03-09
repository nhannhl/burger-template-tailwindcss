/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
  });
})

hamburger.addEventListener('click', () => {
  navMenu.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
  navMenu.classList.add('hidden');
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

const darkMode = () => {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

const lightMode = () => {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

if(localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener('click', () => {
  if(localStorage.getItem("mode") == "dark") {
    lightMode();
  } else {
    darkMode();
  }
});

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
window.addEventListener('scroll', () => {
  const scrollUpBtn = document.getElementById('scroll-up');
  if(this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
});

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if(this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondaryColor");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
});

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav__link');

  let current = 'home';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    
    if(this.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }

    navLinks.forEach(item => {
      item.classList.remove("text-secondaryColor");
      if(item.href.includes(current)) {
        item.classList.add("text-secondaryColor");
      }
    });
  })
}
window.addEventListener('scroll', activeLink);

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
});

sr.reveal(".home__image");
sr.reveal(".home__content", { origin: "bottom" });
sr.reveal(".category__card", { interval: 300 });

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const allItems = document.querySelectorAll(".item_wrap");
const foodItems = document.querySelectorAll(".food");
const snackItems = document.querySelectorAll(".snack");
const beverageItems = document.querySelectorAll(".beverage");


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    tab.classList.add('active');

    const tabVal = tab.getAttribute('data-tabs');
    
    allItems.forEach(item => item.style.display = "none");
    if(tabVal == 'food') {
      foodItems.forEach(item => item.style.display = "block");
    } else if(tabVal == 'snack') {
      snackItems.forEach(item => item.style.display = "block");
    } else if(tabVal == 'beverage') {
      beverageItems.forEach(item => item.style.display = "block");
    } else {
      allItems.forEach(item => item.style.display = "block");
    }
  })
});