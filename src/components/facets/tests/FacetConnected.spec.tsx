import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {TestUtils} from '../../../utils/TestUtils';
import {Facet, IFacet, IFacetProps} from '../Facet';
import {FacetConnected} from '../FacetConnected';
import {FacetMoreRowsConnected} from '../FacetMoreRowsConnected';
import {FacetMoreToggleConnected} from '../FacetMoreToggleConnected';
import {FacetRow} from '../FacetRow';

describe('Facets', () => {
    describe('<FacetConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let facetComponent: ReactWrapper<IFacetProps, any>;
        let store: Store<IReactVaporState>;
        let newRow: JSX.Element;
        let facetRows: IFacet[];
        let facet: IFacet;
        let selectedFacetRows: IFacet[];
        let onToggleFacet: (facet: string, facetRow: IFacet) => void;
        let clearFacet: (facet: string) => void;
        const maxRowsToShow = 4;

        beforeEach(() => {
            facetRows = [
                {
                    name: 'row1',
                    formattedName: 'Row 1',
                },
                {
                    name: 'row2',
                    formattedName: 'Row 2',
                },
                {
                    name: 'row3',
                    formattedName: 'Row 3',
                },
            ];
            facet = {
                name: 'facet1',
                formattedName: 'Facet 1',
            };
            selectedFacetRows = [{
                name: 'row2',
                formattedName: 'Row 2',
            }];
            onToggleFacet = jasmine.createSpy('onToggleFacet');
            clearFacet = jasmine.createSpy('clearFacet');

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <FacetConnected
                        facetRows={facetRows}
                        facet={facet}
                        selectedFacetRows={selectedFacetRows}
                        toggleFacet={onToggleFacet}
                        clearFacet={clearFacet}
                        maxRowsToShow={maxRowsToShow}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            facetComponent = wrapper.find(Facet);
        });

        afterEach(() => {
            wrapper.unmount();
            wrapper.detach();
        });

        it('should get the facet rows as a prop', () => {
            const facetRowsProp = facetComponent.props().facetRows;

            expect(facetRowsProp).toBeDefined();
            expect(jasmine.arrayContaining(facetRowsProp)).toEqual(jasmine.arrayContaining(facetRows));
        });

        it('should get the facet title as a prop', () => {
            const facetProp = facetComponent.props().facet;

            expect(facetProp).toBeDefined();
            expect(facetProp).toBe(facet);
        });

        it('should get the selected facet rows as a prop', () => {
            const selectedFacetRowsProp = facetComponent.props().selectedFacetRows;

            expect(selectedFacetRowsProp).toBeDefined();
            expect(selectedFacetRowsProp).toBe(selectedFacetRows);
        });

        it('should get the maxRowsToShow as a prop', () => {
            const maxRowsToShowProp = facetComponent.props().maxRowsToShow;

            expect(maxRowsToShowProp).toBeDefined();
            expect(maxRowsToShowProp).toBe(maxRowsToShow);
        });

        it('should get what to do when toggling a row as a prop', () => {
            const onToggleFacetProp = facetComponent.props().onToggleFacet;

            expect(onToggleFacetProp).toBeDefined();
        });

        it('should get what to do when clearing a facet as a prop', () => {
            const clearFacetProp = facetComponent.props().clearFacet;

            expect(clearFacetProp).toBeDefined();
        });

        it('should get what to do when rendering the facet as a prop', () => {
            const onRenderProp = facetComponent.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do when destroying the facet as a prop', () => {
            const onDestroyProp = facetComponent.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should render as many <FacetRow /> components as there are facet rows', () => {
            expect(facetComponent.find(FacetRow).length).toBe(facetRows.length);
        });

        it('should render a toggle to view more facet rows if there are more than maxRowsToShow (number in props + 1 extra)', () => {
            expect(facetComponent.find(FacetMoreToggleConnected).length).toBe(0);

            facetRows = facetRows.concat(
                {
                    name: 'row4',
                    formattedName: 'Row 4',
                }, {
                    name: 'row5',
                    formattedName: 'Row 5',
                }, {
                    name: 'row6',
                    formattedName: 'Row 6',
                },
            );

            newRow = <FacetConnected
                facetRows={facetRows}
                facet={facet}
                selectedFacetRows={selectedFacetRows}
                toggleFacet={onToggleFacet}
                clearFacet={clearFacet}
                maxRowsToShow={maxRowsToShow}
            />;
            wrapper.setProps({children: newRow});

            expect(facetComponent.find(FacetMoreToggleConnected).length).toBe(1);
        });

        it('should render more facet rows if there are more than maxRowsToShow (number in props + 1 extra)', () => {
            expect(facetComponent.find(FacetMoreRowsConnected).length).toBe(0);

            facetRows = facetRows.concat(
                {
                    name: 'row4',
                    formattedName: 'Row 4',
                }, {
                    name: 'row5',
                    formattedName: 'Row 5',
                }, {
                    name: 'row6',
                    formattedName: 'Row 6',
                },
            );

            newRow = <FacetConnected
                facetRows={facetRows}
                facet={facet}
                selectedFacetRows={selectedFacetRows}
                toggleFacet={onToggleFacet}
                clearFacet={clearFacet}
                maxRowsToShow={maxRowsToShow}
            />;
            wrapper.setProps({children: newRow});

            expect(facetComponent.find(FacetMoreRowsConnected).length).toBe(1);
        });

        it('should show the button to clear the facet if there is a selected row', () => {
            expect(facetComponent.find('.facet-header-eraser').hasClass('hidden')).toBe(false);

            selectedFacetRows = [];

            newRow = <FacetConnected
                facetRows={facetRows}
                facet={facet}
                selectedFacetRows={selectedFacetRows}
                toggleFacet={onToggleFacet}
                clearFacet={clearFacet}
            />;
            wrapper.setProps({children: newRow});

            expect(facetComponent.find('.facet-header-eraser').hasClass('hidden')).toBe(true);
        });

        it('should display the facet title', () => {
            expect(facetComponent.html()).toContain(facet.formattedName);
        });

        it('should call onToggleFacet when buildCategoryFacet is called', () => {
            const facetRowLabel = facetComponent.find(FacetRow).first().find('label');

            expect(onToggleFacet).not.toHaveBeenCalled();

            expect(facetRowLabel.length).toBe(1);
            facetRowLabel.simulate('click');

            expect(onToggleFacet).toHaveBeenCalledTimes(1);
        });

        it('should call clearFacet when clearCategoryFacet is called', () => {
            const facetEraser = facetComponent.find('.facet-header-eraser');

            expect(clearFacet).not.toHaveBeenCalled();

            expect(facetEraser.length).toBe(1);
            facetEraser.simulate('click');

            expect(clearFacet).toHaveBeenCalled();
        });
    });
});
