export const addQuotesIfContainsWhiteSpace = (value: string) => {
    const hasWhiteSpaces = new RegExp(/\s/);

    if (hasWhiteSpaces.test(value)) {
        return `"${value}"`;
    }

    return value;
}
