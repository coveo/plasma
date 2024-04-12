import {createPolymorphicComponent} from '@mantine/core';
import {forwardRef, MouseEventHandler} from 'react';
import {Button, ButtonProps} from '../button';
import {useInlineConfirm} from './InlineConfirmContext';

export interface InlineConfirmTargetProps extends ButtonProps {
    id: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const InlineConfirmTarget = createPolymorphicComponent<typeof Button, InlineConfirmTargetProps>(
    forwardRef(
        (
            {onClick, id, component: Component = Button, ...others}: InlineConfirmTargetProps & {component?: any},
            ref,
        ) => {
            const {setConfirmingId} = useInlineConfirm();
            const handleOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
                setConfirmingId(id);
                onClick?.(e);
            };

            return <Component ref={ref} onClick={handleOnClick} {...others} />;
        },
    ),
);
