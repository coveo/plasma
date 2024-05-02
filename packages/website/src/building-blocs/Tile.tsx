import {Card, Image, Text} from '@coveord/plasma-mantine';
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
        <Card.Section>
            <Image src={thumbnails[thumbnail]} h={190} data-coveo-field="thumbnail" data-thumbnail-name={thumbnail} />
        </Card.Section>
    );
    const tileInfo = (title || description) && (
        <Card.Section className="tile-information" bg="white">
            {title && (
                <Text fw={500} fz="md">
                    {title}
                </Text>
            )}
            {description && (
                <Text fz="sm" c="dimmed">
                    {description}
                </Text>
            )}
        </Card.Section>
    );
    const className = classNames('tile', {'mod-drawer': description});

    if (href && href.length > 0) {
        return (
            <Card
                miw={264}
                shadow="sm"
                withBorder
                component={Link}
                to={href}
                className={className}
                onClick={sendAnalytics}
            >
                {tileIcon}
                {tileInfo}
            </Card>
        );
    }

    return (
        <Card miw={264} shadow="sm" withBorder className={className}>
            {tileIcon}
            {tileInfo}
        </Card>
    );
};
