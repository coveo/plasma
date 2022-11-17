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

declare module '*.example.tsx' {
    const content: string;
    export default content;
}

declare module '*.demo.tsx' {
    const DemoComponent: () => JSX.Element;
    export default DemoComponent;
}

declare module 'tsjs/prettier-config.js' {
    const content: any;
    export default content;
}
