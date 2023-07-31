import {mount, ReactWrapper, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import * as _ from 'underscore';

import {TestUtils} from '../../../utils/tests/TestUtils';
import {CalendarConnected} from '../../calendar/CalendarConnected';
import {OptionPickerConnected} from '../../optionPicker/OptionPickerConnected';
import {DatePickerBox, DEFAULT_CLEAR_DATE_LABEL, IDatePickerBoxProps} from '../DatePickerBox';
import {DatesSelectionConnected} from '../DatesSelectionConnected';

describe('Date picker', () => {
    const DATE_PICKER_BOX_BASIC_PROPS: IDatePickerBoxProps = {
        datesSelectionBoxes: [
            {
                title: 'The first box',
            },
        ],
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<DatePickerBox {...DATE_PICKER_BOX_BASIC_PROPS} />);
        }).not.toThrow();
    });

    describe('<DatePickerBox />', () => {
        let datePickerBox: ReactWrapper<IDatePickerBoxProps, any>;

        beforeEach(() => {
            datePickerBox = mount(<DatePickerBox {...DATE_PICKER_BOX_BASIC_PROPS} />, {
                attachTo: document.getElementById('App'),
            });
        });

        afterEach(() => {
            datePickerBox?.unmount();
        });

        it('should get the dates selection boxes as a prop', () => {
            const datesSelectionBoxesProps = datePickerBox.props().datesSelectionBoxes;

            expect(datesSelectionBoxesProps).toBeDefined();
            expect(datesSelectionBoxesProps).toEqual(DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes);
        });

        it('should display a <Calendar /> component', () => {
            expect(datePickerBox.find('Calendar').length).toBe(1);
        });

        it('should display as many <DatesSelection /> as there are datesSelectionBoxes', () => {
            const moreBoxesProps: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {
                datesSelectionBoxes: [...DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes, {title: 'other box'}],
            });

            expect(datePickerBox.find('DatesSelection').length).toBe(
                DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes.length,
            );

            datePickerBox.setProps(moreBoxesProps);

            expect(datePickerBox.find('DatesSelection').length).toBe(moreBoxesProps.datesSelectionBoxes.length);
        });

        it('should diplay a <OptionPicker /> for every dates selections box', () => {
            const moreBoxesProps: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {
                datesSelectionBoxes: [...DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes, {title: 'other box'}],
            });

            expect(datePickerBox.find('OptionPicker').length).toBe(
                DATE_PICKER_BOX_BASIC_PROPS.datesSelectionBoxes.length,
            );

            datePickerBox.setProps(moreBoxesProps);

            expect(datePickerBox.find('OptionPicker').length).toBe(moreBoxesProps.datesSelectionBoxes.length);
        });

        it('should not display a clear button when isClearable prop is false', () => {
            expect(datePickerBox.find('button.clear-selection-button').length).toBe(0);
        });

        describe('DatePickerBox is clearable', () => {
            const clearableBoxProps: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {
                isClearable: true,
            });
            let getClearButton: () => any;

            beforeEach(() => {
                datePickerBox.setProps(clearableBoxProps);
                getClearButton = () => datePickerBox.find('button.clear-selection-button');
            });

            afterEach(() => {
                datePickerBox.setProps(DATE_PICKER_BOX_BASIC_PROPS);
            });

            it('should display a clear button when isClearable prop is set to true', () => {
                expect(getClearButton().length).toBe(1);
            });

            it('should display the clear label passed as a prop or use the default one', () => {
                const clearLabel: string = 'CLEAR_LABEL';
                const newProps: IDatePickerBoxProps = _.extend({}, datePickerBox.props(), {clearLabel});

                expect(getClearButton().first().text()).toContain(DEFAULT_CLEAR_DATE_LABEL);

                datePickerBox.setProps(newProps);

                expect(getClearButton().first().text()).not.toContain(DEFAULT_CLEAR_DATE_LABEL);
                expect(getClearButton().first().text()).toContain(clearLabel);
            });

            it('should call onClear prop when clicking on the clear button', () => {
                const onClearSpy = jest.fn();
                const onClearProps: IDatePickerBoxProps = _.extend({}, datePickerBox.props(), {onClear: onClearSpy});

                datePickerBox.setProps(onClearProps);
                getClearButton().first().simulate('click');

                expect(onClearSpy).toHaveBeenCalled();
            });
        });

        it('should display anything sent as the footer prop', () => {
            const footerClass: string = 'the-footer-added';
            const propsWithFooter: IDatePickerBoxProps = _.extend({}, DATE_PICKER_BOX_BASIC_PROPS, {
                footer: <div className={footerClass}></div>,
            });

            expect(datePickerBox.find(`.${footerClass}`).length).toBe(0);

            datePickerBox.setProps(propsWithFooter);

            expect(datePickerBox.find(`.${footerClass}`).length).toBe(1);
        });

        it('should have the class simple if it has the prop simple', () => {
            expect(datePickerBox.find('.simple').length).toBe(0);

            datePickerBox.setProps({
                simple: true,
            });

            expect(datePickerBox.find('.simple').length).toBe(1);
        });
    });

    describe('<DatePickerBox /> with redux state', () => {
        let wrapper: ReactWrapper<any, any>;
        let datePickerBox: ReactWrapper<IDatePickerBoxProps, any>;

        beforeEach(() => {
            wrapper = mount(
                <Provider store={TestUtils.buildStore()}>
                    <DatePickerBox {...DATE_PICKER_BOX_BASIC_PROPS} withReduxState withoutBoxResize />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            datePickerBox = wrapper.find(DatePickerBox).first();
        });

        it('should get withReduxState as a prop', () => {
            const withReduxStateProp = datePickerBox.props().withReduxState;

            expect(withReduxStateProp).toBeDefined();
            expect(withReduxStateProp).toBe(true);
        });

        it('should display a <CalendarConnected />', () => {
            expect(datePickerBox.find(CalendarConnected).length).toBe(1);
        });

        it('should display a <DatesSelectionConnected />', () => {
            expect(datePickerBox.find(DatesSelectionConnected).length).toBe(1);
        });

        it('should display an <OptionPickerConnected />', () => {
            expect(datePickerBox.find(OptionPickerConnected).length).toBe(1);
        });

        it('should add the class calendar-max-height if withoutBoxResize is set to true', () => {
            expect(datePickerBox.find(CalendarConnected).props().wrapperClassNames).toBe('calendar-max-height');
        });
    });
});
