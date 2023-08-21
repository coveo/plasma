import {render, screen, waitFor} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {useState} from 'react';

import {Modal} from '../Modal';

describe('Modal', () => {
    it('calls onRender prop when mounting', () => {
        const renderSpy = jest.fn();
        render(<Modal id="🆔" onRender={renderSpy} />);

        expect(renderSpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
        const destroySpy = jest.fn();
        const {unmount} = render(<Modal id="🆔" onDestroy={destroySpy} />);

        unmount();

        expect(destroySpy).toHaveBeenCalledTimes(1);
    });

    it('should call the prop closeCallback if it exists when closing the modal', async () => {
        const user = userEvent.setup();
        const closeCallbackSpy = jest.fn();
        const ModalFixture = () => {
            const [isOpened, setIsOpened] = useState(true);
            return (
                <>
                    <button onClick={() => setIsOpened(false)}>close</button>
                    <Modal id="🆔" isOpened={isOpened} closeCallback={closeCallbackSpy} />
                </>
            );
        };
        render(<ModalFixture />);
        await user.click(screen.getByRole('button', {name: /close/i}));

        await waitFor(() => expect(closeCallbackSpy).toHaveBeenCalledTimes(1));
    });

    it('should call the prop closeCallback with a timeout if specified when closing the modal', async () => {
        const user = userEvent.setup({delay: null});
        jest.useFakeTimers();
        const closeCallbackSpy = jest.fn();
        const ModalFixture = () => {
            const [isOpened, setIsOpened] = useState(true);
            return (
                <>
                    <button onClick={() => setIsOpened(false)}>close</button>
                    <Modal id="🆔" isOpened={isOpened} closeCallback={closeCallbackSpy} closeTimeout={500} />
                </>
            );
        };
        render(<ModalFixture />);
        await user.click(screen.getByRole('button', {name: /close/i}));
        expect(closeCallbackSpy).toHaveBeenCalledTimes(0);
        jest.advanceTimersByTime(500);

        expect(closeCallbackSpy).toHaveBeenCalledTimes(1);

        jest.clearAllTimers();
    });
});
