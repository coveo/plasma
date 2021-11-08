const pick = <T>(array: T[]) => array[Math.floor(Math.random() * array.length)];

const bool = () => !!(Math.random() < 0.5);

const separateCamelCase = (str: string) => str.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`);

export const Random = {
    pick,
    bool,
    separateCamelCase,
};
