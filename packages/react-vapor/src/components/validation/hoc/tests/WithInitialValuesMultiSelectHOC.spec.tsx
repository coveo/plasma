import {mountWithStore, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {getStoreMock} from '../../../../utils/tests/TestUtils';
import {IMultiSelectOwnProps, MultiSelectConnected} from '../../../select/MultiSelectConnected';
import {ValidationActions} from '../../ValidationActions';
import {ValidationTypes} from '../../ValidationTypes';
import {
    IMultiSelectWithInitialValuesOwnProps,
    withInitialValuesMultiSelectHOC,
} from '../WithInitialValuesMultiSelectHOC';

const MultiSelectWithInitialValues = withInitialValuesMultiSelectHOC(MultiSelectConnected);

describe('MultiSelectWithInitialValues', () => {
    const INVALID_INITIAL_VALUE_MOCK_MESSAGE = 'Something went wrong';
    const defaultProps: IMultiSelectOwnProps & IMultiSelectWithInitialValuesOwnProps = {
        id: 'SOME_ID',
        items: [],
        initialValues: [],
        invalidInitialValuesMessage: () => INVALID_INITIAL_VALUE_MOCK_MESSAGE,
    };

    const ONE_VALUE = '🐟';

    const emptyStore = getStoreMock({
        listBoxes: [],
    });

    beforeEach(() => {
        emptyStore.clearActions();
    });

    it('should trigger the warning state when there is an invalid initial value', () => {
        const INVALID_VALUE = 'X';

        const component = mountWithStore(
            <MultiSelectWithInitialValues {...defaultProps} initialValues={[INVALID_VALUE]} />,
            emptyStore
        );

        act(() => {
            component.mount();
        });

        expect(emptyStore.getActions()).toContain(
            ValidationActions.setWarning(
                defaultProps.id,
                INVALID_INITIAL_VALUE_MOCK_MESSAGE,
                ValidationTypes.wrongInitialValue
            )
        );
    });

    it('should set an empty warning state when the initial values are the same as the selected ones', () => {
        const component = mountWithStore(
            <MultiSelectWithInitialValues
                {...defaultProps}
                items={[
                    {
                        value: ONE_VALUE,
                        selected: true,
                    },
                ]}
                initialValues={[ONE_VALUE]}
            />,
            emptyStore
        );

        act(() => {
            component.mount();
        });

        expect(emptyStore.getActions()).toContain(
            ValidationActions.setWarning(defaultProps.id, '', ValidationTypes.wrongInitialValue)
        );
    });

    it('should set an empty warning state when there is no initial value and selected value', () => {
        const component = mountWithStore(
            <MultiSelectWithInitialValues {...defaultProps} initialValues={[]} />,
            emptyStore
        );

        act(() => {
            component.mount();
        });

        expect(emptyStore.getActions()).toContain(
            ValidationActions.setWarning(defaultProps.id, '', ValidationTypes.wrongInitialValue)
        );
    });

    it('should set the selected state directly in the items', () => {
        const component = shallowWithStore(
            <MultiSelectWithInitialValues
                {...defaultProps}
                items={[
                    {
                        value: ONE_VALUE,
                        selected: false,
                    },
                ]}
                initialValues={[ONE_VALUE]}
            />,
            emptyStore
        ).dive();

        const items = component.find(MultiSelectConnected).prop('items');

        expect(items[0].selected).toBe(true);
    });

    it('should reset the state when the resetOnUnmount prop is defined', () => {
        const component = mountWithStore(
            <MultiSelectWithInitialValues {...defaultProps} initialValues={[]} resetInitialValueWarningOnUnmount />,
            emptyStore
        );

        act(() => {
            component.mount();
        });

        emptyStore.clearActions();

        act(() => {
            component.unmount();
        });

        expect(emptyStore.getActions()).toContain(
            ValidationActions.clearWarning(defaultProps.id, ValidationTypes.wrongInitialValue)
        );
    });
});
