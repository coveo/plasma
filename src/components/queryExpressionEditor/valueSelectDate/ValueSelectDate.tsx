
import * as React from 'react';
import {DatePickerColors} from '../../datePicker/DatePicker';
import {IDatesSelectionBox} from '../../datePicker/DatePickerBox';
import {DatePickerDropdownConnected} from '../../datePicker/DatePickerDropdownConnected';
import * as styles from './ValueSelectDate.scss';

// TODO DATE SELECTION:
// The selection of a date range has not been implemented yet
// Also, the selection of the 'yesterday' value has not been implemented either
// The places that will need some adjusments are tagged with 'TODO DATE SELECTION:'

export const VALUE_SELECT_DATE_ID: string = 'value-select-date';

export const SELECTION_BOX: IDatesSelectionBox[] = [
    {
        title: 'Select date',
        // TODO DATE SELECTION: Hide yesterday option if we select a range.
        // TODO DATE SELECTION: add the logic to parse correctly the yesterday selection
        // quickOptions: [
        //     {
        //         label: 'Yesterday',
        //         value: () => moment().subtract(1, 'day').toDate().toString(),
        //     },
        // ],
        // TODO DATE SELECTION:  If operator from.. to.. is selected set to 'true'
        isRange: false,
        withTime: false,
        color: DatePickerColors.blue,
    },
];

export interface IValueSelectDateProps {
    expressionEditorId: string;
}

export class ValueSelectDate extends React.Component<IValueSelectDateProps> {

    render() {
        return (
            <DatePickerDropdownConnected
                id={`${this.props.expressionEditorId}-${VALUE_SELECT_DATE_ID}`}
                datesSelectionBoxes={SELECTION_BOX}
                isLinkedToDateRange={true}
                extraDropdownToggleClasses={[styles.selectValueWidth]}
            />
        );
    }
}
