import {Slider} from '@coveord/plasma-react';

const Demo = () => (
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
);
export default Demo;
