const pick = <T>(array: T[]) => array[Math.floor(Math.random() * array.length)];

const bool = () => !!(Math.random() < 0.5);

export const Random = {
    pick,
    bool,
};
