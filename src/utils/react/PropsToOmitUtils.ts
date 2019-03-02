const childPropsToOmit: string[] = ['children', 'dangerouslySetInnerHTML'];

const inputTagPropsToOmit: string[] = [...childPropsToOmit, 'defaultValue', 'onClick', 'onChange', 'onBlur', 'value', 'valid'];

export const PropsToOmitUtils = {
    child: childPropsToOmit,
    input: inputTagPropsToOmit,
};
