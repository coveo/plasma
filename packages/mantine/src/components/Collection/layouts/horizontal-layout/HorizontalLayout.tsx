import {ReactNode} from 'react';
import {HorizontalLayoutBody} from './HorizontalLayoutBody.js';
import {HorizontalLayoutHeader} from './HorizontalLayoutHeader.js';

export interface HorizontalLayoutProps {
    children: ReactNode;
}

export const HorizontalLayout = ({children}: HorizontalLayoutProps) => <>{children}</>;

HorizontalLayout.Body = HorizontalLayoutBody;
HorizontalLayout.Header = HorizontalLayoutHeader;
HorizontalLayout.displayName = 'Horizontal';
