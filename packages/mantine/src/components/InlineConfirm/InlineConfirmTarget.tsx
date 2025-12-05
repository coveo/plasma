import {createPolymorphicComponent} from '@mantine/core';
import {forwardRef, MouseEventHandler} from 'react';
import {Button, type ButtonProps} from '../Button/Button.js';
import {InlineConfirmComponentsProps} from './InlineConfirm.js';
import {useInlineConfirm} from './InlineConfirmContext.js';

export interface InlineConfirmTargetProps extends ButtonProps, InlineConfirmComponentsProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const InlineConfirmTarget = createPolymorphicComponent<typeof Button, InlineConfirmTargetProps>(
    forwardRef(
        (
            {
                onClick,
                inlineConfirmId,
                component: Component = Button,
                ...others
            }: InlineConfirmTargetProps & {component?: any},
            ref,
        ) => {
            const {setConfirmingId} = useInlineConfirm();
            const handleOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
                setConfirmingId(inlineConfirmId);
                onClick?.(e);
            };

            return <Component ref={ref} onClick={handleOnClick} {...others} />;
        },
    ),
);
