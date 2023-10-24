import classNames from 'clsx';
import {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import actionButtonPng from '../assets/thumbnails/ActionButton.png';
import codeEditorPng from '../assets/thumbnails/CodeEditor.png';
import filterBoxPng from '../assets/thumbnails/FilterBox.png';
import iconographyPng from '../assets/thumbnails/Iconography.png';
import linksPng from '../assets/thumbnails/Link.png';
import headerPng from '../assets/thumbnails/PageHeader.png';
import breadcrumbPng from '../assets/thumbnails/PageTitle.png';
import palettePng from '../assets/thumbnails/Palette.png';
import placeholderPng from '../assets/thumbnails/Placeholder.png';
import progressBarPng from '../assets/thumbnails/ProgressBar.png';
import sideNavPng from '../assets/thumbnails/SideNav.png';
import subnavigationSvg from '../assets/thumbnails/Subnavigation.svg';
import tabPng from '../assets/thumbnails/Tab.png';
import badgePng from '../assets/thumbnails/Tag.png';
import textInputPng from '../assets/thumbnails/TextInput.png';
import toastSvg from '../assets/thumbnails/Toast.svg';
import tooltipSvg from '../assets/thumbnails/Tooltip.svg';
import typekitPng from '../assets/thumbnails/Typekit.png';

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
            <Link to={href} className={className} onClick={sendAnalytics}>
                {tileIcon}
                {tileInfo}
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
