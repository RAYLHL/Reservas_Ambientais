 try {

            const resposta = await fetch(
                "http://localhost:4000/individuos",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        titulo,
                        descricao,
                        data_hora_envio: data,
                        id_individuo,
                        id_unidade_conservacao,
                        status
                    })
                }
            );

            const resultado = await resposta.json();
            
            const id =
            document.getElementById("idUsuario").value.trim();

    

            if (!resposta.ok) {
                throw new Error(
                    resultado.mensagem || "Erro ao enviar o ID."
                );
            }


        } catch (erro) {
            console.log(erro)

        };