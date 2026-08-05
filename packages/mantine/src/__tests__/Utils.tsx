import {MantineProviderProps} from '@mantine/core';
import {render, RenderOptions, RenderResult} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {FunctionComponent, PropsWithChildren, ReactElement} from 'react';

import {Plasmantine} from '../theme/Plasmantine.js';

interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
    /**
     * The Mantine environment passed to the `Plasmantine` provider.
     * Defaults to `'test'`, which disables environment-specific behavior such as React's `<Activity>`.
     * Set it to `'default'` when a test needs the real runtime behavior (e.g. Activity-based mounting).
     */
    env?: MantineProviderProps['env'];
}

const customRender = (ui: ReactElement, {env = 'test', ...options}: CustomRenderOptions = {}): RenderResult => {
    const TestWrapper: FunctionComponent<PropsWithChildren> = ({children}) => (
        <Plasmantine withCssVariables={false} env={env}>
            {children}
        </Plasmantine>
    );

    return render(ui, {wrapper: TestWrapper, ...options});
};

export * from '@testing-library/react';
export {customRender as render, userEvent};
