// Importando alternativas para o Questionário
// import alternativas from "./alternativas.js"; 

const aromaterapia = [
    {
        pergunta: "Você já utiliza produtos de aromaterapia em sua rotina?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Sim", valor: 1},
            {opcao: "Não", valor: 2},
        ]

    },
    {
        pergunta: "Qual é o principal objetivo que você busca ao utilizar produtos de aromaterapia?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Relaxamento e alívio do estresse", valor: 1},
            {opcao: "Energia", valor: 2},
            {opcao: "Melhora do sono", valor: 3},
            {opcao: "Bem-estar geral", valor: 4},
            {opcao: "Foco e concentração", valor: 5},
        ]
    },

    {
        pergunta: "Quais tipos de aromas você prefere em seus produtos de aromaterapia? (Marque todas as opções que se aplicam).",
        isMultipleChoice: true, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Floral", valor: 1},
            {opcao: "Frutado", valor: 2},
            {opcao: "Amadeirado", valor: 3},
            {opcao: "Cítrico", valor: 4},
            {opcao: "Herbáceo", valor: 5},
            {opcao: "Especiado", valor: 6},
        ]
    },

];

const cuidadosPessoais = [

    {
        pergunta: "Você já utiliza produtos de naturais em sua rotina?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Sim", valor: 1},
            {opcao: "Não", valor: 2},
        ],
    },

    {
        pergunta: "Existem preocupações específicas que você gostaria de abordar com o uso de produtos naturais? (Marque todas as opções que se aplicam)",
        isMultipleChoice: true, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Hidratação", valor: 1},
            {opcao: "Controle da acne", valor: 2},
            {opcao: "Redução de manchas", valor: 3},
            {opcao: "Limpeza Profunda", valor: 4},
            {opcao: "Esfoliação", valor: 5},
        ],
    },

    {
        pergunta: "Você prefere produtos com a fragrância:",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Sem fragrância", valor: 1},
            {opcao: "Leve", valor: 2},
            {opcao: "Moderado", valor: 3},
            {opcao: "Intensa", valor: 4},
        ],
    },

    {
        pergunta: "Como você descreveria o seu tipo de pele?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Seca", valor: 1},
            {opcao: "Oleosa", valor: 2},
            {opcao: "Mista", valor: 3},
            {opcao: "Sensível", valor: 4},
            {opcao: "Normal", valor: 5},
        ],
    },

    {
        pergunta: "Possui alergias a algum produto natural?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Não", valor: 1},
            {opcao: "Sim", valor: 2},
            //A fazer: Opção de descrever o tipo de alergia.
        ],
    }

];

const saudeMental = [
    {
        pergunta: "Você já utiliza produtos de saúde mental em sua rotina?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Sim", valor: 1},
            {opcao: "Não", valor: 2},
        ],
    },

    {
        pergunta: "Como você descreveria seu bem-estar mental no momento?",
        isMultipleChoice: false, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Equilibrado", valor: 1},
            {opcao: "Estressado", valor: 2},
            {opcao: "Ansioso", valor: 3},
            {opcao: "Triste", valor: 4},
            {opcao: "Desmotivado", valor: 5},
            {opcao: "Tranquilo", valor: 6},
        ],
    },

    {
        pergunta: "Quais são seus principais objetivos em relação à sua saúde mental? (Marque todas as opções que se aplicam)",
        isMultipleChoice: true, //É uma pergunta multipla escolha?
        respostas:[
            {opcao: "Redução do estresse e ansiedade", valor: 1},
            {opcao: "Melhora do humor", valor: 2},
            {opcao: "Bem-estar geral", valor: 3},
            {opcao: "Aumento da concentração", valor: 4},
            {opcao: "Promoção do sono tranquilo", valor: 5},
            {opcao: "Equilíbrio emocional", valor: 6},
        ],
    },

    {
        pergunta: "Você tem preferência por algum tipo específico de produtos para o seu bem-estar mental? (Marque todas as opções que se aplicam)",
        isMultipleChoice: true,
        respostas: [
            {opcao: "Óleos essenciais", valor: 1},
            {opcao: "Florais", valor: 2},
            {opcao: "Ervas medicinais", valor: 3}
        ]
    }
];

const produtos = [
    {
        tratamento: "Aromaterapia",
        produto: [
            {}
        ] ,
    }
];



// Declaração de variáveis para o Questionário

const pergunta = document.getElementById('pergunta');
const alternativa = document.querySelectorAll('.alternativas input');
const respostas = document.getElementById('respostas');
const btnComecar = document.getElementById('comecarQuiz');
const btnAvancar = document.getElementById('seguirQuiz');



let contadorPerguntas = 0;
let scoreFinal = 0;
let tratamentoSelecionado = "";
// console.log(respostas)

// Ao clicar em começar armazena o tipo do tratamento e carrega a primeira pergunta
btnComecar.addEventListener("click", function(){
   
    escolherTratamento(); //Função para armazenar a escolha do tratamento
    carregarPergunta(); // Função para carregar a próxima pergunta
    btnComecar.setAttribute("style", "display:none"); // Adiciona o atributo display="none"
    btnAvancar.removeAttribute("style", "display:none"); // Remove o atributo display="none"
    
})

// Botão para avançar a próxima pergunta. Carrega a próxima e adiciona +1 ao contador de perguntas
btnAvancar.addEventListener("click", function(){
    contadorPerguntas++;
    carregarPergunta();
})


