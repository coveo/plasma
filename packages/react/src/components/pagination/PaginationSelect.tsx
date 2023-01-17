import classNames from 'clsx';
import {HTMLAttributes, FunctionComponent} from 'react';

export interface IPaginationSelectProps extends HTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
    selected: boolean;
    pageNb: number;
    onPageClick: (pageNb: number) => void;
}

export const PaginationSelect: FunctionComponent<IPaginationSelectProps> = ({
    disabled,
    selected,
    pageNb,
    onPageClick,
    className,
    ...linkProps
}) => (
    <a
        {...linkProps}
        className={classNames(
            'flat-select-option',
            {
                selectable: !selected,
                disabled: disabled,
            },
            className
        )}
        data-page={pageNb}
        onClick={() => onPageClick(pageNb)}
    >
        {pageNb + 1}
    </a>
);
