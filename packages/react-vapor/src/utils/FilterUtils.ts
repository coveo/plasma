import * as escapeRegExp from 'escape-string-regexp';

import {IItemBoxProps} from '../components/itemBox/ItemBox';

export type MatchFilter = (filterValue: string, item: IItemBoxProps) => boolean;

export const defaultMatchFilter = (filterValue: string, item: IItemBoxProps) => {
    const escapedFilterValue = escapeRegExp(filterValue);
    if (escapedFilterValue === '') {
        return true;
    }

    const regex = new RegExp(escapedFilterValue, 'gi');
    return regex.test(item.value) || !!(item.displayValue && regex.test(item.displayValue));
};
