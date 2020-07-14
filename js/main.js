
function consultacep(){
    $(".barra-progresso").show();
    cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/"
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#titulo-cep").html("CEP: "+response.cep);
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerText = response.logradouro;
            $("#bairro").html(response.bairro);
            //document.getElementById("bairro").innerText = response.bairro;
            $("#localidade").html(response.localidade);
            //document.getElementById("localidade").innerText = response.localidade;
            $("#UF").html(response.uf);
            $(".cep").show();
            $(".barra-progresso").hide();
            //document.getElementById("UF").innerText = response.uf;
            //alert(response.logradouro);
        }
    })
}

$(function(){
    $(".cep").hide();
        $(".barra-progresso").hide();
});

/*
window.onload = function esconder(){ 
        $(".cep").hide();
        $(".barra-progresso").hide();
    }
*/


