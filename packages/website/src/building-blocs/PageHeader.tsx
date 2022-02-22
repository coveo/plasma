import * as React from 'react';

import {GithubButton} from './GithubButton';
import {Tile, TileProps} from './Tile';

export interface PageHeaderProps {
    title: string;
    thumbnail?: TileProps['thumbnail'];
    description?: React.ReactNode;
    section: string;
    /**
     * Path to the component's source file from /packages/react/src/components
     *
     * @example '/button/Button.tsx'
     */
    componentSourcePath: string;
}

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
    title,
    description,
    thumbnail,
    section,
    componentSourcePath,
}) => (
    <div className="plasma-page-header">
        <h2 className="h5-subdued normal-white-space">{section}</h2>
        <h1 className="h1-light normal-white-space" data-coveo-field="title">
            {title}
        </h1>
        <h3 className="h4-book-subdued" data-coveo-field="description">
            {description}
        </h3>
        {componentSourcePath && (
            <GithubButton
                ariaLabel="View source code on GitHub"
                href={`https://github.com/coveo/plasma/blob/master/packages/react/src/components${componentSourcePath}`}
            >
                View source
            </GithubButton>
        )}
        <Tile thumbnail={thumbnail} />
    </div>
);
