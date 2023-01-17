import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';

import {UUID} from '../../../utils/UUID.js';
import {Content, IContentProps} from '../../content/Content.js';
import {FlatSelectOption, IFlatSelectOptionProps} from '../FlatSelectOption.js';

describe('FlatSelect', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<FlatSelectOption id={UUID.generate()} option={{content: 'test'}} />);
        }).not.toThrow();
    });

    describe('<FlatSelectOption />', () => {
        let flatSelect: ReactWrapper<IFlatSelectOptionProps, any>;
        const defaultOption: IContentProps = {content: 'test'};
        const defaultProps: IFlatSelectOptionProps = {
            id: UUID.generate(),
            option: defaultOption,
        };
        const content: IContentProps = {content: () => <div>ink</div>, classes: ['mr1']};

        const renderFlatSelectOption = (props: IFlatSelectOptionProps = defaultProps) => {
            flatSelect = mount(<FlatSelectOption {...props} />, {attachTo: document.getElementById('App')});
        };

        afterEach(() => {
            flatSelect?.unmount();
        });

        it('should call prop onClick when specified on click', () => {
            renderFlatSelectOption();

            const clickSpy = jest.fn();
            const option = flatSelect.find('a');

            flatSelect.setProps({onClick: clickSpy}).mount();
            option.simulate('click');

            expect(clickSpy.mock.calls.length).toBe(1);
        });

        it('should not have the class selectable if the props selected is true', () => {
            renderFlatSelectOption(
                _.extend({}, defaultProps, {
                    selected: true,
                })
            );

            const optionElement = flatSelect.find('a');

            expect(optionElement.hasClass('selectable')).toBe(false);
        });

        it('should have the class selectable if the props selected is false', () => {
            renderFlatSelectOption(
                _.extend({}, defaultProps, {
                    selected: false,
                })
            );

            const optionElement = flatSelect.find('a');

            expect(optionElement.hasClass('selectable')).toBe(true);
        });

        it('should have the class disabled if the props disabled is true', () => {
            renderFlatSelectOption(
                _.extend({}, defaultProps, {
                    disabled: true,
                })
            );

            const optionElement = flatSelect.find('a');

            expect(optionElement.hasClass('disabled')).toBe(true);
        });

        it('should have 1 <Content/> if only default props are set', () => {
            renderFlatSelectOption(defaultProps);

            expect(flatSelect.find(Content).length).toBe(1);
        });

        it('should have 2 <Content/> if a prop prepend is set', () => {
            renderFlatSelectOption(
                _.extend({}, defaultProps, {
                    prepend: content,
                })
            );

            expect(flatSelect.find(Content).length).toBe(2);
        });

        it('should have 2 <Content/> if a prop append is set', () => {
            renderFlatSelectOption(
                _.extend({}, defaultProps, {
                    append: content,
                })
            );

            expect(flatSelect.find(Content).length).toBe(2);
        });
    });
});
