import {Slider} from '@coveord/plasma-react';
import {useState} from 'react';

export default () => {
    const initialValue = 0;
    const [value, setValue] = useState(initialValue);
    return (
        <>
            <Slider
                id="slider-on-change"
                min={-100}
                max={100}
                marks={{
                    '-100': '-100%',
                    '-50': '-50%',
                    0: '0',
                    50: '50%',
                    100: '100%',
                }}
                step={5}
                initialValue={initialValue}
                onChange={(currentValue) => {
                    setValue(currentValue);
                }}
                hasTooltip
                customTooltip={() => <span>this custom tooltip shows the slider current value of {value}</span>}
            />
            The current value is {value}
        </>
    );
};
