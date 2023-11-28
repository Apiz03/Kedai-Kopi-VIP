// toggle  class active hambuger menu

const navbarNav = document.querySelector(".navbar-nav");
const shopNav = document.querySelector(".shopping-cart");

// ketika hambuger diketik
document.querySelector("#hambuger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shopNav.classList.toggle("active");
  e.preventDefault();
};

// toggle active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik diluar slidebar
const hm = document.querySelector("#hambuger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shopNav.contains(e.target)) {
    shopNav.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};


window.onclick = (e) => {
  if (e.target == itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
