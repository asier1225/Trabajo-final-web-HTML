const popup = document.getElementById("cookie-popup");
const acceptBtn = document.getElementById("accept-cookies");

if (localStorage.getItem("cookiesAccepted")) {
  popup.style.display = "none";
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  popup.style.display = "none";
});