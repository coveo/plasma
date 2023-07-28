import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';
import {createTestAppContainer} from '../../../utils/tests/TestUtils';

import {Facet, IFacet, IFacetProps} from '../Facet';
import {FacetRow} from '../FacetRow';

describe('Facets', () => {
    const facetRows: IFacet[] = [];
    const facet: IFacet = {name: '', formattedName: '', count: '0'};
    const toggleFacet: (facet: string, facetRow: IFacet) => void = jest.fn();
    const clearFacet: (facet: string) => void = jest.fn();
    const maxRowsToShow = 4;

    it('should render without errors', () => {
        expect(() => {
            shallow(<Facet facetRows={facetRows} facet={facet} toggleFacet={toggleFacet} clearFacet={clearFacet} />);
        }).not.toThrow();
    });

    describe('<Facet />', () => {
        let facetComponent: ReactWrapper<IFacetProps, any>;
        let facetBasicAttributes: IFacetProps;
        let facetInstance: Facet;

        beforeEach(() => {
            createTestAppContainer();
            facetBasicAttributes = {
                facetRows: facetRows,
                facet: facet,
                toggleFacet: toggleFacet,
                clearFacet: clearFacet,
                maxRowsToShow,
            };
            facetComponent = mount(<Facet {...facetBasicAttributes} />, {attachTo: document.getElementById('App')});
            facetInstance = facetComponent.instance() as Facet;
        });

        afterEach(() => {
            if (facetComponent?.exists()) {
                facetComponent.unmount();
            }
        });

        it('should not render anything when there are no rows to display', () => {
            expect(facetComponent.html()).toBeNull();
        });

        it('should render some html when there are rows to display', () => {
            facetComponent.setProps({...facetBasicAttributes, facetRows: [{name: 'a', formattedName: 'b'}]});

            expect(facetComponent.html()).not.toBeNull();
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jest.fn();
            const newFacetAttributes = _.extend({}, facetBasicAttributes, {onRender: renderSpy});

            facetComponent.unmount();
            facetComponent.setProps(newFacetAttributes);
            facetComponent.mount();

            expect(renderSpy.mock.calls.length).toBe(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jest.fn();
            const newFacetAttributes = _.extend({}, facetBasicAttributes, {onRender: destroySpy});

            expect(() => facetInstance.componentWillUnmount()).not.toThrow();

            facetComponent.unmount();
            facetComponent.setProps(newFacetAttributes);
            facetComponent.mount();
            facetComponent.unmount();

            expect(destroySpy.mock.calls.length).toBe(1);
        });

        it('should display normal <FacetMoreToggle /> and <FacetMoreRows /> if it has more than maxRowsToShow (number in props + 1 extra)', () => {
            const multipleRows = [
                {
                    name: '1',
                    formattedName: '1',
                },
                {
                    name: '2',
                    formattedName: '2',
                },
                {
                    name: '3',
                    formattedName: '3',
                },
                {
                    name: '4',
                    formattedName: '4',
                },
                {
                    name: '5',
                    formattedName: '5',
                    count: '0',
                },
                {
                    name: '6',
                    formattedName: '6',
                    count: '5243421',
                },
            ];
            const newFacetAttributes = _.extend({}, facetBasicAttributes, {facetRows: multipleRows});

            expect(facetComponent.find('FacetMoreToggle').length).toBe(0);
            expect(facetComponent.find('FacetMoreRows').length).toBe(0);
            expect(facetComponent.find('FacetMoreToggleConnected').length).toBe(0);
            expect(facetComponent.find('FacetMoreRowsConnected').length).toBe(0);

            facetComponent.setProps(newFacetAttributes);
            facetComponent.mount();

            expect(facetComponent.find('FacetMoreToggle').length).toBe(1);
            expect(facetComponent.find('FacetMoreRows').length).toBeGreaterThan(0);
            expect(facetComponent.find('FacetMoreToggleConnected').length).toBe(0);
            expect(facetComponent.find('FacetMoreRowsConnected').length).toBe(0);
        });

        it('should display normal <FacetMoreRows /> if it has more than maxRowsToShow (number in props + 1 extra)', () => {
            const multipleRows = [
                {
                    name: '1',
                    formattedName: '1',
                },
                {
                    name: '2',
                    formattedName: '2',
                },
                {
                    name: '3',
                    formattedName: '3',
                },
                {
                    name: '4',
                    formattedName: '4',
                },
                {
                    name: '5',
                    formattedName: '5',
                    count: '0',
                },
                {
                    name: '6',
                    formattedName: '6',
                    count: '5243421',
                },
            ];
            const newFacetAttributes = _.extend({}, facetBasicAttributes, {facetRows: multipleRows});

            expect(facetComponent.find('FacetMoreToggle').length).toBe(0);
            expect(facetComponent.find('FacetMoreToggleConnected').length).toBe(0);

            facetComponent.setProps(newFacetAttributes);
            facetComponent.mount();

            expect(facetComponent.find('FacetMoreToggle').length).toBe(1);
            expect(facetComponent.find('FacetMoreToggleConnected').length).toBe(0);
        });

        it(
            'should not display <FacetMoreToggle /> and <FacetMoreRows /> if it has ' +
                'more than maxRowsToShow (number in props + 1 extra) and they are all selected',
            () => {
                const multipleRows = [
                    {
                        name: '1',
                        formattedName: '1',
                    },
                    {
                        name: '2',
                        formattedName: '2',
                    },
                    {
                        name: '3',
                        formattedName: '3',
                    },
                    {
                        name: '4',
                        formattedName: '4',
                    },
                    {
                        name: '5',
                        formattedName: '5',
                        count: '0',
                    },
                    {
                        name: '6',
                        formattedName: '6',
                        count: '5243421',
                    },
                ];
                const newFacetAttributes = _.extend({}, facetBasicAttributes, {
                    facetRows: multipleRows,
                    selectedFacetRows: multipleRows,
                });

                expect(facetComponent.find('FacetMoreRows').length).toBe(0);
                expect(facetComponent.find('FacetMoreToggle').length).toBe(0);

                facetComponent.setProps(newFacetAttributes);
                facetComponent.mount();

                expect(facetComponent.find('FacetMoreRows').length).toBe(0);
                expect(facetComponent.find('FacetMoreToggle').length).toBe(0);
            },
        );

        it('should display the last facet if the component has one more facet than allowed', () => {
            const multipleRows = [
                {name: '1', formattedName: '1'},
                {name: '2', formattedName: '2'},
                {name: '3', formattedName: '3'},
            ];
            const newFacetAttributes = _.extend({}, facetBasicAttributes, {
                facetRows: multipleRows,
                selectedFacetRows: [],
                maxRowsToShow: multipleRows.length - 1,
            });

            facetComponent.setProps(newFacetAttributes);
            facetComponent.mount();

            expect(facetComponent.find('FacetMoreRows').length).toBe(0);
            expect(facetComponent.find('FacetMoreToggle').length).toBe(0);
            expect(facetComponent.find('.facet-values').find(FacetRow).length).toBe(multipleRows.length);
        });

        it('should display the more if the component has two more facet than allowed', () => {
            const multipleRows = [
                {name: '1', formattedName: '1'},
                {name: '2', formattedName: '2'},
                {name: '3', formattedName: '3'},
            ];
            const newFacetAttributes = _.extend({}, facetBasicAttributes, {
                facetRows: multipleRows,
                selectedFacetRows: [],
                maxRowsToShow: multipleRows.length - 2,
            });

            facetComponent.setProps(newFacetAttributes);
            facetComponent.mount();

            expect(facetComponent.find('FacetMoreRows').length).toBe(1);
            expect(facetComponent.find('FacetMoreToggle').length).toBe(1);
            expect(facetComponent.find('.facet-values').find(FacetRow).length).toBe(multipleRows.length - 2);
        });

        it('should have class "facet-open" if it has isOpened prop set to true', () => {
            const expectedClass = '.facet-opened';
            const newFacetAttributes = _.extend({}, facetBasicAttributes, {
                isOpened: true,
                facetRows: [{name: 'a', formattedName: 'b'}],
            });

            expect(facetComponent.find(expectedClass).length).toBe(0);

            facetComponent.setProps(newFacetAttributes);
            facetComponent.mount();

            expect(facetComponent.find(expectedClass).length).toBe(1);
        });

        const callBuildCategoryFacet = () => {
            facetInstance['buildFacet'].call(facetInstance, {name: '1', formattedName: '1'});
        };

        it('should call toggleFacet when calling buildCategoryFacet', () => {
            callBuildCategoryFacet();

            expect(toggleFacet).toHaveBeenCalled();
        });

        it('should call onToggleFacet when calling buildCategoryFacet and prop is set', () => {
            const onToggleFacetSpy = jest.fn();
            const newFacetAttributes = _.extend({}, facetBasicAttributes, {onToggleFacet: onToggleFacetSpy});

            callBuildCategoryFacet();

            expect(onToggleFacetSpy).not.toHaveBeenCalled();

            facetComponent.setProps(newFacetAttributes);
            facetComponent.mount();
            callBuildCategoryFacet();

            expect(onToggleFacetSpy).toHaveBeenCalled();
        });

        const callClearCategoryFacet = () => {
            facetInstance['clearFacet'].call(facetInstance);
        };

        it('should call clearFacet when calling clearCategoryFacet', () => {
            callClearCategoryFacet();

            expect(clearFacet).toHaveBeenCalled();
        });

        it('should call onClearFacet when calling buildCategoryFacet and prop is set', () => {
            const onClearFacetSpy = jest.fn();
            const newFacetAttributes = _.extend({}, facetBasicAttributes, {onClearFacet: onClearFacetSpy});

            callClearCategoryFacet();

            expect(onClearFacetSpy).not.toHaveBeenCalled();

            facetComponent.setProps(newFacetAttributes);
            facetComponent.mount();
            callClearCategoryFacet();

            expect(onClearFacetSpy).toHaveBeenCalled();
        });

        it('should sort the rows alphabetically (selected first)', () => {
            const unselected: IFacet[] = [
                {
                    name: 'aaa',
                    formattedName: 'Aaa',
                },
                {
                    name: '222',
                    formattedName: '2',
                },
            ];
            const selected: IFacet[] = [
                {
                    name: 'ttt',
                    formattedName: 'ttt',
                },
                {
                    name: 'sss',
                    formattedName: 'sss',
                    count: '213',
                },
            ];
            const newAttributes = _.extend({}, facetBasicAttributes, {
                facetRows: unselected,
                selectedFacetRows: selected,
            });

            facetComponent.setProps(newAttributes);
            facetComponent.mount();

            expect(facetComponent.find(FacetRow).length).toBe(4);
            expect(facetComponent.find(FacetRow).at(0).props().facetRow).toEqual(expect.objectContaining(selected[1]));
            expect(facetComponent.find(FacetRow).at(1).props().facetRow).toEqual(expect.objectContaining(selected[0]));
            expect(facetComponent.find(FacetRow).at(2).props().facetRow).toEqual(
                expect.objectContaining(unselected[1]),
            );

            expect(facetComponent.find(FacetRow).at(3).props().facetRow).toEqual(
                expect.objectContaining(unselected[0]),
            );
        });
    });
});
