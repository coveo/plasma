import {FunctionComponent, PropsWithChildren} from 'react';
import {StickyFooter, StickyFooterProps} from '../sticky-footer/index.js';

export interface PromptFooterProps extends StickyFooterProps {}

export const PromptFooter: FunctionComponent<PropsWithChildren<PromptFooterProps>> = ({children, ...otherProps}) => (
    <StickyFooter {...otherProps}>{children}</StickyFooter>
);
