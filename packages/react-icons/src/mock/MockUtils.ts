/**
 * Transforms ArrowUpSize16Px into arrowUp
 */
const formatLabel = (name: string) => {
    const label = name.replace(/(.+)Size\d+Px/, '$1');
    return label.charAt(0).toLowerCase() + label.slice(1);
};

const transformToKebabCase = (name: string) =>
    name.charAt(0).toLowerCase() +
    name
        .slice(1)
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Add hyphen between camelCase
        .replace(/([a-zA-Z])(\d+)/g, '$1-$2') // Add hyphen before numbers
        .toLowerCase();

const formatToTablerClassName = (name: string) =>
    name.startsWith('Icon') ? `tabler-icon tabler-${transformToKebabCase(name)}` : name;

export const MockUtils = {
    formatLabel,
    formatToTablerClassName,
};
