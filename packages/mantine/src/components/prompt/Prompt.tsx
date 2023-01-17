import {createStyles, Modal, ModalProps} from '@mantine/core';
import {Children, ReactElement, ReactNode} from 'react';
import {PromptFooter} from './PromptFooter.js';

const useStyles = createStyles((theme) => {
    const white = '#fff';
    return {
        body: {
            padding: 0,
        },
        modalType: {overflow: 'hidden', width: 550},
        innerBody: {
            padding: `${theme.spacing.md}px ${theme.spacing.xl}px ${theme.spacing.lg}px`,
        },
        header: {
            padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
            width: '100%',
            borderBottom: `1px solid ${theme.colors.gray[3]}`,
            fontSize: theme.headings.sizes.h4.fontSize,
            lineHeight: theme.headings.sizes.h4.fontSize,
        },
        default: {},
        success: {backgroundColor: theme.colors.lime[6], color: white},
        warning: {backgroundColor: theme.colors.yellow[5], color: white},
        critical: {
            backgroundColor: theme.colors.red[6],
            color: white,
        },
        info: {backgroundColor: theme.colors.navy[5], color: white},
        whiteClose: {color: white, '&:hover': {backgroundColor: 'transparent'}},
    };
});

export interface PromptProps extends ModalProps {
    variant: 'default' | 'success' | 'warning' | 'critical' | 'info';
    children: ReactNode;
}
interface PromptType {
    (props: PromptProps): ReactElement;
    Footer: typeof PromptFooter;
}

export const Prompt: PromptType = ({children, variant, size, ...otherProps}) => {
    const {classes, cx} = useStyles();
    const defaultVariant = variant === 'default';
    const convertedChildren = Children.toArray(children) as ReactElement[];

    const otherChildren = convertedChildren.filter((child) => child.type !== PromptFooter);
    const footer = convertedChildren.find((child) => child.type === PromptFooter);

    const classNames = {
        header: cx(classes.header, classes[variant]),
        close: !defaultVariant && classes.whiteClose,
        body: classes.body,
        modal: !defaultVariant && classes.modalType,
    };

    return (
        <Modal padding={0} classNames={classNames} size={defaultVariant ? size : 'sm'} {...otherProps}>
            <div className={classes.innerBody}>{otherChildren}</div>
            {footer}
        </Modal>
    );
};

Prompt.Footer = PromptFooter;
