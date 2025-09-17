import {render, RenderOptions, RenderResult} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {FunctionComponent, PropsWithChildren, ReactElement} from 'react';

import {Combobox, createTheme, Popover} from '@mantine/core';
import {Plasmantine} from '../theme/index.js';

const testTheme = createTheme({
    components: {
        Popover: Popover.extend({
            defaultProps: {
                middlewares: {inline: true},
            },
        }),
        Combobox: Combobox.extend({
            defaultProps: {
                middlewares: {inline: true},
            },
        }),
    },
});

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult => {
    const TestWrapper: FunctionComponent<PropsWithChildren> = ({children}) => (
        <Plasmantine withCssVariables={false} theme={testTheme}>
            {children}
        </Plasmantine>
    );

    return render(ui, {wrapper: TestWrapper, ...options});
};

export * from '@testing-library/react';
export {customRender as render, userEvent};
