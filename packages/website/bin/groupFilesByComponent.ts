export const groupFilesByComponent = (files: string[]): Record<string, string[]> =>
    files.reduce<Record<string, string[]>>((acc, file) => {
        const component = file.split('.')[0];
        if (!acc[component]) {
            acc[component] = [];
        }
        acc[component].push(file);
        return acc;
    }, {});
