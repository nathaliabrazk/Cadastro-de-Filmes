class Filme {
    constructor(valNome,valDescricao,valData,valDiretor, valCategoria){
        this.nome = valNome;
        this.descricao = valDescricao;
        this.data = valData;
        this.diretor = valDiretor;
        this.categoria = valCategoria;
    }
}
// SELETORES
var cadastroBtn = document.querySelector("#cadastroFilmesBtn");
var listarBtn = document.querySelector("#listarFilmesBtn");

cadastroBtn.addEventListener("click", cadastrar);
listarBtn.addEventListener("click", listar);
var filme = null;

// Adiciona um evento de clique ao botão Listar no momento do carregamento da página
listarBtn.addEventListener("click", listar);

//FUNÇÃO PARA O CADASTRO
function cadastrar() {
    let nomeFilme = document.querySelector("#nomeFilme").value;
    let descricaoFilme = document.querySelector("#descricaoFilme").value;
    let dataFilme = document.querySelector("#dataFilme").value;
    let diretorFilme = document.querySelector("#diretorFilme").value;
    let categoriaFilme = document.querySelector("#categoriaFilme").value;

    // Lista para armazenar mensagens de erro
    let erros = [];

    // Verifica se o campo nome está preenchido
    if (!nomeFilme.trim()) {
        erros.push("Preencha o título do filme!");
    }

    // Verifica se o campo descrição está preenchido
    if (!descricaoFilme.trim()) {
        erros.push("Preencha a descrição do filme!");
    }

    // Verifica se o campo data está preenchido
    if (!dataFilme.trim()) {
        erros.push("Preencha a data de lançamento do filme!");
    }

    // Verifica se o campo diretor está preenchido
    if (!diretorFilme.trim()) {
        erros.push("Preencha o nome do diretor do filme!");
    }

    // Verifica se o campo categoria está preenchido
    if (!categoriaFilme.trim()) {
        erros.push("Preencha a categoria do filme!");
    }

    // Exibe mensagens de erro
    let msgCadastro = document.querySelector("#msgCadastro");
    msgCadastro.textContent = erros.join(" ");

    // Se houver mensagens de erro, exibe o prefixo
    if (erros.length > 0) {
        msgCadastro.classList.add("error");
        msgCadastro.dataset.hasError = true;
    } else {
        msgCadastro.classList.remove("error"); // Remove a classe de erro
        msgCadastro.dataset.hasError = false;
    }

    // Se não houver mensagens de erro, limpa a mensagem de aviso
    if (erros.length === 0) {
        msgCadastro.textContent = "";

        // Adiciona um novo evento de clique ao botão Listar após o cadastro
        listarBtn.addEventListener("click", listar);
    }

    if (erros.length === 0) {
        filme = new Filme(nomeFilme, descricaoFilme, dataFilme, diretorFilme, categoriaFilme);
    }
}

//FUNÇÃO PARA LISTAR OS FILMES CADASTRADOS
function listar() {
    if (filme) {
        let resposta = document.querySelector("#resposta");
        let novoFilmeDiv = document.createElement("div");
        novoFilmeDiv.classList.add("filme");
        novoFilmeDiv.innerHTML = `
            <h2>${filme.nome}</h2>
            <p style="color: var(--rosa-vermelho); background-color: #fffcfdc2; border-radius: 5px; font-family: 'Cormorant Garamound'">Descrição: ${filme.descricao}</p>
            <p style="color: var(--rosa-vermelho); background-color: #fffcfdc2; border-radius: 5px; font-family: 'Cormorant Garamound'">Data de lançamento: ${filme.data}</p>
            <p style="color: var(--rosa-vermelho); background-color: #fffcfdc2; border-radius: 5px; font-family: 'Cormorant Garamound'">Diretor: ${filme.diretor}</p>
            <p style="color: var(--rosa-vermelho); background-color: #fffcfdc2; border-radius: 5px; font-family: 'Cormorant Garamound'">Categoria:${filme.categoria}</p>
        `;
        resposta.appendChild(novoFilmeDiv);
        filme = null; // Define filme como null após listar
    }
}