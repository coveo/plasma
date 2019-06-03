import {mount, ReactWrapper, shallow} from 'enzyme';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
import * as _ from 'underscore';
import {ITooltipProps, Tooltip} from '../../../tooltip/Tooltip';
import {ELLIPSIS, IItemFilterProps, ItemFilter} from '../ItemFilter';
/* tslint:enable:no-unused-variable */

describe('Item filter', () => {
    const ITEM_FILTER_BASIC_PROPS: IItemFilterProps = {
        label: 'Item filter',
        item: '',
        onClear: jasmine.createSpy('onClear'),
    };

    describe('<ItemFilter />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ItemFilter {...ITEM_FILTER_BASIC_PROPS} />,
                );
            }).not.toThrow();
        });
    });

    describe('<ItemFilter />', () => {
        let itemFilterComponent: ReactWrapper<IItemFilterProps, any>;

        beforeEach(() => {
            itemFilterComponent = mount(
                <ItemFilter {...ITEM_FILTER_BASIC_PROPS} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            itemFilterComponent.detach();
        });

        it('should get the label as a prop', () => {
            const labelProp = itemFilterComponent.props().label;

            expect(labelProp).toBeDefined();
            expect(labelProp).toBe(ITEM_FILTER_BASIC_PROPS.label);
        });

        it('should get the item as a prop', () => {
            const itemProp = itemFilterComponent.props().item;

            expect(itemProp).toBeDefined();
            expect(itemProp).toBe(ITEM_FILTER_BASIC_PROPS.item);
        });

        it('should get what to do onClear as a prop', () => {
            const onClearProp = itemFilterComponent.props().onClear;

            expect(onClearProp).toBeDefined();
            expect(onClearProp).toEqual(ITEM_FILTER_BASIC_PROPS.onClear);
        });

        it('should display the label', () => {
            expect(itemFilterComponent.html()).toContain(ITEM_FILTER_BASIC_PROPS.label);
        });

        it('should display the item', () => {
            const newItemFilterProps: IItemFilterProps = _.extend({}, ITEM_FILTER_BASIC_PROPS, {item: 'an item'});
            itemFilterComponent.setProps(newItemFilterProps);

            expect(itemFilterComponent.html()).toContain(newItemFilterProps.item);
        });

        it('should call onClear when clicking the "item-filter-clear" button', () => {
            itemFilterComponent.find('.item-filter-clear').simulate('click');

            expect(ITEM_FILTER_BASIC_PROPS.onClear).toHaveBeenCalled();
        });

        it('should crop the item to the length of the crop prop', () => {
            const longItem: string = 'longer than 10 characters for sure';
            let cropProps: IItemFilterProps = _.extend({}, ITEM_FILTER_BASIC_PROPS,
                {crop: 10, item: longItem});
            itemFilterComponent.setProps(cropProps);

            expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(ELLIPSIS.length + cropProps.crop);

            cropProps = _.extend({}, ITEM_FILTER_BASIC_PROPS,
                {crop: -12, item: longItem});
            itemFilterComponent.setProps(cropProps);

            expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(ELLIPSIS.length + Math.abs(cropProps.crop));

            cropProps = _.extend({}, ITEM_FILTER_BASIC_PROPS,
                {crop: longItem.length, item: longItem});
            itemFilterComponent.setProps(cropProps);

            expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(longItem.length);

            cropProps = _.extend({}, ITEM_FILTER_BASIC_PROPS,
                {crop: -longItem.length, item: longItem});
            itemFilterComponent.setProps(cropProps);

            expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(longItem.length);
        });

        describe('itemTooltipProps', () => {
            it('should not add a tooltip on the item if no props are passed', () => {
                expect(itemFilterComponent.find(Tooltip).length).toBe(0);
            });

            it('should add a tooltip to the item if tooltip props are passed', () => {
                itemFilterComponent.setProps({itemTooltipProps: {title: 'what a nice feature'}});
                expect(itemFilterComponent.find(Tooltip).length).toBe(1);
            });

            it('should add all tooltip options passed to itemTooltipProps to the item tooltip', () => {
                const itemTooltipProps: ITooltipProps = {title: 'noice', placement: 'bottom', container: 'body'};
                itemFilterComponent.setProps({itemTooltipProps});

                _.pairs(itemTooltipProps).forEach((tooltipProp: string[]) => {
                    expect(itemFilterComponent.find(Tooltip).prop(tooltipProp[0])).toBe(tooltipProp[1]);
                });
            });
        });
    });
});
