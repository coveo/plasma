import {fireEvent, render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {ReactElement} from 'react';

import {SingleSelectConnected} from '../SingleSelectConnected.js';
import {keyCode} from '../../../utils/index.js';

describe('Select', () => {
    describe('<SingleSelectConnected />', () => {
        const id: string = 'list-box-connected';

        describe('mount and unmount', () => {
            it('should not throw on mount and unmount', () => {
                expect(() => {
                    const {unmount} = render(<SingleSelectConnected id={id} items={[]} />);
                    unmount();
                }).not.toThrow();
            });
        });

        it('should allow a custom placeholder', () => {
            render(<SingleSelectConnected id={id} placeholder="select thingy" items={[]} />);

            expect(screen.getByRole('button', {name: /select thingy/})).toBeVisible();
        });

        it('should contain the selected value', () => {
            render(<SingleSelectConnected id={id} items={[{value: 'a'}, {value: 'dis 1', selected: true}]} />);

            expect(screen.getByRole('button', {name: /dis 1/})).toBeVisible();
        });

        it('should contain the display value when the selected value has one', () => {
            render(
                <SingleSelectConnected
                    id={id}
                    items={[{value: 'a'}, {value: 'dis 1', displayValue: 'dis 2', selected: true}]}
                />
            );

            expect(screen.getByRole('button', {name: /dis 2/})).toBeVisible();
        });

        it('should contain the selected item as a prop', () => {
            render(<SingleSelectConnected id={id} items={[{value: 'a'}, {value: 'dis 1', selected: true}]} />);

            expect(document.querySelector(`[data-value="dis 1"]`)).toBeVisible();
        });

        it('should set the toggleClasses prop if any on the dropdown-toggle', () => {
            render(
                <SingleSelectConnected
                    id={id}
                    toggleClasses="some-class"
                    items={[{value: 'a'}, {value: 'selected value', selected: true}]}
                />
            );

            expect(screen.getByRole('button', {name: /selected value/})).toHaveClass('some-class');
        });

        it('should disable the toggle button when disabled prop is set to true', () => {
            render(
                <SingleSelectConnected
                    id={id}
                    disabled
                    items={[{value: 'a'}, {value: 'selected value', selected: true}]}
                />
            );

            expect(screen.getByRole('button', {name: /selected value/})).toBeDisabled();
        });

        it('should contain the toggle prepend in the toggle (button) if defined', () => {
            const expectedPrepend = <span>some prepended text</span>;
            render(
                <SingleSelectConnected
                    id={id}
                    buttonPrepend={expectedPrepend}
                    items={[{value: 'a'}, {value: 'selected value', selected: true}]}
                />
            );

            expect(screen.getByText('some prepended text')).toBeVisible();
        });

        it('should contain the prepend and append in the button when selected', () => {
            const prepend = 'pre';
            const append = 'post';
            render(
                <SingleSelectConnected
                    id={id}
                    items={[
                        {value: 'a', selected: true, prepend: {content: prepend}, append: {content: append}},
                        {value: 'b', selected: false},
                    ]}
                />
            );
            expect(screen.getByRole('button', {name: /pre a post/})).toBeVisible();
        });

        it('should not contain the prepend and append in the button when not selected', () => {
            const prepend = 'pre';
            const append = 'post';
            render(
                <SingleSelectConnected
                    id={id}
                    items={[
                        {value: 'a', selected: false, prepend: {content: prepend}, append: {content: append}},
                        {value: 'b', selected: true},
                    ]}
                />
            );
            expect(screen.queryByRole('button', {name: /pre a post/})).not.toBeInTheDocument();
        });

        it('should have a cross when a value selected and canClear is true', async () => {
            render(<SingleSelectConnected id={id} items={[{value: 'my value', selected: true}]} canClear />);

            expect(screen.getByRole('button', {name: /my value/})).toHaveClass('mod-append');
            expect(await screen.findByRole('img', {name: /cross/})).toBeVisible();
        });

        it('should not have a cross when a value selected and canClear is undefined', () => {
            render(<SingleSelectConnected id={id} items={[{value: 'my value', selected: true}]} canClear={false} />);

            expect(screen.getByRole('button', {name: /my value/})).not.toHaveClass('mod-append');
            expect(screen.queryByRole('img', {name: /cross/})).not.toBeInTheDocument();
        });

        it('should not have a cross when no value is selected and canClear is true', () => {
            render(
                <SingleSelectConnected
                    id={id}
                    placeholder="select one"
                    items={[{value: 'my value', selected: false}]}
                    canClear
                />
            );

            expect(screen.getByRole('button', {name: /select one/})).not.toHaveClass('mod-append');
            expect(screen.queryByRole('img', {name: /cross/})).not.toBeInTheDocument();
        });

        it('should not have a cross when disabled is true even if canClear is true', () => {
            render(
                <SingleSelectConnected
                    id={id}
                    placeholder="select one"
                    items={[{value: 'my value', selected: false}]}
                    canClear
                    disabled
                />
            );

            expect(screen.getByRole('button', {name: /select one/})).not.toHaveClass('mod-append');
            expect(screen.queryByRole('img', {name: /cross/})).not.toBeInTheDocument();
        });

        it('should clear the selected value when the deselect is clicked', async () => {
            render(
                <SingleSelectConnected
                    id={id}
                    placeholder="select one"
                    items={[{value: 'my value', selected: true}]}
                    canClear
                />
            );

            expect(screen.queryByRole('button', {name: /select one/})).not.toBeInTheDocument();

            await userEvent.click(await screen.findByRole('img', {name: /cross/}));

            expect(screen.getByRole('button', {name: /select one/})).toBeInTheDocument();
        });

        it('should display the selectedDisplayValue if defined in the button for the selected item', () => {
            render(
                <SingleSelectConnected
                    id={id}
                    items={[
                        {
                            value: 'a',
                            selected: true,
                            selectedDisplayValue: 'Another selected value bites the dust',
                            displayValue: '🥔',
                        },
                        {value: 'b', selected: false},
                    ]}
                />
            );
            expect(screen.queryByRole('button', {name: /Another selected value bites the dust/})).toBeVisible();
        });

        it('should call with the selected option the onSelectOptionCallback prop when defined', async () => {
            const onSelectOptionCallbackSpy = jest.fn();

            render(
                <SingleSelectConnected
                    id={id}
                    items={[{value: 'a'}, {value: 'b', displayValue: 'to select value'}]}
                    onSelectOptionCallback={onSelectOptionCallbackSpy}
                />
            );

            await userEvent.click(screen.getByRole('button'));

            await userEvent.click(screen.getByText('to select value'));

            expect(onSelectOptionCallbackSpy).toHaveBeenCalledTimes(1);
            expect(onSelectOptionCallbackSpy).toHaveBeenCalledWith('b');
        });
        describe('keyboard events', () => {
            it('should open the dropdown when the user press enter on the button', () => {
                render(<SingleSelectConnected id={id} items={[{value: 'a'}, {value: 'b'}]} />);

                expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

                fireEvent.keyDown(screen.getByRole('button'), {key: 'Enter', code: 'Enter', keyCode: keyCode.enter});
                fireEvent.keyUp(screen.getByRole('button'), {key: 'Enter', code: 'Enter', keyCode: keyCode.enter});

                expect(screen.queryByRole('listbox')).toBeVisible();
            });

            it('should close the dropdown when the user press escape on the button and the dropdown is open', () => {
                render(<SingleSelectConnected id={id} items={[{value: 'a'}, {value: 'b'}]} />);

                expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

                fireEvent.keyDown(screen.getByRole('button'), {key: 'Escape', code: 'Escape', keyCode: keyCode.escape});
                fireEvent.keyUp(screen.getByRole('button'), {key: 'Escape', code: 'Escape', keyCode: keyCode.escape});

                expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

                fireEvent.keyDown(screen.getByRole('button'), {key: 'Enter', code: 'Enter', keyCode: keyCode.enter});
                fireEvent.keyUp(screen.getByRole('button'), {key: 'Enter', code: 'Enter', keyCode: keyCode.enter});

                expect(screen.queryByRole('listbox')).toBeVisible();

                fireEvent.keyDown(screen.getByRole('button'), {key: 'Escape', code: 'Escape', keyCode: keyCode.escape});
                fireEvent.keyUp(screen.getByRole('button'), {key: 'Escape', code: 'Escape', keyCode: keyCode.escape});

                expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
            });
        });
        describe('footer props', () => {
            it('displays the footer when the dropdown is opened', async () => {
                const footer: ReactElement = <span id="some-footer">👢</span>;
                render(<SingleSelectConnected id={id} items={[{value: 'a'}, {value: 'b'}]} footer={footer} />);

                expect(screen.queryByText('👢')).not.toBeVisible();

                await userEvent.click(screen.getByRole('button'));

                expect(screen.getByText('👢')).toBeVisible();
            });
        });
        it('should render the custom button prop content as toggle if it is specified', () => {
            const CustomButton = () => <button>🍄🍄🍄🍄🍄🍄</button>;
            render(<SingleSelectConnected id={id} items={[{value: 'a'}, {value: 'b'}]} customButton={CustomButton} />);

            expect(screen.queryByRole('button', {name: '🍄🍄🍄🍄🍄🍄'})).toBeVisible();
        });
    });
});
