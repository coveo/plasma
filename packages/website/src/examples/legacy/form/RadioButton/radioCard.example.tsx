import {RadioSelectConnected, RadioCard, Label} from '@coveord/plasma-react';

export default () => (
    <RadioSelectConnected
        id="radio-card-select-example"
        valueOnMount="1"
        className="flex flex-wrap"
        disabledValuesOnMount={['2']}
        disabledTooltip="This option is disabled"
    >
        <RadioCard id="Option1" name="card-option" value="1">
            <img className="mb2" src="https://via.placeholder.com/150x100" />
            <Label>Option 1</Label>
            <div>Description for the first option.</div>
        </RadioCard>
        <RadioCard id="Option2" name="card-option" value="2">
            <img className="mb2" src="https://via.placeholder.com/150x100" />
            <Label>Option 2</Label>
            <div>Description for the second option.</div>
        </RadioCard>
        <RadioCard id="Option3" name="card-option" value="3">
            <img className="mb2" src="https://via.placeholder.com/150x100" />
            <Label>Option 3</Label>
            <div>Description for the third option.</div>
        </RadioCard>
    </RadioSelectConnected>
);
