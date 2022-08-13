export const option: any = {
    id: 1,
    title: '',
    component: 'app.component.ts',
    common: [
        { id: 9, paragraph: 'export class IntroductionComponent implements OnInit {', class: 'pl-0' },
        { id: 1, paragraph: ": string = 'iniciar';", class: '' },
        { id: 2, paragraph: 'naveVisivel: boolean =', class: 'one-space' },
        { id: 9, paragraph: "escotilhaTrancada: string = 'trancada';", class: 'one-space' },
        { id: 9, paragraph: '', class: '' },
        { id: 9, paragraph: 'abrirEscotilha() {', class: 'one-space' },
        { id: 9, paragraph: "if (this.escotilhaTrancada === 'liberada') {", class: 'two-space' },
        { id: 9, paragraph: 'return true;', class: 'three-space' },
        { id: 9, paragraph: '}', class: 'two-space' },
        { id: 9, paragraph: '}', class: 'one-space' },
        { id: 9, paragraph: '}', class: '' },
        { id: 9, paragraph: '', class: '' }
    ]
}
