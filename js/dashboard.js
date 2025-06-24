document.addEventListener('DOMContentLoaded', () => {
   
   
    atualizarRelogio();
    renderizarTudoNoDashboard();
    configurarBotaoSimulacao();
});




function atualizarRelogio() {
    // Pega o elemento <p> com o id "relogio" lá no nosso HTML.
    const elementoRelogio = document.getElementById('relogio');
 
    // Se o elemento existir...
    if (elementoRelogio) {
        // ... a cada 1 segundo (1000 milissegundos)...
        setInterval(() => {
            const agora = new Date();
            // ... atualiza o texto do elemento com a hora formatada.
            elementoRelogio.textContent = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      }, 1000);
  }
}
