const internalComponentPropsToOmit: string[] = ['children', 'dangerouslySetInnerHTML'];

const inputTagPropsToOmit: string[] = [...internalComponentPropsToOmit, 'defaultValue', 'onClick', 'onChange', 'onBlur', 'value', 'valid'];

export const PropsToOmitUtils = {
    internal: internalComponentPropsToOmit,
    input: inputTagPropsToOmit,
};
