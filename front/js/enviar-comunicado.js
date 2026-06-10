document
    .getElementById("btnValidar")
    .addEventListener("click", async () => {

        const id =
            document.getElementById("idUsuario").value.trim();

        if (!id) {
            mostrarToast("Informe seu ID.");
            return;
        }

        try {

            const resposta = await fetch(
                `http://localhost:3000/individuos/${id}`
            );

            if (!resposta.ok) {
                throw new Error();
            }

            document
                .getElementById("idUsuarioHidden")
                .value = id;

            document
                .getElementById("identificacao-container")
                .style.display = "none";

            document
                .getElementById("form-comunicado")
                .style.display = "block";

        } catch {

            mostrarToast("ID não encontrado.", "erro");

        }

    });