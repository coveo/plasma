import {IReduxAction} from '../../utils/ReduxUtils';
import {
    addSearchBar,
    ISearchBarActionPayload,
    removeSearchBar,
    setSearchBarValue,
    toggleSearchBarDisabled,
    toggleSearching,
} from './SearchBarActions';
import {ISearchBarState, searchBarDefaultState, searchBarsInitialState, searchBarsReducer} from './SearchBarReducers';

describe('Reducers', () => {
    describe('SearchBarReducers', () => {
        const genericAction: IReduxAction<ISearchBarActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'searching something',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined ', () => {
            const searchBarState: ISearchBarState[] = searchBarsReducer(undefined, genericAction);

            expect(searchBarState).toEqual(searchBarsInitialState);
        });

        it('should return the old state when the action is not defined for the searchBar state', () => {
            const oldState: ISearchBarState[] = [
                {
                    id: 'some-searchBar',
                    searching: false,
                    disabled: false,
                    value: 'anywoulddo',
                },
            ];
            const searchBarState: ISearchBarState[] = searchBarsReducer(oldState, genericAction);

            expect(searchBarState).toEqual(oldState);
        });

        it('should add the searchBar in the state on addSearchBar', () => {
            const searchBarState: ISearchBarState[] = searchBarsReducer(undefined, addSearchBar('search-bar'));

            expect(searchBarState[0]).toEqual({...searchBarDefaultState, id: 'search-bar'});
        });

        it('should add the searchBar in the state on addSearchBar with disabled is passed on addSearchBar', () => {
            const searchBarState: ISearchBarState[] = searchBarsReducer(undefined, addSearchBar('search-bar', true));

            expect(searchBarState[0]).toEqual({...searchBarDefaultState, id: 'search-bar', disabled: true});
        });

        it('should remove the searchBar in the state on removeSearchBar', () => {
            const oldState = [
                {...searchBarDefaultState, id: 'search-bar'},
                {...searchBarDefaultState, id: 'search-bar-2'},
            ];
            const searchBarState: ISearchBarState[] = searchBarsReducer(oldState, removeSearchBar('search-bar'));

            expect(searchBarState[0]).toEqual(oldState[1]);
            expect(searchBarState.length).toBe(oldState.length - 1);
        });

        it('should toggle the searching property of the searchBar with the id passed in the payload', () => {
            let oldState = [
                {...searchBarDefaultState, id: 'search-bar'},
                {...searchBarDefaultState, id: 'search-bar-2'},
            ];
            let newState: ISearchBarState[] = searchBarsReducer(
                oldState,
                toggleSearching('search-bar', !oldState[0].searching)
            );

            expect(newState[0].searching).toBe(!oldState[0].searching);
            expect(newState[1].searching).toBe(oldState[1].searching);

            oldState = [...newState];
            newState = searchBarsReducer(oldState, toggleSearching('search-bar-2', !oldState[1].searching));

            expect(newState[0].searching).toBe(oldState[0].searching);
            expect(newState[1].searching).toBe(!oldState[1].searching);

            oldState = [...newState];
            const thisIsObsolete = true;
            newState = searchBarsReducer(oldState, toggleSearching('unknown-search-bar', thisIsObsolete));

            expect(newState).toEqual(oldState);
        });

        it('should toggle the disabled property of the searchBar with the id passed in the payload', () => {
            let oldState = [
                {...searchBarDefaultState, id: 'search-bar'},
                {...searchBarDefaultState, id: 'search-bar-2'},
            ];
            let newState: ISearchBarState[] = searchBarsReducer(
                oldState,
                toggleSearchBarDisabled('search-bar', !oldState[0].disabled)
            );

            expect(newState[0].disabled).toBe(!oldState[0].disabled);
            expect(newState[1].disabled).toBe(oldState[1].disabled);

            oldState = [...newState];
            newState = searchBarsReducer(oldState, toggleSearchBarDisabled('search-bar-2', !oldState[1].disabled));

            expect(newState[0].disabled).toBe(oldState[0].disabled);
            expect(newState[1].disabled).toBe(!oldState[1].disabled);

            oldState = [...newState];
            const thisIsObsolete = true;
            newState = searchBarsReducer(oldState, toggleSearchBarDisabled('unknown-search-bar', thisIsObsolete));

            expect(newState).toEqual(oldState);
        });

        it('should set the value property of the search bar with the id passed in the payload', () => {
            const oldState = [
                {...searchBarDefaultState, id: 'search-bar'},
                {...searchBarDefaultState, id: 'search-bar-2'},
            ];
            const newState: ISearchBarState[] = searchBarsReducer(
                oldState,
                setSearchBarValue('search-bar', 'new value')
            );

            expect(newState[0].value).toBe('new value');
            expect(newState[1].value).toBe(oldState[1].value);
        });
    });
});
