import * as React from 'react';
import {MiddleSlider, Section, Slider} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

export const InputSliderExample: ExampleComponent = () => (
    <Section title="Slider Examples">
        <SimpleSliderExample />
        <Section level={2} title="Middle Slider">
            <MiddleSliderExample />
            <MiddleSliderAsymetric />
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
                onChange={(currentValue) => {
                    setValue(currentValue);
                }}
                hasTooltip
                appendValue
                customTooltip={() => <span>this custom tooltip shows the slider current value of {value}</span>}
            />
        </Section>
    );
};
