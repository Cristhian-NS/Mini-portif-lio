/*codigo do java script, para controlar o html*/
/* OBJETIVO: quando clikarmos na aba temos que mostrar
o conteuda da aba que foi clikada pelo usuário, e esconder
o conteúdo da aba anterior. 

1- dar um jeito de pegar os elementos que representam as abas do HTML

2- dar um jeito de identificar o clike no elemente da aba

3- quando o usuário clikar, desmarcar a aba selecionada

4- marcar a aba clikada como selecionado

5- esconder o conteúdo anterior

6- mostrar o conteudo da aba seleciondada

*/

//1- dar um jeito de pegar os elementos que representam as abas do HTML
const abas = document.querySelectorAll(".aba");


//2- dar um jeito de identificar o clike no elemente da aba
abas.forEach(aba => {
    aba.addEventListener("click",function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
        
       
        //console.log("clicou na aba", aba);

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)


        

    })
})

function selecionarAba(aba) {
//3- quando o usuário clikar, desmarcar a aba selecionada
const abaSelecionada = document.querySelector(".aba.selecionado")
//console.log(abaSelecionada);
abaSelecionada.classList.remove("selecionado")
//console.log(abaSelecionada.classList);

//4- marcar a aba clikada como selecionado
//console.log(aba)
aba.classList.add("selecionado")

}

function mostrarInformacoesDaAba (aba) {
      //5- esconder o conteúdo anterior
      const informacaoSelecionada = document.querySelector(".informacao.selecionado");
      informacaoSelecionada.classList.remove("selecionado")
       

      //6- mostrar o conteudo da aba seleciondada
      const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
      const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
      informacaoASerMostrada.classList.add("selecionado")

}