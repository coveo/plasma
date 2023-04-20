import {LabeledValue, TooltipPlacement} from '@coveord/plasma-react';

const Demo = () => (
    <LabeledValue
        label="Super cool label"
        value="Value under the super cool label"
        information={'Some valuable informations go here.'}
        informationPlacement={TooltipPlacement.Bottom}
    />
);
export default Demo;
