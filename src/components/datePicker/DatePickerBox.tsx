import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { Calendar } from '../calendar/Calendar';
import { CalendarConnected } from '../calendar/CalendarConnected';
import { IOption } from '../optionPicker/Option';
import { DatesSelection, IDatesSelectionProps } from './DatesSelection';
import { DatesSelectionConnected } from './DatesSelectionConnected';
import { IOptionPickerProps, OptionPicker } from '../optionPicker/OptionPicker';
import { OptionPickerConnected } from '../optionPicker/OptionPickerConnected';
import * as React from 'react';
import * as _ from 'underscore';
import * as  s from 'underscore.string';

export interface IDatesSelectionBox {
  title: string;
  quickOptions?: IOption[];
  isRange?: boolean;
  withTime?: boolean;
  hasSetToNowButton?: boolean;
  color?: string;
}

export interface IDatePickerBoxOwnProps extends React.ClassAttributes<DatePickerBox> {
  id?: string;
  datesSelectionBoxes: IDatesSelectionBox[];
  setToNowTooltip?: string;
  footer?: JSX.Element;
}

export interface IDatePickerBoxStateProps extends IReduxStatePossibleProps { }

export interface IDatePickerBoxProps extends IDatePickerBoxOwnProps, IDatePickerBoxStateProps { }

export class DatePickerBox extends React.Component<IDatePickerBoxProps, any> {

  render() {
    let calendarId: string = `calendar-${this.props.id}`;
    let calendar: JSX.Element = this.props.withReduxState ? <CalendarConnected id={calendarId} /> : <Calendar />;
    let datesSelectionBoxes: JSX.Element[] = _.map(this.props.datesSelectionBoxes, (datesSelectionBox: IDatesSelectionBox) => {
      let boxId: string = this.props.id + '-' + s.slugify(datesSelectionBox.title);

      let quickOptionsProps: IOptionPickerProps = {
        id: boxId,
        options: datesSelectionBox.quickOptions
      };
      let optionPicker: JSX.Element = this.props.withReduxState
        ? <OptionPickerConnected {...quickOptionsProps} />
        : <OptionPicker {...quickOptionsProps} />;

      let datesSelectionProps: IDatesSelectionProps = {
        id: boxId,
        withTime: datesSelectionBox.withTime,
        hasSetToNowButton: datesSelectionBox.hasSetToNowButton,
        setToNowTooltip: this.props.setToNowTooltip,
        isRange: datesSelectionBox.isRange,
        color: datesSelectionBox.color,
        calendarId: calendarId
      };
      let dateSelection: JSX.Element = this.props.withReduxState
        ? <DatesSelectionConnected {...datesSelectionProps} />
        : <DatesSelection {...datesSelectionProps} />;

      return (
        <div key={boxId}>
          <h3 className='bold text-medium-blue'>{datesSelectionBox.title}</h3>
          {optionPicker}
          {dateSelection}
        </div>
      );
    });

    return (
      <div className='date-picker-box flex flex-column'>
        <div className='splitted-layout'>
          {calendar}
          <div className='date-selection column p2'>
            {datesSelectionBoxes}
          </div>
        </div>
        {this.props.footer}
      </div>
    );
  }
}
