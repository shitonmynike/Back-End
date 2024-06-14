$(document).ready(function(){
    $.getJSON("http://localhost:3003/alunos" , function(dados){
        
        $("#lista-alunos").empty();

        dados.forEach(function(aluno) {
            let tr =    "<tr>"
                +"<td>" + aluno.nome + "</td>"
                +"<td>" + aluno.email + "</td>"
                +"<td>" + aluno.cidade + "</td>"
                +"<td>" + aluno.telefone + "</td>"
                        +"</tr>";

            $("#lista-alunos").append(tr);
        });
    }); //fim do getJSON

    $("#bt-salvar").click(function(){
        let ver_tel = $("#telefone").val();
        let ver_nome = $("#nome").val();
        let ver_email = $("#email").val();
        let ver_cid = $("#cidade").val();


        let cep = /^[0-9]{5}-[0-9]{3}/gm;

        if(cep.test(ver_nome) == true)
        {
            alert("passou no teste");
        }else{
            alert("não passou");
        }

        $("#nome").removeClass("is-invalid");

        if(ver_cid.trim().length <= 3)
        {
            $("#cidade").addClass("is-invalid");
        }
        if(ver_email.trim().length <= 3)
        {
            $("#email").addClass("is-invalid");
        }
        if(ver_tel.trim().length <= 3)
        {
            $("#telefone").addClass("is-invalid");
        }
        if(ver_nome.trim().length <= 3  )
        {
            $("#nome").addClass("is-invalid");
        }
        
    }); //fim do bt-salvar

});