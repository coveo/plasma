import type {StoryObj, Meta} from '@storybook/react-vite';
import {BrowserPreview} from '@coveord/plasma-mantine/components/BrowserPreview';
import {faker} from '@faker-js/faker';
import {useState} from 'react';
import {Flex, Pagination, Stack, Text, Title} from '@coveord/plasma-mantine';

const meta: Meta<typeof BrowserPreview> = {
    title: '@components/layout/BrowserPreview',
    component: BrowserPreview,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BrowserPreview>;

export const Default: Story = {
    render: () => {
        const makeData = (len: number): Product[] =>
            Array(len)
                .fill(0)
                .map(() => ({
                    name: faker.commerce.productName(),
                    department: faker.commerce.department(),
                    price: faker.commerce.price(),
                }));
        const [page, setPage] = useState(1);
        const data: Product[][] = makeData(40).reduce((all, one, i) => {
            const ch = Math.floor(i / pageSize);
            all[ch] = [].concat(all[ch] || [], one);
            return all;
        }, []);
        const numberOfPages = Math.ceil(numberOfItems / pageSize);
        return (
            <BrowserPreview>
                <Stack flex={1}>
                    <Stack gap="xl" pb="sm">
                        {data[page - 1].map((product) => (
                            <Stack gap={0}>
                                <Text size="md" fw={400}>
                                    {product.name}
                                </Text>
                                <Text size="xs" c="dimmed" span>
                                    <Text size="xs" fw={500} span>
                                        Dept:{' '}
                                    </Text>
                                    {product.department}
                                </Text>
                                <Text size="xs" c="dimmed" span>
                                    <Text size="xs" fw={500} span>
                                        Price:{' '}
                                    </Text>
                                    {product.price}$
                                </Text>
                            </Stack>
                        ))}
                    </Stack>
                    <Flex align="flex-end" justify="center" flex={1}>
                        <Pagination value={page} total={numberOfPages} onChange={setPage} />
                    </Flex>
                </Stack>
            </BrowserPreview>
        );
    },
};

export const BrowserPreviewOverflow: Story = {
    render: () => {
        const content = faker.lorem.paragraphs(20);
        return (
            <BrowserPreview>
                <Stack gap="xs">
                    <Title order={3}>Hello World !</Title>
                    <Text>{content}</Text>
                </Stack>
            </BrowserPreview>
        );
    },
};

export const BrowserPreviewWithTitleAndDescription: Story = {
    render: () => {
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
    },
};
