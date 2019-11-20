import {FunctionComponent} from 'react';
import * as _ from 'underscore';
import {BlankSlate, IBlankSlateProps} from './BlankSlate';
import {blankSlateWithError} from './BlankSlateWithError';
import {blankSlateWithTable, IBlankSlateWithTableProps} from './BlankSlateWithTable';

export interface IBlankSlateWithTable extends IBlankSlateWithTableProps, IBlankSlateProps {}

export const BlankSlateWithTable: FunctionComponent<IBlankSlateWithTable> = _.compose(blankSlateWithTable)(BlankSlate);

export const BlankSlateWithTableInError: FunctionComponent<IBlankSlateWithTable> = _.compose(
    blankSlateWithTable,
    blankSlateWithError
)(BlankSlate);

export const BlankSlateWithError: FunctionComponent<IBlankSlateWithTable> = _.compose(blankSlateWithError)(BlankSlate);
