
// espera a página HTML carregar completamente antes de fazer qualquer coisa.
document.addEventListener('DOMContentLoaded', () => {
    
    renderizarMapa();
});


function renderizarMapa() {
    
    //  pega o container principal do mapa no HTML pelo seu ID.
    //    ajuste Trocamos o id para grid-mapa para combinar com nosso HTML revisado.
    const containerDoMapa = document.getElementById('grid-mapa');


    if (!containerDoMapa) return;

    //  limpa qualquer conteúdo que já estivesse dentro do container.
  
    containerDoMapa.innerHTML = '';
    //   O .forEach' é como dizer: para cada sala na lista, faça o seguinte.
    dadosMapa.salas.forEach(sala => {
        
        //   e a sala estiver vazia, essa variável não muda.
        let htmlDoOcupante = '';

        // verificamos se a propriedade 'ocupante' da sala tem algum valor.
        if (sala.ocupante) {
            
            //  se tem um ocupante, usamos o .find para procurar na lista completa
            const professorEncontrado = professores.find(p => p.id === sala.ocupante);

            if (professorEncontrado) {
                
                htmlDoOcupante = `
                    <div class="cartao-professor-mapa">
                        <div class="avatar" style="background-color: #${Math.floor(Math.random()*16777215).toString(16)}">${professorEncontrado.iniciais}</div>
                        <p class="nome-professor">${professorEncontrado.nome}</p>
                    </div>
                `;
            }
        }

        // criamos o HTML para a sala já com o nome dela
        const htmlDaSala = `
            <div class="sala" data-tipo="${sala.tipo}">
                <span class="nome-sala">${sala.nome}</span>
                ${htmlDoOcupante} 
            </div>
        `;
        //     se a sala estiver ocupada, o card do professor aparecerá. se estiver vazia, nada aparecerá.
        containerDoMapa.innerHTML += htmlDaSala;
    });
}
