import {IItemBoxProps} from '../components/itemBox/ItemBox';

export const defaultMatchFilter = (filterValue: string, item: IItemBoxProps) => {
    if (filterValue === '') {
        return true;
    }

    const regex = new RegExp(filterValue, 'gi');
    return regex.test(item.value) || !!(item.displayValue && regex.test(item.displayValue));
};
