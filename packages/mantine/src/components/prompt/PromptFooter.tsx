import {FunctionComponent} from 'react';
import {StickyFooter, StickyFooterProps} from '../sticky-footer';

export interface ModalFooterProps extends StickyFooterProps {}

export const ModalFooter: FunctionComponent<ModalFooterProps> = ({children, ...otherProps}) => (
    <StickyFooter {...otherProps}>{children}</StickyFooter>
);
