import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { Calendar, ICalendarProps, ICalendarSelectionRule } from '../calendar/Calendar';
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

export interface IDatePickerBoxChildrenProps {
  months?: string[];
  startingMonth?: number;
  years?: string[];
  startingYear?: number;
  days?: string[];
  startingDay?: number;
  selectionRules?: ICalendarSelectionRule[];
}

export interface IDatePickerBoxProps extends IDatePickerBoxOwnProps, IDatePickerBoxStateProps,
  IDatePickerBoxChildrenProps { }

export class DatePickerBox extends React.Component<IDatePickerBoxProps, any> {

  render() {
    let calendarProps: ICalendarProps = {
      id: `calendar-${this.props.id}`,
      months: this.props.months,
      startingMonth: this.props.startingMonth,
      years: this.props.years,
      startingYear: this.props.startingYear,
      days: this.props.days,
      startingDay: this.props.startingDay,
      selectionRules: this.props.selectionRules
    };
    let calendar: JSX.Element = this.props.withReduxState ? <CalendarConnected {...calendarProps} /> : <Calendar />;
    let datesSelectionBoxes: JSX.Element[] =
      _.map(this.props.datesSelectionBoxes, (datesSelectionBox: IDatesSelectionBox) => {
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
          calendarId: calendarProps.id,
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
