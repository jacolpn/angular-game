import { IHelper } from './../../interfaces/helper.interface';

export const firstChallenge: IHelper = {
    singleButton: false,
    enableHiddenText: true,
    textSingleButton: 'iniciar aventura',
    routeSingleButton: 'season/first',
    paragraph: [
        {
            firstParagraph: 'Chegamos em marte e precisamos iniciar os procedimentos para aterrisagem. O sistema da nave funciona em Angular.',
            secondParagraph: 'Nave foi atingida por meteoro e deu problema. Precisamos ajustar a nave utilizando angular.'
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
            thirdParagraph: ''
        }
    ]
}
