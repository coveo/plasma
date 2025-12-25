import {Anchor, Breadcrumbs, Flex} from '@coveord/plasma-mantine';
import {IconChevronLeft} from '@coveord/plasma-react-icons';
import {figma} from '@figma/code-connect';

figma.connect(
    Breadcrumbs,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49714',
    {
        props: {
            level: figma.enum('Levels', {
                Single: 1,
                '2': 2,
                '3': 3,
                '4': 4,
                '5': 5,
            }),
            crumb: figma.nestedProps('Breadcrumbs.Breadcrumb', {
                label: figma.string('Tabs'),
            }),
            link: figma.nestedProps('Anchor', {
                label: figma.string('Label'),
            }),
        },
        variant: {Levels: '2'},
        example: (props) => (
            <Breadcrumbs>
                <Anchor href="#" inherit>
                    <Flex align="center">
                        <IconChevronLeft aria-label="arrow pointing back" size={16} />
                        {props.link.label}
                    </Flex>
                </Anchor>

                <span>{props.crumb.label}</span>
            </Breadcrumbs>
        ),
    },
);

figma.connect(
    Breadcrumbs,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49714',
    {
        props: {
            level: figma.enum('Levels', {
                Single: 1,
                '2': 2,
                '3': 3,
                '4': 4,
                '5': 5,
            }),
            crumb: figma.nestedProps('Breadcrumbs.Breadcrumb', {
                label: figma.string('Tabs'),
            }),
        },
        example: () => (
            <Breadcrumbs>
                <Anchor href="#" inherit>
                    Level 3
                </Anchor>
                <Anchor href="#" inherit>
                    Level 2
                </Anchor>
                <Anchor href="#" inherit>
                    Level 1
                </Anchor>
                <span>Current</span>
            </Breadcrumbs>
        ),
    },
);
