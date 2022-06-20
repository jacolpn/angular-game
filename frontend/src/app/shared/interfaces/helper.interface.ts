export interface IHelper {
    singleButton?: boolean,
    enableHiddenText?: boolean,
    routeSingleButton?: string,
    textSingleButton?: string,
    paragraph?: Array<IParagraph>
}

interface IParagraph {
    firstParagraph?: string,
    secondParagraph?: string,
    thirdParagraph?: string
}
