function mostrarToast(mensagem, tipo = "erro") {

    let cor = "#dc3545";

    if (tipo === "sucesso") {
        cor = "#198754";
    }

    if (tipo === "aviso") {
        cor = "#ffc107";
    }

    Toastify({
        text: mensagem,
        duration: 3000,
        close: false,
        gravity: "top",
        position: "right",
        className: "toast-custom",

        offset: {
            y: "85px"
        },

        style: {
            background: cor,
            borderRadius: "12px",
            padding: "26px 30px"
        }

    }).showToast();
    }