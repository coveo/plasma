import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {extend} from 'underscore';
import {ISubNavigationProps, SubNavigation} from '../SubNavigation';

describe('SubNavigation', () => {
    describe('<SubNavigation />', () => {
        it('should render without errors', () => {
            expect(() => shallow(<SubNavigation items={[]} selected='' />)).not.toThrow();
            expect(() => shallow(<SubNavigation items={[]} selected='hello' />)).not.toThrow();
            expect(() => shallow(<SubNavigation items={[{id: 'a', label: 'A'}]} selected='a' />)).not.toThrow();
            expect(() => shallow(<SubNavigation items={[{id: 'a', label: 'A'}, {id: 'b', label: 'B'}]} selected='b' />)).not.toThrow();
            expect(() => shallow(<SubNavigation items={[{id: 'a', label: 'A'}]} selected='not-existing-id' />)).not.toThrow();
        });

        it('should call onRender when the element is created', () => {
            const spy = jasmine.createSpy('onRender');
            shallow(<SubNavigation items={[]} defaultSelected='' onRender={spy} />);

            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should call onDestroy when the element is created', () => {
            const spy = jasmine.createSpy('onDestroy');
            const mounted = mount(<SubNavigation items={[]} defaultSelected='' onDestroy={spy} />);
            mounted.unmount();

            expect(spy).toHaveBeenCalledTimes(1);
        });

        describe('<SubNavigation />', () => {
            let subNavigation: ReactWrapper<ISubNavigationProps, any>;
            const basicProps: ISubNavigationProps = {items: [{id: 'a', label: 'A'}, {id: 'b', label: 'B'}], selected: 'b'};

            beforeEach(() => {
                subNavigation = mount(
                    <SubNavigation {...basicProps} />,
                    {attachTo: document.getElementById('App')},
                );
            });

            afterEach(() => {
                subNavigation.detach();
            });

            it('should get the items as a prop', () => {
                const itemsProp = subNavigation.props().items;

                expect(itemsProp).toBeDefined();
                expect(itemsProp.length).toBe(basicProps.items.length);
            });

            it('should have the "mod-selected" class on the selected item', () => {
                const li = subNavigation.find('.sub-navigation-item')
                    .filterWhere((item) => item.key() === basicProps.selected);
                expect(li.hasClass('mod-selected')).toBe(true);
            });

            it('should call the onClickItem prop when clicking on an item', () => {
                const spy = jasmine.createSpy('onClickItem');
                const newProps = extend({}, basicProps, {onClickItem: spy});

                subNavigation = mount(
                    <SubNavigation {...newProps} />,
                    {attachTo: document.getElementById('App')},
                );
                const li = subNavigation.find('.sub-navigation-item')
                    .filterWhere((item) => item.key() !== basicProps.selected).first();
                li.find('.sub-navigation-item-link').simulate('click');

                expect(spy).toHaveBeenCalledTimes(1);
                expect(spy).toHaveBeenCalledWith(li.key());
            });
        });
    });
});
