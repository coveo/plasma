import classNames from 'classnames';
import * as React from 'react';
import {slugify} from 'underscore.string';

import {SlideY} from '../../animations';
import {TooltipPlacement} from '../../utils';
import {Badge, IBadgeProps} from '../badge/Badge';
import {Svg} from '../svg/Svg';
import {ITooltipProps, Tooltip} from '../tooltip';

export interface IconCardChoice {
    value: string;
    label: string;
    icon?: string;
    disabled?: boolean;
}

export interface IconCardProps {
    title: string;
    svgName: string;
    badges?: IBadgeProps[];
    description?: string;
    onClick?: (choice?: string) => void;
    tooltip?: ITooltipProps;
    choices?: IconCardChoice[];
    choicesLayout?: 'horizontal' | 'vertical';
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
    className,
    choicesLayout = 'horizontal',
    ...restProps
}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const hasChoices = !!choices?.length;

    const handleCardClick: React.MouseEventHandler<HTMLDivElement> = () => {
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

    const badgeComponents = badges.map((badgeProps) => <Badge {...badgeProps} key={slugify(badgeProps.label)} />);

    return (
        <div
            onMouseLeave={handleMouseLeave}
            className={classNames(
                'icon-card',
                {
                    'mod-drawer': hasChoices && !disabled,
                    open: isOpen,
                },
                className
            )}
            {...restProps}
        >
            <Tooltip {...tooltip} placement={tooltip?.placement || TooltipPlacement.Top} noSpanWrapper>
                <div
                    className={classNames('card flex p2', {'cursor-pointer': (!!onClick || hasChoices) && !disabled})}
                    onClick={handleCardClick}
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                    aria-expanded={isOpen}
                >
                    <Svg svgName={svgName} className="icon mod-4x mr3" />
                    <div className="flex flex-column flex-auto justify-center">
                        <h2 className={classNames({mb1: !!description})}>{title}</h2>
                        {description}
                    </div>
                    {badgeComponents.length > 0 ? <div className="flex center-align">{...badgeComponents}</div> : null}
                </div>
            </Tooltip>
            {choices?.length ? (
                <SlideY in={isOpen}>
                    <ul
                        className={classNames('icon-card-drawer flex', {
                            'mod-vertical': choicesLayout === 'vertical',
                        })}
                    >
                        {choices.map(({icon, label, value, disabled: choiceDisabled}: IconCardChoice) => (
                            <li key={value} className="icon-card-drawer-choice">
                                {choiceDisabled ? (
                                    <span>
                                        {icon ? (
                                            <Svg svgClass="icon mod-16 mod-stroke no-link mr1" svgName={icon} />
                                        ) : null}
                                        {label}
                                    </span>
                                ) : (
                                    <a role="button" tabIndex={0} onClick={() => onClick?.(value)}>
                                        {icon ? (
                                            <Svg svgClass="icon mod-16 mod-stroke mod-link mr1" svgName={icon} />
                                        ) : null}
                                        {label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </SlideY>
            ) : null}
        </div>
    );
};
