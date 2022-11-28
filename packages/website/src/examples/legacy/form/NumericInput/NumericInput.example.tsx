import {NumericInputConnected} from '@coveord/plasma-react';

export default () => (
    <NumericInputConnected
        id="numeric-1"
        initialValue={500}
        step={50}
        min={25}
        max={950}
        maxLength={3}
        invalidMessage="The value must be between 25 and 950."
    />
);
