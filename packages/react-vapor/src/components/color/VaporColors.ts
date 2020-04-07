// tslint:disable
// @ts-ignore
import Colors from '!sass-variable-loader!../../../node_modules/coveo-styleguide/scss/common/palette.scss';
// tslint:enable

export function convertKeysToKebabCase(colors: Record<string, string>) {
    return Object.entries(colors)
        .map((entry) => buildObjectWithKebabCaseKey(entry))
        .reduce((accumulated, obj) => ({...accumulated, ...obj}), {});
}

function buildObjectWithKebabCaseKey(entry: string[]) {
    const [key, value] = entry;
    return {[camelToKebab(key)]: value};
}

function camelToKebab(key: string) {
    if (key === 'office365Red') {
        return 'office365-red';
    }

    return key.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
}

export const webpackVaporColors: Record<string, string> = convertKeysToKebabCase(Colors);
