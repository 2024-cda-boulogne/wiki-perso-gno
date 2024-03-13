const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");
  

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // code pour le darkmode refresh
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});


// apropos

document.addEventListener('DOMContentLoaded', function () {
  const aboutLink = document.querySelector('.aboutLink');
  const aboutModal = document.getElementById('aboutModal');
  const closeBtn = document.getElementById('closeBtn');

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le comportement de lien par défaut
    aboutModal.style.display = 'block';
  });

  closeBtn.addEventListener('click', function () {
    aboutModal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === aboutModal) {
      aboutModal.style.display = 'none';
    }
  });
});
