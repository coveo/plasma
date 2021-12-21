import classNames from 'classnames';
import {FunctionComponent} from 'react';
import * as React from 'react';

export interface IPaginationSelectProps extends React.HTMLAttributes<HTMLAnchorElement> {
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
