import * as React from 'react';
import {AppendedValueSide, MiddleSlider, Section, Slider} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

export const InputSliderExample: ExampleComponent = () => (
    <Section title="Slider Examples">
        <SimpleSliderExample />
        <Section level={2} title="Middle Slider">
            <MiddleSliderExample />
            <MiddleSliderAsymetric />
            <MiddleSliderWithPercent />
        </Section>
    </Section>
);

const SimpleSliderExample: React.FunctionComponent = () => (
    <Section level={2} title="Simple Slider">
        <Section level={3} title="A simple slider with marks, step, a formated tooltip and an initial value">
            <Slider
                hasTooltip
                slider={{
                    step: 25,
                    marks: {
                        0: 'Lower',
                        50: 'Middle',
                        100: 'Higher',
                    },
                    defaultValue: 50,
                    tipFormatter: (value: number) => `${value}$`,
                }}
            />
        </Section>
    </Section>
);

const MiddleSliderExample: React.FunctionComponent = () => {
    return (
        <Section level={3} key="two" title="MiddleSlider with asymetric range and initial value">
            <MiddleSlider
                key="patate"
                min={-2000}
                max={10000}
                id="asymetricRangeId"
                initialValue={2000}
                marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                hasTooltip
                tooltipStyle={{
                    overlayClassName: 'vapor-slider-overlay',
                }}
            />
        </Section>
    );
};

const MiddleSliderAsymetric: React.FunctionComponent = () => {
    const [value, setValue] = React.useState(null);

    return (
        <Section key="one" level={3} title={`MiddleSlider with marks and steps. Its current value is ${value}`}>
            <MiddleSlider
                key="pwel"
                min={-10000}
                max={10000}
                id="rangeSliderId"
                marks={{
                    0: '-100%',
                    25: '-50%',
                    50: '0',
                    75: '50%',
                    100: '100%',
                }}
                step={5000}
                initialValue={5000}
                onChange={(currentValue) => {
                    setValue(currentValue);
                }}
                appendValueFormatter={(num: number) => (num > 0 ? `+${num}` : num)}
                hasTooltip
                appendValue
                customTooltip={() => <span>this custom tooltip shows the slider current value of {value}</span>}
            />
        </Section>
    );
};

const ValueHolder: React.FunctionComponent<{value: string; label: string}> = ({value, label}) => (
    <div style={{textAlign: 'center'}}>
        <label style={{display: 'block', marginBottom: '10px', textAlign: 'center'}}>{label}</label>
        <span style={{margin: '0 auto'}}>{value}</span>
    </div>
);

const MiddleSliderWithPercent: React.FunctionComponent = () => {
    const appendValueFormatter = (value: number, side: string) => {
        let formattedValue: string;
        let valueLabel: string;
        if (side === AppendedValueSide.right) {
            formattedValue = value === 0 ? `${value + 50}%` : `${50 + value}%`;
            valueLabel = 'Right Label';
        } else if (side === AppendedValueSide.left) {
            formattedValue = value === 0 ? `${value + 50}%` : `${50 - value}%`;
            valueLabel = 'Left Label';
        }
        return <ValueHolder value={formattedValue} label={valueLabel} />;
    };

    return (
        <Section key="one" level={3} title={`MiddleSlider showing the percent allocated to each side`}>
            <MiddleSlider
                key="gnagnagna"
                min={-50}
                max={50}
                marks={{0: '', 50: '', 100: ''}}
                id="percentSliderId"
                appendValueFormatter={appendValueFormatter}
                appendValue={AppendedValueSide.both}
            />
        </Section>
    );
};
