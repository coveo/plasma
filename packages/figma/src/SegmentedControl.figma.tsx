import {SegmentedControl} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    SegmentedControl,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51156',
    {
        example: () => (
            <SegmentedControl
                data={[
                    {value: 'one', label: 'First'},
                    {value: 'two', label: 'Second', disabled: true},
                    {value: 'three', label: 'Label'},
                ]}
            />
        ),
    },
);
