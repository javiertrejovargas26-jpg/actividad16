const form = document.getElementById("ideaForm");
const ideasList = document.getElementById("ideasList");
const snackbar = document.getElementById("snackbar");
const fab = document.getElementById("fab");

// FAB abre el formulario
fab.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Guardar idea
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let idea = document.getElementById("idea").value;

    ideasList.innerHTML += `
        <div class="idea-card">
            <h3>${nombre}</h3>
            <p>${idea}</p>
        </div>
    `;

    form.reset();

    // Snackbar
    snackbar.className = "show";
    setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 3500);
});
