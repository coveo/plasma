import {FilterUtils} from '../../utils/FilterUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';

export type MatchFilter = (filterValue: string, item: IItemBoxProps) => boolean;

export const defaultListBoxMatchFilter = (filterValue: string, item: IItemBoxProps) => {
    const valueMatchesFilter = FilterUtils.matchesString(filterValue, item.value);
    const displayValueMatchesFilter = FilterUtils.matchesReactNode(filterValue, item.displayValue);
    return valueMatchesFilter || displayValueMatchesFilter;
};
