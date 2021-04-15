import {screen, waitForElementToBeRemoved} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {renderModal} from 'react-vapor-test-utils';
import {RadioCard} from '../../radio/RadioCard';
import {ModalSelect} from '../ModalSelect';

describe('ModalSelect', () => {
    const modalId = 'modal-id';
    const radioId = '📻';

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('closes the modal when clicking on "cancel"', async () => {
        renderModal(
            <div>
                <ModalSelect id={modalId} radioId={radioId}>
                    <RadioCard id="option1" value="1">
                        <div>Option 1</div>
                    </RadioCard>
                    <RadioCard id="option2" value="2">
                        <div>Option 2</div>
                    </RadioCard>
                </ModalSelect>
            </div>,
            {initialState: {modals: [{id: modalId, isOpened: true}]}}
        );

        expect(screen.getByRole('dialog')).toBeInTheDocument();

        userEvent.click(screen.getByRole('button', {name: 'Cancel'}));

        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('calls the "onConfirm" prop and the modal stays open when clicking on the "confirm" button', () => {
        const confirmSpy = jest.fn();

        renderModal(
            <ModalSelect id={modalId} radioId={radioId} onConfirm={confirmSpy}>
                <RadioCard id="option1" value="1">
                    <div>Option 1</div>
                </RadioCard>
                <RadioCard id="option2" value="2">
                    <div>Option 2</div>
                </RadioCard>
            </ModalSelect>,
            {initialState: {modals: [{id: modalId, isOpened: true}]}}
        );

        userEvent.click(screen.getByRole('button', {name: 'Confirm'}));

        expect(confirmSpy).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('calls the "onFinish" prop and the modal closes when clicking on the "finish" button', async () => {
        const onConfirm = (close: () => any) => close();
        renderModal(
            <ModalSelect id={modalId} radioId={radioId} onConfirm={onConfirm}>
                <RadioCard id="option1" value="1">
                    <div>Option 1</div>
                </RadioCard>
                <RadioCard id="option2" value="2">
                    <div>Option 2</div>
                </RadioCard>
            </ModalSelect>,
            {initialState: {modals: [{id: modalId, isOpened: true}]}}
        );

        userEvent.click(screen.getByRole('button', {name: 'Confirm'}));

        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
