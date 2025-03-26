const icone = document.getElementById("icone");
const sommaire = document.getElementById("sommaire");


icone.addEventListener("click", (event) => {
    sommaire.classList.toggle("active");
    event.stopPropagation();
});


document.addEventListener("click", (event) => {
    if (!sommaire.contains(event.target) && !icone.contains(event.target)) {
        sommaire.classList.remove("active");
    }
});


sommaire.addEventListener("click", () => {
    sommaire.classList.remove("active");
});

