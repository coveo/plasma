import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {LabeledValue} from './LabeledValue';

describe('LabeledValue', () => {
    const props = {label: 'label', value: 'value'};

    it('should render without error with simple props', () => {
        expect(() => {
            shallow(<LabeledValue {...props} />);
        }).not.toThrow();
    });

    it('should render without error with value as jsx', () => {
        expect(() => {
            shallow(<LabeledValue {...props} value={<div>value</div>} />);
        }).not.toThrow();
    });

    it('should render without error with fullRow', () => {
        expect(() => {
            shallow(<LabeledValue {...props} fullRow />);
        }).not.toThrow();
    });

    it('should render without error with informations', () => {
        expect(() => {
            shallow(<LabeledValue {...props} information='some info' />);
        }).not.toThrow();
    });

    it('should render without error with informations and specific info placement', () => {
        expect(() => {
            shallow(
                <LabeledValue
                    {...props}
                    information='some info'
                    informationPlacement={TooltipPlacement.Bottom} />,
            );
        }).not.toThrow();
    });

    describe('LabeledValue content', () => {
        const testInformations = 'test informations';
        let labeledValue: ShallowWrapper<any, any>;

        beforeEach(() => {
            labeledValue = shallow(
                <LabeledValue
                    {...props}
                    information={testInformations} />,
            );
        });

        it('should render with the label inside the label section', () => {
            expect(labeledValue.find('.label').html()).toContain(props.label);
        });

        it('should render with the value inside the value section', () => {
            expect(labeledValue.find('.value').html()).toContain(props.value);
        });

        it('should render with the value inside the value section if value is a JSX.element', () => {
            const jsxValue: JSX.Element = <div className='jsx-value'>value</div>;
            labeledValue.setProps({value: jsxValue}).update();
            expect(labeledValue.find('.value').find('.jsx-value').length).toBe(1);
        });

        it('should render a Tooltip with a prop title having the value of the information prop', () => {
            expect(labeledValue.find(Tooltip).prop('title')).toBe(testInformations);
        });

        it('should render a Tooltip with a placement prop set to TooltipPlacement.Top by default', () => {
            expect(labeledValue.find(Tooltip).prop('placement')).toBe(TooltipPlacement.Top);
        });

        it('should render a Tooltip with a placement prop having the value of informationPlacement if set', () => {
            labeledValue.setProps({informationPlacement: TooltipPlacement.Bottom}).update();
            expect(labeledValue.find(Tooltip).prop('placement')).toBe(TooltipPlacement.Bottom);
        });

        it('should render an svg inside the tooltip having the "info-14" name', () => {
            expect(labeledValue.find(Tooltip).find(Svg).prop('svgName')).toBe('info-14');
        });

        it('should have the padding prop set to true and the class "padded" by default', () => {
            expect(LabeledValue.defaultProps.padding).toBe(true);
            expect(labeledValue.find('.box').hasClass('padded')).toBe(true);
        });

        it('should not have the class "padded" if prop padding is set to false', () => {
            labeledValue.setProps({'padding': false});
            expect(labeledValue.find('.box').hasClass('padded')).toBe(false);
        });
    });
});
