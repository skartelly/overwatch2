function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa estiver vazio
    if (campoPesquisa == "") {
        section.innerHTML = `<p class="texto-erro">Digite o nome de um Herói</p>`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";

    // Itera sobre cada personagem na lista de personagens
    for (let hero of personagens) {
        nome = hero.nome.toLowerCase()

        // se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa)) {
            // Constrói o HTML para cada personagem, formatando as informações de acordo com o template
            resultados += `
        <div class="item-resultado">
            <h2>${hero.nome}</h2>
            <p class="descricao-meta">${hero.apresentacao}</p>
            <h3>Pontos Fortes</h3>
            <p>${hero.pontosFortes}</p>
            <h3>Pontos Fracos</h3>
            <p>${hero.pontosFracos}</p>
            <h3>Counters</h3>
            <p>${hero.counters}</p>
            <h3>Sinergias</h3>
            <p>${hero.sinergias}</p>
            <a href="${hero.link}" target="_blank">Conheça as habilidades aqui</a>
        </div>
        `;
        }

    }
    if (resultados == "") {
        section.innerHTML = `<p class="texto-erro">Este Herói ainda não chegou aos campos de batalha</p>`
        return
    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}