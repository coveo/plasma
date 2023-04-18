import {Checkbox, Label} from '@coveord/plasma-react';
import {useState} from 'react';

const Demo = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Checkbox checked={checked} onClick={() => setChecked(!checked)}>
            <Label>Label</Label>
        </Checkbox>
    );
};
export default Demo;
