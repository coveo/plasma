import {Stack, Title} from '@mantine/core';
import {FunctionComponent} from 'react';

const HTMLComponent: FunctionComponent<{htmlContent}> = ({htmlContent}) => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} />
);

export const BrandSection: FunctionComponent<{section}> = ({section}) => {
    const {title, content} = section;
    const htmlContent = content.innerHTML;
    console.log(section);

    return (
        <Stack gap="sm">
            <Title order={2}>{title}</Title>

            <HTMLComponent htmlContent={content} />
        </Stack>
    );
};
