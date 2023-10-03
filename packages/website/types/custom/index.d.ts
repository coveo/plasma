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

interface DemoComponentProps {
    center?: boolean;
    grow?: boolean;
    title?: string;
    noPadding?: boolean;
    layout?: 'horizontal' | 'vertical';
    maxHeight?: number | 'none';
}

declare module '*?demo' {
    const DemoComponent: (props: DemoComponentProps) => JSX.Element;
    export default DemoComponent;
}
