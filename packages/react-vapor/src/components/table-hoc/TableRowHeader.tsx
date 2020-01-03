import * as React from 'react';
import {TextLoadingPlaceholder} from '../loading/components/TextLoadingPlaceholder';

export const TableRowHeader = ({isLoading, children}: {isLoading?: boolean; children?: React.ReactNode}) => {
    return isLoading ? (
        <th>
            <TextLoadingPlaceholder small />
        </th>
    ) : (
        <th>{children}</th>
    );
};
