import {SvgName} from '@coveord/plasma-style';
import classNames from 'classnames';
import {ReactNode, HTMLAttributes, FunctionComponent, MouseEventHandler, useState, Children} from 'react';
import {slugify} from 'underscore.string';

import {SlideY} from '../../animations';
import {Override, TooltipPlacement} from '../../utils';
import {Badge, IBadgeProps} from '../badge/Badge';
import {SvgChild, SvgChildProps, OptionalSvgChildProps} from '../svg/SvgChild';
import {ITooltipProps, Tooltip} from '../tooltip';

export interface IconCardChoice extends OptionalSvgChildProps {
    value: string;
    label: string;
    icon?: SvgName;
    disabled?: boolean;
}

export interface IconCardProps {
    /**
     * The main text displayed on the card
     */
    title: ReactNode;
    /**
     * The secondary text displayed on the card
     */
    description?: ReactNode;
    /**
     * Whether the card is smaller in size
     */
    small?: boolean;
    /**
     * The callback function that will be executed when the user clicks on the card or on one of the choices if choices are specified.
     */
    onClick?: (choice?: string) => void;
    /**
     * An array of badges to display on the card
     *
     * @default []
     */
    badges?: IBadgeProps[];
    /**
     * The tooltip to display when the user hovers over the card
     */
    tooltip?: ITooltipProps;
    /**
     * A list of possible choices that are displayed inside a drawer-like box
     */
    choices?: IconCardChoice[];
    /**
     * Whether the card has an animation on hover. The animation is automatically there if the card has choices.
     */
    animateOnHover?: boolean;
    /**
     * Whether the card is disabled. When disabled, the card appears greyed out and cannot be clicked on.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether to place the badges above the title.
     */
    placeBadgesAbove?: boolean;
    /**
     * Classes to apply to the card button element.
     */
    cardClassName?: string[];
}

/**
 * @deprecated Use Mantine Card instead: https://mantine.dev/core/card/
 */
export const IconCard: FunctionComponent<Override<SvgChildProps & HTMLAttributes<HTMLDivElement>, IconCardProps>> = ({
    title,
    badges = [],
    description,
    disabled = false,
    onClick,
    svgName,
    svgClass,
    svgChild,
    tooltip,
    choices,
    animateOnHover,
    placeBadgesAbove,
    cardClassName,
    className,
    small,
    children,
    ...restProps
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const hasChoices = !!choices?.length;

    const handleCardClick: MouseEventHandler<HTMLButtonElement> = () => {
        if (!disabled) {
            if (hasChoices) {
                setIsOpen(true);
            } else {
                onClick?.();
            }
        }
    };

    const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
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
                    className={classNames(
                        'card flex center-align p3 full-content-x',
                        {
                            'cursor-pointer': (!!onClick || hasChoices) && !disabled && !isOpen,
                            'mod-small': !!small,
                        },
                        cardClassName
                    )}
                    onClick={handleCardClick}
                    aria-expanded={isOpen}
                >
                    <SvgChild
                        svgChild={svgChild}
                        svgName={svgName}
                        svgClass={classNames(
                            'logo overflow-hidden mod-rounded-border-4 icon mr3',
                            {
                                'mod-72': !small,
                                'mod-40': !!small,
                            },
                            svgClass
                        )}
                    />
                    <div data-testid="main-content" className="flex flex-column flex-auto justify-center">
                        {placeBadgesAbove && !!badgeComponents.length ? (
                            <div className="flex mb1">{badgeComponents}</div>
                        ) : null}
                        <h5 className="title">{title}</h5>
                        {description && <p className="description">{description}</p>}
                    </div>
                    {(!placeBadgesAbove && !!badgeComponents.length) || Children.count(children) > 0 ? (
                        <div className="flex center-align">
                            {children}
                            {!placeBadgesAbove && badgeComponents}
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
                        {choices.map(
                            ({
                                icon,
                                svgChild: choiceSvgChild,
                                label,
                                value,
                                disabled: choiceDisabled,
                            }: IconCardChoice) => (
                                <li key={value} className="icon-card-drawer-choice">
                                    <button
                                        className={classNames('inline-flex center-align link', {
                                            disabled: choiceDisabled,
                                        })}
                                        onClick={() => onClick?.(value)}
                                        disabled={choiceDisabled}
                                    >
                                        <SvgChild
                                            svgChild={choiceSvgChild}
                                            svgName={icon}
                                            svgClass={'icon mod-24 mod-stroke mr1'}
                                        />
                                        {label}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </SlideY>
            ) : null}
        </div>
    );
};
