import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {noop} from 'underscore';

import {ISubNavigationProps, SubNavigation} from '../SubNavigation';

// tslint:disable-next-line:no-unused-variable
describe('SubNavigation', () => {
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
        const mounted = shallow(<SubNavigation items={[]} defaultSelected='' onDestroy={spy} />);
        mounted.unmount();

        expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('<SubNavigation />', () => {
        let subNavigation: ShallowWrapper<ISubNavigationProps>;
        const basicProps: ISubNavigationProps = {
            items: [
                {id: 'a', label: 'A'},
                {id: 'b', label: 'B'},
            ],
        };

        it('should render one navigation link per item', () => {
            subNavigation = shallow(<SubNavigation {...basicProps} />);

            expect(subNavigation.find('li').length).toBe(basicProps.items.length);
        });

        it('should have the "mod-selected" class on the selected item', () => {
            const selectedItem = 'b';

            subNavigation = shallow(<SubNavigation {...basicProps} selected={selectedItem} />);

            expect(subNavigation.find('li').findWhere((node) => node.key() === selectedItem).hasClass('mod-selected')).toBe(true);
        });

        it('should call the onClickItem prop when clicking on an item', () => {
            const clickedItem = 'b';
            const spy = jasmine.createSpy('onClickItem');

            subNavigation = shallow(<SubNavigation {...basicProps} onClickItem={spy} />);
            subNavigation.find('li').findWhere((node) => node.key() === clickedItem).find('.sub-navigation-item-link').simulate('click', {preventDefault: noop});

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(clickedItem);
        });
    });
});
