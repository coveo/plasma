import {render, screen, waitFor} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {mount, ReactWrapper} from 'enzyme';
import * as _ from 'underscore';

import {IToastProps, Toast} from '../Toast';

describe('Toasts', () => {
    let toastComponent: ReactWrapper<IToastProps>;
    let toastBasicAttributes: IToastProps;

    beforeEach(() => {
        toastBasicAttributes = {
            title: 'some title',
        };

        toastComponent = mount(<Toast {...toastBasicAttributes} />, {attachTo: document.getElementById('App')});
    });

    it('should call prop onRender on mounting if set', () => {
        const renderSpy = jest.fn();
        const newToastAttributes = _.extend({}, toastBasicAttributes, {onRender: renderSpy});

        toastComponent.unmount();
        toastComponent.setProps(newToastAttributes).mount();

        expect(renderSpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
        const destroySpy = jest.fn();
        const newToastAttributes = _.extend({}, toastBasicAttributes, {onDestroy: destroySpy});

        expect(() =>
            mount(<Toast {...newToastAttributes} />, {attachTo: document.getElementById('App')}).unmount(),
        ).not.toThrow();

        expect(destroySpy).toHaveBeenCalledTimes(1);
    });

    it('should have class "mod-info" when type is Info', () => {
        toastComponent.setProps({type: 'info'});

        expect(toastComponent.children().hasClass('mod-info')).toBe(true);
    });

    it('should have class "mod-success" when type is Success', () => {
        toastComponent.setProps({type: 'success'});

        expect(toastComponent.children().hasClass('mod-success')).toBe(true);
    });

    it('should have class "mod-success" when both type and className props are empty', () => {
        expect(toastComponent.children().hasClass('mod-success')).toBe(true);
    });

    it('should have class "mod-warning" if the type is Warning', () => {
        toastComponent.setProps({type: 'warning'});

        expect(toastComponent.children().hasClass('mod-warning')).toBe(true);
    });

    it('should have class "mod-error" if the type is Error', () => {
        toastComponent.setProps({type: 'error'});

        expect(toastComponent.children().hasClass('mod-error')).toBe(true);
    });

    it('should not have class "mod-animated" if the animate props is false', () => {
        toastComponent.setProps({animate: false});

        expect(toastComponent.children().hasClass('mod-animated')).toBe(false);
    });

    it('should have class "mod-animated" if the animate props is true', () => {
        toastComponent.setProps({animate: true});

        expect(toastComponent.children().hasClass('mod-animated')).toBe(true);
    });

    it('should have class "mod-animated" if the animate props is undefined', () => {
        expect(toastComponent.children().hasClass('mod-animated')).toBe(true);
    });

    it('should have any class specified in the className prop', () => {
        const expectedClass = 'my-awesome-class';

        toastComponent.setProps({className: expectedClass});

        expect(toastComponent.hasClass(expectedClass)).toBe(true);
    });

    it('should have a description when the content is set and isSmall is false', () => {
        const descriptionContainer = '.toast-description';
        const expectedDescription = 'description';
        const newToastAttributes = _.extend({}, toastBasicAttributes, {
            isSmall: false,
            content: expectedDescription,
        });

        toastComponent.setProps(newToastAttributes).mount();

        expect(toastComponent.find(descriptionContainer).length).toBe(1);
        expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
    });

    it('should allow JSX in the content', () => {
        const descriptionContainer = '.toast-description';
        const expectedDescription = 'description';
        const newToastAttributes = _.extend({}, toastBasicAttributes, {
            content: () => <a href="#">{expectedDescription}</a>,
        });

        expect(toastComponent.find(descriptionContainer).length).toBe(0);

        toastComponent.setProps(newToastAttributes).mount();

        expect(toastComponent.find(descriptionContainer).length).toBe(1);
        expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
    });

    it('should render the children node inside the toast', () => {
        const descriptionContainer = '.toast-description';
        const expectedChildren = <div>my toast content</div>;

        toastComponent = mount(<Toast {...toastBasicAttributes}>{expectedChildren}</Toast>, {
            attachTo: document.getElementById('App'),
        });

        expect(toastComponent.find(descriptionContainer).length).toBe(1);
        expect(
            toastComponent
                .find(descriptionContainer)
                .children()
                .equals(<div>{expectedChildren}</div>),
        ).toBe(true);
    });

    it('calls the onClose prop when the toast is dismissed', async () => {
        const user = userEvent.setup();
        const onCloseSpy = jest.fn();
        render(<Toast title="hello world!" onClose={onCloseSpy} />);

        expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
        await user.click(await screen.findByRole('button', {name: /cross/i}));
        expect(screen.queryByText(/hello world!/i)).not.toBeInTheDocument();
        expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });

    it('should contain a toast-close when the prop is undefined or true and isSmall is false', () => {
        const closeSelector = '.toast-close';

        // By default dismisslbe is omitted
        expect(toastComponent.find(closeSelector).length).toBe(1);

        const newToastAttributes = _.extend({}, toastBasicAttributes, {isSmall: false, dismissible: true});
        toastComponent.setProps(newToastAttributes).mount();
        expect(toastComponent.find(closeSelector).length).toBe(1);
    });

    describe('<Toast /> with a dismiss timer', () => {
        const dismissDelay = 2000;
        let onCloseToast: jest.Mock<any, any>;

        beforeEach(() => {
            onCloseToast = jest.fn();
            toastBasicAttributes = {
                title: 'some title',
                // Subtract 1 so the jasmine.tick work as expected
                dismiss: dismissDelay - 1,
                onClose: onCloseToast,
            };

            onCloseToast.mockReset();
            jest.useFakeTimers();

            toastComponent = mount(<Toast {...toastBasicAttributes} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            jest.clearAllTimers();
            toastComponent?.unmount();
            onCloseToast.mockReset();
        });

        it('should call onClose when the timer expires', () => {
            expect(onCloseToast).not.toHaveBeenCalled();

            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).toHaveBeenCalledTimes(1);

            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).toHaveBeenCalledTimes(1);
        });

        it('should clear the timeout on mouseenter', () => {
            expect(onCloseToast).not.toHaveBeenCalled();

            expect(toastComponent.find('.toast').length).toBe(1);
            toastComponent.find('.toast').simulate('mouseEnter');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();
        });

        it('should reset the timeout on mouseleave', () => {
            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseEnter');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseLeave');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).toHaveBeenCalledTimes(1);
        });

        it('should not dismiss the toast if the dismiss is set to 0', async () => {
            const user = userEvent.setup({delay: null});
            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismiss: 0});

            render(<Toast {...newToastAttributes} />);

            await user.hover(screen.queryByText('some title'));

            await waitFor(
                () => {
                    expect(screen.getByText('some title')).toBeInTheDocument();
                },
                {
                    timeout: dismissDelay,
                },
            );
        });
    });

    describe('<Toast /> with download section', () => {
        it('should have class "mod-download" if the download prop is true', () => {
            const expectedClass = '.mod-download';
            toastComponent = mount(<Toast title="a" type="download" />);
            expect(toastComponent.find(expectedClass).length).toBe(1);
        });

        it('should load "Preparing file for download..." as a title', () => {
            toastComponent = mount(
                <Toast title="Preparing file for download..." type="download">
                    <div>Some file.csv</div>
                </Toast>,
            );

            expect(toastComponent.find('.toast-title').text()).toBe('Preparing file for download...');
        });

        it('should have a loading icon in the description', () => {
            render(
                <Toast title="a" type="download">
                    <div>Some file.csv</div>
                </Toast>,
            );

            expect(screen.getByRole('alert')).toBeInTheDocument();
        });
    });
});
