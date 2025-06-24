
document.addEventListener('DOMContentLoaded', () => {
    renderizarMapa();
});


function renderizarMapa() {

    const containerDoMapa = document.getElementById('grid-mapa');


    if (!containerDoMapa) return;


    containerDoMapa.innerHTML = '';


    dadosMapa.salas.forEach(sala => {
        let htmlDoOcupante = ''; 

        // Se a sala tiver um 'ocupante'...
        if (sala.ocupante) {
  
            const professorEncontrado = professores.find(p => p.id === sala.ocupante);


            if (professorEncontrado) {
                
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

       
        containerDoMapa.innerHTML += htmlDaSala;
    });
}
