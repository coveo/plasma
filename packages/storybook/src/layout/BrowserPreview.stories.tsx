import {BrowserPreview, Flex, Pagination, Stack, Text, Title} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';

interface Product {
    name: string;
    department: string;
    price: string;
}

const numberOfItems = 40;
const pageSize = 5;

const meta: Meta<typeof BrowserPreview> = {
    title: '@components/layout/BrowserPreview',
    id: 'BrowserPreview',
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
        const data = makeData(numberOfItems).reduce<Product[][]>((all, one, i) => {
            const ch = Math.floor(i / pageSize);
            all[ch] = [...(all[ch] ?? []), one];
            return all;
        }, []);
        const numberOfPages = Math.ceil(numberOfItems / pageSize);
        const currentPageData = data[page - 1] ?? [];
        return (
            <BrowserPreview>
                <Stack flex={1}>
                    <Stack gap="xl" pb="sm">
                        {currentPageData.map((product) => (
                            <Stack key={`${product.name}-${product.department}-${product.price}`} gap={0}>
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
