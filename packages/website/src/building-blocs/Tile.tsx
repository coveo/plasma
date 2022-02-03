import '@styles/tile.scss';

import classNames from 'classnames';
import * as React from 'react';

import actionButtonPng from '../../resources/thumbnail_ActionButton.png';
import codeEditorPng from '../../resources/thumbnail_CodeEditor.png';
import filterBoxPng from '../../resources/thumbnail_FilterBox.png';
import iconographyPng from '../../resources/thumbnail_Iconography.png';
import linksPng from '../../resources/thumbnail_Link.png';
import headerPng from '../../resources/thumbnail_PageHeader.png';
import breadcrumbPng from '../../resources/thumbnail_PageTitle.png';
import placeholderPng from '../../resources/thumbnail_Placeholder.png';
import progressBarPng from '../../resources/thumbnail_ProgressBar.png';
import sideNavPng from '../../resources/thumbnail_SideNav.png';
import tabPng from '../../resources/thumbnail_Tab.png';
import badgePng from '../../resources/thumbnail_Tag.png';
import textInputPng from '../../resources/thumbnail_TextInput.png';
import typekitPng from '../../resources/thumbnail_Typekit.png';

const thumbnails = {
    placeholder: placeholderPng,
    typekit: typekitPng,
    textInput: textInputPng,
    badge: badgePng,
    tab: tabPng,
    sideNav: sideNavPng,
    progressBar: progressBarPng,
    links: linksPng,
    header: headerPng,
    iconography: iconographyPng,
    filterBox: filterBoxPng,
    codeEditor: codeEditorPng,
    breadcrumb: breadcrumbPng,
    actionButton: actionButtonPng,
};
export interface TileProps {
    title?: string;
    description?: string;
    href?: string;
    thumbnail?: keyof typeof thumbnails;
}

export const Tile: React.FunctionComponent<TileProps> = ({title, description, href, thumbnail = 'placeholder'}) => {
    const tileIcon = (
        <img
            src={thumbnails[thumbnail]}
            className="full-content-x"
            data-coveo-field="thumbnail"
            data-thumbnail-name={thumbnail}
        />
    );
    const tileInfo = (title || description) && (
        <div className="tile-information">
            {title && <div className="tile-title h6-subdued">{title}</div>}
            {description && <div className="tile-description body-m-book-subdued">{description}</div>}
        </div>
    );
    const className = classNames('tile card', {'mod-drawer': description});

    if (href && href.length > 0) {
        return (
            <a className={className} href={href}>
                {tileIcon}
                {tileInfo}
            </a>
        );
    }

    return (
        <div className={className}>
            {tileIcon}
            {tileInfo}
        </div>
    );
};
