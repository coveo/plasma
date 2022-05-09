import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';

import {Svg} from '../../svg/Svg';
import {Action, IActionOptions, IActionProps} from '../Action';

describe('Actions', () => {
    let action: IActionOptions;

    beforeAll(() => {
        action = {
            name: 'action',
            trigger: jest.fn(),
            enabled: true,
        };
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<Action action={action} />);
        }).not.toThrow();
    });

    it('should have a defaultProp hideDisabled set to true', () => {
        expect(Action.defaultProps.hideDisabled).toBe(true);
    });

    it('should add the id of the action on a data-trigger attribute', () => {
        const expectedId = 'cut';
        const component = shallow(<Action action={{...action, id: expectedId}} />);

        expect(component.find('.action-label').prop('data-trigger')).toBe(expectedId);
    });

    it('should add the iconClass of the action on the icon class', () => {
        const iconClass = 'bloup';
        const component = shallow(<Action action={{...action, icon: 'link', iconClass}} />);

        expect(component.find(Svg).prop('className')).toContain(iconClass);
    });

    it('should add the name of the action on a data-trigger attribute if the id is not defined', () => {
        const component = shallow(<Action action={action} />);

        expect(component.find('.action-label').prop('data-trigger')).toBe(action.name);
    });

    describe('<Action />', () => {
        let actionComponent: ReactWrapper<IActionProps, any>;
        const simple: boolean = false;

        beforeEach(() => {
            if (actionComponent && actionComponent.length) {
                actionComponent.unmount();
            }
            actionComponent = mount(<Action action={action} simple={simple} />, {
                attachTo: document.getElementById('App'),
            });
        });

        it('should get an action as a prop', () => {
            const actionProp = actionComponent.props().action;

            expect(actionProp).toBeDefined();
            expect(actionProp).toEqual(expect.objectContaining(action));
        });

        it('should get if the action is simple (no html) as a prop', () => {
            const simpleProp = actionComponent.props().simple;

            expect(simpleProp).toBeDefined();
            expect(simpleProp).toBe(simple);
        });

        it('should not contain html if the action is simple', () => {
            expect(actionComponent.find('span').find('span').length).toBeGreaterThan(1);

            actionComponent.setProps({action: action, simple: true});

            expect(actionComponent.find('span').length).toBe(1);
        });

        it('should have icon more if no icon is defined', () => {
            expect(actionComponent.find('.action-icon-more').length).toBeGreaterThanOrEqual(1);

            actionComponent.setProps({action: {...action, icon: 'delete'}, simple: false});

            expect(actionComponent.find(Svg).length).toBe(1);
            expect(actionComponent.find('.more-icon').length).toBe(0);
        });

        it('should display the action name', () => {
            expect(actionComponent.html()).toContain(action.name);
        });

        it('should display a <Tooltip /> if the action has a tooltip', () => {
            expect(actionComponent.find('Tooltip').length).toBe(0);

            const newAction = _.extend({}, action, {tooltip: 'A useful tooltip'});
            actionComponent.setProps({action: newAction, simple: false});

            expect(actionComponent.find('Tooltip').length).toBe(1);
        });
    });
});
