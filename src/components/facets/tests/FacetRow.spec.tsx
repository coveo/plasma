import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {IFacet} from '../Facet';
import {FacetRow, IFacetRowProps} from '../FacetRow';

describe('Facets', () => {
    const spyOnToggleFacet: jasmine.Spy = jasmine.createSpy('onToggleFacet');

    const FACET_ROW_PROPS: IFacetRowProps = {
        facetRow: {
            name: 'row',
            formattedName: 'Row',
        },
        facet: 'facetTitle',
        onToggleFacet: spyOnToggleFacet,
        isChecked: false,
    };
    const FACET_ROW: JSX.Element = <FacetRow {...FACET_ROW_PROPS} />;

    describe('<FacetRow />', () => {
        it('should render without errors', () => {
            expect(() => shallow(FACET_ROW)).not.toThrow();
        });
    });

    describe('FacetRowView', () => {
        let facetRowView: ReactWrapper<IFacetRowProps, any>;

        beforeEach(() => {
            facetRowView = mount(FACET_ROW, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            facetRowView.detach();
        });

        it('should stop event if click on checkbox directly', () => {
            const event = jasmine.createSpyObj('e', ['preventDefault', 'stopPropagation']);
            (facetRowView.instance() as any).stopEvent(event);

            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
        });

        it('should get the facet row as a prop', () => {
            const facetRowProp = facetRowView.props().facetRow;

            expect(facetRowProp).toBeDefined();
            expect(facetRowProp).toBe(FACET_ROW_PROPS.facetRow);
        });

        it('should get the facet as a prop', () => {
            const facetProp = facetRowView.props().facet;

            expect(facetProp).toBeDefined();
            expect(facetProp).toBe(FACET_ROW_PROPS.facet);
        });

        it('should get the facet as a prop', () => {
            const facetProp = facetRowView.props().facet;

            expect(facetProp).toBeDefined();
            expect(facetProp).toBe(FACET_ROW_PROPS.facet);
        });

        it('should get what to do when toggling a row as a prop', () => {
            const onToggleFacetProp = facetRowView.props().onToggleFacet;

            expect(onToggleFacetProp).toBeDefined();
        });

        it('should get the maxTooltipLabelLength as a prop', () => {
            expect(facetRowView.props().maxTooltipLabelLength).toBeDefined();
        });

        it('should get if the row checkbox is checked as a prop', () => {
            const checkedProp = facetRowView.props().isChecked;

            expect(checkedProp).toBeDefined();
            expect(checkedProp).toBe(FACET_ROW_PROPS.isChecked);
        });

        it('should display the facet row value', () => {
            expect(facetRowView.html()).toContain(FACET_ROW_PROPS.facetRow.formattedName);
        });

        it('should call onToggleFacet on change', () => {
            spyOnToggleFacet.calls.reset();
            expect(FACET_ROW_PROPS.onToggleFacet).not.toHaveBeenCalled();

            facetRowView.find('label').simulate('click');

            expect(spyOnToggleFacet).toHaveBeenCalledTimes(1);
        });

        it('should call onToggleFacet on click button', () => {
            spyOnToggleFacet.calls.reset();

            facetRowView.find('button').simulate('click');

            expect(spyOnToggleFacet).toHaveBeenCalledTimes(1);
        });

        it('should display a <Tooltip /> if the formatted name is longer than maxTooltipLabelLength', () => {
            const maxTooltipLabelLength = 25;
            const longerFormattedNameFacetRow: IFacet = {
                name: 'something',
                formattedName: new Array(maxTooltipLabelLength + 2).join('a'),
            };
            const newProps: IFacetRowProps = _.extend({}, FACET_ROW_PROPS, {facetRow: longerFormattedNameFacetRow, maxTooltipLabelLength});

            expect(facetRowView.find('Tooltip').length).toBe(0);

            facetRowView.setProps(newProps);

            expect(facetRowView.find('Tooltip').length).toBe(1);
        });

        it('should display a <Tooltip /> if the formatted name minus the count length is longer than maxTooltipLabelLength', () => {
            const maxTooltipLabelLength = 25;
            const longerFormattedNameFacetRow: IFacet = {
                name: 'something',
                formattedName: new Array(maxTooltipLabelLength).join('a'),
                count: '11',
            };
            const newProps: IFacetRowProps = _.extend({}, FACET_ROW_PROPS, {facetRow: longerFormattedNameFacetRow, maxTooltipLabelLength});

            expect(facetRowView.find('Tooltip').length).toBe(0);

            facetRowView.setProps(newProps);

            expect(facetRowView.find('Tooltip').length).toBe(1);
        });

        it('should display a "span.facet-value-count" if there is a count', () => {
            const facetRowWithCount: IFacet = {
                name: 'something',
                formattedName: 'Something',
                count: '1',
            };
            const newProps: IFacetRowProps = _.extend({}, FACET_ROW_PROPS, {facetRow: facetRowWithCount});

            expect(facetRowView.find('span.facet-value-count').length).toBe(0);

            facetRowView.setProps(newProps);

            expect(facetRowView.find('span.facet-value-count').length).toBe(1);
        });

        it('should display a span.facet-value-count the count as value', () => {
            const newProps: IFacetRowProps = _.extend({}, FACET_ROW_PROPS, {
                facetRow: {
                    name: 'something',
                    formattedName: 'something',
                    count: '10',
                },
            });

            facetRowView.setProps(newProps);

            expect(facetRowView.find('span.facet-value-count').length).toBe(1);
            expect(facetRowView.html()).toContain(newProps.facetRow.count);
        });
    });
    describe('<FacetRow enableExclude />', () => {
        let facetRowExcludeView: ReactWrapper<IFacetRowProps>;
        let props: IFacetRowProps;

        beforeEach(() => {
            props = {...FACET_ROW_PROPS, enableExclusions: true};
            facetRowExcludeView = mount(<FacetRow {...props} />, {attachTo: document.getElementById('App')});
        });

        it('should display a .facet-exclude-button when exclude behavior is enabled', () => {
            expect(facetRowExcludeView.find('.facet-exclude-button').length).toBe(1);
        });

        it('should display a .exclude-icon when exclude behavior is enabled and checkbox is checked as exclude', () => {
            expect(facetRowExcludeView.find('.icon.hide.exclude-icon').length).toBeGreaterThanOrEqual(1);
        });

        it('should call onToggle with good attribute when exclude behavior is enabled', () => {
            facetRowExcludeView.find('.facet-exclude-button').first().simulate('click');
            const facet: IFacet = {
                ...facetRowExcludeView.props().facetRow,
                exclude: true,
            };
            expect(spyOnToggleFacet).toHaveBeenCalledWith(facet);
        });

        describe('FacetRow enableExclude excluded row', () => {
            beforeEach(() => {
                const facetRow: IFacet = {...FACET_ROW_PROPS.facetRow, exclude: true, count: '2334'};
                facetRowExcludeView.setProps({...props, isChecked: true, facetRow});
            });

            it('should display a .exclude-box when exclude behavior is enabled and checkbox is checked as exclude', () => {
                expect(facetRowExcludeView.find('.exclude-box').length).toBe(1);
            });

            it('should display two .text-exclude when exclude behavior is enabled and checkbox is checked as exclude', () => {
                expect(facetRowExcludeView.find('.text-exclude').length).toBe(2);
            });

            it('should display a <Tooltip /> if the excludeTooltipMessage is defined', () => {
                const facetRow: IFacet = {
                    name: 'something',
                    formattedName: 'Something',
                    count: '11',
                };
                const newProps: IFacetRowProps = {...FACET_ROW_PROPS, facetRow, excludeTooltipMessage: () => 'test exclude tooltip'};

                expect(facetRowExcludeView.find('Tooltip').length).toBe(0);

                facetRowExcludeView.setProps(newProps);

                expect(facetRowExcludeView.find('Tooltip').length).toBe(1);
            });
        });
    });
});
