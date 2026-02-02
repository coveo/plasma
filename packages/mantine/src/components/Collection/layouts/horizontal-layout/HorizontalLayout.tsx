import {LayoutProps} from '../shared/layoutConstants.js';
import {HorizontalLayoutBody} from './HorizontalLayoutBody.js';
import {HorizontalLayoutHeader} from './HorizontalLayoutHeader.js';

export const HorizontalLayout = ({children}: LayoutProps) => <>{children}</>;

HorizontalLayout.Body = HorizontalLayoutBody;
HorizontalLayout.Header = HorizontalLayoutHeader;
HorizontalLayout.displayName = 'Horizontal';
