import * as React from 'react';
import * as _ from 'underscore';
import {humanize} from 'underscore.string';

import {ActionBarConnected} from '../../actions/ActionBar';
import {DatePickerDropdownConnected} from '../../datePicker/DatePickerDropdownConnected';
import {IDropdownOption} from '../../dropdownSearch/DropdownSearch';
import {DropdownSearchConnected} from '../../dropdownSearch/DropdownSearchConnected';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {ITablePredicate, ITableProps} from '../Table';
import {TableChildComponent, TABLE_PREDICATE_DEFAULT_VALUE} from '../TableConstants';
import {getTableChildComponentId} from '../TableUtils';

export const TableChildActionBar = (props: ITableProps): JSX.Element => {
    if (!props.actionBar) {
        return null;
    }

    const {predicates, datePicker, prefixContent} = props;
    const actionBar = _.isBoolean(props.actionBar) ? {} : props.actionBar;
    const filter = _.isBoolean(props.filter) ? {} : props.filter;

    const filterBoxConnected: JSX.Element =
        actionBar && filter ? (
            <div className="coveo-table-actions">
                <FilterBoxConnected
                    {...filter}
                    id={getTableChildComponentId(props.id, TableChildComponent.FILTER)}
                    key={getTableChildComponentId(props.id, TableChildComponent.FILTER)}
                />
            </div>
        ) : null;

    const predicatesConnected: JSX.Element =
        actionBar && predicates ? (
            <div className="coveo-table-actions predicate-filters">
                {predicates.map((predicate: ITablePredicate, i: number) => {
                    const predicateId = `${getTableChildComponentId(props.id, TableChildComponent.PREDICATE)}${
                        predicate.attributeName
                    }`;
                    const containerClasses = i ? ['ml1'] : [''];
                    const defaultValue = _.findWhere(predicate.props.defaultOptions, {default: true});

                    return (
                        <DropdownSearchConnected
                            maxWidth={260}
                            defaultSelectedOption={{
                                value: (defaultValue && defaultValue.value) || TABLE_PREDICATE_DEFAULT_VALUE,
                            }}
                            {...predicate.props}
                            key={predicateId}
                            fixedPrepend={
                                (predicate.attributeNameFormatter
                                    ? predicate.attributeNameFormatter(predicate.attributeName)
                                    : humanize(predicate.attributeName)) as any
                            }
                            id={predicateId}
                            containerClasses={containerClasses}
                            onOptionClickCallBack={(option: IDropdownOption) => {
                                if (props.onPredicateOptionClick) {
                                    props.onPredicateOptionClick(predicateId, option);
                                }
                            }}
                        />
                    );
                })}
            </div>
        ) : null;

    const datePickerConnected: JSX.Element =
        actionBar && datePicker ? (
            <div className="coveo-table-actions">
                <DatePickerDropdownConnected
                    {...datePicker}
                    id={getTableChildComponentId(props.id, TableChildComponent.DATEPICKER)}
                    key={getTableChildComponentId(props.id, TableChildComponent.DATEPICKER)}
                    onRight
                />
            </div>
        ) : null;

    return (
        <ActionBarConnected
            {...actionBar}
            prefixContent={prefixContent}
            id={getTableChildComponentId(props.id, TableChildComponent.ACTION_BAR)}
        >
            {predicatesConnected}
            {filterBoxConnected}
            {datePickerConnected}
        </ActionBarConnected>
    );
};
