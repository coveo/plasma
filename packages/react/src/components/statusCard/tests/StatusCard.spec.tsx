import {shallow} from 'enzyme';

import {Loading} from '../../loading/Loading';
import {Svg} from '../../svg';

describe('StatusCard', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<StatusCard title="title" />);
        }).not.toThrow();
    });

    it('should render a <Loading /> component when the prop loading is set to true', () => {
        const card = shallow(<StatusCard title="title" loading />);

        expect(card.find(Loading).length).toBe(1);
    });

    it('has the "simple" class if the "simple" prop is true', () => {
        const card = shallow(<StatusCard title="title" simple />);

        expect(card.hasClass('simple')).toBe(true);
    });

    it('has the "loading" class if the "loading" prop is true', () => {
        const card = shallow(<StatusCard title="title" loading />);

        expect(card.hasClass('loading')).toBe(true);
    });

    it('renders a Svg if the "icon" prop is specified', () => {
        const card = shallow(<StatusCard title="title" icon="help" />);

        expect(card.find(Svg).exists()).toBe(true);
        expect(card.find(Svg).prop('svgName')).toBe('help');
    });
});
