import classNames from 'classnames';
import * as React from 'react';
import {slugify} from 'underscore.string';

import {SlideY} from '../../animations';
import {TooltipPlacement} from '../../utils';
import {Badge, IBadgeProps} from '../badge/Badge';
import {Svg, SvgNames} from '../svg';
import {ITooltipProps, Tooltip} from '../tooltip';

export interface IconCardChoice {
    value: string;
    label: string;
    icon?: SvgNames;
    disabled?: boolean;
}

export interface IconCardProps {
    title: string;
    svgName: SvgNames;
    badges?: IBadgeProps[];
    description?: string;
    onClick?: (choice?: string) => void;
    tooltip?: ITooltipProps;
    choices?: IconCardChoice[];
    small?: boolean;
    animateOnHover?: boolean;
}

export const IconCard: React.FunctionComponent<IconCardProps & Omit<React.HTMLProps<HTMLDivElement>, 'onClick'>> = ({
    title,
    badges = [],
    description,
    disabled = false,
    onClick,
    svgName,
    tooltip,
    choices,
    animateOnHover,
    className,
    small,
    children,
    ...restProps
}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const hasChoices = !!choices?.length;

    const handleCardClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (!disabled) {
            if (hasChoices) {
                setIsOpen(true);
            } else {
                onClick?.();
            }
        }
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen(false);
    };

    const badgeComponents = badges.map((badgeProps) => (
        <Badge {...badgeProps} key={slugify(JSON.stringify(badgeProps))} />
    ));

    return (
        <div
            onMouseLeave={handleMouseLeave}
            className={classNames(
                'icon-card',
                {
                    animateOnHover: (hasChoices || animateOnHover) && !disabled,
                    open: isOpen,
                    disabled,
                },
                className
            )}
            {...restProps}
        >
            <Tooltip {...tooltip} placement={tooltip?.placement || TooltipPlacement.Top} noSpanWrapper>
                <button
                    className={classNames('card flex full-content-x p3', {
                        'cursor-pointer': (!!onClick || hasChoices) && !disabled && !isOpen,
                        'mod-small': !!small,
                    })}
                    onClick={handleCardClick}
                    aria-expanded={isOpen}
                >
                    <Svg
                        svgName={svgName}
                        svgClass={classNames('logo overflow-hidden mod-rounded-border-4 icon mr3', {
                            'mod-72': !small,
                            'mod-40': !!small,
                        })}
                    />
                    <div className="flex flex-column flex-auto justify-center">
                        <h6 className="title">{title}</h6>
                        {description && <p className="description">{description}</p>}
                    </div>

                    {badgeComponents.length > 0 || React.Children.count(children) > 0 ? (
                        <div className="flex center-align">
                            {children}
                            {badgeComponents}
                        </div>
                    ) : null}
                </button>
            </Tooltip>
            {choices?.length ? (
                <SlideY in={isOpen}>
                    <ul
                        className={classNames('icon-card-drawer flex', {
                            'mod-small': !!small,
                        })}
                    >
                        {choices.map(({icon, label, value, disabled: choiceDisabled}: IconCardChoice) => (
                            <li key={value} className="icon-card-drawer-choice">
                                <button
                                    className={classNames('inline-flex center-align link', {disabled: choiceDisabled})}
                                    onClick={() => onClick?.(value)}
                                    disabled={choiceDisabled}
                                >
                                    {icon ? <Svg svgClass="icon mod-24 mod-stroke mr1" svgName={icon} /> : null}
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </SlideY>
            ) : null}
        </div>
    );
};
