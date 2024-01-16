import {render, screen, userEvent, waitFor} from '@test-utils';

import {Button} from '../Button';

describe('Button', () => {
    it('exposes a Button Group component', () => {
        expect(Button.Group).toBeDefined();
        expect(() => {
            render(<Button.Group></Button.Group>);
        }).not.toThrow();
    });

    describe('onClick Promise handler', () => {
        it('uses the native loading prop if passed', () => {
            const {rerender} = render(<Button loading={true} />);
            expect(screen.getByRole('button')).toHaveAttribute('data-loading');
            rerender(<Button />);
            expect(screen.getByRole('button')).not.toHaveAttribute('data-loading');
        });

        it('shows a loader while the promise is waiting to be resolved', async () => {
            const user = userEvent.setup();
            let resolve: () => void;
            let isResolved = false;

            const promise = () =>
                new Promise<void>((res) => {
                    resolve = res;
                }).then(() => {
                    isResolved = true;
                });

            render(<Button onClick={promise}>promise handler</Button>);

            await user.click(screen.getByRole('button', {name: /promise handler/i}));

            expect(screen.getByRole('button', {name: /promise handler/i})).toHaveAttribute('data-loading');

            resolve();

            await waitFor(() => {
                expect(isResolved).toBeTruthy();
            });

            expect(screen.getByRole('button', {name: /promise handler/i})).not.toHaveAttribute('data-loading');
        });

        it('removes the loading if a promise is rejected', async () => {
            const user = userEvent.setup();
            let reject: () => void;
            let isRejected = false;

            const promise = () =>
                new Promise<void>((res, rej) => {
                    reject = rej;
                }).catch(() => {
                    isRejected = true;
                });

            render(<Button onClick={promise}>promise handler</Button>);

            await user.click(screen.getByRole('button', {name: /promise handler/i}));

            expect(screen.getByRole('button', {name: /promise handler/i})).toHaveAttribute('data-loading');

            reject();

            await waitFor(() => {
                expect(isRejected).toBeTruthy();
            });

            expect(screen.getByRole('button', {name: /promise handler/i})).not.toHaveAttribute('data-loading');
        });
    });
});
