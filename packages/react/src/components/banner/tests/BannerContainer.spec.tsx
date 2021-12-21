import {shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {BannerContainer} from '../BannerContainer';

describe('BannerContainer', () => {
    it('should not throw', () => {
        expect(() => {
            shallow(<BannerContainer />);
            shallow(<BannerContainer>Hello</BannerContainer>);
            shallow(<BannerContainer className="test">Hello</BannerContainer>);
            shallow(
                <BannerContainer className="test" onClick={_.noop}>
                    Hello
                </BannerContainer>
            );
        }).not.toThrow();
    });

    it('should contain the children', () => {
        const id = 'this-is-my-id';
        const wrapper = shallow(
            <BannerContainer>
                <div id={id} />
            </BannerContainer>
        );

        expect(wrapper.find(`#${id}`).exists()).toBe(true);
    });

    it('should allow custom classes', () => {
        const className = 'this-is-my-className';
        const wrapper = shallow(<BannerContainer className={className} />);

        expect(wrapper.hasClass(className)).toBe(true);
    });

    it('should allow other props', () => {
        const wrapper = shallow(<BannerContainer onClick={_.noop} style={{}} />);

        expect(wrapper.prop('onClick')).toBeDefined();
        expect(wrapper.prop('style')).toBeDefined();
    });
});
