// Toggle navbar
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// Remove menu for every click
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 30;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
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

window.addEventListener("scroll", scrollActive);

// Change BG Header
function scrollHeader() {
  const header = document.getElementById("header");
  return this.scrollY >= 550
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);


// Function to count elements with a specific ID and display the count
function countAndDisplay(id, displayId) {
  var elements = document.querySelectorAll(`#${id}`);
  var count = elements.length;
  document.getElementById(displayId).innerHTML = `${count}`;
}

// Call the function for each ID
countAndDisplay('python', 'python-display');
countAndDisplay('sql', 'sql-display');
countAndDisplay('powerbi', 'powerbi-display');


const projects = document.querySelectorAll('.project__item');
const loadMoreBtn = document.getElementById('load-more');
let currentProjectIndex = 2; // Initialize with 2 projects visible

// Hide all projects except the first 2
projects.forEach((project, index) => {
  if (index >= currentProjectIndex) {
    project.style.display = 'none';
  }
});

loadMoreBtn.addEventListener('click', () => {
  // Show the next 10 projects
  for (let i = currentProjectIndex; i < currentProjectIndex + 10; i++) {
    if (projects[i]) {
      projects[i].style.display = 'flex';
    }
  }
  currentProjectIndex += 10;

  // Hide the load more button if all projects are visible
  if (currentProjectIndex >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }
});