import {LabeledValue} from '@coveord/plasma-react';

const Demo = () => (
    <div className="flex flex-wrap">
        <LabeledValue label="Super cool label taking the full row" value="Value under the super cool label" fullRow />
        <LabeledValue label="Too much bubbly debat at the office" value="WE ARE TWO" />
        <LabeledValue label="Buddy" value="TO DANCE" />
    </div>
);
export default Demo;
