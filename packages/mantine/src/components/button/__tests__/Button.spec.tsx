import {render, screen, userEvent, waitFor, within} from '@test-utils';

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
            render(
                <>
                    <Button loading={true}>I am loading</Button>
                    <Button loading={false}>I am not loading</Button>
                </>,
            );
            expect(within(screen.getByRole('button', {name: /I am loading/i})).getByRole('presentation')).toBeVisible();
            expect(
                within(screen.queryByRole('button', {name: /I am not loading/i})).queryByRole('presentation'),
            ).not.toBeInTheDocument();
        });

        it('shows a loader while the promise is waiting to be resolved', async () => {
            let resolve: () => void;
            let isResolved = false;

            const promise = () =>
                new Promise<void>((res) => {
                    resolve = res;
                }).then(() => {
                    isResolved = true;
                });

            render(<Button onClick={promise}>promise handler</Button>);

            userEvent.click(screen.getByRole('button', {name: /promise handler/i}));

            expect(
                await within(screen.getByRole('button', {name: /promise handler/i})).findByRole('presentation'),
            ).toBeVisible();

            resolve();

            await waitFor(() => {
                expect(isResolved).toBeTruthy();
            });

            expect(
                within(screen.queryByRole('button', {name: /promise handler/i})).queryByRole('presentation'),
            ).not.toBeInTheDocument();
        });

        it('removes the loading if a promise is rejected', async () => {
            let reject: () => void;
            let isRejected = false;

            const promise = () =>
                new Promise<void>((res, rej) => {
                    reject = rej;
                }).catch(() => {
                    isRejected = true;
                });

            render(<Button onClick={promise}>promise handler</Button>);

            userEvent.click(screen.getByRole('button', {name: /promise handler/i}));

            expect(
                await within(screen.getByRole('button', {name: /promise handler/i})).findByRole('presentation'),
            ).toBeVisible();

            reject();

            await waitFor(() => {
                expect(isRejected).toBeTruthy();
            });

            expect(
                within(screen.queryByRole('button', {name: /promise handler/i})).queryByRole('presentation'),
            ).not.toBeInTheDocument();
        });
    });
});
