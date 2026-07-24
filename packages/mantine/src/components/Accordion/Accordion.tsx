import {Accordion as MantineAccordion, type AccordionControlProps, type MantineComponent} from '@mantine/core';
import classes from './Accordion.module.css';

export const DisabledControl = MantineAccordion.Control.withProps({
    chevron: <></>,
    className: classes.disabled,
}) as MantineComponent<{
    props: Omit<AccordionControlProps, 'disabled' | 'chevron'>;
    ref: HTMLButtonElement;
    compound: true;
}>;

const AccordionWithDisabled = MantineAccordion as typeof MantineAccordion & {
    ControlDisabled: typeof DisabledControl;
};

AccordionWithDisabled.ControlDisabled = DisabledControl;
AccordionWithDisabled.displayName = 'Accordion';
AccordionWithDisabled.Control.displayName = 'Accordion.Control';
AccordionWithDisabled.Panel.displayName = 'Accordion.Panel';
AccordionWithDisabled.Item.displayName = 'Accordion.Item';
AccordionWithDisabled.ControlDisabled.displayName = 'Accordion.ControlDisabled';
export {AccordionWithDisabled as Accordion};
