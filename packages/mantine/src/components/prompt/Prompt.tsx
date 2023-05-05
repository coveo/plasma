import {color} from '@coveord/plasma-tokens';
import {createStyles, Modal, ModalProps} from '@mantine/core';
import {Children, ReactElement, ReactNode} from 'react';
import {PromptFooter} from './PromptFooter';

const useStyles = createStyles((theme) => ({
    body: {
        padding: 0,
    },
    modalType: {overflow: 'hidden', width: 550},
    innerBody: {
        padding: `${theme.spacing.md} ${theme.spacing.xl} ${theme.spacing.lg}`,
    },
    header: {
        padding: `${theme.spacing.md} ${theme.spacing.xl}`,
        width: '100%',
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
        fontSize: theme.headings.sizes.h3.fontSize,
        lineHeight: theme.headings.sizes.h3.lineHeight,
    },
    default: {},
    success: {backgroundColor: theme.colors.lime[6], color: color.primary.pureWhite},
    warning: {backgroundColor: theme.colors.yellow[5], color: color.primary.pureWhite},
    critical: {
        backgroundColor: theme.colors.red[6],
        color: color.primary.pureWhite,
    },
    info: {backgroundColor: theme.colors.navy[5], color: color.primary.pureWhite},
    whiteClose: {color: color.primary.pureWhite, '&:hover': {backgroundColor: 'transparent'}},
    title: {
        color: color.primary.pureWhite,
    },
}));

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
        title: classes.title,
    };

    return (
        <Modal variant="prompt" padding={0} classNames={classNames} size={defaultVariant ? size : 'sm'} {...otherProps}>
            <div className={classes.innerBody}>{otherChildren}</div>
            {footer}
        </Modal>
    );
};

Prompt.Footer = PromptFooter;
