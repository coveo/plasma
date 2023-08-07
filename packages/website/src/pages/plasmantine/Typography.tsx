import {Section} from '@coveord/plasma-react';
import {Title} from '@mantine/core';

export const Typography = () => (
    <Section className="section">
        <h2>Typography</h2>
        <ul>
            <li>
                <Title order={1}>This is h1 title</Title>
                <Title order={2}>This is h2 title</Title>
                <Title order={3}>This is h3 title</Title>
                <Title order={4}>This is h4 title</Title>
                <Title order={5}>This is h5 title</Title>
                <Title order={6}>This is h6 title</Title>
            </li>
            <li></li>
            <li></li>
        </ul>
    </Section>
);
