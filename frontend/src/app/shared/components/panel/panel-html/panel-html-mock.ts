export const option: any = {
    id: 1,
    title: '',
    component: 'app.component.html',
    common: [
        { id: 9, paragraph: '<section>', init: '', final: '', class: 'pl-0', key: '' },
        { id: 2, paragraph: `<div [class]="`, init: '<div', final: '="', class: 'one-space', key: '[class]' },
        { id: 9, paragraph: `naveVisivel ? 'nave-visivel' : 'nave-invisivel'`, init: '', final: '', class: 'two-space', key: '' },
        { id: 9, paragraph: `">`, init: '', final: '', class: 'one-space', key: '' },
        { id: 9, paragraph: '<p>procedimentos aterrissagem</p>', init: '', final: '', class: 'two-space', key: '' },
        { id: 1, paragraph: "<p>{{ variavel }}</p>", init: '<p>', final: '</p>', class: 'two-space', key: '{{ variavel }}' },
        { id: 3, paragraph: '<p>{{ 50 | percent }}</p>', init: '<p>', final: '</p>', class: 'two-space', key: '{{ 50 | percent }}' },
        { id: 9, paragraph: '', init: '', final: '', class: '', key: '' },
        { id: 4, paragraph: '<input [(ngModel)]="escotilhaTrancada">', init: '<input', final: '="escotilhaTrancada">', class: 'two-space', key: '[(ngModel)]' },
        { id: 5, paragraph: '<button (click)="abrirEscotilha()">', init: '<button', final: '="abrirEscotilha()">', class: 'two-space', key: '(click)' },
        { id: 9, paragraph: '</div>', init: '', final: '', class: 'one-space', key: '' },
        { id: 9, paragraph: '</section>', init: '', final: '', class: '', key: '' },
        { id: 9, paragraph: '', init: '', final: '', class: '', key: '' }
    ]
}
