var modal = document.getElementById("youtube__modal");
var btn = document.getElementById("youtube__button");
var iframe = document.getElementById("youtube__modal__iframe");

btn.onclick = function () {
    modal.style.display = "flex";
    iframe.src = "https://www.youtube.com/embed/mUGYPlAgJPw";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        iframe.src = "null";
    }
};
