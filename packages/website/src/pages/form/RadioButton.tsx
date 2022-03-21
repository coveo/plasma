import * as React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {RadioSelectConnected, Radio, Label} from '@coveord/plasma-react';

    export default () => (
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
`;

const radioCard = `
    import * as React from 'react';
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
`;

export default () => (
    <PageLayout
        id="RadioSelectConnected"
        title="Radio Buttons"
        section="Form"
        description="A radio button allows users to select exactly one option from a list of mutually exclusive options."
        componentSourcePath="/radio/RadioSelectConnected.tsx"
        code={code}
        examples={{
            radioCard: {code: radioCard, title: 'Radio cards'},
        }}
    />
);
