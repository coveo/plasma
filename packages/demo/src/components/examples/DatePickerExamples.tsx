import * as React from 'react';
import {
    CalendarConnected,
    DatePickerBox,
    DatePickerDropdownConnected,
    DatesSelectionConnected,
    Section,
} from 'react-vapor';
import * as _ from 'underscore';
import {ChildForm} from '../../../../react-vapor/src/components/childForm/ChildForm';

import {ExampleComponent} from '../ComponentsInterface';
import {
    CALENDAR_SELECTION_RULES,
    DATE_RANGE_EXAMPLE,
    FOUR_SELECTION_BOXES,
    SELECTION_BOXES,
} from './DatePickerExamplesCommon';

export const DatePickerExamples: ExampleComponent = () => (
    <Section>
        <CalendarComponent />
        <DatePickerComponents />
        <DatesSelectionComponent />
    </Section>
);
DatePickerExamples.title = 'DatePicker';

const CalendarComponent: React.FunctionComponent = () => (
    <Section title="Calendar component">
        <CalendarConnected id="calendar" />
    </Section>
);

// start-print

const DatePickerComponents: React.FunctionComponent = () => (
    <Section title="Date pickers">
        <Section level={2} title="DatePickerBox">
            <DatePickerBox id="date-picker-box" withReduxState datesSelectionBoxes={SELECTION_BOXES} />
        </Section>
        <Section level={2} title="DatePicker dropdowns">
            <Section level={3} title="simple date picker dropdown">
                <DatePickerDropdownConnected
                    id="date-picker-dropdown"
                    datesSelectionBoxes={SELECTION_BOXES}
                    selectionRules={CALENDAR_SELECTION_RULES}
                    initialDateRange={DATE_RANGE_EXAMPLE} // optionnal
                />
            </Section>
            <Section level={3} title="DatePicker dropdown with a range limit of 3 days">
                <DatePickerDropdownConnected
                    id="date-picker-dropdown-1"
                    datesSelectionBoxes={[
                        _.extend({}, SELECTION_BOXES[0], {rangeLimit: {days: 3, message: 'Date limit exceeded'}}),
                    ]}
                    selectionRules={CALENDAR_SELECTION_RULES}
                />
            </Section>
            <Section level={3} title="Date picker dropdown disabled">
                <DatePickerDropdownConnected
                    id="date-picker-dropdown-disabled"
                    datesSelectionBoxes={SELECTION_BOXES}
                    selectionRules={CALENDAR_SELECTION_RULES}
                    readonly
                />
            </Section>
            <Section level={3} title="Clearable date picker dropdown initially unselected with Redux state">
                <DatePickerDropdownConnected
                    id="date-picker-dropdown-2"
                    datesSelectionBoxes={FOUR_SELECTION_BOXES}
                    selectionRules={[]}
                    isClearable
                    initiallyUnselected
                />
            </Section>

            <Section level={3} title="Date picker dropdown with drop">
                <DatePickerDropdownConnected
                    id="date-picker-dropdown-3"
                    datesSelectionBoxes={FOUR_SELECTION_BOXES}
                    selectionRules={[]}
                    isClearable
                    initiallyUnselected
                    withDrop
                />
            </Section>

            <Section level={3} title="Date picker dropdown with drop and a child form">
                <ChildForm>
                    <Section level={2} title="My date picker label">
                        <DatePickerDropdownConnected
                            id="date-picker-dropdown-4"
                            datesSelectionBoxes={[{...FOUR_SELECTION_BOXES[0], isRange: false}]}
                            selectionRules={[]}
                            isClearable
                            initiallyUnselected
                            withDrop
                            dropOptions={{
                                parentSelector: 'body',
                            }}
                        />
                    </Section>
                </ChildForm>
            </Section>
        </Section>
    </Section>
);

const DatesSelectionComponent: React.FunctionComponent = () => (
    <Section level={2} title="Dates selection component">
        <Section level={3} title="Dates selection with hours">
            <DatesSelectionConnected hasSetToNowButton withTime isRange id="dates-selection" />
        </Section>
    </Section>
);
