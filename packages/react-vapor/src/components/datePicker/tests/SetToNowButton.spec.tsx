import {render, screen} from '@test-utils';
import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {Tooltip} from '../../tooltip/Tooltip';
import {ISetToNowProps, SET_TO_NOW_DEFAULT_TOOLTIP, SetToNowButton} from '../SetToNowButton';

describe('Date picker', () => {
    let BUTTON_BASIC_PROPS: ISetToNowProps;

    beforeAll(() => {
        BUTTON_BASIC_PROPS = {
            onClick: jest.fn(),
        };
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<SetToNowButton {...BUTTON_BASIC_PROPS} />);
        }).not.toThrow();
    });

    describe('<SetToNowButton />', () => {
        let setToNowButton: ReactWrapper<ISetToNowProps, any>;

        beforeEach(() => {
            setToNowButton = mount(<SetToNowButton {...BUTTON_BASIC_PROPS} />, {
                attachTo: document.getElementById('App'),
            });
        });

        afterEach(() => {
            setToNowButton?.unmount();
        });

        it('should get what to do on click as a prop', () => {
            const onClickProp = setToNowButton.props().onClick;

            expect(onClickProp).toBeDefined();
        });

        it('should display a <Svg /> component', () => {
            render(<SetToNowButton {...BUTTON_BASIC_PROPS} />);

            expect(
                screen.getByRole('button', {
                    name: /settonow icon/i,
                })
            ).toBeInTheDocument();
        });

        it('should display a <Tooltip /> component', () => {
            expect(setToNowButton.find('Tooltip').length).toBe(1);
        });

        it('should use the tooltip passed as a prop or the default one', () => {
            const propsWithTooltip: ISetToNowProps = _.extend({}, BUTTON_BASIC_PROPS, {
                tooltip: 'We now have a custom tooltip',
            });

            expect(setToNowButton.find(Tooltip).props().title).toBe(SET_TO_NOW_DEFAULT_TOOLTIP);

            setToNowButton.setProps(propsWithTooltip);

            expect(setToNowButton.find(Tooltip).props().title).toBe(propsWithTooltip.tooltip);
        });

        it('should call the onClick prop when clicking the button', () => {
            setToNowButton.find('button').simulate('click');

            expect(BUTTON_BASIC_PROPS.onClick).toHaveBeenCalled();
        });
    });
});
