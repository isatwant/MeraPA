const log_bar = document.getElementById("log_bar");
const toggleButton = document.getElementById("toggleButton");
const showButton = document.getElementById("showButton");

showButton.style.display ="none";
toggleButton.addEventListener("click", () => {
    if (log_bar.style.display === "" || log_bar.style.display === "block") {
        log_bar.style.display = "none";
        showButton.style.display ="block";
        
    } else {
        log_bar.style.display = "block";
    }
});

showButton.addEventListener("click", () => {
    log_bar.style.display = "block";
    showButton.style.display ="none";
});
