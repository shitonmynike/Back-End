$(document).ready(function(){

    listarServicos();
    function listarServicos()
    {
    
    
        $.getJSON("http://localhost:3003/servico/lista" , function(dados){
            $("#lista-servico").empty();
            console.log(dados);
            dados.forEach(function(item){
                
        
                let novo = "<tr>"
                +"<td>"+ item.nome + "</td>"
                +"<td>R$"+ item.preco.toFixed(2) +"</td>"
                +"<td>" + item.profissional + "</td>"
                +"<td>"+ item.tipo +"</td>"
                +"<td>"
                    +'<button class="btn btn-outline-secondary">Alterar</button>'
                    +'<button servico-id="'+ item._id +'" class="btn btn-outline-danger bt-delete" data-bs-toggle="modal" data-bs-target="#modal-delete" >Deletar</button>'
                +"</td>"
            +"</tr>"
                    
            $("#lista-servico").append(novo);

    }); //fim do foreach
            }); //fimdo getJSON
    }
            $("#lista-servico").on("click" , ".bt-delete" , function(){
                    let id = $(this.attr("servico-id"))
                    console.log(id);
              
            }); //fim do click .bt-delete

            $("#bt-confirma-delete").click(function(){
                let id = $("id-selecionado").val();

               
                $.post("http://localhost:3003/servico/deleta/" + id, function(retorno){
                    $("#modal-delete").modal('hide');
                    $("#msg-sucesso").removeClass("d-none");
                    listarServicos();

                }).fail(function(erro){
                    console.log(erro.reponseText);
                    $("#msg-erro").removeClass("d-none");
                    $("#msg-erro").html(erro.reponseText);
                    $("modal-delete").modal('hide');
                });
                
                
            });

            $("bt-salvar").click(function(){

                let novo = {
                    "nome": $("#nome").val(),
                    "preco":($("#preco")).val(),
                    "profissional": $("#funcionario").val(),
                    "tipo": $('[name="tipo]:checked').val()
                }

                $.post("http://localhost:3003/servico/novo" , novo , function(){

                    $("#msg-sucesso").removeClass("d-none");
                    $("#msg-sucesso").html("O servicço foi cadastrado");
                    listarServicos();
                    $("#nome , #preco , #profissional").val("");
                    $('[name="tipo"').prop("checked , false");
                    
                }).fail(function(retorno){
                    $("#msg.erro").removeClass("d-none");
                    $("#msg-erro").html(erro.reponseText);
                    $("#modal-cadastrar").modal('hide');
                })

            });


});
