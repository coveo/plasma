import {Center, Code, Container, Stack, Text, Title} from '@coveord/plasma-mantine';
import {useRouteError} from 'react-router-dom';

export const UnexpectedError = () => {
    const error = useRouteError() as Error;
    console.error(error);
    return (
        <Center>
            <Container size="xl">
                <Stack spacing="xs">
                    <Title order={3}>{error.message || 'Unexpected error'}</Title>
                    <Text size="sm">
                        <div>💥 An error occurred while rendering the page 👇</div>
                    </Text>
                    <Code block sx={{overflowWrap: 'break-word', whiteSpace: 'pre-wrap'}}>
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
