import {renderHook} from '../../__tests__/Utils';
import {useForm} from '../useForm';

describe('useForm', () => {
    it("returns 'onReorderItem', 'onRemoveItem' & 'onInsertItem' if the form is 'collection' type", () => {
        const view = renderHook(() => useForm({initialValues: {fruits: ['banana', 'orange']}}));

        const propsTypeCollection = view.result.current.getInputProps('fruits', {type: 'collection'});
        expect(typeof propsTypeCollection.onReorderItem).toBe('function');
        expect(typeof propsTypeCollection.onRemoveItem).toBe('function');
        expect(typeof propsTypeCollection.onInsertItem).toBe('function');

        const propsNotCollection = view.result.current.getInputProps('fruits');
        expect(typeof propsNotCollection.onReorderItem).toBe('undefined');
        expect(typeof propsNotCollection.onRemoveItem).toBe('undefined');
        expect(typeof propsNotCollection.onInsertItem).toBe('undefined');
    });
});
