const cadastro = localStorage.getItem("usuario");

const cadastroContainer =
    document.getElementById("cadastro-container");

const formulario =
    document.getElementById("form-comunicado");

// Se já estiver cadastrado, abre direto o formulário
if (cadastro) {

    cadastroContainer.style.display = "none";
    formulario.style.display = "block";

    const usuario = JSON.parse(cadastro);
    const campoEmail = document.getElementById("email");

    if (campoEmail) {
        campoEmail.value = usuario.email;
    }
}

// Evento do botão
document
    .getElementById("btnCadastrar")
    .addEventListener("click", () => {

        const nome =
            document.getElementById("nomeUsuario").value.trim();
        const email =
            document.getElementById("emailUsuario").value.trim();

        // Validação
        if (!nome || !email) {
            alert("Preencha todos os campos.");
            return;
        }

        // Salva no LocalStorage
        localStorage.setItem(
            "usuario",
            JSON.stringify({
                nome,
                email
            })
        );

        // Mostra notificação
        const notificacao =
            document.getElementById("notificacao");

        notificacao.style.display = "block";

        // Após 2 segundos
        setTimeout(() => {
            notificacao.style.display = "none";

            cadastroContainer.style.display = "none";

            formulario.style.display = "block";

            // Preenche automaticamente o email
            document.getElementById("email").value = email;

        }, 2000);

    });