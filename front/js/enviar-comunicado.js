// ─── Validação do ID ───────────────────────────────────────
document.getElementById("btnValidar").addEventListener("click", async () => {
    const id = document.getElementById("idUsuario").value.trim();

    if (!id) {
        mostrarToast("Informe seu ID.");
        return;
    }

    try {
        const resposta = await fetch(`http://localhost:4000/individuos/${id}`);

        if (!resposta.ok) throw new Error();

        document.getElementById("idUsuarioHidden").value = id;
        document.getElementById("identificacao-container").style.display = "none";
        document.getElementById("form-comunicado").style.display = "block";

    } catch {
        mostrarToast("ID não encontrado.", "erro");
    }
});

// ─── Envio do comunicado ────────────────────────────────────
document.getElementById("formComunicado").addEventListener("submit", async (event) => {
    event.preventDefault();

    const titulo        = document.getElementById("titulo").value.trim();
    const descricao     = document.getElementById("descricao").value.trim();
    const data          = document.getElementById("data").value;
    const id_individuo  = parseInt(document.getElementById("idUsuarioHidden").value);
    const id_unidade    = parseInt(document.getElementById("unidade").value);
    const status        = 1;

    try {
        const resposta = await fetch("http://localhost:4000/comunicacoes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                titulo,
                descricao,
                data_hora_envio: data,
                id_individuo,
                id_unidade_conservacao: id_unidade,
                status
            })
        });

        const resultado = await resposta.json();

        if (!resposta.ok) {
            throw new Error(resultado.mensagem || "Erro ao enviar comunicado.");
        }

        mostrarToast("Comunicado enviado com sucesso!", "sucesso");
        document.getElementById("formComunicado").reset();

        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000);

    } catch (erro) {
        mostrarToast(erro.message || "Erro ao enviar comunicado.", "erro");
    }
});