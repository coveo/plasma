import {BrowserPreview, Stack, Text, Title} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';

const Demo = () => {
    const content = faker.lorem.paragraphs(20);
    return (
        <BrowserPreview>
            <Stack gap="xs">
                <Title order={3}>Hello World !</Title>
                <Text>{content}</Text>
            </Stack>
        </BrowserPreview>
    );
};
export default Demo;
