import {Box, Header, Stack, Text} from '@coveord/plasma-mantine';
import {FunctionComponent, ReactNode} from 'react';

import {GithubButton} from './GithubButton';
import {Tile, TileProps} from './Tile';

export interface PageHeaderProps {
    title: string;
    thumbnail?: TileProps['thumbnail'];
    description?: ReactNode;
    section: 'Foundations' | 'Layout' | 'Form' | 'Navigation' | 'Feedback' | 'Advanced' | 'Mantine' | 'Feedbacl';
    /**
     * Path to a relevant source file in the repo
     *
     * @example 'packages/style/scss/typekit.scss'
     */
    sourcePath?: string;
}

export const PageHeader: FunctionComponent<PageHeaderProps> = ({
    title,
    description,
    thumbnail,
    section,
    sourcePath,
}) => (
    <Header description={<span data-coveo-field="description">{description}</span>}>
        <Header.Breadcrumbs>
            <Text c="gray.6">{section}</Text>
        </Header.Breadcrumbs>
        <span data-coveo-field="title">{title}</span>
        <Header.Actions>
            <Stack gap="sm" align="flex-end">
                {sourcePath && (
                    <GithubButton
                        ariaLabel="View source code on GitHub"
                        href={`https://github.com/coveo/plasma/blob/master${sourcePath}`}
                    >
                        View source
                    </GithubButton>
                )}
                <Box style={{maxWidth: 264}}>
                    <Tile thumbnail={thumbnail} />
                </Box>
            </Stack>
        </Header.Actions>
    </Header>
);
