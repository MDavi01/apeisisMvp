const professores = [
    // grupo 1 professores presentes
    // status presente
    // usado para colocar na seção de presentes.
    // statusPonto ok ou atrasado
    { id: 1, nome: "João Silva", iniciais: "JS", cargaHoraria: "25h", status: "presente", statusPonto: "ok", horaPonto: "07:25", turma: "1º Ano A", disciplina: "Inglês" },
    { id: 2, nome: "Carlos Ferreira", iniciais: "CF", cargaHoraria: "40h", status: "presente", statusPonto: "ok", horaPonto: "07:28", turma: "2º Ano B", disciplina: "IA" },
    { id: 3, nome: "Ana Luiza", iniciais: "AL", cargaHoraria: "25h", status: "presente", statusPonto: "ok", horaPonto: "07:29", turma: "3º Ano C", disciplina: "Matemática" },
    { id: 4, nome: "Maria Santos", iniciais: "MS", cargaHoraria: "25h", status: "presente", statusPonto: "atrasado", horaPonto: "07:42", turma: "5º Ano A", disciplina: "L.Portuguesa" },
    { id: 5, nome: "Pedro Costa", iniciais: "PC", cargaHoraria: "40h", status: "presente", statusPonto: "atrasado", horaPonto: "07:55", turma: "5º Ano B", disciplina: "P.Front End" },
   
    // grupo 2 Professores ausentes
    // status ausente  usado para colocar na seção de ausentes.
    { id: 6, nome: "Lucia Mendes", iniciais: "LM", cargaHoraria: "40h", status: "ausente", turma: "4º Ano A", horarioAula: "07:30 - 08:20", disciplina: "História" },
    { id: 7, nome: "Roberto Gomes", iniciais: "RG", cargaHoraria: "25h", status: "ausente", turma: "6º Ano", horarioAula: "08:20 - 09:10", disciplina: "Geografia" },


    //  grupo 3 Professores Esperados  
    // status esperado  Usado para colocar na seção de Próximos.
    // podeSubstituir true/false  Lógica para mostrar ou não o botão alocar.
    { id: 8, nome: "Fernanda Lima", iniciais: "FL", cargaHoraria: "25h", status: "esperado", turma: "7º Ano", horarioAula: "09:10 - 10:00", disciplina: "Ciências", podeSubstituir: true },
    { id: 9, nome: "Lucas Pereira", iniciais: "LP", cargaHoraria: "40h", status: "esperado", turma: "Ed. Física", horarioAula: "10:00 - 10:50", disciplina: "Educação Física", podeSubstituir: false },
    { id: 10, nome: "Rodrigo Pacheco", iniciais: "RP", cargaHoraria: "25h", status: "esperado", turma: "9º ANO", horarioAula: "12:00 - 13:40", disciplina: "Filosofia", podeSubstituir: true }
];


// dados para a página do mapa
// a propriedade ocupante usa o id do professor da lista acima para criar a ligação.
const dadosMapa = {
    salas: [
        { id: "s1", nome: "Sala 101", tipo: "aula", ocupante: null }, // sala vazia
        { id: "s2", nome: "Sala 102", tipo: "aula", ocupante: 1 },    // ocupada pelo prof de id 1
        { id: "s3", nome: "Sala 201", tipo: "aula", ocupante: 5 },    // ocupada pelo prof de id 5
        { id: "s4", nome: "Sala 202", tipo: "aula", ocupante: 2 },
        { id: "s5", nome: "Biblioteca", tipo: "comum", ocupante: 3 },
        { id: "s6", nome: "Refeitório", tipo: "comum", ocupante: null },
        { id: "s7", nome: "Secretaria", tipo: "escritorio", ocupante: 4 },
    ]
};


// dados para a página de alocação de professores.
const dadosAlocacao = {
    aulaVaga: { disciplina: "História", turma: "4º Ano A", horario: "07:30 - 08:20", data: "21/06/2025", professorOriginal: "Prof. Lucia Mendes", local: "Sala 302" },
    professoresDisponiveis: [
        { id: 4, nome: "Prof. Maria Santos", disciplina: "L.Portuguesa", status: "Disponível (Janela)" }
    ]
};


//funcionalidades de simulação


// esta lista contém professores que serão adicionados ao painel quando o botão
// simular novas entradas for clicado.
const novasEntradasSimuladas = [
    { id: 11, nome: "Vanessa Reis", iniciais: "VR", cargaHoraria: "40h", status: "presente", statusPonto: "ok", horaPonto: "13:02", turma: "8º Ano A", disciplina: "Artes" },
    { id: 12, nome: "Heitor Barros", iniciais: "HB", cargaHoraria: "25h", status: "ausente", turma: "9º Ano B", horarioAula: "13:00 - 13:50", disciplina: "Química" },
    { id: 13, nome: "Sofia Martins", iniciais: "SM", cargaHoraria: "25h", status: "presente", statusPonto: "atrasado", horaPonto: "13:15", turma: "7º Ano B", disciplina: "Física" }
];
