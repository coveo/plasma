import classNames from 'classnames';
import {ReactNode, FunctionComponent} from 'react';
import * as _ from 'underscore';
import {UrlUtils} from '../../utils/UrlUtils.js';
import {FlatSelectWithPrepend} from '../flatSelect/FlatSelectWithPrepend.js';
import {Params} from '../table-hoc/TableWithUrlState.js';
import {PaginationUtils} from './PaginationUtils.js';
import {TablePaginationDefaultValue} from './PaginationConstants.js';

export interface IPaginationPerPageProps {
    id: string;
    perPage?: number[];
    defaultPerPageSelected?: number;
    label?: ReactNode;
    disabled?: boolean;
    hidden?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
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
