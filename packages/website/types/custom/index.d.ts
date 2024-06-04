declare module '*.svg' {
    const content: string;
    export default content;
}
declare module '*.png' {
    const content: string;
    export default content;
}
declare module '*.md' {
    const content: string;
    export default content;
}

declare module '*.module.css' {
    const classes: {[key: string]: string};
    export default classes;
}

interface DemoComponentProps {
    center?: boolean;
    grow?: boolean;
    title?: string;
    noPadding?: boolean;
    layout?: 'horizontal' | 'vertical';
    /**
     * Will render in a flex container with the specified max-height instead of a scroll area.
     */
    maxHeight?: number | 'none';
}

declare module '*?demo' {
    const DemoComponent: (props: DemoComponentProps) => JSX.Element;
    export default DemoComponent;
}
