import {Carousel} from '@mantine/carousel';
import {Center} from '@mantine/core';

const Demo = () => (
    <Carousel height={300}>
        <Carousel.Slide>
            <Center bg="blue" c="white" h="100%" fz="h1">
                1
            </Center>
        </Carousel.Slide>
        <Carousel.Slide>
            <Center bg="red" c="white" h="100%" fz="h1">
                2
            </Center>
        </Carousel.Slide>
        <Carousel.Slide>
            <Center bg="green" c="white" h="100%" fz="h1">
                3
            </Center>
        </Carousel.Slide>
    </Carousel>
);

export default Demo;
