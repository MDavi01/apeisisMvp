document.addEventListener('DOMContentLoaded', () => {
   
   
    atualizarRelogio();
    renderizarTudoNoDashboard();
    configurarBotaoSimulacao();
});
function atualizarRelogio() {
    // Pega o elemento <p> com o id "relogio" lá no nosso HTML
    const elementoRelogio = document.getElementById('relogio');
 
    // Se o elemento existir
    if (elementoRelogio) {
        // a cada 1 segundo (1000 milissegundos)
        setInterval(() => {
            const agora = new Date();
            // atualiza o texto do elemento com a hora formatada.
            elementoRelogio.textContent = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      }, 1000);
  }
}
function renderizarTudoNoDashboard() {
    const containerIndicadores = document.getElementById('grid-indicadores');
    const containerPresentes = document.getElementById('secao-presentes');
    const containerAusentes = document.getElementById('secao-ausentes');
    const containerProximos = document.getElementById('secao-proximos');


    // Separando os professores por status
    const listaPresentes = professores.filter(p => p.status === 'presente');
    const listaAusentes = professores.filter(p => p.status === 'ausente');
    const listaProximos = professores.filter(p => p.status === 'esperado');


    // Chamando uma função para desenhar cada parte 
    renderizarIndicadores(containerIndicadores, listaPresentes, listaAusentes);
    renderizarSecaoPresentes(containerPresentes, listaPresentes);
    renderizarSecaoAusentes(containerAusentes, listaAusentes);
    renderizarSecaoProximos(containerProximos, listaProximos);
}
