function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento selecionado no console para verificação

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se o campoPesquisa for uma string sem nada

    if (campoPesquisa == "") {
        section.innerHTML = "Nada foi encontrado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dados.tags.toLowerCase()

        // Se no título includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))

        {
            //cria um novo elemento
            // Concatena o HTML de cada resultado à string 'resultados'
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.alt}" ${dado.localimagem}> 
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.youtube}" target="_blank">Saiba mais no vídeo</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Informação não encontrada</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}