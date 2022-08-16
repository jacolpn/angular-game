export interface IHelper {
    singleButton?: boolean,
    iconHiddenText?: boolean,
    visible: boolean,
    textSingleButton?: string,
    routeSingleButton?: string,
    paragraph?: Array<IParagraph>
}

export interface IParagraph {
    firstParagraph?: string,
    secondParagraph?: string,
    thirdParagraph?: string
}
