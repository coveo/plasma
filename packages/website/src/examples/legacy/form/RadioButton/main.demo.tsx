import {RadioSelectConnected, Radio, Label} from '@coveord/plasma-react';

const Demo = () => (
    <RadioSelectConnected
        id="radio-select-id"
        valueOnMount="1"
        disabledValuesOnMount={['3']}
        disabledTooltip="This option is disabled"
    >
        <Radio id="Option1" name="enabledOptions" value="1">
            <Label>Option 1</Label>
        </Radio>
        <Radio id="Option2" name="enabledOptions" value="2">
            <Label>Option 2</Label>
            <div className="mod-align-with-radio-label">An optional description.</div>
        </Radio>
        <Radio id="Option3" name="enabledOptions" value="3">
            <Label>Option 3</Label>
        </Radio>
    </RadioSelectConnected>
);
export default Demo;
