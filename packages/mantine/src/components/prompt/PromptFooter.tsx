import {FunctionComponent, PropsWithChildren} from 'react';
import {StickyFooter, StickyFooterProps} from '../sticky-footer';

export interface PromptFooterProps extends StickyFooterProps {}

export const PromptFooter: FunctionComponent<PropsWithChildren<PromptFooterProps>> = ({children, ...otherProps}) => (
    <StickyFooter borderTop {...otherProps}>
        {children}
    </StickyFooter>
);
