import * as React from 'react';
import {AppendedValueSide, Section, Slider} from '@coveord/plasma-react';

import {ExampleComponent} from '../../utils/ExamplesUtils';
import VaporComponent from '../../building-blocs/VaporComponent';

// start-print
export const SliderExamples: ExampleComponent = () => (
    <VaporComponent id="Slider" title="Slider" withSource>
        <Section>
            <SimpleSliderExample />
            <SliderExample />
            <SliderAsymetric />
            <SliderWithPercent />
        </Section>
    </VaporComponent>
);

const SimpleSliderExample: React.FunctionComponent = () => (
    <Section level={2} title="A simple slider with marks, step, a formated tooltip and an initial value">
        <Slider
            id="🍄"
            hasTooltip
            step={25}
            marks={{
                0: 'Lower',
                50: 'Middle',
                100: 'Higher',
            }}
            initialValue={50}
            appendValueFormatter={(value: number) => `${value}$`}
        />
    </Section>
);

const SliderExample: React.FunctionComponent = () => (
    <Section level={2} key="two" title="Slider with asymetric range and initial value">
        <Slider
            key="patate"
            min={-2000}
            max={10000}
            id="asymetricRangeId"
            initialValue={2000}
            marks={{'-2000': '-2000', 2000: '2000', 0: '0', 10000: '10,000'}}
            hasTooltip
            appendValue
        />
        <Slider
            key="patatos-2"
            min={5}
            max={100}
            id="asymetricRangeId-2"
            initialValue={30}
            crossingPoint={50}
            step={5}
            marks={{5: '5', 50: 'Recommended', 100: '100'}}
            hasTooltip
            appendValue
        />
    </Section>
);

const SliderAsymetric: React.FunctionComponent = () => {
    const [value, setValue] = React.useState(null);

    return (
        <Section key="one" level={2} title={`Slider with marks and steps. Its current value is ${value}`}>
            <Slider
                key="pwel"
                min={-100}
                max={100}
                id="rangeSliderId"
                marks={{
                    '-100': '-100%',
                    '-50': '-50%',
                    0: '0',
                    50: '50%',
                    100: '100%',
                }}
                step={5}
                initialValue={0}
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

const SliderWithPercent: React.FunctionComponent = () => {
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
        <Section key="one" level={2} title={`Slider showing the percent allocated to each side`}>
            <Slider
                key="gnagnagna"
                min={-50}
                max={50}
                marks={{'-50': '', 0: '', 50: ''}}
                id="percentSliderId"
                appendValueFormatter={appendValueFormatter}
                appendValue={AppendedValueSide.both}
            />
        </Section>
    );
};