function escolherTratamento(){
    var tratamento = document.getElementsByName("tratamento");
    
    // Laço de repetição para verificar qual opção foi selecionada a partir do "checked" do checkbox
    for (let index = 0; index < tratamento.length; index++) {
        if (tratamento[index].checked) {
            
            // Armazena o valor da opção selecionada
            tratamentoSelecionado = tratamento[index].value;

            // console.log(tratamentoSelecionado)
        }        
    }

    // identifica o tratamento e armazena o array que contem as perguntas referentes ao tratamento
    if (tratamentoSelecionado == "Aromaterapia") {
        tratamentoSelecionado = aromaterapia;
    } else if (tratamentoSelecionado == "Cuidados Pessoais") {
        tratamentoSelecionado = cuidadosPessoais;
    } else {
        tratamentoSelecionado = saudeMental;
    }
}

// Carrega a próxima pergunta a remove a anterior
function carregarPergunta(){

    // Limpa o conteúdo da div respostas enquanto ela tiver "filhos" (conteúdos dentro)
    while (respostas.firstChild) {
        respostas.removeChild(respostas.firstChild);
    }

    if(aromaterapia.length == contadorPerguntas){
        //Caso seja a ultima pergunta, ele executa a função mostrar Kit e encerra a função atual
        return mostrarKit();
    }

    // Exibe a pergunta referente ao contador de perguntas. O contador busca a posição da pergunta dentro da matriz principal (tratamento)[posição].informaçãoquedeseja
    pergunta.innerHTML = tratamentoSelecionado[contadorPerguntas].pergunta;

    // Função para ler as respostas referente a cada pergunta por meio de um forEach
    // Depois cria os elementos que conterão o conteúdo desse array
    // tratamento[posição].informação.lerTudo
    tratamentoSelecionado[contadorPerguntas].respostas.forEach(resposta =>{
        const novaResposta = document.createElement("label") //Cria um novo elemento(tag) do tipo label
        novaResposta.classList.add("alternativas") // Adiciona uma classe

        const inputResposta = document.createElement("input"); //Cria um novo elemento (tag) do tipo input
        inputResposta.setAttribute("type", "checkbox"); //Atribue o tipo checkbox ao elemento
        inputResposta.setAttribute("value", resposta.valor); // atribue o valor** referente a resposta

        // ** Esse valor tem como intuito ser usado para definir o kit de produtos ao final do questionário
        // A ideia é somar o valor de cada resposta e ao fim fazer um balanço geral, dividindo em 3 partes ou quantos kits o Cliente está disposto a oferecer ao consumidor
        // Sendo assim, exemplo:
        // se valorTotalResposta > x{ mostrar = Kit1 }
        // se valorTotalResposta > y{ mostrar = Kit2 }
        // se valorTotalResposta > z{ mostrar = Kit3 }
        // Assim em diante

        const spanResposta = document.createElement("span"); //Cria um novo elemento (tag) do tipo span
        spanResposta.innerHTML = resposta.opcao; // Adiciona a resposta encontrada na posição lida pelo forEach
        
        // appendChild adiciona um elemento (elementoEscolhido) como filho de um elemento pai
        // elementoPai.appendChild(elementoFilho)
        // A linha acima é o mesmo que:
        // <label class="alternativas">
        //     <input type="checkbox" valor="resposta.valor"></input>
        //     <span>resposta.opcao</span>
        // </label>

        novaResposta.appendChild(inputResposta); //atribue inputResposta como filho de novaResposta
        novaResposta.appendChild(spanResposta); //atribue spanResposta como filho de novaResposta

        respostas.appendChild(novaResposta); //atribue novaResposta como filho de respostas(containerPrincipal)

    })
    
}

// Função para mostrar o kit de produtos ao final do questionário
function mostrarKit (){
    // switch (true){
    //     case ("pensando em como fazer isso"):
    // }

    btnAvancar.setAttribute("style", "display:none"); // Adiciona o atributo display="none"

    respostas.innerHTML= 
    `
        <div class="kit-questionario">
            <div class="produto-kit">
                <div class="conteudo-produto-kit">
                    <img src="./assets/img/imagem4.jpeg" alt="">
                    <div class="info-produto-kit">
                        <h4>Produto1</h4>
                        <p class="descricao-kit-questionario">CALM Combinação de óleos essenciais para SERENIDADE e TRANQUILIDADE. </p>
                        <span class="saiba-mais-produto-kit"> Saiba Mais</span>
                    </div>
                </div>
                <div class="opcoes-produto-kit">
                    <span> R$ 19,90</span>
                    <div class="excluir">Excluir</div>
                </div>
            </div>

            <div class="produto-kit">
                <div class="conteudo-produto-kit">
                    <img src="./assets/img/imagem7.jpeg" alt="">
                    <div class="info-produto-kit">
                        <h4>Produto1</h4>
                        <p class="descricao-kit-questionario">CALM Combinação de óleos essenciais para SERENIDADE e TRANQUILIDADE. </p>
                        <span class="saiba-mais-produto-kit"> Saiba Mais</span>
                    </div>
                </div>
                <div class="opcoes-produto-kit">
                    <div class="excluir">Excluir</div>
                    <span> R$ 29,90</span>
                </div>
            </div>
        </div>
        
        <button class="avancarQuestionario">Assinar</button>

    `;

    pergunta.innerText = "Kit Aromaterapia"
}