import {SvgName} from './SvgName';

export * from './SvgName';
export declare const SVG: (icon: string, classes?: string, spanClasses?: string) => string;
export declare const svgFromName: (icon: string, classes?: string, spanClasses?: string, title?: string) => string;
export declare const svg: Record<
    SvgName,
    {
        name: SvgName;
        fileName: string;
        svgString: string;
        render: (svgClass?: string, spanClass?: string, title?: string, attr?: Record<string, string>) => string;
    }
>;
export declare const version: string;
