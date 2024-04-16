import {Box, Modal, ModalProps} from '@mantine/core';
import {Children, ReactElement, ReactNode} from 'react';
import PromptClasses from './Prompt.module.css';
import {PromptFooter} from './PromptFooter';

export interface PromptProps extends ModalProps {
    /**
     * Controls prompt appearance
     *
     * @default "info"
     */
    variant?: 'success' | 'warning' | 'critical' | 'info';
    children: ReactNode;
}
interface PromptType {
    (props: PromptProps): ReactElement;
    Footer: typeof PromptFooter;
}

export const Prompt: PromptType = ({children, ...otherProps}) => {
    const {classNames: classesProps, ...otherPropsWithoutClasses} = otherProps;
    const convertedChildren = Children.toArray(children) as ReactElement[];

    const otherChildren = convertedChildren.filter((child) => child.type !== PromptFooter);
    const footer = convertedChildren.find((child) => child.type === PromptFooter);

    const classNames = {
        root: PromptClasses.root,
        header: PromptClasses.header,
        close: PromptClasses.whiteClose,
        body: PromptClasses.body,
        title: PromptClasses.title,
    };

    return (
        <Modal variant="prompt" classNames={{...classNames, ...classesProps}} size="sm" {...otherPropsWithoutClasses}>
            <Box className={PromptClasses.innerBody}>{otherChildren}</Box>
            {footer}
        </Modal>
    );
};

Prompt.Footer = PromptFooter;
