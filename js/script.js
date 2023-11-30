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

//FUNÇÃO PARA O CADASTRO    
function cadastrar() {
    let nomeFilme = document.querySelector("#nomeFilme").value;
    let descricaoFilme = document.querySelector("#descricaoFilme").value;
    let dataFilme = document.querySelector("#dataFilme").value;
    let diretorFilme = document.querySelector("#diretorFilme").value;
    let categoriaFilme = document.querySelector("#categoriaFilme").value;

    if (filme.length == 0) {
        
    } else {
        
    }

    filme = new Filme(nomeFilme,descricaoFilme,dataFilme,diretorFilme,categoriaFilme);
}

//FUNÇÃO PARA LISTAR OS FILMES CADASTRADOS
function listar(){
    let resposta = document.querySelector("#resposta");
    resposta.innerHTML += `<div class="filme">
        <h2>${filme.nome}</h2>
        <p style="color: var(--rosa-vermelho); background-color: #fffcfdc2; border-radius: 5px; font-family: 'Cormorant Garamound'">Descrição do filme: ${filme.descricao}</p>
        <p style="color: var(--rosa-vermelho); background-color: #fffcfdc2; border-radius: 5px; font-family: 'Cormorant Garamound'">Data de lançamento: ${filme.data}</p>
        <p style="color: var(--rosa-vermelho); background-color: #fffcfdc2; border-radius: 5px; font-family: 'Cormorant Garamound'">Diretor : ${filme.diretor}</p>
        <p style="color: var(--rosa-vermelho); background-color: #fffcfdc2; border-radius: 5px; font-family: 'Cormorant Garamound'">${filme.categoria}</p>
    </div>`
}