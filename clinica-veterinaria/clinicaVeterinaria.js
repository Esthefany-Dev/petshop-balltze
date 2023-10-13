// Configuração do Modal
    const todosExames = document.querySelectorAll('.exames');
    todosExames.forEach((element) => {
        element.addEventListener('click', mostrarExame);
    });

    function mostrarExame(event) {
        const tituloExame = event.target.closest('.exames').querySelector('.title-element');
        const nomeDoExame = tituloExame.textContent;
        // Mostrar o nome do exame selecionado no modal
        const exameSelecionado = document.querySelector('.nomeExameModal');
        exameSelecionado.innerHTML = nomeDoExame;
    }
// Calendário
    var inputDate = document.getElementById("data");
    var dataAtual = new Date();
    var ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1);
    inputDate.min = dataAtual.toISOString().split('T')[0];     // Primeiro dia do mês atual
    inputDate.max = ultimoDiaDoMes.toISOString().split('T')[0];  // Último dia do próximo mês

// Horários
    const horariosDisponiveis = document.querySelector('.horariosDisponiveis');

    function gerarHorariosEmOrdemCrescente() {
        const horaInicial = 7; // 07:00
        const horaFinal = 12; // 18:00
        const horarios = [];
        for (let hora = horaInicial; hora < horaFinal; hora++) {
            for (let minuto = 0; minuto < 60; minuto += 30) {
                const horaFormatada = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
                horarios.push(horaFormatada);
            }
        }
        return horarios;
    }
    const horariosEmOrdemCrescente = gerarHorariosEmOrdemCrescente();
    horariosEmOrdemCrescente.forEach((horario) => {
        const divHorario = document.createElement('div');
        divHorario.textContent = horario;
        divHorario.classList.add('horario');
        horariosDisponiveis.appendChild(divHorario);
    });

    const horarioEscolhido = document.querySelectorAll('.horario');
    let horarioSelecionado = null;
    horarioEscolhido.forEach((element) => {
        element.addEventListener('click', function () {
            if (horarioSelecionado) horarioSelecionado.style.backgroundColor = '';

            horarioSelecionado = element;
            element.style.backgroundColor = '#e3e1e1';
            const horario = element.innerHTML;
        });
    });
