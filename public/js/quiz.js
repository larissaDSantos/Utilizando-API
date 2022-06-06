
var total = 0;
var totalQuestoes = 10;
var erros = 0;
var acertosVar = 0;


// function comecar() {
//     questao1.style.display ='block';
// }


function verificar() {

    opcao1.style.color ='green';
    opcao8.style.color ='green';
    opcao10.style.color ='green';
    opcao15.style.color ='green';
    opcao18.style.color ='green';
    opcao23.style.color ='green';
    opcao26.style.color ='green';
    opcao30.style.color ='green';
    opcao33.style.color ='green';
    opcao38.style.color ='green';

    opcao2.style.color ='red';
    opcao3.style.color ='red';
    opcao4.style.color ='red';

    opcao5.style.color ='red';
    opcao6.style.color ='red';
    opcao7.style.color ='red';

    opcao9.style.color ='red';
    opcao11.style.color ='red';
    opcao12.style.color ='red';

    opcao13.style.color ='red';
    opcao14.style.color ='red';
    opcao16.style.color ='red';

    opcao17.style.color ='red';
    opcao19.style.color ='red';
    opcao20.style.color ='red';

    opcao21.style.color ='red';
    opcao22.style.color ='red';
    opcao24.style.color ='red';

    opcao25.style.color ='red';
    opcao27.style.color ='red';
    opcao28.style.color ='red';

    opcao29.style.color ='red';
    opcao31.style.color ='red';
    opcao32.style.color ='red';

    opcao34.style.color ='red';
    opcao35.style.color ='red';
    opcao36.style.color ='red';

    opcao37.style.color ='red';
    opcao39.style.color ='red';
    opcao40.style.color ='red';    

}



function correta() {
    total++;
    verificar();

}  

function errada() {

    verificar();
    
}

function proximo1() {
    questao1.style.display ='none';
    questao2.style.display ='block';
    clear();
}

function recomecar() {
    final.style.display = 'none';
    questao1.style.display ='block';

}

function proximo2() {
    clear();

    questao2.style.display ='none';
    questao3.style.display ='block';
}
function proximo3() {
    clear();

    questao3.style.display ='none';
    questao4.style.display ='block';
}
function proximo4() {
    clear();

    questao4.style.display ='none';
    questao5.style.display ='block';
}
function proximo5() {
    clear();

    questao5.style.display ='none';
    questao6.style.display ='block';
}
function proximo6() {
    clear();

    questao6.style.display ='none';
    questao7.style.display ='block';
}
function proximo7() {
    clear();

    questao7.style.display ='none';
    questao8.style.display ='block';
}
function proximo8() {
    clear();

    questao8.style.display ='none';
    questao9.style.display ='block';
}
function proximo9() {
    clear();
    questao9.style.display ='none';
    questao10.style.display ='block';
}

idu = sessionStorage.ID_USUARIO;
function fim(idu) {
    console.log("ABACATE"+idu);
    clear();
    cadastrar_quiz(idu);
    questao10.style.display ='none';
    final.style.display ='block';
    acertos.innerHTML = total;
 
    // erro.innerHTML = erros;


}

function clear() {
    opcao1.style.color ='black';
    opcao8.style.color ='black';
    opcao10.style.color ='black';
    opcao15.style.color ='black';
    opcao18.style.color ='black';
    opcao23.style.color ='black';
    opcao26.style.color ='black';
    opcao30.style.color ='black';
    opcao33.style.color ='black';
    opcao38.style.color ='black';

    opcao2.style.color ='black';
    opcao3.style.color ='black';
    opcao4.style.color ='black';

    opcao5.style.color ='black';
    opcao6.style.color ='black';
    opcao7.style.color ='black';

    opcao9.style.color ='black';
    opcao11.style.color ='black';
    opcao12.style.color ='black';

    opcao13.style.color ='black';
    opcao14.style.color ='black';
    opcao16.style.color ='black';

    opcao17.style.color ='black';
    opcao19.style.color ='black';
    opcao20.style.color ='black';

    opcao21.style.color ='black';
    opcao22.style.color ='black';
    opcao24.style.color ='black';

    opcao25.style.color ='black';
    opcao27.style.color ='black';
    opcao28.style.color ='black';

    opcao29.style.color ='black';
    opcao31.style.color ='black';
    opcao32.style.color ='black';

    opcao34.style.color ='black';
    opcao35.style.color ='black';
    opcao36.style.color ='black';

    opcao37.style.color ='black';
    opcao39.style.color ='black';
    opcao40.style.color ='black';    

    
}

  function cadastrar_quiz(idu) {
    acertosVar = 0;
    acertosVar = total;
    erros = totalQuestoes - total;
    // var idUsuario = sessionStorage.ID_USUARIO;
      console.log("entrei no cadastrar")
    //   aguardar();

      //Recupere o valor da nova input pelo nome do id
      // Agora vá para o método fetch logo abaixo
 
    
      // Enviando o valor da nova input
      fetch(`/usuarios/cadastrar_quiz/${idu}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              // crie um atributo que recebe o valor recuperado aqui
              // Agora vá para o arquivo routes/usuario.js
            //   idServer: idUsuario,
              acertosServer: acertosVar,
              errosServer: erros,
              
             
          })
         
      }).then(function (resposta) {
          console.log("entrei no fetch")
          console.log("resposta: ", resposta);

          if (resposta.ok) {
              // cardErro.style.display = "block"
              // mensagem_erro.innerHTML = "Cadastro realizado com sucesso!";
            //   window.location = "login.html";
              // limparFormulario();
              // finalizarAguardar();
          } else {
              throw ("Houve um erro ao tentar realizar o cadastro!");
          }
      }).catch(function (resposta) {
          console.log("cair no fetch")
          console.log(`#ERRO: ${resposta}`);
          // finalizarAguardar();
      });

      return false;
  }