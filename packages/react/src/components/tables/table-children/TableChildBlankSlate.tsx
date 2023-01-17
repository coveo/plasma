import * as _ from 'underscore';

import {BlankSlate, IBlankSlateProps} from '../../blankSlate/BlankSlate.js';
import {ITableProps} from '../Table.js';
import {TABLE_PREDICATE_DEFAULT_VALUE, TOGGLE_ARROW_CELL_COUNT} from '../TableConstants.js';

export interface ITableChildBlankSlateProps extends ITableProps {}

/**
 * @deprecated Use Mantine instead
 */
export const TableChildBlankSlate = (props: ITableChildBlankSlateProps): JSX.Element => {
    const {blankSlateDefault, blankSlateNoResultsOnAction, blankSlateOnError, headingAttributes, tableCompositeState} =
        props;

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
