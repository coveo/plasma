import {shallow} from 'enzyme';
import * as React from 'react';

import {withServerSideProcessing} from './withServerSideProcessing';

describe('withServerSideProcessing', () => {
    const Component = () => <div>I am a component</div>;

    it('should not throw when creating the HOC component', () => {
        expect(() => {
            withServerSideProcessing(Component);
        }).not.toThrow();
    });

    it('should not throw when rendering the HOC component', () => {
        expect(() => {
            const ComponentWithServerSideProcessing = withServerSideProcessing(Component);
            shallow(<ComponentWithServerSideProcessing />);
        }).not.toThrow();
    });

    it('should set the "isServer" prop to true on the wrapped component', () => {
        const ComponentWithServerSideProcessing = withServerSideProcessing(Component);
        const wrapper = shallow(<ComponentWithServerSideProcessing />);

        expect(wrapper.props().isServer).toBe(true);
    });
});
