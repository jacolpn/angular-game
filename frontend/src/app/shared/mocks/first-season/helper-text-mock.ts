import { IHelper, IParagraph } from './../../interfaces/helper.interface';

export const helperText: IHelper = {
    singleButton: false,
    iconHiddenText: true,
    visible: true,
    textSingleButton: 'iniciar aventura',
    routeSingleButton: 'season/first',
    paragraph: []
};

export const paragraph: Array<Array<any>> = [
    [
        {
            firstParagraph: 'Chegamos em marte e precisamos iniciar os procedimentos para aterrisagem. O sistema da nave funciona em Angular.',
            secondParagraph: 'O nosso desafio inicial é conseguir realizar a aterrissagem garantindo a integridade da nave - e se tudo der certo, dos tripulantes também - .'
        },
        {   
            firstParagraph: 'A interpolação de texto permite incorporar valores de string dinâmicos em seus modelos HTML. Use a interpolação para alterar dinamicamente o que aparece em uma visualização do aplicativo.',
            secondParagraph: 'A interpolação é utilizada por meio de chaves “{{ }}” em uma variável.'
        },
        {
            firstParagraph: 'Para começarmos, precisamos criar uma variável na janela TS e pressionar enter.',
            secondParagraph: 'Esta variável será armazenada e utilizada para iniciar o sistema de aterrisagem.',
            thirdParagraph: 'OBS: Pode ser informado qualquer nome.'
        },
        {
            firstParagraph: 'Agora precisamos utilizar a interpolação na variável declarada no passo anterior. Para isso, basta pegar a variável e inserir chaves “{{ }}” em seu intorno.',
            secondParagraph: 'Ex: {{ variável }}',
        }
    ],
    [
        {
            firstParagraph: 'Precisamos clamufar a nave para evitar ser percebido por outras naves.',
        },
        {
            firstParagraph: 'Use o property binding para fazer coisas como alterar dinamicamente propriedades do HTML inserindo [colchetes].',
        },
        {
            firstParagraph: 'Para isso, começamos alterando o valor da variável navelVisivel para “false”.',
        },
        {
            firstParagraph: 'Precisamos inserir o property binding na propriedade "class" do html, para conseguirmos ativar o modo camuflagem. (EX: <img [src]=”variavel”>)',
            secondParagraph: 'OBS: utilizamos o *ternario para alterar dinâmicamente a cor da nave.',
            link: 'https://www.alura.com.br/artigos/o-que-e-o-operador-ternario?gclid=CjwKCAjwsMGYBhAEEiwAGUXJafkUkdRqeIo2CQ_h4srGH4ZqaF72jcimfNZgbfZTB-bchOZzTAbgtxoCbyYQAvD_BwE'
        }
    ],
    [
        {
            firstParagraph: 'Como estamos em processo de aterrissagem estamos em 100% da capacidade dos propulsores, devemos diminuir para 50%.',
        },
        {
            firstParagraph: 'O pipe é um recurso do Angular que permite a formatação de dados diretamente no template.',
        },
        {
            firstParagraph: 'Precisamos diminuir os propulsores a 50%, para isso, utilizaremos o pipe ao nosso favor.',
            secondParagraph: 'Insira o valor e formate com o pipe “PercentPipe”.',
            thirdParagraph: 'Ex: {{ 50 | percent }}'
        }
    ],
    [
        {
            firstParagraph: 'Graças a sua força de vontade conseguiu atingir o objetivo de pousar em Marte, agora vamos iniciar o protocolo de abertura das portas.',
        },
        {
            firstParagraph: 'O two-way data binding é a forma no qual permite a troca de informações entre o template e seu controller, nesse caso vamos utilizar para alterar a propriedade da porta.',
            secondParagraph: 'A sintaxe [()] combina os colchetes de ligação à propriedade, [], com os parênteses da ligação de eventos ().',
            thirdParagraph: 'Use a diretiva NgModel para mostrar a propriedade e atualizá-la quando o usuário realizar alterações. Ex: [(NgModel)]'
        },
        {
            firstParagraph: 'Precisamos alterar o valor da variável escotilhaTrancada para “liberada”.',
            secondParagraph: 'Utilizaremos o two-way data binding para alterar o valor.',
        }
    ],
    [
        {
            firstParagraph: 'A nave foi despressurizada, já podemos abrir a escotilha e explorar. Para que consigamos abri-la, será preciso acionar o botão.',
        },
        {
            firstParagraph: 'O “Event Binding” é utilizado para adicionar eventos em uma propriedade de um elemento do HTML, por meio de parênteses ().',
            secondParagraph: 'Ex: Pegamos a propriedade “click” de um botão e inserimos parênteses em seu redor “(click)”, em seguida inserimos a função do TS (TypeScript) que queremos utilizar. '
        },
        {
            firstParagraph: 'Precisamos inserir o evento de click na porta para podermos abrir.',
        }
    ],
    [
        {
            firstParagraph: 'Parabéns, fim da primeira temporada!',
        }
    ]
];
