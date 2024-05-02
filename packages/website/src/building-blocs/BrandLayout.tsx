import {AppShell, Box, Center, Container, Divider, Header, Stack, Text, Title} from '@coveord/plasma-mantine';
import {ReactNode} from 'react';

import {PageHeaderProps} from './PageHeader';
import {PropsTableProps} from './PropsTable';
import {TileProps} from './Tile';

export interface BrandLayoutProps extends PageHeaderProps, PropsTableProps {
    id: string;
    examples?: Record<string, ReactNode>;
    demo?: ReactNode;
    relatedComponents?: TileProps[];
    /**
     * Whether to show the props section or not
     *
     * @default true
     */
    withPropsTable?: boolean;
    children?: ReactNode;
}

export const BrandLayout = ({title, description, section, children}: BrandLayoutProps) => (
    <AppShell.Main>
        <Stack gap={0} align="stretch" style={{flexBasis: 'auto', flexGrow: 1}}>
            <Container bg="purple.8" size="xl" w="100%">
                <Center>
                    <Header
                        description={
                            <Text c="white" data-coveo-field="description">
                                {description}
                            </Text>
                        }
                    >
                        <Header.Breadcrumbs>
                            <Text c="white">{section}</Text>
                        </Header.Breadcrumbs>
                        <Title order={1} c="white" data-coveo-field="title">
                            {title}
                        </Title>
                    </Header>
                </Center>
            </Container>
            <Divider />
            <Box bg="gray.0" style={{flexBasis: 'auto', flexGrow: 1}}>
                <Container size="xl">{children}</Container>
            </Box>
        </Stack>
    </AppShell.Main>
);
