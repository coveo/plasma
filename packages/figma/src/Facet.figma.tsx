import {Facet} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Facet, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51197', {
    props: {
        title: figma.string('Title'),
    },
    example: (props) => (
        <Facet
            title={props.title}
            data={[
                {value: 'option1', label: 'Option 1'},
                {value: 'option2', label: 'Option 2'},
            ]}
        />
    ),
});
