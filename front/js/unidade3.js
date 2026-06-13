const params = new URLSearchParams(window.location.search);

async function carregarComunicados() {

    try {

       console.log("Entrou na função");

        const resposta = await fetch(
            "https://back-reservas-ambientais-production.up.railway.app/comunicacoes/unidade/3"
        );

        console.log("Resposta:", resposta);

        if (!resposta.ok) {
            throw new Error();
        }

        const comunicados = await resposta.json();

        console.log("Comunicados:", comunicados);

        document.getElementById("titulo-comunicados")
            .textContent =
            `Comunicados da unidade (${comunicados.length})`;

        const lista =
            document.getElementById("lista-comunicados");

        lista.innerHTML = "";

        comunicados.forEach(comunicado => {

            lista.innerHTML += `
                <div class="comunicado-card">

                    <div class="comunicado-topo">

                        <div class="usuario-info">

                            <img src="img/user.webp" alt="Usuário">

                            <div>
                                <h4>${comunicado.nome}</h4>

                                <span>
                                    ${new Date(
                                        comunicado.data_hora_envio
                                    ).toLocaleDateString("pt-BR")}
                                </span>
                            </div>

                        </div>

                    </div>

                    <h3>${comunicado.titulo}</h3>

                    <p>${comunicado.descricao}</p>

                </div>
            `;

        });

    } catch (erro) {

        console.error(
            "Erro ao carregar comunicados:",
            erro
        );

    }

}

carregarComunicados();

document.getElementById("btn-comunicado")
    .addEventListener("click", () => {

        window.location.href =
            `novo-comunicado.html?id=${id}`;

    });