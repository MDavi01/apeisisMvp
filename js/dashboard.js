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

function renderizarIndicadores(container, presentes, ausentes) {
    if (!container) return; // Se não achar o container, não faz nada.
    container.innerHTML = `
        <div class="indicador"><h3>Presentes Hoje</h3><p>${presentes.length}</p></div>
        <div class="indicador"><h3>Ausentes Hoje</h3><p>${ausentes.length}</p></div>
        <div class="indicador"><h3>Turmas sem Professor</h3><p>${ausentes.length}</p></div>
        <div class="indicador"><h3>Professores Disponíveis</h3><p>5</p></div>
    `;

''}

function renderizarSecaoPresentes(container, lista) {
    if (!container) return;
    let html = '<h2>Presentes</h2><div class="grid-presentes">';
    lista.forEach(prof => {
        const classeStatusPonto = prof.statusPonto === 'ok' ? 'ok' : 'atrasado';
        html += `
            <div class="cartao-professor">
                <div class="avatar ${classeStatusPonto}" style="background-color: #${Math.floor(Math.random()*16777215).toString(16)}">${prof.iniciais}</div>
                <p class="nome">${prof.nome}</p>
                <p class="info aula">${prof.disciplina}</p>
                <div class="ponto ${classeStatusPonto}">${prof.horaPonto}</div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}
function renderizarSecaoAusentes(container, lista) {
    if (!container) return;
    let html = '<h2>Ausentes</h2>';
    lista.forEach(prof => {
        html += `
            <div class="card-com-acoes">
                <div class="avatar ausente" style="background-color: #${Math.floor(Math.random()*16777215).toString(16)}">${prof.iniciais}</div>
                <div class="info">
                    <p class="nome">${prof.nome}</p>
                    <p class="info aula">${prof.disciplina} - ${prof.turma}</p>
                </div>
                <div class="area-acoes">
                    <button class="botao botao-falta" onclick="alert('Registrando falta para ${prof.nome}')">Registrar Falta</button>
                    <button class="botao botao-whatsapp" onclick="alert('Chamando ${prof.nome} no WhatsApp')">WhatsApp</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderizarSecaoProximos(container, lista) {
    if (!container) return;
    let html = '<h2>Próximos Registros</h2>';
    lista.forEach(prof => {
        let botaoAlocarHTML = '';
        if (prof.podeSubstituir) {
            botaoAlocarHTML = `<button class="botao botao-alocar" onclick="alert('Alocando ${prof.nome}')">Alocar</button>`;
        }
        html += `
            <div class="card-com-acoes">
                <div class="avatar esperado" style="background-color: #${Math.floor(Math.random()*16777215).toString(16)}">${prof.iniciais}</div>
                <div class="info">
                    <p class="nome">${prof.nome}</p>
                    <p class="info aula">${prof.disciplina} - ${prof.horarioAula}</p>
                </div>
                <div class="area-acoes">
                    ${botaoAlocarHTML}
                    <button class="botao botao-whatsapp" onclick="alert('Notificando ${prof.nome} no WhatsApp')">WhatsApp</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}
function configurarBotaoSimulacao() {
    const botao = document.getElementById('botao-simular');
    if (!botao) return;


   
    botao.addEventListener('click', () => {
        // Verifica se ainda existem novas entradas para simular
        if (novasEntradasSimuladas.length > 0) {
            // '.shift()' pega o PRIMEIRO item da lista de simulação e o remove de lá.
            const novaEntrada = novasEntradasSimuladas.shift();
           
           
            professores.push(novaEntrada);
           
           
            renderizarTudoNoDashboard();


            // Desativa o botão se não houver mais simulações
            if (novasEntradasSimuladas.length === 0) {
                botao.disabled = true;
                botao.textContent = "Nenhuma nova entrada";
                botao.style.cursor = "not-allowed";
                botao.style.opacity = "0.6";
            }


        }
    });
}




