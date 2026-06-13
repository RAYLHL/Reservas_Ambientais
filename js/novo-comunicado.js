document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault();

    const unidade = document.getElementById("unidade").value.trim();
    const titulo = document.getElementById("titulo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;

    // Validações

    if (!unidade) {
        mostrarToast("Informe a unidade de conservação.");
        return;
    }

    if (!titulo) {
        mostrarToast("Informe o título da comunicação.");
        return;
    }

    if (titulo.length < 5) {
        mostrarToast("O título deve ter pelo menos 5 caracteres.");
        return;
    }

    if (!descricao) {
        mostrarToast("Informe uma descrição.");
        return;
    }

    if (descricao.length < 15) {
        mostrarToast("A descrição deve ter pelo menos 15 caracteres.");
        return;
    }

    if (!email) {
        mostrarToast("Informe seu email.");
        return;
    }

    if (!email.includes("@")) {
        mostrarToast("Informe um email válido.");
        return;
    }

    if (!data) {
        mostrarToast("Informe a data.");
        return;
    }

    // Sucesso

    mostrarToast(
        "Comunicado enviado com sucesso!",
        "sucesso"
    );

    // Limpa formulário após 1 segundo
    setTimeout(() => {
        window.location.href = "index.html";
        document.querySelector("form").reset();

        // Mantém a unidade preenchida
        document.getElementById("unidade").value =
            "Parque estadual das Araucariais";

    }, 1000);

});