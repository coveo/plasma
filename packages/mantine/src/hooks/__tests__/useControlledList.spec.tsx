import {renderHook} from '@testing-library/react';

import {useControlledList} from '../useControlledList.js';

describe('useControlledList', () => {
    const onChange = vi.fn();

    afterEach(() => {
        onChange.mockClear();
    });

    describe('append', () => {
        it('appends the specified item to end of the initial list', () => {
            const {result} = renderHook(() => useControlledList({onChange, value: ['one', 'two']}));
            result.current[1].append('three');

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledExactlyOnceWith(['one', 'two', 'three']);
        });
    });

    describe('remove', () => {
        it('removes the item at the specified index from the initial list', () => {
            const {result} = renderHook(() => useControlledList({onChange, value: ['good', 'bad', 'good']}));
            result.current[1].remove(1);

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledExactlyOnceWith(['good', 'good']);
        });
    });

    describe('reorder', () => {
        it('moves the item at the "from" position to the specified position within the list', () => {
            const {result} = renderHook(() => useControlledList({onChange, value: ['b', 'c', 'a']}));
            result.current[1].reorder({from: 2, to: 0});

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledExactlyOnceWith(['a', 'b', 'c']);
        });
    });
});
