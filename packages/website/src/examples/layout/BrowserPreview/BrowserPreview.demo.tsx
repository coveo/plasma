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
            <Stack style={{flexGrow: 1}}>
                <Stack spacing="xl" pb="sm">
                    {data[page - 1].map((product) => (
                        <Stack spacing={0}>
                            <Text size="md" color="gray.7">
                                {product.name}
                            </Text>
                            <Text size="xs" color="gray.6" span>
                                <Text size="xs" weight={500} span>
                                    Dept:{' '}
                                </Text>
                                {product.department}
                            </Text>
                            <Text size="xs" color="gray.6" span>
                                <Text size="xs" weight={500} span>
                                    Price:{' '}
                                </Text>
                                {product.price}$
                            </Text>
                        </Stack>
                    ))}
                </Stack>
                <Flex align="flex-end" justify="center" style={{flexGrow: 1}}>
                    <Pagination value={page} total={numberOfPages} onChange={setPage} align="center" />
                </Flex>
            </Stack>
        </BrowserPreview>
    );
};
export default Demo;
