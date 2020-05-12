import {IReactVaporState} from '../../../ReactVapor';
import {ISelectWithFilterOwnProps, ISingleSelectOwnProps} from '../../select';
import {IFilterState} from '../FilterBoxReducers';
import {FilterBoxSelectors} from '../FilterBoxSelectors';
import {defaultListBoxMatchFilter, MatchFilter} from '../FilterBoxUtils';

describe('FilterBox', () => {
    describe('FilterBox Selectors', () => {
        const id: string = 'a';
        const defaultState: IReactVaporState = {
            filters: [],
            selectWithFilter: {},
            listBoxes: [],
        };
        const defaultOwnProps: ISelectWithFilterOwnProps & ISingleSelectOwnProps = {id};

        describe('getFilterText', () => {
            it('should return an empty filterText if it is not in the state', () => {
                expect(FilterBoxSelectors.getFilterText(defaultState, defaultOwnProps)).toEqual('');
            });

            it('should return the filterText in the state if the id is in the state', () => {
                const filter: IFilterState = {id, filterText: 'text'};
                expect(FilterBoxSelectors.getFilterText({filters: [filter]}, defaultOwnProps)).toEqual(
                    filter.filterText
                );
            });
        });

        describe('getMatchFilter', () => {
            it('should return the defaultListBoxMatchFilter if the matchFilter is not defined in the ownProps', () => {
                expect(FilterBoxSelectors.getMatchFilter(defaultState, defaultOwnProps)).toEqual(
                    defaultListBoxMatchFilter
                );
            });

            it('should return the matchFilter if it is defined in the ownProps', () => {
                const matchFilter: MatchFilter = () => true;
                expect(FilterBoxSelectors.getMatchFilter(defaultState, {matchFilter})).toEqual(matchFilter);
            });
        });
    });
});
