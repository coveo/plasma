const separateCamelCase = (str: string) => str.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`);

export const StringUtils = {
    separateCamelCase,
};
