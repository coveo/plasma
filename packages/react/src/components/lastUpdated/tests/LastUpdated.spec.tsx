import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import moment from 'moment';
import s from 'underscore.string';

import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {ILastUpdatedProps, LAST_UPDATE_LABEL, LastUpdated} from '../LastUpdated.js';

describe('LastUpdated', () => {
    describe('<LastUpdated />', () => {
        let lastUpdatedWrapper: ShallowWrapper<ILastUpdatedProps, any>;
        let lastUpdated: ReactWrapper<ILastUpdatedProps, any>;
        let time: Date;

        it('should render without errors', () => {
            expect(() => {
                shallow(<LastUpdated />);
            }).not.toThrow();
        });

        it('should display the time passed as a prop', () => {
            time = TestUtils.randomDate();

            const expectedTime = moment(time).format('LTS');

            lastUpdatedWrapper = shallow(<LastUpdated time={time} />);

            expect(s.contains(lastUpdatedWrapper.html(), expectedTime)).toBe(true);
        });

        it('should add the current time if we do not pass it the time prop', () => {
            jest.useFakeTimers();

            const expectedTime = moment(new Date(Date.now())).format('LTS');

            lastUpdatedWrapper = shallow(<LastUpdated />);

            expect(s.contains(lastUpdatedWrapper.html(), expectedTime)).toBe(true);

            jest.clearAllTimers();
        });

        it('should use the default label if not defined', () => {
            lastUpdatedWrapper = shallow(<LastUpdated />);

            expect(s.contains(lastUpdatedWrapper.html(), LAST_UPDATE_LABEL)).toBe(true);
        });

        it('should use the label passed as a prop to display the time', () => {
            const expectedLabel = 'Last update was at';
            lastUpdatedWrapper = shallow(<LastUpdated label={expectedLabel} />);

            expect(lastUpdatedWrapper.html()).toContain(expectedLabel);
        });

        it('should trigger onRender prop when mounting', () => {
            const renderSpy = jest.fn();
            lastUpdated = mount(<LastUpdated />, {attachTo: document.getElementById('App')});

            lastUpdated.unmount();
            lastUpdated.setProps({onRender: renderSpy});
            lastUpdated.mount();

            expect(renderSpy.mock.calls.length).toBe(1);
        });

        it('should trigger onDestroy prop when unmounting', () => {
            const destroySpy = jest.fn();
            lastUpdated = mount(<LastUpdated />, {attachTo: document.getElementById('App')});

            expect(() => lastUpdated.instance().componentWillUnmount()).not.toThrow();

            lastUpdated.unmount();
            lastUpdated.setProps({onDestroy: destroySpy});
            lastUpdated.mount();
            lastUpdated.unmount();

            expect(destroySpy.mock.calls.length).toBe(1);
        });
    });
});
