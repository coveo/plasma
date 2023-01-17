import {Icon, QuestionSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {Children, FunctionComponent, PropsWithChildren} from 'react';

import {ITooltipProps, Tooltip} from '../tooltip/Tooltip.js';

export interface ILinkSvgProps {
    icon?: Icon;
    url?: string;
    target?: string;
    className?: string;
    tooltip?: ITooltipProps;
}

export const LinkSvg: FunctionComponent<PropsWithChildren<ILinkSvgProps>> = ({
    target = '_blank',
    icon: IconComponent = QuestionSize16Px,
    className,
    url,
    tooltip,
    children,
}) => (
    <Tooltip {...tooltip} noSpanWrapper>
        <a href={url} target={target} className={classNames('link inline-flex flex-center', className)}>
            {children}
            <IconComponent className={classNames({ml1: Children.count(children) > 0})} />
        </a>
    </Tooltip>
);
