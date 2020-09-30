const searchBtn = document.querySelector(".search");
const searchBox = document.querySelector(".search-box");
const searchClose = document.querySelector(".close");

searchBtn.addEventListener("mousedown", searchPopUp);

function searchPopUp() {
  if (searchBox.style.marginTop == "-150px") {
    searchBox.style.marginTop = "0";
  } else {
    searchBox.style.marginTop = "-150px";
  }
}

searchClose.addEventListener("click", function () {
  searchBox.style.marginTop = "-150px";
});
