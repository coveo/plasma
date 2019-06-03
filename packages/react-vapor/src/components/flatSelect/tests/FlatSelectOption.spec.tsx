import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {Content, IContentProps} from '../../content/Content';
import {ISvgProps, Svg} from '../../svg/Svg';
import {FlatSelectOption, IFlatSelectOptionProps} from '../FlatSelectOption';

describe('FlatSelect', () => {
    describe('<FlatSelectOption />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <FlatSelectOption id={UUID.generate()} option={{content: 'test'}} />,
                );
            }).not.toThrow();
        });
    });

    describe('<FlatSelectOption />', () => {
        let flatSelect: ReactWrapper<IFlatSelectOptionProps, any>;
        const defaultOption: IContentProps = {content: 'test'};
        const defaultProps: IFlatSelectOptionProps = {
            id: UUID.generate(),
            option: defaultOption,
        };
        const svg: ISvgProps = {
            svgName: 'domain-google',
            svgClass: 'icon',
        };
        const content: IContentProps = {content: () => <Svg {...svg} />, classes: ['mr1']};

        const renderFlatSelectOption = (props: IFlatSelectOptionProps = defaultProps) => {
            flatSelect = mount(
                <FlatSelectOption {...props} />,
                {attachTo: document.getElementById('App')},
            );
        };

        afterEach(() => {
            flatSelect.detach();
        });

        it('should call prop onClick when specified on click', () => {
            renderFlatSelectOption();

            const clickSpy = jasmine.createSpy('onClick');
            const option = flatSelect.find('a');

            flatSelect.setProps({onClick: clickSpy}).mount();
            option.simulate('click');

            expect(clickSpy.calls.count()).toBe(1);
        });

        it('should not have the class selectable if the props selected is true', () => {
            renderFlatSelectOption(_.extend({}, defaultProps, {
                selected: true,
            }));

            const optionElement = flatSelect.find('a');
            expect(optionElement.hasClass('selectable')).toBe(false);
        });

        it('should have the class selectable if the props selected is false', () => {
            renderFlatSelectOption(_.extend({}, defaultProps, {
                selected: false,
            }));

            const optionElement = flatSelect.find('a');
            expect(optionElement.hasClass('selectable')).toBe(true);
        });

        it('should have 1 <Content/> if only default props are set', () => {
            renderFlatSelectOption(defaultProps);

            expect(flatSelect.find(Content).length).toBe(1);
        });

        it('should have 2 <Content/> if a prop prepend is set', () => {
            renderFlatSelectOption(_.extend({}, defaultProps, {
                prepend: content,
            }));

            expect(flatSelect.find(Content).length).toBe(2);
        });

        it('should have 2 <Content/> if a prop append is set', () => {
            renderFlatSelectOption(_.extend({}, defaultProps, {
                append: content,
            }));

            expect(flatSelect.find(Content).length).toBe(2);
        });
    });
});
