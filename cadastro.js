const cadastro = localStorage.getItem("usuario");

const cadastroContainer =
    document.getElementById("cadastro-container");

const formulario =
    document.getElementById("form-comunicado");

if(cadastro){

    cadastroContainer.style.display = "none";

    formulario.style.display = "block";

}

document
.getElementById("btnCadastrar")
.addEventListener("click", () => {

    const nome =
        document.getElementById("nomeUsuario").value;

    const email =
        document.getElementById("emailUsuario").value;

    if(!nome || !email){

        alert("Preencha todos os campos.");

        return;
    }

    localStorage.setItem(
        "usuario",
        JSON.stringify({
            nome,
            email
        })
    );

    cadastroContainer.style.display = "none";

    formulario.style.display = "block";

});