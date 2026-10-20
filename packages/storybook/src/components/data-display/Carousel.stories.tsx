import {Carousel, Flex, type CarouselProps} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

type CarouselStoryArgs = Pick<
    CarouselProps,
    'slideSize' | 'slideGap' | 'withControls' | 'withIndicators' | 'height'
> & {
    loop: boolean;
};

const slides = [{value: 'Slide 1'}, {value: 'Slide 2'}, {value: 'Slide 3'}, {value: 'Slide 4'}, {value: 'Slide 5'}];

const meta: Meta<CarouselStoryArgs> = {
    title: '@components/Data display/Carousel',
    id: 'Carousel',
    component: Carousel,
    parameters: {
        layout: 'padded',
        controls: {
            include: ['slideSize', 'slideGap', 'withControls', 'withIndicators', 'loop'],
        },
    },
    args: {
        withControls: true,
        withIndicators: true,
        loop: false,
        height: '200px',
    },
    argTypes: {
        slideSize: {
            control: 'select',
            options: ['100%', '50%', '33.333333%'],
            description: 'Sets the width of each slide relative to the carousel viewport.',
            table: {
                type: {summary: 'StyleProp<string | number>'},
                defaultValue: {summary: "'100%'"},
            },
        },
        slideGap: {
            control: 'select',
            options: [0, 'xs', 'sm', 'md', 'lg'],
            description: 'Sets the space between slides, as a theme spacing key or a number.',
            table: {
                type: {summary: 'StyleProp<MantineSpacing>'},
                defaultValue: {summary: '0'},
            },
        },
        withControls: {
            control: 'boolean',
            description: 'Shows the previous and next buttons.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'true'},
            },
        },
        withIndicators: {
            control: 'boolean',
            description: 'Shows an indicator for each slide position that users can select to jump to it.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        loop: {
            control: 'boolean',
            description:
                'Lets navigation wrap from the last slide back to the first. This example passes it to `emblaOptions.loop`.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({loop, ...props}) => (
        <Carousel {...props} emblaOptions={{loop}} w={500}>
            {slides.map(({value}) => (
                <Carousel.Slide key={value}>
                    {
                        <Flex justify="center" align="center" h="100%">
                            {value}
                        </Flex>
                    }
                </Carousel.Slide>
            ))}
        </Carousel>
    ),
};
