import {render, RenderOptions, RenderResult} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {FunctionComponent, PropsWithChildren, ReactElement} from 'react';

import {Plasmantine} from '../theme/index.js';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult => {
    const TestWrapper: FunctionComponent<PropsWithChildren> = ({children}) => <Plasmantine>{children}</Plasmantine>;

    return render(ui, {wrapper: TestWrapper, ...options});
};

export {userEvent};
export * from '@testing-library/react';
export {customRender as render};
