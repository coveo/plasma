import {IReduxAction} from '../../../utils/ReduxUtils';
import {IFacet} from '../Facet';
import {emptyAllFacets, FacetActions, IChangeFacetActionPayload, IFacetActionPayload} from '../FacetActions';
import {facetInitialState, facetReducer, facetsInitialState, facetsReducer, IFacetState} from '../FacetReducers';

describe('Facets', () => {
    describe('FacetReducers', () => {
        const genericAction: IReduxAction<IFacetActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                facet: 'a facet',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const facetsState: IFacetState[] = facetsReducer(undefined, genericAction);

            expect(facetsState).toBe(facetsInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one facet', () => {
            const facetState: IFacetState = facetReducer(undefined, genericAction);

            expect(facetState).toBe(facetInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IFacetState[] = [facetInitialState];
            const facetsState: IFacetState[] = facetsReducer(oldState, genericAction);

            expect(facetsState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one facet', () => {
            const oldState: IFacetState = facetInitialState;
            const facetState: IFacetState = facetReducer(oldState, genericAction);

            expect(facetState).toBe(oldState);
        });

        it('should return the old state with one more FacetState when the action is "ADD_FACET"', () => {
            let oldState: IFacetState[] = facetsInitialState;
            const action: IReduxAction<IFacetActionPayload> = {
                type: FacetActions.addFacet,
                payload: {
                    facet: 'some-facet',
                },
            };
            let facetsState: IFacetState[] = facetsReducer(oldState, action);

            expect(facetsState.length).toBe(oldState.length + 1);
            expect(facetsState.filter((f) => f.facet === action.payload.facet).length).toBe(1);

            oldState = facetsState;
            action.payload.facet = 'some-facet2';
            facetsState = facetsReducer(oldState, action);

            expect(facetsState.length).toBe(oldState.length + 1);
            expect(facetsState.filter((f) => f.facet === action.payload.facet).length).toBe(1);
        });

        it('should return the old state without the FacetState with the action facet when the action is "REMOVE_FACET"', () => {
            let oldState: IFacetState[] = [
                {
                    facet: 'some-facet2',
                    opened: false,
                    selected: [],
                },
                {
                    facet: 'some-facet1',
                    opened: true,
                    selected: [],
                },
                {
                    facet: 'some-facet3',
                    opened: false,
                    selected: [],
                },
            ];
            const action: IReduxAction<IFacetActionPayload> = {
                type: FacetActions.removeFacet,
                payload: {
                    facet: 'some-facet1',
                },
            };
            let facetsState: IFacetState[] = facetsReducer(oldState, action);

            expect(facetsState.length).toBe(oldState.length - 1);
            expect(facetsState.filter((f) => f.facet === action.payload.facet).length).toBe(0);

            oldState = facetsState;
            action.payload.facet = 'some-facet2';
            facetsState = facetsReducer(oldState, action);

            expect(facetsState.length).toBe(oldState.length - 1);
            expect(facetsState.filter((f) => f.facet === action.payload.facet).length).toBe(0);
        });

        it('should toggle the open property value of a facet when the action is "TOGGLE_MORE_FACET_ROWS"', () => {
            const openValue = false;
            const oldState: IFacetState[] = [
                {
                    facet: 'some-facet2',
                    opened: openValue,
                    selected: [],
                },
                {
                    facet: 'some-facet1',
                    opened: openValue,
                    selected: [],
                },
                {
                    facet: 'some-facet3',
                    opened: openValue,
                    selected: [],
                },
            ];
            const action: IReduxAction<IFacetActionPayload> = {
                type: FacetActions.toggleMoreFacetRows,
                payload: {
                    facet: 'some-facet1',
                },
            };
            let facetsState: IFacetState[] = facetsReducer(oldState, action);

            expect(facetsState.length).toBe(oldState.length);
            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].opened).toBe(!openValue);
            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].opened).toBe(openValue);

            facetsState = facetsReducer(facetsState, action);

            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].opened).toBe(openValue);
            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].opened).toBe(openValue);
        });

        it('should set opened property value to false for all facets when the action is "CLOSE_MORE_FACET_ROWS"', () => {
            const oldState: IFacetState[] = [
                {
                    facet: 'some-facet2',
                    opened: true,
                    selected: [],
                },
                {
                    facet: 'some-facet1',
                    opened: false,
                    selected: [],
                },
                {
                    facet: 'some-facet3',
                    opened: true,
                    selected: [],
                },
            ];
            const action: IReduxAction<IFacetActionPayload> = {
                type: FacetActions.closeMoreFacetRows,
                payload: {
                    facet: 'all',
                },
            };
            const facetsState: IFacetState[] = facetsReducer(oldState, action);

            expect(facetsState.length).toBe(oldState.length);
            expect(facetsState.filter((f) => f.opened).length).toBe(0);
            expect(facetsState.filter((f) => !f.opened).length).toBe(oldState.length);
        });

        it('should set selected property to an empty array the facet when the action is "EMPTY_FACET', () => {
            const selectedRows = [
                {
                    name: 'row',
                    formattedName: 'Row',
                },
                {
                    name: 'row2',
                    formattedName: 'Row 2',
                },
            ];
            const oldState: IFacetState[] = [
                {
                    facet: 'some-facet2',
                    opened: true,
                    selected: selectedRows,
                },
                {
                    facet: 'some-facet1',
                    opened: false,
                    selected: selectedRows,
                },
                {
                    facet: 'some-facet3',
                    opened: true,
                    selected: selectedRows,
                },
            ];
            const action: IReduxAction<IFacetActionPayload> = {
                type: FacetActions.emptyFacet,
                payload: {
                    facet: 'some-facet1',
                },
            };
            const facetsState: IFacetState[] = facetsReducer(oldState, action);

            expect(facetsState.length).toBe(oldState.length);
            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].selected.length).toBe(0);
            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].selected.length).toBe(
                selectedRows.length
            );
        });

        it('should set the selected facet exclude property to true if it aleady selected to not exclude', () => {
            const selectedRows: IFacet[] = [
                {
                    name: 'row',
                    formattedName: 'Row',
                    exclude: false,
                },
            ];
            const oldState: IFacetState[] = [
                {
                    facet: 'some-facet2',
                    opened: true,
                    selected: selectedRows,
                },
                {
                    facet: 'some-facet1',
                    opened: false,
                    selected: [],
                },
            ];
            const action: IReduxAction<IChangeFacetActionPayload> = {
                type: FacetActions.changeFacet,
                payload: {
                    facet: 'some-facet2',
                    facetRow: {
                        ...selectedRows[0],
                        exclude: true,
                    },
                },
            };
            const facetsState: IFacetState[] = facetsReducer(oldState, action);

            expect(facetsState[0].selected[0].exclude).toBeTruthy();
        });

        it('should set selected property to an empty array in all facets when the action is "EMPTY_ALL_FACET', () => {
            const selectedRows = [
                {
                    name: 'row',
                    formattedName: 'Row',
                },
                {
                    name: 'row2',
                    formattedName: 'Row 2',
                },
            ];
            const oldState: IFacetState[] = [
                {
                    facet: 'some-facet2',
                    opened: true,
                    selected: selectedRows,
                },
                {
                    facet: 'some-facet1',
                    opened: false,
                    selected: selectedRows,
                },
                {
                    facet: 'some-facet3',
                    opened: true,
                    selected: selectedRows,
                },
            ];

            const facetsState: IFacetState[] = facetsReducer(oldState, emptyAllFacets());

            expect(facetsState.length).toBe(oldState.length);
            facetsState.forEach((facet) => expect(facet.selected.length).toBe(0));
        });

        it('should add the row to the beginning selected property of the facet when the action is "CHANGE_FACET" and remove it if it is already there', () => {
            const selectedRows = [
                {
                    name: 'row',
                    formattedName: 'Row',
                },
                {
                    name: 'row2',
                    formattedName: 'Row 2',
                },
            ];
            const oldState: IFacetState[] = [
                {
                    facet: 'some-facet2',
                    opened: true,
                    selected: selectedRows,
                },
                {
                    facet: 'some-facet1',
                    opened: false,
                    selected: selectedRows,
                },
                {
                    facet: 'some-facet3',
                    opened: true,
                    selected: selectedRows,
                },
            ];
            const newRow = {
                name: 'newRow',
                formattedName: 'A New Row',
            };
            let action: IReduxAction<IChangeFacetActionPayload> = {
                type: FacetActions.changeFacet,
                payload: {
                    facet: 'some-facet1',
                    facetRow: newRow,
                },
            };
            let facetsState: IFacetState[] = facetsReducer(oldState, action);

            expect(facetsState.length).toBe(oldState.length);
            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].selected.length).toBe(
                selectedRows.length + 1
            );
            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].selected[0].name).toBe(newRow.name);
            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].selected.length).toBe(
                selectedRows.length
            );

            action = {
                type: FacetActions.changeFacet,
                payload: {
                    facet: 'some-facet1',
                    facetRow: newRow,
                },
            };
            facetsState = facetsReducer(facetsState, action);
            expect(facetsState.filter((f) => f.facet === action.payload.facet)[0].selected.length).toBe(
                selectedRows.length
            );
            expect(facetsState.filter((f) => f.facet !== action.payload.facet)[0].selected.length).toBe(
                selectedRows.length
            );
        });
    });
});
