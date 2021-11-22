import * as React from 'react';
import {
    CalendarConnected,
    ChildForm,
    Countdown,
    DatePickerBox,
    DatePickerDropdownConnected,
    DatesSelectionConnected,
    Section,
} from 'react-vapor';
import * as _ from 'underscore';

import {ExampleComponent} from '../../../../components/ComponentsInterface';
import {
    CALENDAR_ADVANCED_SELECTION_RULES,
    CALENDAR_SELECTION_RULES,
    DATE_RANGE_EXAMPLE,
    FOUR_SELECTION_BOXES,
    SELECTION_BOXES,
} from './DatePickerExamplesCommon';
import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

export const DatePickerExamples: ExampleComponent = () => (
    <VaporComponent id="datepicker" title="Date Picker" usage="">
        <Section>
            <CalendarComponent />
            <CountdownComponent />
            <DatePickerComponents />
            <DatesSelectionComponent />
        </Section>
    </VaporComponent>
);
DatePickerExamples.title = 'DatePicker';

// start-print

const CalendarComponent: React.FunctionComponent = () => (
    <Section level={1} title="Calendar component">
        <CalendarConnected id="calendar" />
    </Section>
);

const CountdownComponent: React.FunctionComponent = () => (
    <Section level={1} title="Countdown component" mods={['mod-form-top-bottom-padding']}>
        <Countdown />
    </Section>
);

const DatePickerComponents: React.FunctionComponent = () => (
    <Section level={1} title="Date pickers">
        <Section level={2} title="DatePickerBox">
            <DatePickerBox id="date-picker-box" withReduxState datesSelectionBoxes={SELECTION_BOXES} />
        </Section>
        <Section level={2} title="DatePicker dropdowns">
            <Section level={3} title="simple date picker dropdown">
                <DatePickerDropdownConnected
                    id="date-picker-dropdown"
                    datesSelectionBoxes={SELECTION_BOXES}
                    selectionRules={CALENDAR_SELECTION_RULES}
                    initialDateRange={DATE_RANGE_EXAMPLE} // optional
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
            <Section
                level={3}
                title="DatePicker dropdown that allows a start date within the last two weeks for a maximum range of 7 days"
            >
                <DatePickerDropdownConnected
                    id="date-picker-dropdown-log-browser"
                    datesSelectionBoxes={[
                        _.extend({}, SELECTION_BOXES[0], {rangeLimit: {days: 7, message: 'Date limit exceeded'}}),
                    ]}
                    selectionRules={CALENDAR_ADVANCED_SELECTION_RULES}
                />
            </Section>
            <Section level={3} title="DatePicker dropdown with a minimal range limit of 5 minutes">
                <DatePickerDropdownConnected
                    id="date-picker-dropdown-2"
                    datesSelectionBoxes={[
                        {
                            ...FOUR_SELECTION_BOXES[0],
                            minimalRangeLimit: {
                                minutes: 5,
                                message: 'You need a range of at least 5 minutes from the start to the end',
                            },
                        },
                    ]}
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
                    id="date-picker-dropdown-3"
                    datesSelectionBoxes={FOUR_SELECTION_BOXES}
                    selectionRules={[]}
                    isClearable
                    initiallyUnselected
                />
            </Section>
            <Section level={3} title="Date picker dropdown with drop">
                <DatePickerDropdownConnected
                    id="date-picker-dropdown-4"
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
                            id="date-picker-dropdown-5"
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
