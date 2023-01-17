import {FunctionComponent, PropsWithChildren} from 'react';
import * as _ from 'underscore';
import {BlankSlate, IBlankSlateProps} from './BlankSlate.js';
import {blankSlateWithError} from './BlankSlateWithError.js';
import {blankSlateWithTable, IBlankSlateWithTableProps} from './BlankSlateWithTable.js';

export interface IBlankSlateWithTable extends IBlankSlateWithTableProps, IBlankSlateProps {}

/**
 * @deprecated Use Plasmantine Blank-slate instead
 */
export const BlankSlateWithTable: FunctionComponent<PropsWithChildren<IBlankSlateWithTable>> =
    _.compose(blankSlateWithTable)(BlankSlate);

/**
 * @deprecated Use Plasmantine Blank-slate instead
 */
export const BlankSlateWithTableInError: FunctionComponent<PropsWithChildren<IBlankSlateWithTable>> = _.compose(
    blankSlateWithTable,
    blankSlateWithError
)(BlankSlate);

/**
 * @deprecated Use Plasmantine Blank-slate instead
 */
export const BlankSlateWithError: FunctionComponent<PropsWithChildren<IBlankSlateWithTable>> =
    _.compose(blankSlateWithError)(BlankSlate);
