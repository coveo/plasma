import classNames from 'classnames';
import {HTMLAttributes, SFC} from 'react';

import {Svg} from '../svg/Svg';

export interface CollapsibleToggleProps {
    expanded: boolean;
    className?: string;
    svgClassName?: string;
}

/**
 * @deprecated Use Mantine Accordion instead
 */
export const CollapsibleToggle: SFC<CollapsibleToggleProps & HTMLAttributes<HTMLSpanElement>> = ({
    expanded,
    className,
    svgClassName,
    ...rest
}) => (
    <Svg
        svgName={expanded ? 'arrowTopRounded' : 'arrowBottomRounded'}
        svgClass={classNames('icon', svgClassName)}
        className={className}
        {...rest}
    />
);
