import {Stack, Text, Title} from '@mantine/core';
import {FunctionComponent} from 'react';
import {SectionRow} from '../sub-elements/SectionRow';

export const VerticalSection: FunctionComponent<{section}> = ({section}) => {
    const {title, description, rows} = section;
    console.log(section);

    return (
        <Stack gap="sm">
            <Title order={2}>{title}</Title>
            {description && <Text>{description}</Text>}
            <Stack>{rows?.map((row) => <SectionRow key={`vertical-section-row-${row?.id}`} row={row} />)}</Stack>
        </Stack>
    );
};
