import { ShallowWrapper } from 'enzyme';
import {mountWithStore, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { Store } from 'redux';
import { ValidationActions, ValidationTypes } from '../..';
import { IReactVaporState } from '../../../../Entry';
import {composeMockStore, getStoreMock, withSelectedValues} from '../../../../utils/tests/TestUtils';
import { ISingleSelectOwnProps, SingleSelectConnected } from '../../../select/SingleSelectConnected';
import { withDirtySingleSelectHOC } from '../WithDirtySingleSelectHOC';


describe('SingleSelectWithDirty', () => {
    const SingleSelectWithHOC = withDirtySingleSelectHOC(SingleSelectConnected);
    let store: ReturnType<typeof getStoreMock>;

    const ONE_VALUE = '🐟';
    const ANOTHER_VALUE = '🐠';

    const defaultProps: ISingleSelectOwnProps = {
        id: 'SOME_ID',
        items: [],
    };

    beforeEach(() => {
        store = getStoreMock({
            validation: {},
        });
    });

    afterEach(() => {
        store.clearActions();
    });

    const mountSingleSelectWithHOC = (defaultProps: ISingleSelectOwnProps, store: Store<IReactVaporState>, initialValue?: string) => {
        const component = mountWithStore(<SingleSelectWithHOC {...defaultProps} initialValue={initialValue}/>, store);
        act(() => {
            component.mount();
        });
    }
    
    it('should render without error', () => {
        expect(() => shallowWithStore(<SingleSelectWithHOC {...defaultProps} />, store)).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
        let singleSelectWrapper: ShallowWrapper<ISingleSelectOwnProps>;
        expect(() => {
            singleSelectWrapper = shallowWithStore(<SingleSelectWithHOC {...defaultProps} />, store);
            singleSelectWrapper.unmount();
        }).not.toThrow();
    });

    it('should trigger the dirty state when the user selects a new value', () => {
        const store = composeMockStore(withSelectedValues(defaultProps.id, ONE_VALUE));

        mountSingleSelectWithHOC(defaultProps, store)

        expect(store.getActions()).toContain(ValidationActions.setDirty(defaultProps.id, true, ValidationTypes.wrongInitialValue));
    });

    it('should trigger the dirty state when the user selects a different value', () => {
        const store = composeMockStore(withSelectedValues(defaultProps.id, ANOTHER_VALUE));

        mountSingleSelectWithHOC(defaultProps, store, ONE_VALUE);

        expect(store.getActions()).toContain(ValidationActions.setDirty(defaultProps.id, true, ValidationTypes.wrongInitialValue));
    });

    it('should not trigger the dirty state when the initial values are the same as the selected ones', () => {
        const store = composeMockStore(withSelectedValues(defaultProps.id, ONE_VALUE));

        mountSingleSelectWithHOC(defaultProps, store, ONE_VALUE);

        expect(store.getActions()).not.toContain(ValidationActions.setDirty(defaultProps.id, true, ValidationTypes.wrongInitialValue));
    });
});
