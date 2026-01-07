import {Stepper} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import {useState} from 'react';

figma.connect(Stepper, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-765', {
    example: (_props) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [active, setActive] = useState(0);
        return (
            <Stepper active={active} onStepClick={setActive}>
                <Stepper.Step label="Label" />
                <Stepper.Step label="Label" />
                <Stepper.Step label="Label" />
                <Stepper.Step label="Label" />
                <Stepper.Step label="Label" />
            </Stepper>
        );
    },
});
