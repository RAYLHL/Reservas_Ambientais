const unidades = {

    1: {
        nome: "Parque Estadual das Araucárias",
        cidade: "São Domingos - SC",
        criacao: "1982",

        instituicao:
            "Instituto do Meio Ambiente de Santa Catarina (IMA)",

        descricao:
            "O Parque Estadual das Araucárias é uma unidade de conservação localizada em Santa Catarina, criada para preservar áreas de Mata Atlântica e principalmente a floresta de araucárias.",

        comunicados: [
            {
                titulo: "Trilha bloqueada",
                descricao: "Árvore caída impedindo a passagem.",
                status: "Em análise"
            },

            {
                titulo: "Necessidade de limpeza",
                descricao: "Resíduos encontrados próximos ao lago.",
                status: "Em análise"
            },

            {
                titulo: "Placa danificada",
                descricao: "Sinalização principal quebrada.",
                status: "Resolvido"
            }
        ]
    },

    2: {
        nome: "Parque Estadual Acaraí",
        cidade: "São Francisco do Sul - SC",
        criacao: "2005",

        instituicao:
            "Instituto do Meio Ambiente de Santa Catarina (IMA)",

        descricao:
            "Área protegida localizada no litoral norte catarinense.",

        comunicados: [
            {
                titulo: "Trilha alagada",
                descricao: "Trecho interditado devido às chuvas.",
                status: "Em análise"
            }
        ]
    }

};

const params = new URLSearchParams(window.location.search);

const id = params.get("id") || 1;

const unidade = unidades[id];

document.getElementById("nome-unidade").textContent =
    unidade.nome;

document.getElementById("cidade-unidade").textContent =
    unidade.cidade;

document.getElementById("data-criacao").textContent =
    unidade.criacao;

document.getElementById("instituicao").textContent =
    unidade.instituicao;

document.getElementById("descricao-unidade").textContent =
    unidade.descricao;

document.getElementById("titulo-comunicados").textContent =
    `Comunicados da unidade (${unidade.comunicados.length})`;

const lista = document.getElementById("lista-comunicados");

unidade.comunicados.forEach(comunicado => {

    lista.innerHTML += `
        <div class="comunicado-card">

            <h3>${comunicado.titulo}</h3>

            <p>${comunicado.descricao}</p>

            <span class="status">
                ${comunicado.status}
            </span>

        </div>
    `;

});

document.getElementById("btn-comunicado")
.addEventListener("click", () => {

    window.location.href =
        `novo-comunicado.html?id=${id}`;

});