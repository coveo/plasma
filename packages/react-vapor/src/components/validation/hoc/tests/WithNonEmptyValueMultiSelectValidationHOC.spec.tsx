import {ShallowWrapper} from 'enzyme';
import {mountWithStore, shallowWithStore} from 'enzyme-redux';
import React from 'react';
import {act} from 'react-dom/test-utils';
import {composeMockStore, getStoreMock, withSelectedValues} from '../../../../utils/tests/TestUtils';
import {IMultiSelectOwnProps, MultiSelectConnected} from '../../../select/MultiSelectConnected';
import {ValidationActions} from '../../ValidationActions';
import {ValidationTypes} from '../../ValidationTypes';
import {
    withNonEmptyMultiSelectHOC,
    WithNonEmptyValueMultiSelectValidationProps,
} from '../WithNonEmptyValueMultiSelectValidationHOC';

const MultiSelectWithNonEmpty = withNonEmptyMultiSelectHOC(MultiSelectConnected);
let multiSelectWrapper: ShallowWrapper<WithNonEmptyValueMultiSelectValidationProps & IMultiSelectOwnProps>;

describe('MultiSelectWithNonEmpty', () => {
    const defaultProps: IMultiSelectOwnProps & WithNonEmptyValueMultiSelectValidationProps = {
        id: 'SOME_ID',
        nonEmptyValidationMessage: 'ohno',
        items: [],
    };

    let store: ReturnType<typeof getStoreMock>;

    afterEach(() => {
        store.clearActions();
    });

    const ONE_VALUE = '🐟';

    it('should dispatch a setError action on mount if there are no values selected', () => {
        store = composeMockStore(withSelectedValues(defaultProps.id));
        const component = mountWithStore(<MultiSelectWithNonEmpty {...defaultProps} />, store);

        act(() => {
            component.mount();
        });

        expect(store.getActions()).toContain(
            ValidationActions.setError(
                defaultProps.id,
                defaultProps.nonEmptyValidationMessage,
                ValidationTypes.nonEmpty
            )
        );
    });

    it('should not dispatch a setError action on mount if there is a value selected', () => {
        store = composeMockStore(withSelectedValues(defaultProps.id, ONE_VALUE));
        const component = mountWithStore(<MultiSelectWithNonEmpty {...defaultProps} />, store);

        act(() => {
            component.mount();
        });

        expect(store.getActions()).not.toContain(
            ValidationActions.setError(
                defaultProps.id,
                defaultProps.nonEmptyValidationMessage,
                ValidationTypes.nonEmpty
            )
        );
    });

    it('should render without error', () => {
        expect(() => shallowWithStore(<MultiSelectWithNonEmpty {...defaultProps} />, store)).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
        expect(() => {
            multiSelectWrapper = shallowWithStore(<MultiSelectWithNonEmpty {...defaultProps} />, store);
            multiSelectWrapper.unmount();
        }).not.toThrow();
    });
});
