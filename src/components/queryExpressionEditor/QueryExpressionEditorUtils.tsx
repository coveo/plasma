// TODO : Review isWrappedWithQuotes condition
export const addQuotesIfContainsWhiteSpace = (value: string) => {
    const hasWhiteSpaces = new RegExp(/\s/);
    const firstCharacterIsQuote = new RegExp(/^"/);
    const lastCharacterIsQuote = new RegExp(/"$/);
    const isWrappedWithQuotes = firstCharacterIsQuote.test(value) && lastCharacterIsQuote.test(value);

    if (isWrappedWithQuotes) {
        return value;
    }

    if (hasWhiteSpaces.test(value)) {
        return `"${value}"`;
    }

    return value;
};
