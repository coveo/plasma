import {DotsSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {FunctionComponent, MouseEvent as ReactMouseEvent, PropsWithChildren} from 'react';

import {DropPodPosition} from '../drop/DomPositionCalculator';
import {Drop, IDropOwnProps} from '../drop/Drop';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ListBox} from '../listBox/ListBox';

export interface IActionableItemProps {
    /**
     * The id of the component
     */
    id: string;
    /**
     * A function to call when clicking on the button
     *
     * @param evt the mouse event
     */
    onItemClick?: (evt?: ReactMouseEvent<HTMLDivElement>) => any;
    /**
     * The list of actions
     *
     * @default []
     */
    actions?: IItemBoxProps[];
    /**
     * Additional CSS class to add on the outermost container
     */
    className?: string;
    /**
     * Additional CSS class to add on the main item
     */
    containerClassName?: string;
    /**
     * Overrides for the Drop props
     */
    dropProps?: Partial<IDropOwnProps>;
}

/**
 * @deprecated Use Mantine Menu instead: https://mantine.dev/core/menu/
 */
export const ActionableItem: FunctionComponent<PropsWithChildren<IActionableItemProps>> = ({
    id,
    className,
    containerClassName,
    actions = [],
    onItemClick,
    dropProps,
    children,
}) => (
    <div
        className={classNames('actionable-item inline-flex mod-border mod-rounded-border-2 overflow-hidden', className)}
    >
        <div
            className={classNames({'cursor-pointer hover-effect': !!onItemClick}, 'px2 py1', containerClassName)}
            onClick={(e: ReactMouseEvent<HTMLDivElement>) => onItemClick?.(e)}
            role={onItemClick ? 'button' : null}
        >
            {children}
        </div>
        {actions && actions.length ? (
            <Drop
                id={id}
                positions={[DropPodPosition.bottom, DropPodPosition.top]}
                renderOpenButton={(onClick: () => void, isOpen) => (
                    <button
                        onClick={onClick}
                        className={classNames('mod-border-left p1 cursor-pointer hover-effect', {open: isOpen})}
                    >
                        <DotsSize16Px />
                    </button>
                )}
                {...(dropProps || {})}
            >
                <ListBox items={actions} noActive />
            </Drop>
        ) : null}
    </div>
);
