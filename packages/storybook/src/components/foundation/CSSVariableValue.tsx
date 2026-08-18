import {Code} from '@coveord/plasma-mantine';

export const CSSVariableValue = ({name}: {name: string}) => {
    const rootStyles = window.getComputedStyle(document.documentElement);
    return <Code>{rootStyles.getPropertyValue(name).trim()}</Code>;
};
