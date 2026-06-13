async function carregarComunicados() {

    try {

        const resposta = await fetch(
            "https://back-reservas-ambientais-production.up.railway.app/comunicacoes"
        );

        if (!resposta.ok) {
            throw new Error("Erro ao buscar comunicados.");
        }

        const comunicados = await resposta.json();

        console.log(comunicados)
        
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

                        <a
                            href="unidades.html"
                            class="btn-detalhes"
                            title="Ver detalhes">

                            <img
                                src="img/icon-seta.webp"
                                alt="Ver detalhes">

                        </a>

                    </div>

                    <h3>${comunicado.titulo}</h3>

                    <p>${comunicado.descricao}</p>

                </div>
            `;

        });

    } catch (erro) {

        console.error(erro);

    }

}

document.addEventListener(
    "DOMContentLoaded",
    carregarComunicados
);