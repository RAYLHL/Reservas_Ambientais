// Máscara do telefone: (00) 00000-0000
document
    .getElementById("telefoneUsuario")
    .addEventListener("input", (e) => {

        let valor = e.target.value.replace(/\D/g, "");

        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        if (valor.length <= 10) {

            valor = valor
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{4})(\d)/, "$1-$2");

        } else {

            valor = valor
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1-$2");
        }

        e.target.value = valor;
    });


// CADASTRO DO USUÁRIO
document
    .getElementById("btnCadastrar")
    .addEventListener("click", async () => {

        const nome =
            document.getElementById("nomeUsuario").value.trim();

        const email =
            document.getElementById("emailUsuario").value.trim();

        const telefone =
            document.getElementById("telefoneUsuario").value.trim();

        if (!nome || !email || !telefone) {
            mostrarToast("Preencha todos os campos.");
            return;
        }

        if (nome.length < 5 || nome.length > 60) {
            mostrarToast("Nome completo deve ter entre 5 e 60 caracteres.", "aviso");
            return;
        }

        if (email.length < 9 || email.length > 60) {
            mostrarToast("Email deve ter entre 9 e 60 caracteres.", "aviso");
            return;
        }

        try {

            const resposta = await fetch(
                "http://localhost:3000/individuos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nome,
                        email,
                        telefone
                    })
                }
            );

            const dados = await resposta.json();

            if (!resposta.ok) {
                throw new Error(
                    dados.mensagem || "Erro ao cadastrar."
                );
            }

            // Esconde formulário de cadastro
            document
                .getElementById("cadastro-container")
                .style.display = "none";

            // Mostra tela de sucesso
            document
                .getElementById("resultadoCadastro")
                .style.display = "block";

            // Mostra ID gerado
            document
                .getElementById("idGerado")
                .textContent = dados.id;

            // Preenche automaticamente o email
            document
                .getElementById("email")
                .value = email;

            // Guarda o ID para enviar junto no comunicado
            document
                .getElementById("idUsuario")
                .value = dados.id;

        } catch (erro) {

            console.error(erro);

            mostrarToast("Erro ao realizar cadastro. Tente novamente.", "erro");
        }
    });


// ABRIR FORMULÁRIO DE COMUNICADO
document
    .getElementById("btnAbrirComunicado")
    .addEventListener("click", () => {

        document
            .getElementById("resultadoCadastro")
            .style.display = "none";

        document
            .getElementById("form-comunicado")
            .style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });