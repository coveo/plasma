import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {Svg} from '../../svg/Svg';
import {StatusCard, StatusCardProps} from '../StatusCard';
import * as styles from '../styles/StatusCard.scss';

describe('StatusCard', () => {
    const basicProps: StatusCardProps = {
        color: 'green',
        icon: 'view',
        title: 'Title'
    };
    const statusCardChild = 'Some child';

    it('should render without errors', () => {
        expect(() => {
            shallow(<StatusCard {...basicProps}>{statusCardChild}</StatusCard>);
        }).not.toThrow();
    });

    describe('<StatusCard />', () => {
        let statusCard: ReactWrapper<StatusCardProps>;

        const mountWithProps = (props?: Partial<StatusCardProps>) => {
            statusCard = mount(
                <StatusCard {...basicProps}>{statusCardChild}</StatusCard>,
                {attachTo: document.getElementById('App')},
            );
        };

        beforeEach(() => {
            mountWithProps();
        });

        afterEach(() => {
            statusCard.unmount();
            statusCard.detach();
        });

        it('should get the props correctly', () => {
            const statusCardProps = statusCard.props();
            expect(statusCardProps.color).toBe(basicProps.color);
            expect(statusCardProps.icon).toBe(basicProps.icon);
            expect(statusCardProps.title).toBe(basicProps.title);
            expect((statusCardProps as any).children).toBe(statusCardChild);
        });

        it('should have the class styles.statusCard', () => {
            expect(statusCard.find(`.${styles.statusCard}`).length).toBe(1);
        });

        it('should have a class with the color prop', () => {
            expect(statusCard.find(`.border-color-${basicProps.color}`).length).toBe(1);
        });

        it('should render a <Svg /> with the class styles.statusCardIcon', () => {
            const svg = statusCard.find(Svg);
            expect(svg.length).toBe(1);
            expect(svg.find(`.${styles.statusCardIcon}`).length).toBe(1);
        });

        it('should render a <h3/> with the class styles.statusCardTitle', () => {
            const title = statusCard.find('h3');
            expect(title.length).toBe(1);
            expect(title.html()).toContain(basicProps.title);
            expect(title.find(`.${styles.statusCardTitle}`).length).toBe(1);
        });

        it('should render the children with the class styles.statusCardInfo', () => {
            const children = statusCard.find(`.${styles.statusCardInfo}`);
            expect(children.length).toBe(1);
            expect(children.html()).toContain(statusCardChild);
        });
    });
});
