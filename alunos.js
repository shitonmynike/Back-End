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

        let dados = {
            nome: ver_nome,
            telefone: ver_tel,
            email: ver_email,
            cidade: ver_cid
        };
        
        
        
        $("#nome, #telefone, #email, #cidade").removeClass("is-invalid");
        
        

        let tel_exp = /^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}/gm;
        let email_exp = /^[0-9a-zA-Z-._]+@[a-z0-9]+\.[a-z.]+$/gm;
        





        if(tel_exp.test(ver_tel) == false)
        {
            $("#telefone").addClass("is-invalid");
        }
        if(email_exp.test(ver_email) == false)
        {
            $("#email").addClass("is-invalid");
        }








        nome

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


        $.post("http://localhost:3003/cadastrar" , dados , function(erro, resposta){
            console.log(erro,resposta);
        });
        
    }); //fim do bt-salvar

    $("#telefone").keydown(function(ev){
        
        
        let verificar = /^[0-9-\(\)]+/gm;
        


       if(verificar.test(ev.key) == false & ev.key != "Backspace")
        {
            return false;
        } 

    });//fim do keydown

});