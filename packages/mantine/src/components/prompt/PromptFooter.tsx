import {FunctionComponent} from 'react';
import {StickyFooter, StickyFooterProps} from '../sticky-footer';

export interface PromptFooterProps extends StickyFooterProps {}

export const PromptFooter: FunctionComponent<PromptFooterProps> = ({children, ...otherProps}) => (
    <StickyFooter {...otherProps}>{children}</StickyFooter>
);
