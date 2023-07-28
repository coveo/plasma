import {render, screen, waitFor} from '@test-utils';
import {FunctionComponent, PropsWithChildren} from 'react';
import {Loadable} from '../Loadable';

describe('<Loadable />', () => {
    it('renders a Loading while importing and the component once it succeeds', async () => {
        const Fixture: FunctionComponent<PropsWithChildren<unknown>> = () => <h1>Hello world</h1>;
        const LoadableComponent = Loadable(
            () =>
                new Promise<FunctionComponent>((resolve) => {
                    setTimeout(() => resolve(Fixture), 100);
                }),
        );
        render(<LoadableComponent />);

        expect(screen.getByRole('alert')).toBeVisible();
        expect(screen.queryByText('Hello world')).not.toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Hello world')).toBeVisible();
        });
    });
});
