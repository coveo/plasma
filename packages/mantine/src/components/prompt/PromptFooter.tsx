import {FunctionComponent, PropsWithChildren} from 'react';
import {StickyFooter, StickyFooterProps} from '../sticky-footer';

export interface PromptFooterProps extends StickyFooterProps {}

export const PromptFooter: FunctionComponent<PropsWithChildren<PromptFooterProps>> = ({children, ...otherProps}) => (
    <StickyFooter p={0} pt="lg" {...otherProps}>
        {children}
    </StickyFooter>
);
