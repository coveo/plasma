import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {Badge, DEFAULT_BADGE_CLASSNAME, IBadgeProps} from '../Badge';

describe('Badge', () => {
    let badge: ReactWrapper<IBadgeProps, any>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<Badge label='badge' />);
        }).not.toThrow();
    });

    describe('<Badge />', () => {

        const mountWithProps = (props: Partial<IBadgeProps>) => {
            badge = mount(
                <Badge {..._.defaults(props, {label: 'badge'})} />,
                {attachTo: document.getElementById('App')},
            );
        };

        it('should render badge with the label specified as prop', () => {
            mountWithProps({
                label: 'somelabel',
            });

            expect(badge.text()).toEqual('somelabel');
        });

        it('should render the badge with the default badge class', () => {
            mountWithProps({});

            expect(badge.hasClass(DEFAULT_BADGE_CLASSNAME)).toBe(true);
        });

        it('should render the badge with the extra classes specified as props', () => {
            mountWithProps({
                extraClasses: ['bg-blue', 'bold'],
            });

            expect(badge.hasClass('bg-blue')).toBe(true);
            expect(badge.hasClass('bold')).toBe(true);
        });
    });
});
