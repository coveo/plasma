import * as React from 'react';
import { FilterBoxConnected } from '../../filterBox/FilterBoxConnected';
import { ITableProps, ITablePredicate } from '../Table';
import { TableChildComponent } from '../TableConstants';
import { getTableChildComponentId } from '../TableUtils';
import { DropdownSearchConnected } from '../../dropdownSearch/DropdownSearchConnected';
import { ActionBarConnected } from '../../actions/ActionBarConnected';
import { IDropdownOption } from '../../dropdownSearch/DropdownSearch';

export const TableChildActionBar = (props: ITableProps): JSX.Element => {
    if (!props.actionBar) {
        return null;
    }

    const { actionBar, filter, predicates } = props;

    const filterBoxConnected: JSX.Element = actionBar && filter
        ? (
            <div className='coveo-table-actions'>
                <FilterBoxConnected
                    {...filter}
                    id={getTableChildComponentId(props.id, TableChildComponent.FILTER)}
                    key={getTableChildComponentId(props.id, TableChildComponent.FILTER)}
                />
            </div>
        )
        : null;

    const predicatesConnected: JSX.Element = actionBar && predicates
        ? (
            <div className='coveo-table-actions predicate-filters'>
                {predicates.map((predicate: ITablePredicate, i: number) => {
                    const predicateId = `${getTableChildComponentId(props.id, TableChildComponent.PREDICATE)}${predicate.attributeName}`;
                    const containerClasses = i ? ['ml1'] : [''];

                    return (
                        <DropdownSearchConnected
                            {...predicate.props}
                            key={predicateId}
                            fixedPrepend={predicate.attributeNameFormatter(predicate.attributeName)}
                            id={predicateId}
                            containerClasses={containerClasses}
                            onOptionClickCallBack={(option: IDropdownOption) => {
                                if (props.onPredicateOptionClick) {
                                    props.onPredicateOptionClick(predicateId, option);
                                }
                            }} />
                    );
                })}
            </div>
        )
        : null;

    return (
        <ActionBarConnected
            {...actionBar}
            id={getTableChildComponentId(props.id, TableChildComponent.ACTION_BAR)}>
            {predicatesConnected}
            {filterBoxConnected}
        </ActionBarConnected>
    );
};
