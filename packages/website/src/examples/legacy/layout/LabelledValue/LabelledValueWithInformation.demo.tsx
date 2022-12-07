import {LabeledValue, TooltipPlacement} from '@coveord/plasma-react';

export default () => (
    <LabeledValue
        label="Super cool label"
        value="Value under the super cool label"
        information={'Some valuable informations go here.'}
        informationPlacement={TooltipPlacement.Bottom}
    />
);
