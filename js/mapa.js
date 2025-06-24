// js/mapa.js

// garante que o script só vai rodar depois que todo o HTML da página for carregado.
document.addEventListener('DOMContentLoaded', () => {
    
    // chama a nossa função principal que vai desenhar o mapa.
    renderizarMapa();
});


  // função principal para renderizar o mapa da escola com os professores.

function renderizarMapa() {
    
    // pega o container principal do mapa no HTML pelo seu ID.
    const containerDoMapa = document.getElementById('grid-mapa');

    // se o container não for encontrado, a função para aqui para evitar erros.
    if (!containerDoMapa) return;

    // limpa qualquer conteúdo que já estivesse dentro do container.
    containerDoMapa.innerHTML = '';

    // percorre cada 'sala' na nossa lista de salas (do data.js).
    dadosMapa.salas.forEach(sala => {
        
        // inicia uma variável vazia para guardar o HTML do professor.
        let htmlDoOcupante = '';

        // verifica se a propriedade 'ocupante' da sala tem algum valor.
        if (sala.ocupante) {
            
            const professorEncontrado = professores.find(p => p.id === sala.ocupante);

            // se o professor foi realmente encontrado na lista.
            if (professorEncontrado) {
                // criamos o HTML para o card daquele professor.
           
                htmlDoOcupante = `
                    <div class="cartao-professor-mapa">
                        <div class="avatar" style="background-color: #${Math.floor(Math.random()*16777215).toString(16)}">${professorEncontrado.iniciais}</div>
                        <p class="nome">${professorEncontrado.nome}</p>
                    </div>
                `;
            }
        }

      
        const htmlDaSala = `
            <div class="sala">
                <span class="nome-sala">${sala.nome}</span>
                ${htmlDoOcupante} 
            </div>
        `;
      
        // se a sala estiver ocupada, o card do professor aparecerá. Se estiver vazia, nada aparecerá.

        containerDoMapa.innerHTML += htmlDaSala;
    });
}
