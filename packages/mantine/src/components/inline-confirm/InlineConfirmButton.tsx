import {forwardRef, MouseEventHandler} from 'react';
import {Button, ButtonProps} from '../button';

import {useInlineConfirm} from './useInlineConfirm';

export interface InlineConfirmButtonProps extends ButtonProps {
    id: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const InlineConfirmButton = forwardRef<HTMLButtonElement, InlineConfirmButtonProps>(
    ({onClick, id, ...others}, ref) => {
        const {setConfirmingId} = useInlineConfirm();
        const handleOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
            setConfirmingId(id);
            onClick?.(e);
        };

        return <Button ref={ref} onClick={handleOnClick} {...others} />;
    },
);
