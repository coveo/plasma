import {BrowserPreview, Stack, Text, Title} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';

const Demo = () => {
    const title = faker.lorem.sentence(20);
    const content = faker.lorem.paragraph(10);
    return (
        <BrowserPreview title={title} headerTooltip="This is a custom tooltip message.">
            <Stack gap="xs">
                <Title order={3}>Hello World !</Title>
                <Text>{content}</Text>
            </Stack>
        </BrowserPreview>
    );
};
export default Demo;
