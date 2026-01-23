import {ReactNode} from 'react';
import {VerticalLayoutBody} from './VerticalLayoutBody.js';
import {VerticalLayoutHeader} from './VerticalLayoutHeader.js';

export interface VerticalLayoutProps {
    children: ReactNode;
}

export const VerticalLayout = ({children}: VerticalLayoutProps) => <>{children}</>;

VerticalLayout.Body = VerticalLayoutBody;
VerticalLayout.Header = VerticalLayoutHeader;
VerticalLayout.displayName = 'Vertical';
