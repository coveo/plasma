import classNames from 'clsx';
import Link from 'next/link';
import {FunctionComponent} from 'react';

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
import toastSvg from '../../resources/thumbnail_Toast.svg';
import tooltipSvg from '../../resources/thumbnail_Tooltip.svg';
import subnavigationSvg from '../../resources/thumbnail_Subnavigation.svg';
import palettePng from '../../resources/thumbnail_Palette.png';

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
    toast: toastSvg,
    tooltip: tooltipSvg,
    subNavigation: subnavigationSvg,
    colors: palettePng,
};
export interface TileProps {
    title?: string;
    description?: string;
    href?: string;
    thumbnail?: keyof typeof thumbnails;
    sendAnalytics?: () => void;
}

export const Tile: FunctionComponent<TileProps> = ({
    title,
    description,
    href,
    thumbnail = 'placeholder',
    sendAnalytics,
}) => {
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
            {title && <div className="tile-title h6-subdued sentence-case">{title}</div>}
            {description && <div className="tile-description body-m-book-subdued">{description}</div>}
        </div>
    );
    const className = classNames('tile card', {'mod-drawer': description});

    if (href && href.length > 0) {
        return (
            <Link href={href} prefetch={false}>
                <a href={href} className={className} onClick={sendAnalytics}>
                    {tileIcon}
                    {tileInfo}
                </a>
            </Link>
        );
    }

    return (
        <div className={className}>
            {tileIcon}
            {tileInfo}
        </div>
    );
};
