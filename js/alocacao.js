

document.addEventListener('DOMContentLoaded', () => {
    

    renderizarPaginaDeAlocacao();

});


function renderizarPaginaDeAlocacao() {



    // Pega os containers (os "espaços") do nosso HTML onde o conteúdo será inserido.
    const containerAulaVaga = document.getElementById('card-aula-vaga');
    const containerProfsDisponiveis = document.getElementById('card-prof-disponiveis');

    if (containerAulaVaga) {
        
        // Pega os dados da aula vaga do nosso arquivo 'data.js'.
        const aula = dadosAlocacao.aulaVaga;
        
        containerAulaVaga.innerHTML = `
            <h3><span class="icon">❌</span> Aula Sem Professor</h3>
            <div class="info-aula">
                <div><strong>Disciplina:</strong> ${aula.disciplina}</div>
                <div><strong>Turma:</strong> ${aula.turma}</div>
                <div><strong>Horário:</strong> ${aula.horario}</div>
                <div><strong>Data:</strong> ${aula.data}</div>
            </div>
            <p style="text-align: center; margin-top: 1rem;"><strong>Professor Original:</strong> ${aula.professorOriginal} (Local: ${aula.local})</p>
        `;
    }

    // --- Renderização da Lista de "Professores Disponíveis" ---
    
    if (containerProfsDisponiveis) {

        // Inicia a string HTML com o título da seção e o container da lista.

        let htmlLista = '<h3><span class="icon">✔️</span> Professores Disponíveis</h3><div class="lista-disponiveis">';
        
        dadosAlocacao.professoresDisponiveis.forEach(prof => {

            htmlLista += `
                <div class="professor">
                    <p>${prof.nome} (${prof.disciplina}) - ${prof.status}</p>
                    <button class="botao botao-alocar" onclick="alert('Alocando ${prof.nome} para a aula vaga.')">Alocar</button>
                </div>
            `;
        });

        htmlLista += '</div>';
        
        containerProfsDisponiveis.innerHTML = htmlLista;
    }
}
