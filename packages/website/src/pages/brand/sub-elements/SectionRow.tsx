import {Grid, Image} from '@mantine/core';
import {BlocksRenderer} from '@strapi/blocks-react-renderer';
import {FunctionComponent} from 'react';

export const SectionRow: FunctionComponent<{row}> = ({row}) => {
    const {text, asset} = row;
    const smallAsset = asset?.data?.attributes?.formats?.small;

    return (
        <Grid>
            <Grid.Col span={6}>
                <Image src={smallAsset?.url} height={smallAsset?.height} width={smallAsset?.width} />
            </Grid.Col>
            <Grid.Col span={6}>
                <BlocksRenderer content={text} />
            </Grid.Col>
        </Grid>
    );
};
