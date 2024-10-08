import {Center, Code, Container, Stack, Text, Title} from '@coveord/plasma-mantine';
import {useRouteError} from 'react-router-dom';
import classes from './styles/UnexpectedError.module.css';

export const UnexpectedError = () => {
    const error = useRouteError() as Error;
    console.error(error);
    return (
        <Center>
            <Container size="xl">
                <Stack gap="xs">
                    <Title order={3}>{error.message || 'Unexpected error'}</Title>
                    <Text size="sm">
                        <div>💥 An error occurred while rendering the page 👇</div>
                    </Text>
                    <Code block className={classes.code}>
                        {error.stack}
                    </Code>
                    <Text size="sm">
                        <div>🕵️ Look at your browser's dev tools for more information.</div>
                    </Text>
                </Stack>
            </Container>
        </Center>
    );
};
