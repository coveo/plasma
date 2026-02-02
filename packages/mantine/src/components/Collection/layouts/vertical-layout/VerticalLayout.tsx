import {LayoutProps} from '../shared/layoutConstants.js';
import {VerticalLayoutBody} from './VerticalLayoutBody.js';
import {VerticalLayoutHeader} from './VerticalLayoutHeader.js';

export const VerticalLayout = ({children}: LayoutProps) => <>{children}</>;

VerticalLayout.Body = VerticalLayoutBody;
VerticalLayout.Header = VerticalLayoutHeader;
VerticalLayout.displayName = 'Vertical';
