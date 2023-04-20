import {Slider} from '@coveord/plasma-react';

const Demo = () => (
    <Slider
        id="asymetric-slider"
        min={-2000}
        max={10000}
        initialValue={2000}
        marks={{'-2000': '-2000', 2000: '2000', 0: '0', 10000: '10,000'}}
        hasTooltip
        appendValue
    />
);
export default Demo;
