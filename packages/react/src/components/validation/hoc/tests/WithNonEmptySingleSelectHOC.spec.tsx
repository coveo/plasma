import {render, screen} from '@test-utils';
import {ErrorList, withSelectedValues} from '../../../../utils/tests/TestUtils.js';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../../../select/SingleSelectConnected.js';
import {withNonEmptySingleSelectHOC, IWithNonEmptySingleSelectHOCProps} from '../WithNonEmptySingleSelectHOC.js';

describe('SingleSelectWithNonEmpty', () => {
    const SingleSelectWithNonEmpty = withNonEmptySingleSelectHOC(SingleSelectConnected);

    const ONE_VALUE = '🐟';

    const DEFAULT_PROPS: ISingleSelectOwnProps & IWithNonEmptySingleSelectHOCProps = {
        id: 'SOME_ID',
        nonEmptyValidationMessage: 'ohno',
        items: [],
    };

    it('should mount and unmount/detach without error', () => {
        expect(() => {
            const {unmount} = render(<SingleSelectWithNonEmpty {...DEFAULT_PROPS} />);
            unmount();
        }).not.toThrow();
    });

    it('should dispatch a setError action on mount if there are no values selected', () => {
        const initialState = withSelectedValues(DEFAULT_PROPS.id)({});

        render(
            <>
                <SingleSelectWithNonEmpty {...DEFAULT_PROPS} />
                <ErrorList id={DEFAULT_PROPS.id} />
            </>,
            {initialState}
        );

        expect(screen.getByText(DEFAULT_PROPS.nonEmptyValidationMessage)).toBeVisible();
    });

    it('should not dispatch a setError action on mount if there is a value selected', () => {
        const initialState = withSelectedValues(DEFAULT_PROPS.id, ONE_VALUE)({});

        render(
            <>
                <SingleSelectWithNonEmpty {...DEFAULT_PROPS} />
                <ErrorList id={DEFAULT_PROPS.id} />
            </>,
            {initialState}
        );

        expect(screen.queryByText(DEFAULT_PROPS.nonEmptyValidationMessage)).not.toBeInTheDocument();
    });
});
