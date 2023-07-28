document.addEventListener("DOMContentLoaded", function() {
    const popupWrapper = document.getElementById("popupWrapper");
    popupWrapper.style.display = "flex";
});

function closePopup() {
    const popupWrapper = document.getElementById("popupWrapper");
    popupWrapper.style.display = "none";
}