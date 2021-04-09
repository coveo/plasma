import {ShallowWrapper} from 'enzyme';
import {mountWithStore, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {ValidationActions, ValidationTypes} from '../..';
import {composeMockStore, getStoreMock, withSelectedValues} from '../../../../utils/tests/TestUtils';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../../../select/SingleSelectConnected';
import {withDirtySingleSelectHOC, IWithDirtySingleSelectHOCProps} from '../WithDirtySingleSelectHOC';

describe('SingleSelectWithDirty', () => {
    const SingleSelectWithHOC = withDirtySingleSelectHOC(SingleSelectConnected);
    let store: ReturnType<typeof getStoreMock>;

    const ONE_VALUE = '🐟';
    const ANOTHER_VALUE = '🐠';

    const DEFAULT_PROPS: ISingleSelectOwnProps & IWithDirtySingleSelectHOCProps = {
        id: 'SOME_ID',
        items: [
            {
                value: '0',
            },
            {
                value: '1',
            },
        ],
    };

    beforeEach(() => {
        store = getStoreMock({
            validation: {},
        });
    });

    afterEach(() => {
        store.clearActions();
    });

    const mountSingleSelectWithHOC = (
        props: Partial<typeof DEFAULT_PROPS> = {},
        storeToUse: ReturnType<typeof getStoreMock> = store
    ) => {
        const component = mountWithStore(<SingleSelectWithHOC {...DEFAULT_PROPS} {...props} />, storeToUse);
        act(() => {
            component.mount();
        });
    };

    it('should render without error', () => {
        expect(() => shallowWithStore(<SingleSelectWithHOC {...DEFAULT_PROPS} />, store)).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
        let singleSelectWrapper: ShallowWrapper<ISingleSelectOwnProps>;

        expect(() => {
            singleSelectWrapper = shallowWithStore(<SingleSelectWithHOC {...DEFAULT_PROPS} />, store);
            singleSelectWrapper.unmount();
        }).not.toThrow();
    });

    it('should update the items prop to select the initial value', () => {
        const initialValue = DEFAULT_PROPS.items[1].value;
        const singleSelectWrapper = shallowWithStore(
            <SingleSelectWithHOC {...DEFAULT_PROPS} initialValue={initialValue} />,
            store
        );
        const selectedItem = singleSelectWrapper
            .dive()
            .find(SingleSelectConnected)
            .prop('items')
            .find((item) => item.selected);

        expect(selectedItem.value).toBe(initialValue);
    });

    it('should trigger the dirty state when the user selects a new value', () => {
        const storeWithInitialValue = composeMockStore(withSelectedValues(DEFAULT_PROPS.id, ONE_VALUE));

        mountSingleSelectWithHOC({}, storeWithInitialValue);

        expect(storeWithInitialValue.getActions()).toContainEqual(
            ValidationActions.setDirty(DEFAULT_PROPS.id, true, ValidationTypes.wrongInitialValue)
        );
    });

    it('should trigger the dirty state when the user selects a different value', () => {
        const storeWithInitialValue = composeMockStore(withSelectedValues(DEFAULT_PROPS.id, ANOTHER_VALUE));

        mountSingleSelectWithHOC(
            {
                initialValue: ONE_VALUE,
            },
            storeWithInitialValue
        );

        expect(storeWithInitialValue.getActions()).toContainEqual(
            ValidationActions.setDirty(DEFAULT_PROPS.id, true, ValidationTypes.wrongInitialValue)
        );
    });

    it('should not trigger the dirty state when the initial values are the same as the selected ones', () => {
        const storeWithInitialValue = composeMockStore(withSelectedValues(DEFAULT_PROPS.id, ONE_VALUE));

        mountSingleSelectWithHOC(
            {
                initialValue: ONE_VALUE,
            },
            storeWithInitialValue
        );

        expect(storeWithInitialValue.getActions()).not.toContainEqual(
            ValidationActions.setDirty(DEFAULT_PROPS.id, true, ValidationTypes.wrongInitialValue)
        );
    });
});
