import * as React from 'react';

export const TableRowHeader = ({isLoading, children}: {isLoading?: boolean; children?: React.ReactNode}) => {
    return isLoading ? (
        <th>
            <div className="text-content-placeholder mod-small" />
        </th>
    ) : (
        <th>{children}</th>
    );
};
