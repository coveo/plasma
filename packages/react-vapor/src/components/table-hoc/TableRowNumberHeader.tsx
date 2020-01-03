import * as React from 'react';
import {TextLoadingPlaceholder} from '../loading/components/TextLoadingPlaceholder';

export const TableRowNumberHeader = ({isLoading}: {isLoading?: boolean}) => {
    return isLoading ? (
        <th>
            <TextLoadingPlaceholder small />
        </th>
    ) : (
        <th></th>
    );
};
