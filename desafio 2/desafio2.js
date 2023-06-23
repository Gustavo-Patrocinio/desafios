/*
const pistas = { 
  Pequena: 3000 , // 3km
  Media: 5000 , // 5km
  Grande: 10000 , // 10km 
};


const colocados = [];
const competidores = [];
function adversarios(){
  for(i = 1; i < 4; i++){
    // 
    competidores.push(Math.floor(Math.random()*3)+1);
    competidores[i] = carros;
  }
  console.log(competidores);
  
}
function posicaoColocados(){
  for (let i = 0; i < carros.length; i++) {
    // tempo corrida = carro1(15000) / escolherPista(1000)
    // tempo corrida[] < tempo corrida[]
    let tempoCorrida = carros[i] / escolherPista;
    if(tempoCorrida < tempoCorrida[i]){
      colocados[i] = tempoCorrida[i];
    }
  }
}

if(escolherCarro != carros) {
  console.error("Tipo de carro errado, digite novamente!");
};

const escolherPista = prompt('Escolha o tipo da pista (Pequena, Media ou Grande): ');
if(escolherPista != pistas) {
  console.error("Tipo de pista errado, digite novamente!");
};


//   posicaoColocados();
adversarios();
*/




/*
console.log(escolherCarro);
let vencedor;
// Estrutura switch-case: O tempo necessário para completar a corrida deve ser calculado com base no tipo de carro escolhido. Use a estrutura 
// switch-case para determinar o tempo de acordo com o tipo de carro.
if(escolherCarro > tipocarros){
  vencedor = escolherCarro;
}
else {
  while (escolherCarro < carros) {
    vencedor =+ carros;
  }
}

*/
/*
esportivo: 150000, // 150 km/h
suv: 10000, // 100 km/h
sedan: 12000 // 120 km/h
carros = [{  "nome": nome,
"velocidade": velocidade}];
carros = vetor.push({  "nome": nome,
"velocidade": velocidade});
let {nome,velocidade} = tipocarro;




 contagem = setInterval(() => {
  for (let i = 0; i > 4; i++){
    let contagem = 3;
    contagem = contagem - i;
    console.log(contagem);
  }  
}, 1000);
*/
//myInterval = setInterval(contagemRegressiva, 1000);

const prompt = require('prompt-sync')();
const pista = 200000; // 200km
const tipocarro = {
  esportivo: 150000, // 150 km/h
  suv: 100000, // 100 km/h
  sedan: 120000, // 120 km/h
};
/*
let tempoEsportivo;
let tempoSuv;
function vencedor1(){
  let vencedor = Number(tempoEsportivo < tempoSuv || tempoEsportivo < tempoSedan) ? `O Vencedor eh: Esportivo` : Number(tempoSuv < tempoEsportivo || tempoSuv < tempoSedan) ? `O Vencedor eh: Suv` : `O Vencedor eh: Sedan`;
  console.log(vencedor);
};
let tempoSedan;*/
try {

  const escolherCarro = prompt('Escolha o tipo de carro (1 - esportivo, 2 - SUV, 3 - sedan): ');
  
  const opcao = parseInt(escolherCarro);
  if(isNaN(opcao)) {
    throw new Error('Não é um numero!');
  }
  console.log(opcao);
  if (opcao < 1 || opcao > 3) {
    throw new Error('Não há o carro escolhido!');
  }
  
   let vencedor = (opcao == 1) ? `\t\tParabéns, você foi o vencedor!!` : `\t\tInfelizmente voce perdeu!! O Vencedor eh o Esportivo!`;
  switch (opcao) {
    case 1:
      let {esportivo} = tipocarro;
      let tempoEsportivo =  ((pista / esportivo).toFixed(2));
      console.log('\n',vencedor);
      console.log(`O carro escolhido foi: Esportivo e levou o tempo de ${tempoEsportivo}H. `);
      
      break;
    case 2:
        let {suv} = tipocarro;
        let tempoSuv =  ((pista / suv).toFixed(2));
        console.log('\n',vencedor);
        console.log(`O carro escolhido foi: SUV e levou o tempo de ${tempoSuv}H. `,);
        break;

    case 3:
        let {sedan} = tipocarro;
        let tempoSedan =  ((pista / sedan).toFixed(2));
        console.log('\n',vencedor);
        console.log(`O carro escolhido foi: Sedan e levou o tempo de ${tempoSedan}H. `,);
        break;        
      }
      
    } catch (erro) {
      console.log('\n\t\t' + erro);
    } finally {
      console.log('\n teste')
    }
      
      
      //vencedor1();
      //let vencedor;
      //let vencedor = Number(tempoEsportivo < tempoSuv || tempoEsportivo < tempoSedan) ? `O Vencedor eh: Esportivo` : Number(tempoSuv < tempoEsportivo || tempoSuv < tempoSedan) ? `O Vencedor eh: Suv` : `O Vencedor eh: Sedan`;
