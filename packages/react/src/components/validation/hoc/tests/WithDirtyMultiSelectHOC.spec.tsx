import {render, screen} from '@test-utils';
import {IsDirtyIndicator, withSelectedValues} from '../../../../utils/tests/TestUtils';
import {IMultiSelectOwnProps, MultiSelectConnected} from '../../../select/MultiSelectConnected';
import {withDirtyMultiSelectHOC} from '../WithDirtyMultiSelectHOC';

const MultiSelectWithDirty = withDirtyMultiSelectHOC(MultiSelectConnected);

describe('MultiSelectWithDirty', () => {
    const defaultProps: IMultiSelectOwnProps = {
        id: 'SOME_ID',
        items: [],
    };

    const ONE_VALUE = '🐟';
    const ANOTHER_VALUE = '🐠';

    it('should trigger the dirty state when the user selects a new value', () => {
        const initialState = withSelectedValues(defaultProps.id, ONE_VALUE)({});

        render(
            <>
                <MultiSelectWithDirty {...defaultProps} initialValues={[]} />
                <IsDirtyIndicator id={defaultProps.id} label="is dirty" />
            </>,
            {initialState},
        );

        expect(screen.getByText('is dirty')).toBeVisible();
    });

    it('should trigger the dirty state when the user removes a value', () => {
        const initialState = withSelectedValues(defaultProps.id, ONE_VALUE)({});

        render(
            <>
                <MultiSelectWithDirty {...defaultProps} initialValues={[ONE_VALUE, ANOTHER_VALUE]} />
                <IsDirtyIndicator id={defaultProps.id} label="is dirty" />
            </>,
            {initialState},
        );
        expect(screen.getByText('is dirty')).toBeVisible();
    });

    it('should not trigger the dirty state when the initial values are the same as the selected ones', () => {
        const initialState = withSelectedValues(defaultProps.id, ONE_VALUE)({});

        render(
            <>
                <MultiSelectWithDirty {...defaultProps} initialValues={[ONE_VALUE]} />
                <IsDirtyIndicator id={defaultProps.id} label="is dirty" />
            </>,
            {initialState},
        );

        expect(screen.queryByText('is dirty')).not.toBeInTheDocument();
    });

    it('should not trigger the dirty state when there is no initial value and selected value', () => {
        const initialState = withSelectedValues(defaultProps.id)({});

        render(
            <>
                <MultiSelectWithDirty {...defaultProps} initialValues={[]} />
                <IsDirtyIndicator id={defaultProps.id} label="is dirty" />
            </>,
            {initialState},
        );

        expect(screen.queryByText('is dirty')).not.toBeInTheDocument();
    });
});
