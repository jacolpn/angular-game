export interface IPanelRoot {
    id?: number,
    title?: string,
    component?: string,
    procediment?: string,
    common?: Array<ICommon>
}

interface ICommon {
    paragraph?: string
}
