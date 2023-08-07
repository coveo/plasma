import {Container, Stack, TextInput} from '@coveord/plasma-mantine';
import {Section} from '@coveord/plasma-react';

export const Form = () => {
    const somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));

    return (
        <Section className="section">
            <h2>Form</h2>
            <Container>
                <Stack spacing="sm" width="50wh">
                    <TextInput label="TextInput" />
                </Stack>
            </Container>
        </Section>
    );
};
