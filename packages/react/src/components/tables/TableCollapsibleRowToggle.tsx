import {FunctionComponent} from 'react';

import {CollapsibleToggle} from '../collapsible';

export interface ITableCollapsibleRowToggleProps {
    isExpanded: boolean;
}

export const TableCollapsibleRowToggle: FunctionComponent<React.PropsWithChildren<ITableCollapsibleRowToggleProps>> = ({
    isExpanded,
}) => (
    <td>
        <CollapsibleToggle expanded={isExpanded} />
    </td>
);
