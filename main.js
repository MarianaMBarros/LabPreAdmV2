function enterGame(){
   let userName;
   do{
      userName = prompt ("Digite Seu Nome Para Começar:")
   } while(userName =="");

   if (userName == null) return;

   const  startProof= prompt("Deseja dar Inicio a Prova?\nDigite SIM ou NÃO").toUpperCase()
      if (startProof == 'SIM'){
         document.getElementById("initial").className="hide";
         
         const publicarName = document.getElementById("user");
         publicarName.innerHTML = "Bem-Vindo(a), " + userName.toUpperCase();

         document.getElementById("game").className="show";  
      
      }else{
            alert ("Obrigada Por Participar!")
         }

}
      
function escolha(a){

   let questions = [];

   if (a == 1){
      questions=[{pergunta:"1-Leandro tem 40 balas chupou 12 e deu 10 para sua irmã. Com quantas balas ele ficou?\n a)18 \n b)15 \n c)16", respostaCorreta:"A", respostaUsuario:null},
                 {pergunta:"2-Se uma casa tem quatro lados e em cada canto tem um gato e cada gato vê três gatos, quantos gatos há na casa?\n a)5 \n b)4 \n c)6", respostaCorreta:"B", respostaUsuario:null},
                 {pergunta:"3-Quantos números 1 eu tenho de 1 até 191? \n a)150 \n b)140 \n c)132", respostaCorreta:"C", respostaUsuario:null   }];             
   } else {
      questions=[{pergunta:"1- De onde é a invenção do chuveiro elétrico? \n a)Brasil \n b)Austrália\n c)Inglaterra",respostaCorreta:"A", respostaUsuario:null},
                 {pergunta:"2-Quais o menor e o maior país do mundo? \n a)Nauru e China\n b)Vaticano e Rússia\n c)Malta e Estados Unidos",respostaCorreta:"B", respostaUsuario:null},
                 {pergunta:"3- De quem é a famosa frase “Penso, logo existo”? \n a)Platão \n b)Sócrates \n c)Descartes",respostaCorreta:"C", respostaUsuario:null},];
   }

   game(questions)

}

function game(questions){

   for (let i=0; i<questions.length; i++){
      let option = false;
      let result;
      do{
         result = prompt(questions[i].pergunta).toUpperCase();
            if ( result== 'A' || result == 'B' || result == 'C'){
               questions[i].respostaUsuario = result;
               option = true;            
            } else { 
               alert("Opção Invalida");
               option = false;
            }
      } while (option == false);
   }


   //verifica se as respostas estão corretas
   //`${corretas} Questão ${index +1} <br>` quando quiser formartar uma string podemos usar o ` crase quando quisermos acessar uma variavel usamos o ${nomeDaVariavel}
   let corretas = "";
   let erradas = "";
   //questions.length tamanho do array de questões 
   for (let index = 0; index < questions.length; index++) {
      const element = questions[index];
      if(element.respostaCorreta == element.respostaUsuario)
      {
         corretas = `${corretas} Questão ${index +1} <br>`;
      }else{
         erradas =  `${erradas} Questão ${index +1} <br>`;
      }      
   }

   correctQuestion.innerHTML = corretas;
   incorrectQuestion.innerHTML = erradas;

   document.getElementById("game").className="hide";
   document.getElementById("resultGame").className="show";
}

function backGame(){
   document.getElementById("resultGame").className="hide";
   document.getElementById("game").className="show";
}

function exit(){   
   window.location.reload()
}








