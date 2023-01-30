import {HTMLAttributes, MouseEventHandler} from 'react';

import {Button, ButtonProps} from '../button';
import {useInlineConfirm} from './useInlineConfirm';

interface InlineConfirmButtonProps extends ButtonProps, Omit<HTMLAttributes<HTMLButtonElement>, 'color'> {
    id: string;
}

export const InlineConfirmButton = (props: InlineConfirmButtonProps) => {
    const {setConfirmingId} = useInlineConfirm();
    const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        setConfirmingId(props.id);
        props.onClick?.(e);
    };

    return <Button {...props} onClick={onClick} />;
};
