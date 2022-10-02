//jQuery Smooth Scroll
$(".navbar a").on("click", function (e) {
  if (this.hash !== "");
  e.preventDefault();

  const hash = this.hash;

  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top,
    },
    750
  );
});

//Load onScroll
window.addEventListener("scroll", reveal);

function reveal() {
  var revealItems = document.querySelectorAll(".reveal");

  for (var i = 0; i < revealItems.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = revealItems[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      revealItems[i].classList.add("active");
    } else {
      revealItems[i].classList.remove("active");
    }
  }
}

//Search Bar
const input = document.querySelector("#search");
const blog = document.querySelectorAll(".blog");

let timer;
let sec = 500;

function liveSearch() {
  for (let i = 0; i < blog.length; i++) {
    if (blog[i].innerText.toLowerCase().includes(input.value.toLowerCase())) {
      blog[i].classList.remove("hidden");
    } else {
      blog[i].classList.add("hidden");
    }
  }
}

input.addEventListener("keyup", () => {
  clearTimeout(timer);
  timer = setTimeout(liveSearch, 1000);
});
