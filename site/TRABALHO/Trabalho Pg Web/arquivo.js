const inputSearch = document.querySelector("#search");
const colunas = document.querySelectorAll(".coluna");

inputSearch.oninput = () => {
    const termo = inputSearch.value.toLowerCase().trim();

    colunas.forEach((coluna) => {
        const nome = coluna.querySelector("h5").textContent.toLowerCase();

        if (nome.includes(termo)) {
            coluna.style.display = "flex"; // igual ao display do seu CSS (.coluna usa flex)
        } else {
            coluna.style.display = "none";
        }
    });
};