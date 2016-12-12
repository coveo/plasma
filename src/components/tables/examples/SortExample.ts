import { TableSort, SortTypes } from '../TableSort';

export class SortExample extends TableSort {

    constructor(sortType: SortTypes,
                onClick: () => void) {
        super({
            title: 'Third col',
            onClick: onClick,
            isFixedHeader: false,
            sortType: sortType
        });
    }
}
