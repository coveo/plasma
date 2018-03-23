import {IReduxAction} from '../../utils/ReduxUtils';
import {addSearchBar, ISearchBarActionPayload, removeSearchBar, toggleSearching} from './SearchBarActions';
import {ISearchBarState, searchBarsInitialState, searchBarsReducer} from './SearchBarReducers';

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
            const oldState: ISearchBarState[] = [{
                id: 'some-searchBar',
                searching: false,
            }];
            const searchBarState: ISearchBarState[] = searchBarsReducer(oldState, genericAction);

            expect(searchBarState).toEqual(oldState);
        });

        it('should add the searchBar in the state on addSearchBar', () => {
            const searchBarState: ISearchBarState[] = searchBarsReducer(undefined, addSearchBar('search-bar'));

            expect(searchBarState[0]).toEqual({id: 'search-bar', searching: false});
        });

        it('should remove the searchBar in the state on removeSearchBar', () => {
            const oldState = [{id: 'search-bar', searching: false}, {id: 'search-bar-2', searching: false}];
            const searchBarState: ISearchBarState[] = searchBarsReducer(oldState, removeSearchBar('search-bar'));

            expect(searchBarState[0]).toEqual(oldState[1]);
            expect(searchBarState.length).toBe(oldState.length - 1);
        });

        it('should toggle the searching property of the searchBar with the id passed in the payload', () => {
            let oldState = [{id: 'search-bar', searching: false}, {id: 'search-bar-2', searching: false}];
            let newState: ISearchBarState[] = searchBarsReducer(oldState, toggleSearching('search-bar', !oldState[0].searching));

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
    });
});
