import {mountWithStore, shallowWithState, shallowWithStore} from '@test-utils';

import {getStoreMock} from '../../../utils/tests/TestUtils.js';
import {UUID} from '../../../utils/UUID.js';
import {FlatSelectConnected, IFlatSelectOwnProps} from '../FlatSelect.js';
import {addFlatSelect, removeFlatSelect, selectFlatSelect} from '../FlatSelectActions.js';
import {FlatSelectOption, IFlatSelectOptionProps} from '../FlatSelectOption.js';

describe('FlatSelect', () => {
    const defaultOptions: IFlatSelectOptionProps[] = [
        {
            id: UUID.generate(),
            option: {
                content: 'test',
            },
        },
        {
            id: UUID.generate(),
            option: {
                content: 'test',
            },
        },
    ];

    const props: IFlatSelectOwnProps = {
        id: '🍄',
        options: defaultOptions,
    };

    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const component = shallowWithState(<FlatSelectConnected {...props} />, {})
                .dive()
                .dive();
            component.unmount();
        }).not.toThrow();
    });

    it('should render a flat select option for each option', () => {
        const component = shallowWithState(<FlatSelectConnected {...props} />, {})
            .dive()
            .dive();

        expect(component.children().length).toBe(props.options.length);
        component.children().forEach((option) => {
            expect(option.type()).toBe(FlatSelectOption);
        });
    });

    it('should have the mod-btn-group class if the group prop is true', () => {
        const component = shallowWithState(<FlatSelectConnected {...props} group />, {})
            .dive()
            .dive();

        expect(component.hasClass('mod-btn-group')).toBe(true);
    });

    it('should have the mod-option-picker class if the optionPicker prop is true', () => {
        const component = shallowWithState(<FlatSelectConnected {...props} optionPicker />, {})
            .dive()
            .dive();

        expect(component.hasClass('mod-option-picker')).toBe(true);
    });

    it('should select the first option if no default option is specified', () => {
        const store = getStoreMock();
        mountWithStore(<FlatSelectConnected {...props} />, store);

        expect(store.getActions()).toContainEqual(addFlatSelect(props.id, props.options[0].id));
    });

    it('should select the default option it is specified', () => {
        const store = getStoreMock();
        mountWithStore(<FlatSelectConnected {...props} defaultSelectedOptionId={props.options[1].id} />, store);

        expect(store.getActions()).toContainEqual(addFlatSelect(props.id, props.options[1].id));
    });

    it('should remove the flat select from the store when unmounting', () => {
        const store = getStoreMock();
        const component = mountWithStore(<FlatSelectConnected {...props} />, store);
        component.unmount();

        expect(store.getActions()).toContainEqual(removeFlatSelect(props.id));
    });

    it('should call "onClick" prop when changing selection', () => {
        const onClickSpy = jest.fn();
        const component = shallowWithState(<FlatSelectConnected {...props} onClick={onClickSpy} />, {})
            .dive()
            .dive();
        component.children().first().prop('onClick')('new-option');

        expect(onClickSpy).toHaveBeenCalledTimes(1);
        expect(onClickSpy).toHaveBeenCalledWith('new-option');
    });

    it('should dispatch selectFlatSelect action when changing selection', () => {
        const store = getStoreMock();
        const component = shallowWithStore(<FlatSelectConnected {...props} />, store)
            .dive()
            .dive();
        component.children().first().prop('onClick')({id: 'new-option'});

        expect(store.getActions()).toContainEqual(selectFlatSelect(props.id, 'new-option'));
    });

    it('should disabled all options if the disabled prop is true', () => {
        const propsWithDisabled = {...props, disabled: true};
        const component = shallowWithState(<FlatSelectConnected {...propsWithDisabled} />, {})
            .dive()
            .dive();

        for (let i = 0; i < component.find(FlatSelectOption).length; i++) {
            expect(component.find(FlatSelectOption).at(i).props().disabled).toBe(true);
        }
    });

    it('should disabled only one option if the disabled prop is set in a single option', () => {
        const optionsWithOneDisabled: IFlatSelectOptionProps[] = [
            {
                id: UUID.generate(),
                option: {
                    content: 'test',
                },
                disabled: true,
            },
            {
                id: UUID.generate(),
                option: {
                    content: 'test',
                },
            },
        ];
        const propsWithOneOptionDisabled = {...props, options: optionsWithOneDisabled};

        const component = shallowWithState(<FlatSelectConnected {...propsWithOneOptionDisabled} />, {})
            .dive()
            .dive();

        expect(component.find(FlatSelectOption).first().props().disabled).toBe(true);
        expect(component.find(FlatSelectOption).at(1).props().disabled).toBe(false);
    });
});
