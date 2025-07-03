import {BrowserPreview, Flex, Pagination, Stack, Text} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import {useState} from 'react';

interface DemoProps extends DemoComponentProps {
    pageSize?: number;
    numberOfItems?: number;
}

export type Product = {
    name: string;
    department: string;
    price: string;
};

const makeData = (len: number): Product[] =>
    Array(len)
        .fill(0)
        .map(() => ({
            name: faker.commerce.productName(),
            department: faker.commerce.department(),
            price: faker.commerce.price(),
        }));

const Demo = ({pageSize = 5, numberOfItems = 40}: DemoProps) => {
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
                            <Text size="md" c="gray.7" fw={400}>
                                {product.name}
                            </Text>
                            <Text size="xs" c="gray.6" span>
                                <Text size="xs" fw={500} span>
                                    Dept:{' '}
                                </Text>
                                {product.department}
                            </Text>
                            <Text size="xs" c="gray.6" span>
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
};
export default Demo;
