declare module VaporSVG {
    const SVG: (icon: string, classes?: string, spanClasses?: string) => string;
    const svgFromName: (icon: string, classes?: string, spanClasses?: string, title?: string) => string;
    const svg: any;
    const version: string;
}

declare module 'coveo-styleguide' {
    export = VaporSVG;
}
