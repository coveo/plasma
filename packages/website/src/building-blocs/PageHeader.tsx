import {ReactNode, FunctionComponent} from 'react';

import {TileProps} from './Tile';

export interface PageHeaderProps {
    title: string;
    thumbnail?: TileProps['thumbnail'];
    description?: ReactNode;
    section: 'Foundations' | 'Layout' | 'Form' | 'Navigation' | 'Feedback' | 'Advanced';
    /**
     * Path to the component's source file from /packages/react/src/components
     *
     * @example '/button/Button.tsx'
     */
    componentSourcePath?: string;
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
    componentSourcePath,
    sourcePath,
}) => {
    const githubPath = componentSourcePath ? `packages/react/src/components${componentSourcePath}` : sourcePath;
    return (
        <div className="plasma-page-header">
            <h2 className="h5-subdued normal-white-space">{section}</h2>
            <h1 className="h1-light normal-white-space" data-coveo-field="title">
                {title}
            </h1>
            <h3 className="h4-book-subdued" data-coveo-field="description">
                {description}
            </h3>
            {githubPath && (
                <GithubButton
                    ariaLabel="View source code on GitHub"
                    href={`https://github.com/coveo/plasma/blob/master/${githubPath}`}
                >
                    View source
                </GithubButton>
            )}
            <Tile thumbnail={thumbnail} />
        </div>
    );
};
