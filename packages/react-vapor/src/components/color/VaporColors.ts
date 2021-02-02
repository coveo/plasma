// @ts-ignore
import Colors from '!sass-variable-loader!../../../node_modules/coveo-styleguide/scss/redesign/palette.scss';

export const convertKeysToKebabCase = (colors = {} as Record<string, string>) =>
    Object.entries(colors)
        .map((entry) => buildObjectWithKebabCaseKey(entry))
        .reduce((accumulated, obj) => ({...accumulated, ...obj}), {});

const buildObjectWithKebabCaseKey = (entry: string[]) => {
    const [key, value] = entry;
    return {[camelToKebab(key)]: value};
};

const camelToKebab = (key: string) => {
    if (key === 'office365Red') {
        return 'office365-red';
    }

    return key.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
};

export const webpackVaporColors: Record<string, string> = convertKeysToKebabCase(Colors);
