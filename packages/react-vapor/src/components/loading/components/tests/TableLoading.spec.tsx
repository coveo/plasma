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
            expect(wrapper.find('tr').length).toBe(10);
        });

        it('should render <Row/> equal of the the number of columns sent as parameter', () => {
            const wrapper = shallow(<TableLoading.Body numberOfColumns={8} numberOfRow={1} />, {});
            expect(wrapper.find(TableLoading.Row).length).toBe(8);
        });
    });

    describe('<TableLoading.Row />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<TableLoading.Row num={0} />, {});
                wrapper.unmount();
            });
        });

        it('should add the class mod-haft if the number is odd', () => {
            const wrapper = shallow(<TableLoading.Row num={1} />, {});
            expect(wrapper.find('div').hasClass('mod-half')).toBe(true);
        });

        it('should not add the class mod-haft if the number is even', () => {
            const wrapper = shallow(<TableLoading.Row num={2} />, {});
            expect(wrapper.find('div').hasClass('mod-half')).toBe(false);
        });
    });
});
