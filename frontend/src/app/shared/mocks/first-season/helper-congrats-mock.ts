import { IHelper } from './../../interfaces/helper.interface';

export const helperCongrats: IHelper = {
    singleButton: false,
    iconHiddenText: true,
    visible: true,
    textSingleButton: 'iniciar aventura',
    routeSingleButton: 'season/first',
    paragraph: [
        {
            firstParagraph: 'Parabéns, conseguimos dar início do processo de aterrissagem e aprendemos a utilizar a “Interpolação” do angular.',
        },
        {
            firstParagraph: 'Parabéns, conseguimos camuflar e aprender como utilizar o “Property Binding” do Angular!'
        },
        {
            firstParagraph: 'Parabéns,chegamos em Marte!!',
            secondParagraph: 'Conseguimos diminuir os propulsores e aprender como utilizar o “Pipe” do Angular!'
        },
        {
            firstParagraph: 'Parabéns, você conseguiu despressurizar a porta e aprender Two-way data binding.',
        },
        {
            firstParagraph: 'Parabéns, chegamos em Marte em segurança!',
            secondParagraph: 'Não paramos por ai, na próxima temporada iremos aprender conceitos avançados de Angular e aproveitaremos para matar outros Bilu’s.',
        }
    ]
};
