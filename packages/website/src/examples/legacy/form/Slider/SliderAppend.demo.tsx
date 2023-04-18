import {AppendedValueSide, Slider} from '@coveord/plasma-react';
import {FunctionComponent} from 'react';

const AppendLabel: FunctionComponent<{value: string; label: string}> = ({value, label}) => (
    <div style={{textAlign: 'center'}}>
        <label style={{display: 'block', marginBottom: '10px', textAlign: 'center'}}>{label}</label>
        <span style={{margin: '0 auto'}}>{value}</span>
    </div>
);

const Demo = () => {
    const appendValueFormatter = (value: number, side: string) => {
        let formattedValue = `${value + 50}%`;
        let valueLabel = 'Right Label';

        if (side === AppendedValueSide.left) {
            formattedValue = `${50 - value}%`;
            valueLabel = 'Left Label';
        }

        return <AppendLabel value={formattedValue} label={valueLabel} />;
    };

    return (
        <Slider
            id="slider-append"
            min={-50}
            max={50}
            appendValueFormatter={appendValueFormatter}
            appendValue={AppendedValueSide.both}
        />
    );
};
export default Demo;
