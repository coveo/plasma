import {shallow} from 'enzyme';
import * as React from 'react';

import {Loading} from '../../loading/Loading';
import {Content} from '../Content';

describe('Content', () => {
    it('should render without errors', () => {
        expect(() => {
            const content = shallow(<Content content="test" />);
            content.unmount();
        }).not.toThrow();
    });

    it('should render with span as default tag', () => {
        const content = shallow(<Content content="test" />);

        expect(content.type()).toBe('span');
        expect(content.matchesElement(<span>test</span>)).toBe(true);
    });

    it('should render with a component <Loading/>', () => {
        const content = shallow(<Content content={Loading} />);
        expect(content.find(Loading).length).toBe(1);
    });

    it('should render with an custom tag div', () => {
        const content = shallow(<Content content="test" tag="div" />);
        expect(content.find('div').text()).toBe('test');
    });

    it('should render the content directly without wrapping it in a span if its a valid react element', () => {
        const myNode = <div>🎃</div>;
        const content = shallow(<Content content={myNode} />);
        expect(content.matchesElement(myNode)).toBe(true);
    });

    it('should render with a number', () => {
        const content = shallow(<Content content={420} />);
        expect(content.matchesElement(<span>{420}</span>)).toBe(true);
    });
});
