import {mount, ReactWrapper, shallow} from 'enzyme';
import {ISelectedOptionProps, SelectedOption} from '../SelectedOption.js';

describe('SelectedOption', () => {
    const props: ISelectedOptionProps = {
        value: 'test',
        label: '',
        selectedTooltip: {title: 'customToolTip'},
    };

    describe('<SelectedOption />', () => {
        let selectedOption: ReactWrapper<ISelectedOptionProps, any>;

        const renderSelectedOption = (currentProps?: ISelectedOptionProps) => {
            selectedOption = mount(<SelectedOption {...currentProps} />, {attachTo: document.getElementById('App')});
        };

        afterEach(() => {
            selectedOption?.unmount();
        });

        describe('render', () => {
            it('should render the display value in the selectedOption', () => {
                renderSelectedOption(props);

                const label: string = 'displayTest';
                selectedOption.setProps({label});

                expect(selectedOption.find('.selected-option-value').first().text()).toBe(label);
            });
        });

        describe('remove option', () => {
            it('should call remove option when click on the remove-option div', () => {
                renderSelectedOption(props);

                const onRemoveOptionClick = jest.fn();
                selectedOption.setProps({onRemoveClick: onRemoveOptionClick});

                selectedOption.find('.remove-option').simulate('click');

                expect(onRemoveOptionClick).toHaveBeenCalled();
            });

            it('should not call remove option when clicking anywhere else', () => {
                renderSelectedOption(props);

                const onRemoveOptionClick = jest.fn();
                selectedOption.setProps({onRemoveClick: onRemoveOptionClick});

                selectedOption.simulate('click');
                selectedOption.find('.selected-option').simulate('click');
                selectedOption.find('.selected-option-value').first().simulate('click');

                expect(onRemoveOptionClick).not.toHaveBeenCalled();
            });
        });
    });

    describe('Tooltip', () => {
        it('should render the tooltip in selectedOption with the corresponding tooltip value', () => {
            const label: string = 'displayTest';
            const tooltipValue: string = 'tooltipCustom';
            const customProps: ISelectedOptionProps = {
                value: 'test',
                label,
                selectedTooltip: {title: tooltipValue},
            };
            const wrapper = shallow(<SelectedOption {...customProps} />);

            expect(wrapper.children().first().prop('title')).toEqual(tooltipValue);
        });

        it('should render the tooltip in selectedOption placement at the top by default', () => {
            const label: string = 'displayTest';
            const tooltipValue: string = 'tooltipCustom';
            const customProps: ISelectedOptionProps = {
                value: 'test',
                label,
                selectedTooltip: {title: tooltipValue},
            };
            const wrapper = shallow(<SelectedOption {...customProps} />);

            expect(wrapper.children().first().prop('placement')).toEqual('top');
        });

        it('should render the tooltip selectedOption with a different position', () => {
            const label: string = 'displayTest';
            const tooltipValue: string = 'tooltipCustom';
            const customProps: ISelectedOptionProps = {
                value: 'test',
                label,
                selectedTooltip: {title: tooltipValue, placement: 'bottom'},
            };
            const wrapper = shallow(<SelectedOption {...customProps} />);

            expect(wrapper.children().first().prop('placement')).toEqual('bottom');
        });

        it('should render the tooltip footer in selectedOption', () => {
            const label: string = 'displayTest';
            const tooltipValue: string = 'tooltipCustom';
            const customProps: ISelectedOptionProps = {
                value: 'test',
                label,
                selectedTooltip: {title: tooltipValue, footer: 'Hello World!'},
            };
            const wrapper = shallow(<SelectedOption {...customProps} />);

            expect(wrapper.children().first().prop('footer')).toEqual('Hello World!');
        });
    });
});
