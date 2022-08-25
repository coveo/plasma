import {FunctionComponent} from 'react';
import * as _ from 'underscore';
import {BlankSlate, IBlankSlateProps} from './BlankSlate';
import {blankSlateWithError} from './BlankSlateWithError';
import {blankSlateWithTable, IBlankSlateWithTableProps} from './BlankSlateWithTable';

export interface IBlankSlateWithTable extends IBlankSlateWithTableProps, IBlankSlateProps {}

/**
 * @deprecated Use Plasmantine Blank-slate instead
 */
export const BlankSlateWithTable: FunctionComponent<IBlankSlateWithTable> = _.compose(blankSlateWithTable)(BlankSlate);

/**
 * @deprecated Use Plasmantine Blank-slate instead
 */
export const BlankSlateWithTableInError: FunctionComponent<IBlankSlateWithTable> = _.compose(
    blankSlateWithTable,
    blankSlateWithError
)(BlankSlate);

/**
 * @deprecated Use Plasmantine Blank-slate instead
 */
export const BlankSlateWithError: FunctionComponent<IBlankSlateWithTable> = _.compose(blankSlateWithError)(BlankSlate);
