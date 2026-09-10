// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-765
// component=Stepper

import figma from 'figma';

export default {
    id: 'Stepper',
    imports: ["import { Stepper } from '@coveord/plasma-mantine';"],
    example: figma.code`function Example() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = useState(0);
    return (<Stepper active={active} onStepClick={setActive}>
                <Stepper.Step label="Label"/>
                <Stepper.Step label="Label"/>
                <Stepper.Step label="Label"/>
                <Stepper.Step label="Label"/>
                <Stepper.Step label="Label"/>
            </Stepper>);
}`,
};
