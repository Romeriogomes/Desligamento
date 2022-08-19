function telainicial(){
    document.getElementById('resultado').innerHTML = "não abra esse arquivo em ambiente corporativo ok? eles podem ver tudo que fazemos";
}

function texto(){
    document.getElementById('resultado').innerHTML = "Foi um prazer trabalhar  com todos vocês. até a Próxima";
    
    
}
function diasrestante(){
    let Desligamento = new Date('2022-10-31 00:00:00');
    //Desligamento = new Date(Desligamento);
    const datas = new Date();
   // const dia = String(datas.getDate()).padStart(2,'0');
    //const mes = String(datas.getMonth() + 1).padStart(2,'0');
    //const ano = datas.getFullYear()
    //const dataAtual = `${dia}/${mes}/${ano}`;
    //const //diaDoDesligamento = Desligamento - dataAtual;
    let difdata = Math.abs(Desligamento - datas);
    let tempoemdias = 1000 * 60 * 60 *24;
    let difdias = difdata / tempoemdias;
    difdias = Math.round(difdias)
    let texto1 = "Ola ! Falta "
    let texto2 = " dias para seu Desligamento.      Tchau !"
    document.getElementById('resultado').innerHTML = texto1 + difdias + texto2;

} 