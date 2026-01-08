/**
 * Represents an item that can optionally belong to a group.
 */
interface Groupable {
    group?: string;
}

/**
 * Container for an array of groupable items.
 * @template T - A type that extends Groupable
 */
interface GroupData<T extends Groupable> {
    data: T[];
}

/**
 * Groups and sorts an array of items based on their group property.
 * Items with a group property are sorted together by group, followed by ungrouped items.
 * The order of groups is determined by their first appearance in the input array.
 *
 * @template T - A type that extends Groupable
 * @param {GroupData<T>} params - An object containing the data array to group
 * @returns {T[]} A new array with grouped items first, followed by ungrouped items
 *
 * @example
 * const data = [
 *   { id: 1, name: 'Item 1', group: 'Group A' },
 *   { id: 2, name: 'Item 2' },
 *   { id: 3, name: 'Item 3', group: 'Group B' },
 *   { id: 4, name: 'Item 4', group: 'Group A' },
 * ];
 * const grouped = groupOptions({ data });
 * // Result: Items 1, 4 (Group A), Item 3 (Group B), Item 2 (ungrouped)
 */
export const groupOptions = <T extends Groupable>({data}: GroupData<T>): T[] => {
    const sortedData: T[] = [];
    const unGroupedDataIndexes: number[] = [];
    const groupedData = data.reduce<Record<string, number[]>>((acc, item, index) => {
        if (item.group) {
            if (acc[item.group]) {
                acc[item.group].push(index);
            } else {
                acc[item.group] = [index];
            }
        } else {
            unGroupedDataIndexes.push(index);
        }
        return acc;
    }, {});

    Object.keys(groupedData).forEach((groupName) => {
        sortedData.push(...groupedData[groupName].map((index) => data[index]));
    });

    sortedData.push(...unGroupedDataIndexes.map((itemIndex) => data[itemIndex]));

    return sortedData;
};
