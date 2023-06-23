const prompt = require('prompt-sync')();
const pista = 200000; // 200km
const tipocarro = {
  esportivo: 150000, // 150 km/h
  suv: 100000, // 100 km/h
  sedan: 120000, // 120 km/h
};

let continuar = 1;

  while (continuar === 1) {
    try {
      const escolherCarro = prompt('Escolha o tipo de carro (1 - esportivo, 2 - SUV, 3 - sedan): ');
      const opcao = parseInt(escolherCarro);
      
      if (isNaN(opcao)) {
        throw new Error('Não é um número!');
      }
      
      console.log(opcao);
      
      if (opcao < 1 || opcao > 3) {
        throw new Error('Não há o carro escolhido!');
      }
      
      let vencedor = (opcao == 1) ? `\t\tParabéns, você foi o vencedor!!` : `\t\tInfelizmente você perdeu!! O vencedor é o Esportivo!`;
      
      switch (opcao) {
        case 1:
          let { esportivo } = tipocarro;
          let tempoEsportivo = ((pista / esportivo).toFixed(2));
          console.log('\n', vencedor);
          console.log(`O carro escolhido foi: Esportivo e levou o tempo de ${tempoEsportivo}H.`);
          break;
          
          case 2:
            let { suv } = tipocarro;
            let tempoSuv = ((pista / suv).toFixed(2));
            console.log('\n', vencedor);
        console.log(`O carro escolhido foi: SUV e levou o tempo de ${tempoSuv}H.`);
        break;
        
        case 3:
          let { sedan } = tipocarro;
          let tempoSedan = ((pista / sedan).toFixed(2));
          console.log('\n', vencedor);
          console.log(`O carro escolhido foi: Sedan e levou o tempo de ${tempoSedan}H.`);
          break;
        }
      } catch (erro) {
        console.log('\n\t\t' + erro);
      } finally {
        console.log('\n teste');
      }
      
      continuar = parseInt(prompt('Deseja continuar? (1 - Sim, 2 - Não): '));
    }
    a
