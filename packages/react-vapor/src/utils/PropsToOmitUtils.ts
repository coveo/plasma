const internalComponentPropsToOmit: string[] = ['children', 'dangerouslySetInnerHTML'];

// We omit those props for the input native tag because those props are reserved for the Input component and
// to stay compatible with the old interface
const inputTagPropsToOmit: string[] = [
    ...internalComponentPropsToOmit,
    'defaultValue',
    'onClick',
    'onChange',
    'onBlur',
    'value',
    'valid',
    'changeDirtyState',
];

export const PropsToOmitUtils = {
    internal: internalComponentPropsToOmit,
    input: inputTagPropsToOmit,
};
