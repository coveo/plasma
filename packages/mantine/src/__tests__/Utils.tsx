import {render, RenderOptions, RenderResult} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {FunctionComponent, PropsWithChildren, ReactElement} from 'react';

import {Plasmantine} from '../theme';

const customRender = (ui: ReactElement<any>, options?: Omit<RenderOptions, 'queries'>): RenderResult => {
    const TestWrapper: FunctionComponent<PropsWithChildren> = ({children}) => (
        <Plasmantine withCssVariables={false}>{children}</Plasmantine>
    );

    return render(ui, {wrapper: TestWrapper, ...options});
};

export * from '@testing-library/react';
export {userEvent};
export {customRender as render};
