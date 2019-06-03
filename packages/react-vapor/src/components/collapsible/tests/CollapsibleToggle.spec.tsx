import {shallow} from 'enzyme';
import * as React from 'react';

import {Svg} from '../../svg/Svg';
import {CollapsibleToggle} from '../CollapsibleToggle';

describe('CollapsibleToggle', () => {
    it('should render a Svg component with the icon "arrow-bottom-rounded" when expanded is false', () => {
        const toggle = shallow(<CollapsibleToggle expanded={false} />);

        expect(toggle.find(Svg).exists()).toBe(true);
        expect(toggle.find(Svg).props().svgName).toBe('arrow-bottom-rounded');
    });

    it('should render a Svg component with the icon "arrow-top-rounded" when expanded is false', () => {
        const toggle = shallow(<CollapsibleToggle expanded={true} />);

        expect(toggle.find(Svg).exists()).toBe(true);
        expect(toggle.find(Svg).props().svgName).toBe('arrow-top-rounded');
    });
});
