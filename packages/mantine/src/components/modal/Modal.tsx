import {createStyles, Modal as MantineModal, ModalProps as MantineModalProps} from '@mantine/core';
import {Children, FunctionComponent, ReactElement, ReactNode} from 'react';
import {ModalFooter, ModalFooterProps} from './ModalFooter';

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

export interface ModalType extends MantineModalProps {
    type?: 'success' | 'warning' | 'critical' | 'info';
    Footer?: FunctionComponent<ModalFooterProps>;
    children: ReactNode;
}

export const Modal = ({children, type, size, ...otherProps}: ModalType) => {
    const {classes, cx} = useStyles();
    const convertedChildren = Children.toArray(children) as ReactElement[];

    const otherChildren = convertedChildren.filter((child) => child.type !== ModalFooter);
    const footer = convertedChildren.find((child) => child.type === ModalFooter);

    const classNames = {
        header: cx(classes.header, type && classes[type]),
        close: type ? classes.whiteClose : '',
        body: classes.body,
        modal: type ? classes.modalType : '',
    };

    return (
        <MantineModal padding={0} classNames={classNames} size={type ? 'sm' : size} {...otherProps}>
            <div className={classes.innerBody}>{otherChildren}</div>
            {footer}
        </MantineModal>
    );
};

Modal.Footer = ModalFooter;
