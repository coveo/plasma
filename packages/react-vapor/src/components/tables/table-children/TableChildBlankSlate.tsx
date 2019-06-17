import * as React from 'react';
import * as _ from 'underscore';

import {BlankSlate, IBlankSlateProps} from '../../blankSlate/BlankSlate';
import {ITableProps} from '../Table';
import {TABLE_PREDICATE_DEFAULT_VALUE, TOGGLE_ARROW_CELL_COUNT} from '../TableConstants';

export interface ITableChildBlankSlateProps extends ITableProps {}

export const TableChildBlankSlate = (props: ITableChildBlankSlateProps): JSX.Element => {
    const {
        blankSlateDefault,
        blankSlateNoResultsOnAction,
        blankSlateOnError,
        headingAttributes,
        tableCompositeState,
    } = props;

    let blankSlatePropsToUse: IBlankSlateProps;
    if (tableCompositeState.isInError) {
        blankSlatePropsToUse = blankSlateOnError || blankSlateDefault;
    } else if (
        tableCompositeState.filter ||
        _.some(
            tableCompositeState.predicates,
            (value: any) => !_.isUndefined(value) && value !== TABLE_PREDICATE_DEFAULT_VALUE
        ) ||
        tableCompositeState.from ||
        tableCompositeState.to
    ) {
        blankSlatePropsToUse = blankSlateNoResultsOnAction || blankSlateDefault;
    } else {
        blankSlatePropsToUse = blankSlateDefault;
    }

    return (
        <tbody>
            <tr className="blankslate-rows no-hover">
                <td colSpan={headingAttributes.length + (!!props.collapsibleFormatter ? TOGGLE_ARROW_CELL_COUNT : 0)}>
                    <BlankSlate {...blankSlatePropsToUse} />
                </td>
            </tr>
        </tbody>
    );
};
