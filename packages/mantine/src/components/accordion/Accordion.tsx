import {Accordion, type AccordionControlProps, type MantineComponent} from '@mantine/core';
import classes from './Accordion.module.css';

export const DisabledControl = Accordion.Control.withProps({
    chevron: <></>,
    className: classes.disabled,
}) as MantineComponent<{
    props: Omit<AccordionControlProps, 'disabled' | 'chevron'>;
    ref: HTMLButtonElement;
    compound: true;
}>;

// Add the new static component to the Accordion component
declare module '@mantine/core' {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    namespace Accordion {
        let ControlDisabled: typeof DisabledControl;
    }
}

Accordion.ControlDisabled = DisabledControl;
export {Accordion};
