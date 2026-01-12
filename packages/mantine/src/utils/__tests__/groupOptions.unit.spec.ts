import {describe, expect, it} from 'vitest';
import {groupOptions} from '../groupOptions';

interface TestItem {
    id: number;
    name: string;
    group?: string;
}

describe('groupOptions', () => {
    it('returns an empty array when given an empty array', () => {
        const result = groupOptions<TestItem>({data: []});
        expect(result).toEqual([]);
    });

    it('returns ungrouped items as-is when no items have groups', () => {
        const data: TestItem[] = [
            {id: 1, name: 'Item 1'},
            {id: 2, name: 'Item 2'},
            {id: 3, name: 'Item 3'},
        ];

        const result = groupOptions({data});

        expect(result).toEqual([
            {id: 1, name: 'Item 1'},
            {id: 2, name: 'Item 2'},
            {id: 3, name: 'Item 3'},
        ]);
    });

    it('groups items with the same group together', () => {
        const data: TestItem[] = [
            {id: 1, name: 'Item 1', group: 'Group A'},
            {id: 2, name: 'Item 2', group: 'Group B'},
            {id: 3, name: 'Item 3', group: 'Group A'},
        ];

        const result = groupOptions({data});

        expect(result).toEqual([
            {id: 1, name: 'Item 1', group: 'Group A'},
            {id: 3, name: 'Item 3', group: 'Group A'},
            {id: 2, name: 'Item 2', group: 'Group B'},
        ]);
    });

    it('places ungrouped items after all grouped items', () => {
        const data: TestItem[] = [
            {id: 1, name: 'Item 1', group: 'Group A'},
            {id: 2, name: 'Item 2'},
            {id: 3, name: 'Item 3', group: 'Group B'},
            {id: 4, name: 'Item 4'},
        ];

        const result = groupOptions({data});

        expect(result).toEqual([
            {id: 1, name: 'Item 1', group: 'Group A'},
            {id: 3, name: 'Item 3', group: 'Group B'},
            {id: 2, name: 'Item 2'},
            {id: 4, name: 'Item 4'},
        ]);
    });

    it('preserves the order of items within the same group', () => {
        const data: TestItem[] = [
            {id: 1, name: 'Item 1', group: 'Group A'},
            {id: 2, name: 'Item 2', group: 'Group A'},
            {id: 3, name: 'Item 3', group: 'Group A'},
        ];

        const result = groupOptions({data});

        expect(result).toEqual([
            {id: 1, name: 'Item 1', group: 'Group A'},
            {id: 2, name: 'Item 2', group: 'Group A'},
            {id: 3, name: 'Item 3', group: 'Group A'},
        ]);
    });

    it('preserves the order of ungrouped items', () => {
        const data: TestItem[] = [
            {id: 1, name: 'Item 1'},
            {id: 2, name: 'Item 2'},
            {id: 3, name: 'Item 3'},
        ];

        const result = groupOptions({data});

        expect(result).toEqual([
            {id: 1, name: 'Item 1'},
            {id: 2, name: 'Item 2'},
            {id: 3, name: 'Item 3'},
        ]);
    });

    it('handles multiple groups with mixed grouped and ungrouped items', () => {
        const data: TestItem[] = [
            {id: 1, name: 'Item 1', group: 'Group A'},
            {id: 2, name: 'Item 2'},
            {id: 3, name: 'Item 3', group: 'Group B'},
            {id: 4, name: 'Item 4', group: 'Group A'},
            {id: 5, name: 'Item 5'},
            {id: 6, name: 'Item 6', group: 'Group C'},
            {id: 7, name: 'Item 7', group: 'Group B'},
        ];

        const result = groupOptions({data});

        expect(result).toEqual([
            {id: 1, name: 'Item 1', group: 'Group A'},
            {id: 4, name: 'Item 4', group: 'Group A'},
            {id: 3, name: 'Item 3', group: 'Group B'},
            {id: 7, name: 'Item 7', group: 'Group B'},
            {id: 6, name: 'Item 6', group: 'Group C'},
            {id: 2, name: 'Item 2'},
            {id: 5, name: 'Item 5'},
        ]);
    });

    it('treats items with empty string group as ungrouped', () => {
        const data: TestItem[] = [
            {id: 1, name: 'Item 1', group: ''},
            {id: 2, name: 'Item 2', group: 'Group A'},
            {id: 3, name: 'Item 3', group: ''},
        ];

        const result = groupOptions({data});

        expect(result).toEqual([
            {id: 2, name: 'Item 2', group: 'Group A'},
            {id: 1, name: 'Item 1', group: ''},
            {id: 3, name: 'Item 3', group: ''},
        ]);
    });

    it('does not mutate the original array', () => {
        const data: TestItem[] = [
            {id: 1, name: 'Item 1', group: 'Group A'},
            {id: 2, name: 'Item 2'},
            {id: 3, name: 'Item 3', group: 'Group B'},
        ];

        const originalData = [...data];
        groupOptions({data});

        expect(data).toEqual(originalData);
    });

    it('handles a single item with a group', () => {
        const data: TestItem[] = [{id: 1, name: 'Item 1', group: 'Group A'}];

        const result = groupOptions({data});

        expect(result).toEqual([{id: 1, name: 'Item 1', group: 'Group A'}]);
    });

    it('handles a single item without a group', () => {
        const data: TestItem[] = [{id: 1, name: 'Item 1'}];

        const result = groupOptions({data});

        expect(result).toEqual([{id: 1, name: 'Item 1'}]);
    });

    it('works with different object structures', () => {
        interface CustomItem {
            value: string;
            label: string;
            group?: string;
        }

        const data: CustomItem[] = [
            {value: 'a', label: 'Option A', group: 'Letters'},
            {value: '1', label: 'Option 1', group: 'Numbers'},
            {value: 'b', label: 'Option B', group: 'Letters'},
            {value: 'special', label: 'Special Option'},
        ];

        const result = groupOptions({data});

        expect(result).toEqual([
            {value: 'a', label: 'Option A', group: 'Letters'},
            {value: 'b', label: 'Option B', group: 'Letters'},
            {value: '1', label: 'Option 1', group: 'Numbers'},
            {value: 'special', label: 'Special Option'},
        ]);
    });
});
