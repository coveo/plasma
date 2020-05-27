import classNames from 'classnames';
import {FunctionComponent} from 'react';
import * as React from 'react';
import * as _ from 'underscore';
import {UrlUtils} from '../../utils/UrlUtils';
import {FlatSelectWithPrepend} from '../flatSelect/FlatSelectWithPrepend';
import {Params} from '../table-hoc/TableWithUrlState';
import {PaginationUtils} from './PaginationUtils';
import {TablePaginationDefaultValue} from './TablePagination';

export interface IPaginationPerPageProps {
    id: string;
    perPage?: number[];
    defaultPerPageSelected?: number;
    label?: React.ReactNode;
    disabled?: boolean;
    hidden?: boolean;
}

export const PaginationPerPage: FunctionComponent<IPaginationPerPageProps> = ({
    id,
    perPage = TablePaginationDefaultValue.PerPage,
    defaultPerPageSelected = UrlUtils.getSearchParams?.()?.[Params.pageSize],
    label = TablePaginationDefaultValue.perPageLabel,
    disabled,
    hidden,
}) => (
    <FlatSelectWithPrepend
        id={PaginationUtils.getPaginationPerPageId(id)}
        options={_.map(perPage, (nb: number) => ({
            id: nb?.toString(),
            option: {content: nb},
        }))}
        defaultSelectedOptionId={defaultPerPageSelected?.toString()}
        prependClassName={classNames('items-per-page', {hidden: hidden})}
        prepend={label}
        disabled={disabled}
    />
);
