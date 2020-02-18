import {shallow} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {IInlinePromptOptions, InlinePrompt} from '../../inlinePrompt/InlinePrompt';
import {ActionBar} from '../ActionBar';
import {PrimaryAction} from '../PrimaryAction';
import {PrimaryActionConnected} from '../PrimaryActionConnected';
import {SecondaryActions} from '../SecondaryActions';

describe('ActionsBar', () => {
    it('should render without errors', () => {
        expect(() => {
            const actionBar = shallow(<ActionBar />);
            actionBar.unmount();
        }).not.toThrow();
    });

    it('should call onRender prop if set when mounting', () => {
        const onRenderSpy = jasmine.createSpy('onRender');
        shallow(<ActionBar onRender={onRenderSpy} />);
        expect(onRenderSpy).toHaveBeenCalled();
    });

    it('should call onDestroy prop if set when will unmount', () => {
        const onDestroySpy = jasmine.createSpy('onDestroy');

        const actionBar = shallow(<ActionBar onDestroy={onDestroySpy} />);
        actionBar.unmount();
        expect(onDestroySpy).toHaveBeenCalled();
    });

    it('should display a <PrimaryAction /> component if there is a primary action', () => {
        expect(
            shallow(<ActionBar actions={[{enabled: true, primary: true}]} />)
                .childAt(1)
                .dive()
                .find(PrimaryAction).length
        ).toBe(1);

        expect(
            shallow(<ActionBar actions={[{enabled: true, primary: false}]} />)
                .childAt(1)
                .dive()
                .find(PrimaryAction).length
        ).toBe(0);
    });

    it('should return PrimaryAction enabled by default', () => {
        const wrapper = shallow(<ActionBar actions={[{enabled: true, primary: true}]} />)
            .childAt(1)
            .dive();
        expect(wrapper.find(PrimaryAction).props().action.enabled).toBe(true);
    });

    it('should not enable a PrimaryAction that is set as disabled', () => {
        const wrapper = shallow(<ActionBar actions={[{enabled: false, primary: true}]} />)
            .childAt(1)
            .dive();
        expect(wrapper.find(PrimaryAction).props().action.enabled).toBe(false);
    });

    it('should return PrimaryAction disabled', () => {
        const wrapper = shallow(<ActionBar actions={[{enabled: true, primary: true}]} disabled />)
            .childAt(1)
            .dive();
        expect(wrapper.find(PrimaryAction).props().action.enabled).toBe(false);
    });

    it('should return PrimaryActionConnected disabled', () => {
        const wrapper = shallow(<ActionBar actions={[{enabled: true, primary: true}]} withReduxState disabled />)
            .childAt(1)
            .dive();
        expect(wrapper.find(PrimaryActionConnected).props().action.enabled).toBe(false);
    });

    it('should not enable a PrimaryActionConnected that is set as disabled', () => {
        const wrapper = shallow(<ActionBar actions={[{enabled: false, primary: true}]} withReduxState />)
            .childAt(1)
            .dive();
        expect(wrapper.find(PrimaryActionConnected).props().action.enabled).toBe(false);
    });

    it('should display a <SecondaryActions /> component if there are secondary actions', () => {
        expect(
            shallow(<ActionBar actions={[{enabled: true, primary: false}]} />)
                .childAt(1)
                .dive()
                .find(SecondaryActions)
                .exists()
        ).toBe(true);

        expect(
            shallow(<ActionBar actions={[{enabled: true, primary: true}]} />)
                .childAt(1)
                .dive()
                .find(SecondaryActions)
                .exists()
        ).toBe(false);
    });

    it('should display an <InlinePrompt /> and no actions if there is a prompt', () => {
        const inlinePromptOptions: IInlinePromptOptions = {
            onClick: jasmine.createSpy('onClick'),
            userChoice: {},
        };
        const inlinePrompt = shallowWithStore(
            <ActionBar prompt={{id: '💎', options: inlinePromptOptions}} />,
            getStoreMock()
        )
            .childAt(1)
            .dive()
            .childAt(0)
            .dive()
            .childAt(0)
            .dive()
            .find(InlinePrompt);

        expect(inlinePrompt.exists()).toBe(true);
    });

    it('should display an <ItemFilter /> if there is an itemFilter prop', () => {
        const itemFilter = shallow(<ActionBar itemFilter="💎" />)
            .childAt(0)
            .dive();

        expect(itemFilter.exists()).toBe(true);
    });

    it('should call clearItemFilter if defined when clicking the "item-filter-clear" button', () => {
        const clearItemFilterSpy = jasmine.createSpy('clearItemFilter');
        const itemFilter = shallow(<ActionBar itemFilter="💎" clearItemFilter={clearItemFilterSpy} />)
            .childAt(0)
            .dive();

        (itemFilter as any).prop('onClear')();

        expect(clearItemFilterSpy).toHaveBeenCalled();
    });

    it('should have all the default action bar classes', () => {
        const actionBar = shallow(<ActionBar />);
        ActionBar.defaultClasses.forEach((className) => {
            expect(actionBar.hasClass(className)).toBe(true);
        });
    });

    it('should not have the default action bar classes if "removeDefaultContainerClasses" prop is truthy', () => {
        const actionBar = shallow(<ActionBar removeDefaultContainerClasses />);
        ActionBar.defaultClasses.forEach((className) => {
            expect(actionBar.hasClass(className)).toBe(false);
        });
    });

    it('should add extra classes to the container div if extra container classes are passed', () => {
        const actionBar = shallow(<ActionBar extraContainerClasses={['💎']} />);

        expect(actionBar.hasClass('💎')).toBe(true);
    });

    it('should not have the mod-deactivate-pointer class if the action bar is not loading', () => {
        const actionBar = shallow(<ActionBar />);

        expect(actionBar.hasClass('mod-deactivate-pointer')).toBe(false);
    });

    it('should have the mod-deactivate-pointer class if the action bar is loading', () => {
        const actionBar = shallow(<ActionBar isLoading />);

        expect(actionBar.hasClass('mod-deactivate-pointer')).toBe(true);
    });

    it('should add the class small-actions-container if the props withSmallActions is set to true', () => {
        const actionBar = shallow(<ActionBar withSmallActions />);

        expect(actionBar.hasClass('small-actions-container')).toBe(true);
    });

    it('should set the width on the bar if there is one sent as a prop', () => {
        const actionBar = shallow(<ActionBar width={90} />);

        expect(actionBar.get(0).props.style).toEqual(jasmine.objectContaining({width: 90}));
    });
});
