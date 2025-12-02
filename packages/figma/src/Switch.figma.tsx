import {Switch} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Switch, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51521', {
    props: {
        // These props were automatically mapped based on your linked code:
        disabled: figma.enum('State', {
            Disabled: true,
        }),
        labelPosition: figma.enum('Label Position', {
            Left: 'left',
            Right: 'right',
        }),
    },
    example: (props) => <Switch disabled={props.disabled} labelPosition={props.labelPosition} />,
});
