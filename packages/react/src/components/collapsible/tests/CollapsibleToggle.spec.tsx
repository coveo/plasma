import {shallow} from 'enzyme';

import {Svg} from '../../svg/Svg';
import {CollapsibleToggle} from '../CollapsibleToggle';

describe('CollapsibleToggle', () => {
    it('should render a Svg component with the icon "arrowBottomRounded" when expanded is false', () => {
        const toggle = shallow(<CollapsibleToggle expanded={false} />);

        expect(toggle.find(Svg).exists()).toBe(true);
        expect(toggle.find(Svg).props().svgName).toBe('arrowBottomRounded');
    });

    it('should render a Svg component with the icon "arrowTopRounded" when expanded is false', () => {
        const toggle = shallow(<CollapsibleToggle expanded={true} />);

        expect(toggle.find(Svg).exists()).toBe(true);
        expect(toggle.find(Svg).props().svgName).toBe('arrowTopRounded');
    });
});
