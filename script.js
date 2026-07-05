// Welcome Message
window.onload = function () {
    console.log("Welcome to Aminul Islam Portfolio");
};

// Smooth Button Effect
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.transition = "0.3s";
    });
});

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
