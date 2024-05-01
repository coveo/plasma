import {Grid, Image, Stack, Text, Title} from '@mantine/core';
import {FunctionComponent} from 'react';

export const HorizontalSection: FunctionComponent<{section}> = ({section}) => {
    const {title, description, assets} = section;

    return (
        <Stack gap="xs">
            <Title order={2}>{title}</Title>
            <Text>{description}</Text>
            <Grid>
                {assets?.data?.map((asset) => {
                    const attributes = asset?.attributes;
                    const smallFormat = attributes?.formats?.small;
                    return (
                        <Grid.Col span={6} key={`horizontal-section-asset-${asset?.id}`}>
                            <Image
                                flex="none"
                                key={attributes?.id}
                                src={smallFormat?.url}
                                height={smallFormat?.height}
                                width={smallFormat?.width}
                            />
                        </Grid.Col>
                    );
                })}
            </Grid>
        </Stack>
    );
};
