import {shallow} from 'enzyme';
import * as React from 'react';
import {TableLoading} from '../TableLoading';

describe('TableLoading tests', () => {
    describe('<TableLoading.Table />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<TableLoading.Table />, {});
                wrapper.unmount();
            });
        });
    });

    describe('<TableLoading.Body />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<TableLoading.Body />, {});
                wrapper.unmount();
            });
        });

        it('should render <tr/> equal of the the number of columns sent as parameter', () => {
            const wrapper = shallow(<TableLoading.Body numberOfRow={10} />, {});
            expect(wrapper.find(TableLoading.TableRow).length).toBe(10);
        });

        it('should render <Row/> equal of the the number of columns sent as parameter', () => {
            const wrapper = shallow(<TableLoading.TableRow numberOfColumns={8} nColumn={0} />, {});
            expect(wrapper.find(TableLoading.Row));
        });
    });

    describe('<TableLoading.Row />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<TableLoading.Row num={0} />, {});
                wrapper.unmount();
            });
        });

        it('should add the class mod-half if the number is odd', () => {
            const wrapper = shallow(<TableLoading.Row num={1} />, {});
            expect(wrapper.find('div').hasClass('mod-half')).toBe(true);
        });

        it('should not add the class mod-half if the number is even', () => {
            const wrapper = shallow(<TableLoading.Row num={2} />, {});
            expect(wrapper.find('div').hasClass('mod-half')).toBe(false);
        });

        it('should render <CardSubRow/> equal to the number of subRows sent as parameter', () => {
            const wrapper = shallow(<TableLoading.CardLoading numberOfSubRow={3} />, {});
            expect(wrapper.find(TableLoading.CardSubRow).length).toBe(3);
        });
    });

    describe('<TableLoading.CardSubRow />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<TableLoading.CardSubRow num={0} />, {});
                wrapper.unmount();
            });
        });

        it('should not add the class mod-half if the number is odd', () => {
            const wrapper = shallow(<TableLoading.CardSubRow num={1} />, {});
            expect(wrapper.find('div').hasClass('mod-half')).toBe(false);
        });

        it('should add the class mod-half if the number is even', () => {
            const wrapper = shallow(<TableLoading.CardSubRow num={2} />, {});
            expect(wrapper.find('div').hasClass('mod-half')).toBe(true);
        });
    });
});
