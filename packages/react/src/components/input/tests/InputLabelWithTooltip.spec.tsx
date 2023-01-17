import {shallow} from 'enzyme';

import {Tooltip} from '../../tooltip/Tooltip.js';
import {InputLabelWithTooltip, InputLabelWithTooltipProps} from '../InputLabelWithTooltip.js';
import {Label} from '../Label.js';

describe('InputLabelWithTooltip', () => {
    const defaultProps: InputLabelWithTooltipProps = {
        label: '🥰',
        tooltip: '😏',
        invalidMessage: '🤨',
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<InputLabelWithTooltip {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<InputLabelWithTooltip />', () => {
        it('should output specified label', () => {
            const label = shallow(<InputLabelWithTooltip {...defaultProps} />);

            expect(label.html()).toContain(defaultProps.label);
        });

        it('should render a tooltip with specified information', () => {
            const label = shallow(<InputLabelWithTooltip {...defaultProps} />);

            expect(label.find(Tooltip).prop('title')).toEqual(defaultProps.tooltip);
        });

        it('should output invalidMessage when specified', () => {
            const label = shallow(<InputLabelWithTooltip {...defaultProps} />);

            expect(label.find(Label).prop('invalidMessage')).toEqual(defaultProps.invalidMessage);
        });
    });
});