// Dados final do modal
    function dadosModal() {
        // Mostra o nome do paciente inserido no moda
        const nomePaciente = document.querySelector('.nomePaciente').value;
        // Mostra a data escolhida no modal
        const dataEscolhida = document.querySelector('.calendarioAgendamento').value;
        const dataFormatada = dataEscolhida.split('-');
        const dataOrganizada = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`;

        if(dataOrganizada.length == 20){
            alert('Escolha um horário para o agendamento');
            return
        } else if(nomePaciente == undefined || nomePaciente == null || nomePaciente == '' ){
            alert('Preencha o campo Nome do Paciente');
            return
        } else modalConfirmacao();

        console.log(`Nome do Paciente: ${nomePaciente}, Data Agendada: ${dataOrganizada}, Horário marcado ${horarioSelecionado}`)
    }

   
    

   























// // Dados do Agendamento:
// const nomePaciente = document.querySelector('.nomePaciente').value;

// function agendar(){
//   const dataEscolhida = document.querySelector('.calendarioAgendamento').value;
//   const dataObj = new Date(dataEscolhida);
//   dataObj.setDate(dataObj.getDate() + 1);
//   const dataFormatada = dataObj.toLocaleDateString('pt-BR');
//   console.log(dataFormatada); 



//   const horarios = document.querySelector('.horario');
//   horarios.forEach((element) => {console.log(element)
//       element.addEventListener('click', () => {
//           const horaClicada = element.textContent;
//           console.log('Hora clicada:', horaClicada);
//       });
//   });

// }





























// // Array de dados das consultas
//  const consultasData = [
//     { nome: 'Vacina Contra a Raiva', preco: 'R$ 50,00', marginLeft: '-3.1%' },
//     { nome: 'Vacina Contra a Cinomose', preco: 'R$ 60,00', marginLeft: '-5.2%' },
//     { nome: 'Vacina Contra a Parvovirose', preco: 'R$ 55,00', marginLeft: '-6.1%' },
//     { nome: 'Vacina Contra a Leptospirose', preco: 'R$ 45,00', marginLeft: '-6.7%' },
//     { nome: 'Vacina Contra a Tranqueobronquite Infecciosa Canina', preco: 'R$ 40,00', marginLeft: '-18.1%' },
//     { nome: 'Vacina Contra a Gripe Canina', preco: 'R$ 50,00', marginLeft: '-6.6%' },
//     { nome: 'Vacina Contra a Giardíase', preco: 'R$ 35,49', marginLeft: '-5%' },
//     { nome: 'Vacina Contra a Leucemia Felina', preco: 'R$ 45,00', marginLeft: '-8.2%' },
//     { nome: 'Vacina Contra a Calicivirose Felina', preco: 'R$ 40,50', marginLeft: '-9.2%' }
// ];

// // Container onde as consultas serão adicionadas
// const consultasContainer = document.querySelector('.conteudo-consulta');

// // Loop através dos dados das consultas
// consultasData.forEach((consultaData) => {
//     // Crie um elemento de div para a consulta
//     const consultaDiv = document.createElement('div');
//     consultaDiv.className = 'consultas';

//     // Crie um elemento de div para o texto da consulta
//     const consultaTextDiv = document.createElement('div');
//     consultaTextDiv.className = 'consulta-text';
//     consultaTextDiv.textContent = consultaData.nome;

//     // Crie um elemento de div para o preço da consulta
//     const consultaPrecoDiv = document.createElement('div');
//     consultaPrecoDiv.className = 'consulta-preco';
//     consultaPrecoDiv.style.marginLeft = consultaData.marginLeft;

//     // Crie elementos de span para o texto do preço e o preço em si
//     const precoTextSpan = document.createElement('span');
//     precoTextSpan.className = 'preco-text';
//     precoTextSpan.textContent = 'Preço:';

//     const precoSpan = document.createElement('span');
//     precoSpan.className = 'preco';
//     precoSpan.textContent = consultaData.preco;

//     // Crie um elemento de div para o ícone
//     const consultaIconDiv = document.createElement('div');
//     consultaIconDiv.className = 'consulta-icon';

//     // Crie um elemento de span para o ícone
//     const iconSpan = document.createElement('span');
//     iconSpan.className = 'material-symbols-outlined';
//     iconSpan.id = 'icon';
//     iconSpan.textContent = 'chevron_right';

//     // Adicione os elementos filhos à div principal
//     consultaPrecoDiv.appendChild(precoTextSpan);
//     consultaPrecoDiv.appendChild(precoSpan);

//     consultaIconDiv.appendChild(iconSpan);

//     consultaDiv.appendChild(consultaTextDiv);
//     consultaDiv.appendChild(consultaPrecoDiv);
//     consultaDiv.appendChild(consultaIconDiv);

//     // Adicione a div principal ao container
//     consultasContainer.appendChild(consultaDiv);
// });

// // // Criar o model de confirmação de agendamento exame
// // const divConsultas = document.querySelector('.consultas');
// // divConsultas.onclick = function () {
// //    console.log('teste')
// // };
// // // const conteudo_exames = document.querySelector('.conteudo-exames');
// // // conteudo_exames.style.color='red';
// // // const examesData = [
// // //     { nome: 'Exame de Sangue Completo', preco: 'R$ 150,00', marginLeft: '-5.5%' },
// // //     { nome: 'Exame de Imagem (Raio-X)', preco: 'R$ 200,00', marginLeft: '-5%' },
// // //     { nome: 'Exame de Imagem (Ultrassonografia)', preco: 'R$ 300,00', marginLeft: '-9.7%' },
// // //     { nome: 'Exame de Imagem (Tomografia Computadorizada)', preco: 'R$ 499,99', marginLeft: '-15.8%' },
// // //     { nome: 'Exame de fezes para parasita', preco: 'R$ 50,00', marginLeft: '-6.6%' },
// // //     { nome: 'Exame de Urina', preco: 'R$ 69,99', marginLeft: '-0.3%' },
// // //     { nome: 'Exame de Sangue para Doenças Infecciosas', preco: 'R$ 130,09', marginLeft: '-13.2%' },
// // //     { nome: 'Exame de Endoscopia', preco: 'R$ 250,00', marginLeft: '-2.8%' },
// // //     { nome: 'Exame de Alergia (Testes Cutâneos)', preco: 'R$ 18,50', marginLeft: '-9.8%' }
// // // ];