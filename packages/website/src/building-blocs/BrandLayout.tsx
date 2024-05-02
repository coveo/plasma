import {AppShell, Box, Container, Divider, Header, Stack, Text, Title, useDisclosure} from '@coveord/plasma-mantine';
import {Button} from '@mantine/core';
import {ReactNode, useEffect, useState} from 'react';

import {removeToken, useAuthContext} from '../authentication';
import '../styles/logotype.css';
import {LoginModal} from './LoginModal';
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
    isPrivate: boolean;
}

export const BrandLayout = ({title, description, section, isPrivate, children}: BrandLayoutProps) => {
    const [isPrivateLayout, setIsPrivateLayout] = useState(false);
    const {user, setUser} = useAuthContext();
    const [opened, {open, close}] = useDisclosure(false);

    useEffect(() => {
        setIsPrivateLayout(isPrivate);
    }, [isPrivate]);

    const onLogout = () => {
        removeToken();
        setIsPrivateLayout(true);
        setUser(null);
    };

    return (
        <AppShell.Main>
            <Stack gap={0} align="stretch" style={{flexBasis: 'auto', flexGrow: 1}}>
                <Box bg="purple.8">
                    <Container size="xl" w="100%">
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
                            <Header.Actions>
                                <Button onClick={onLogout}>Logout</Button>
                            </Header.Actions>
                        </Header>
                    </Container>
                </Box>
                <Divider />
                {!isPrivateLayout || (isPrivateLayout && user) ? (
                    <Box bg="gray.0" style={{flexBasis: 'auto', flexGrow: 1}}>
                        <Container size="xl">{children}</Container>
                    </Box>
                ) : (
                    <>
                        <Box bg="gray.0" style={{flexBasis: 'auto', flexGrow: 1}}>
                            <Container size="xl" h="80vh">
                                <Stack p="xl">
                                    <Title order={2}>This page is private</Title>
                                    <Button w="20%" variant="default" onClick={open}>
                                        Login using SSO
                                    </Button>
                                </Stack>
                            </Container>
                        </Box>
                        <LoginModal opened={opened} close={close} />
                    </>
                )}
            </Stack>
        </AppShell.Main>
    );
};
