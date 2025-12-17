import {Slider} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Slider, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51247', {
    props: {
        disabled: figma.enum('State', {
            Disabled: true,
        }),
        labelAlwaysOn: figma.enum('State', {
            LabelAlwaysOn: true,
        }),
        withMarks: figma.boolean<Array<{value: number; label: string}>, never>('With Marks', {
            true: [
                {value: 25, label: '25%'},
                {value: 50, label: '50%'},
                {value: 75, label: '75%'},
            ],
        }),
    },
    example: (props) => (
        <Slider labelAlwaysOn={props.labelAlwaysOn} disabled={props.disabled} marks={props.withMarks} />
    ),
});
