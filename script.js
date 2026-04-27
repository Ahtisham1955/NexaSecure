console.log("SCRIPT IS RUNNING");
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);

  }, 2000); // 2 seconds
});