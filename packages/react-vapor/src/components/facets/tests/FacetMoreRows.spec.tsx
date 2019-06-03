import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {FilterBox} from '../../filterBox/FilterBox';
import {FacetMoreRows, IFacetMoreRowsProps} from '../FacetMoreRows';

describe('Facets', () => {
    const facet: string = 'facetTitle';
    const facetRows: JSX.Element[] = [];
    const basicFacetMoreRowsAttributes: IFacetMoreRowsProps = {
        facet: facet,
        facetRows: facetRows,
    };

    describe('<FacetMoreRows />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <FacetMoreRows
                        facet={facet}
                        facetRows={facetRows}
                    />,
                );
            }).not.toThrow();
        });
    });

    describe('<FacetMoreRows />', () => {
        let facetMoreRows: ReactWrapper<IFacetMoreRowsProps, any>;
        let facetMoreRowsInstance: FacetMoreRows;

        beforeEach(() => {
            facetMoreRows = mount(
                <FacetMoreRows
                    {...basicFacetMoreRowsAttributes}
                />,
                {attachTo: document.getElementById('App')},
            );
            facetMoreRowsInstance = facetMoreRows.instance() as FacetMoreRows;
        });

        afterEach(() => {
            facetMoreRows.detach();
        });

        it('should get the facet as a prop', () => {
            const facetProp = facetMoreRows.props().facet;

            expect(facetProp).toBeDefined();
            expect(facetProp).toBe(facet);
        });

        it('should get the facet rows as a prop', () => {
            const facetRowsProp = facetMoreRows.props().facetRows;

            expect(facetRowsProp).toBeDefined();
            expect(facetRowsProp).toBe(facetRows);
        });

        it('should render a <FilterBox /> component', () => {
            expect(facetMoreRows.find(FilterBox).length).toBe(1);
            expect(facetMoreRows.find(FilterBox).props().id).toBe('filter-' + facet);
        });

        it('should focus on the filter box input when opening', () => {
            const newFacetAttributes = _.extend({}, basicFacetMoreRowsAttributes, {isOpened: true});

            expect(facetMoreRowsInstance['facetSearch'].getElementsByTagName('input')[0]).not.toBe(document.activeElement as HTMLInputElement);

            facetMoreRows.setProps(newFacetAttributes);
            expect(facetMoreRowsInstance['facetSearch'].getElementsByTagName('input')[0]).toBe(document.activeElement as HTMLInputElement);
        });
    });

    describe('<FacetMoreRows />', () => {
        beforeEach(() => {
            const otherElement: HTMLDivElement = document.createElement('div');
            otherElement.setAttribute('id', 'other');
            document.body.appendChild(otherElement);
        });

        afterEach(() => document.getElementById('other').remove());

        const clickOnOther = () => {
            const evt = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: 20,
            });
            document.getElementById('other').dispatchEvent(evt);
        };

        it('should not add a listener on document on mount if onDocumentClick is set but the dropdown is not opened', () => {
            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
            const props = _.extend({}, basicFacetMoreRowsAttributes, {onDocumentClick: onDocumentClickSpy});

            mount(<FacetMoreRows {...props} />, {attachTo: document.getElementById('App')});
            clickOnOther();

            expect(onDocumentClickSpy).not.toHaveBeenCalled();
        });

        it('should add a listener on document on mount and remove it on unmount if prop onDocumentClick is set', () => {
            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
            const props = _.extend({}, basicFacetMoreRowsAttributes, {isOpened: true, onDocumentClick: onDocumentClickSpy});

            const facetMoreRows = mount(<FacetMoreRows {...props} />, {attachTo: document.getElementById('App')});
            clickOnOther();
            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);

            facetMoreRows.unmount();
            clickOnOther();
            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call onDocumentClick when prop is set and clicking on "facet-search"', () => {
            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
            const props = _.extend({}, basicFacetMoreRowsAttributes, {isOpened: true, onDocumentClick: onDocumentClickSpy});

            mount(<FacetMoreRows {...props} />, {attachTo: document.getElementById('App')});

            (document.getElementsByClassName('facet-search')[0] as HTMLDivElement).click();
            expect(onDocumentClickSpy).not.toHaveBeenCalled();

            clickOnOther();
            expect(onDocumentClickSpy).toHaveBeenCalled();
        });
    });
});
