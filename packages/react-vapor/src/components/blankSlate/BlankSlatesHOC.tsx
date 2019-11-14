import {FunctionComponent} from 'react';
import * as _ from 'underscore';
import {BlankSlate, IBlankSlateProps} from './BlankSlate';
import {blankSlateWithTable, IBlankSlateWithTableProps} from './BlankSlateWithTable';

export interface IBlankSlateWithTable extends IBlankSlateWithTableProps, IBlankSlateProps {}

export const BlankSlateWithTable: FunctionComponent<IBlankSlateWithTable> = _.compose(blankSlateWithTable)(BlankSlate);
