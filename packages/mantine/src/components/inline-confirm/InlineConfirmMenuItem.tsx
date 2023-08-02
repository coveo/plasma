import {forwardRef, MouseEventHandler} from 'react';

import {Menu, MenuItemProps} from '../menu';
import {useInlineConfirm} from './useInlineConfirm';

export interface InlineConfirmMenuItemProps extends MenuItemProps {
    id: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const InlineConfirmMenuItem = forwardRef<HTMLButtonElement, InlineConfirmMenuItemProps>(
    ({onClick, id, ...others}, ref) => {
        const {setConfirmingId} = useInlineConfirm();
        const handleOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
            setConfirmingId(id);
            onClick?.(e);
        };

        return <Menu.Item ref={ref} onClick={handleOnClick} {...others} />;
    },
);
