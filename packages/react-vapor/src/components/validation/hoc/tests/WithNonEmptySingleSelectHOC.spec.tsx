import {ShallowWrapper} from 'enzyme';
import {mountWithStore, shallowWithStore} from 'enzyme-redux';
import React from 'react';
import {act} from 'react-dom/test-utils';
import {composeMockStore, getStoreMock, withSelectedValues} from '../../../../utils/tests/TestUtils';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../../../select/SingleSelectConnected';
import {ValidationActions} from '../../ValidationActions';
import {ValidationTypes} from '../../ValidationTypes';
import {withNonEmptySingleSelectHOC, IWithNonEmptySingleSelectHOCProps} from '../WithNonEmptySingleSelectHOC';

describe('SingleSelectWithNonEmpty', () => {
    const SingleSelectWithNonEmpty = withNonEmptySingleSelectHOC(SingleSelectConnected);
    let store: ReturnType<typeof getStoreMock>;

    const ONE_VALUE = '🐟';

    const DEFAULT_PROPS: ISingleSelectOwnProps & IWithNonEmptySingleSelectHOCProps = {
        id: 'SOME_ID',
        nonEmptyValidationMessage: 'ohno',
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

    const mountSingleSelectWithHOC = (
        props: Partial<typeof DEFAULT_PROPS> = {},
        storeToUse: ReturnType<typeof getStoreMock> = store
    ) => {
        const component = mountWithStore(<SingleSelectWithNonEmpty {...DEFAULT_PROPS} {...props} />, storeToUse);
        act(() => {
            component.mount();
        });
    };

    it('should render without error', () => {
        expect(() => shallowWithStore(<SingleSelectWithNonEmpty {...DEFAULT_PROPS} />, store)).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
        let singleSelectWrapper: ShallowWrapper<IWithNonEmptySingleSelectHOCProps & ISingleSelectOwnProps>;

        expect(() => {
            singleSelectWrapper = shallowWithStore(<SingleSelectWithNonEmpty {...DEFAULT_PROPS} />, store);
            singleSelectWrapper.unmount();
        }).not.toThrow();
    });

    it('should dispatch a setError action on mount if there are no values selected', () => {
        const storeWithSelectedValue = composeMockStore(withSelectedValues(DEFAULT_PROPS.id));

        mountSingleSelectWithHOC({}, storeWithSelectedValue);

        expect(storeWithSelectedValue.getActions()).toContainEqual(
            ValidationActions.setError(
                DEFAULT_PROPS.id,
                DEFAULT_PROPS.nonEmptyValidationMessage,
                ValidationTypes.nonEmpty
            )
        );
    });

    it('should not dispatch a setError action on mount if there is a value selected', () => {
        const storeWithSelectedValue = composeMockStore(withSelectedValues(DEFAULT_PROPS.id, ONE_VALUE));

        mountSingleSelectWithHOC({}, storeWithSelectedValue);

        expect(storeWithSelectedValue.getActions()).not.toContainEqual(
            ValidationActions.setError(
                DEFAULT_PROPS.id,
                DEFAULT_PROPS.nonEmptyValidationMessage,
                ValidationTypes.nonEmpty
            )
        );
    });
});
