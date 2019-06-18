import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {Content, IContentProps} from '../../content/Content';
import {ITooltipProps, Tooltip} from '../../tooltip/Tooltip';
import {IItemBoxProps, ItemBox} from '../ItemBox';

describe('ItemBox', () => {
    let ItemBoxComponent: ReactWrapper<IItemBoxProps, any>;
    const defaultProps: IItemBoxProps = {
        value: 'test',
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<ItemBox value="test" />);
        }).not.toThrow();
    });

    describe('<ItemBox /> with default props', () => {
        beforeEach(() => {
            ItemBoxComponent = mount(<ItemBox {...defaultProps} />, {attachTo: document.getElementById('App')});
        });

        it('should render with the box-item class', () => {
            expect(ItemBoxComponent.find('li').hasClass('item-box')).toBe(true);
        });

        it('should render with the data-value set with the value', () => {
            expect(ItemBoxComponent.find(`[data-value="${defaultProps.value}"]`).length).toBe(1);
        });
    });

    describe('<ItemBox /> with custom props', () => {
        const content: IContentProps = {
            content: 'Prefix',
            classes: ['text-medium-grey', 'mr1'],
        };

        const tooltip: ITooltipProps = {
            title: 'title test for the item box',
            placement: 'bottom',
            container: 'body',
        };

        const renderItemBox = (props: Partial<IItemBoxProps> = {}) => {
            ItemBoxComponent = mount(<ItemBox {..._.defaults(props, defaultProps)} />, {
                attachTo: document.getElementById('App'),
            });
        };

        it('should render the display value', () => {
            const displayValue: string = 'display value';
            renderItemBox({
                displayValue,
            });
            expect(ItemBoxComponent.find('li').text()).toBe(displayValue);
        });

        it('should render a prepend <Content/>', () => {
            renderItemBox({
                prepend: content,
            });
            expect(ItemBoxComponent.find(Content).length).toBe(1);
        });

        it('should render an append <Content/>', () => {
            renderItemBox({
                append: content,
            });
            expect(ItemBoxComponent.find(Content).length).toBe(1);
        });

        it('should render the tooltip', () => {
            renderItemBox({
                tooltip,
            });
            expect(ItemBoxComponent.find(Tooltip).length).toBe(1);
        });

        it('should render with the class active if set to true', () => {
            renderItemBox({
                active: true,
            });
            expect(ItemBoxComponent.find('li').hasClass('active')).toBe(true);
        });

        it('should render with the class selected if set to true', () => {
            renderItemBox({
                selected: true,
            });
            expect(ItemBoxComponent.find('li').hasClass('selected')).toBe(true);
        });

        it('should render with the class disabled if set to true', () => {
            renderItemBox({
                disabled: true,
            });
            expect(ItemBoxComponent.find('li').hasClass('disabled')).toBe(true);
        });

        it('should render with the class hidden if set to true', () => {
            renderItemBox({
                hidden: true,
            });
            expect(ItemBoxComponent.find('li').hasClass('hidden')).toBe(true);
        });

        it('should render with the class divider if set to true', () => {
            renderItemBox({
                divider: true,
            });
            expect(ItemBoxComponent.find('li').hasClass('divider')).toBe(true);
        });

        it('should call the onOptionClick on click', () => {
            const onOptionClick: jasmine.Spy = jasmine.createSpy('onOptionClick');

            renderItemBox({
                onOptionClick,
            });

            ItemBoxComponent.find('li').simulate('click');

            expect(onOptionClick).toHaveBeenCalled();
        });

        it('should scroll the parent element if needed', () => {
            const spy = spyOn<any>(ItemBox.prototype, 'scrollIfNeeded').and.callThrough();

            renderItemBox({});

            ItemBoxComponent.setProps({active: true});

            expect(spy).toHaveBeenCalled();
        });
    });
});
