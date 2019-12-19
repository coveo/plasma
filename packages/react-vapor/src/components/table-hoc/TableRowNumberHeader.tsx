import * as React from 'react';

export const TableRowNumberHeader = ({isLoading}: {isLoading?: boolean}) => {
    return isLoading ? (
        <th>
            <div className="text-content-placeholder mod-small" />
        </th>
    ) : (
        <th></th>
    );
};
