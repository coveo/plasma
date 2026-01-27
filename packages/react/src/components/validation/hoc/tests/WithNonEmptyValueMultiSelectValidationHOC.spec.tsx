import {render, screen} from '@test-utils';
import {FC, PropsWithChildren} from 'react';
import {ErrorList, withSelectedValues} from '../../../../utils/tests/TestUtils';
import {IMultiSelectOwnProps, MultiSelectConnected} from '../../../select/MultiSelectConnected';
import {
    withNonEmptyMultiSelectHOC,
    WithNonEmptyValueMultiSelectValidationProps,
} from '../WithNonEmptyValueMultiSelectValidationHOC';

const MultiSelectWithNonEmpty = withNonEmptyMultiSelectHOC(MultiSelectConnected);
const MultiSelectWithNonEmptyAndError: FC<
    PropsWithChildren<IMultiSelectOwnProps & WithNonEmptyValueMultiSelectValidationProps>
> = (props) => (
    <>
        <MultiSelectWithNonEmpty {...props} />
        <ErrorList id={props.id} />
    </>
);

describe('MultiSelectWithNonEmpty', () => {
    const defaultProps: IMultiSelectOwnProps & WithNonEmptyValueMultiSelectValidationProps = {
        id: 'SOME_ID',
        nonEmptyValidationMessage: 'ohno',
        items: [],
    };

    const ONE_VALUE = '🐟';

    it('contains the text error if no values are selected', () => {
        const initialState = withSelectedValues(defaultProps.id)({});
        render(<MultiSelectWithNonEmptyAndError {...defaultProps} />, {initialState});

        expect(screen.getByText(defaultProps.nonEmptyValidationMessage)).toBeInTheDocument();
    });

    it('does not contain the text error if some values are selected', () => {
        const initialState = withSelectedValues(defaultProps.id, ONE_VALUE)({});
        render(<MultiSelectWithNonEmptyAndError {...defaultProps} />, {initialState});

        expect(screen.queryByText(defaultProps.nonEmptyValidationMessage)).not.toBeInTheDocument();
    });

    it('should unmount without error', () => {
        const {unmount} = render(<MultiSelectWithNonEmptyAndError {...defaultProps} />);
        expect(() => {
            unmount();
        }).not.toThrow();
    });
});
