import {PropsWithChildren, FC} from 'react';
import {render, screen, within} from '@test-utils';

import {getStoreMock, WarningList} from '../../../../utils/tests/TestUtils';
import {IMultiSelectOwnProps, MultiSelectConnected} from '../../../select/MultiSelectConnected';
import {
    PropsWithChildren,
    IMultiSelectWithInitialValuesOwnProps,
    withInitialValuesMultiSelectHOC,
} from '../WithInitialValuesMultiSelectHOC';

const MultiSelectWithInitialValues = withInitialValuesMultiSelectHOC(MultiSelectConnected);
const MultiSelectWithInitialValuesAndWarnings: FC<
    PropsWithChildren<IMultiSelectOwnProps & IMultiSelectWithInitialValuesOwnProps>
> = (props) => (
    <>
        <WarningList id={props.id} />
        <MultiSelectWithInitialValues {...props} />
    </>
);

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

    it('adds a warning when there is an invalid initial value', () => {
        const INVALID_VALUE = 'X';

        render(<MultiSelectWithInitialValuesAndWarnings {...defaultProps} initialValues={[INVALID_VALUE]} />);

        expect(screen.getByText(INVALID_INITIAL_VALUE_MOCK_MESSAGE)).toBeVisible();
    });

    it('sets an empty warning state when the initial values are the same as the selected ones', () => {
        render(
            <MultiSelectWithInitialValuesAndWarnings
                {...defaultProps}
                items={[
                    {
                        value: ONE_VALUE,
                        selected: true,
                    },
                ]}
                initialValues={[ONE_VALUE]}
            />,
        );
        expect(within(screen.getByRole('list', {name: 'warnings'})).queryByRole('listitem')).not.toBeInTheDocument();
    });

    it('displays no warning state when there is no initial value and selected value', () => {
        render(<MultiSelectWithInitialValuesAndWarnings {...defaultProps} initialValues={[]} />);

        expect(within(screen.getByRole('list', {name: 'warnings'})).queryByRole('listitem')).not.toBeInTheDocument();
    });

    it('selects the item', () => {
        render(
            <MultiSelectWithInitialValuesAndWarnings
                {...defaultProps}
                items={[
                    {
                        value: ONE_VALUE,
                        selected: false,
                    },
                ]}
                initialValues={[ONE_VALUE]}
            />,
        );

        expect(within(screen.getAllByRole('list')[1]).queryByText(ONE_VALUE)).toBeVisible();
    });
});
