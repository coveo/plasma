import '@testing-library/jest-dom';

import {render, RenderOptions, RenderResult} from '@testing-library/react';
import {PropsWithChildren} from 'react';

const TEST_CONTAINER_ID = 'app';
const MODAL_ROOT_ID = 'modals';
const originalError = console.error;

const setup = () => {
    document.body.innerHTML = `<div id="${TEST_CONTAINER_ID}"></div><div id="${MODAL_ROOT_ID}"></div><div id="plasma-dropdowns"></div>`;

    console.error = (...args) => {
        if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
            return;
        } else {
            originalError.call(console, ...args);
        }
    };
};

const cleanup = () => {
    jest.restoreAllMocks();
    console.error = originalError;
};

const customRender = (
    ui: React.ReactElement,
    {container = document.getElementById(TEST_CONTAINER_ID), ...renderOptions}: Omit<RenderOptions, 'queries'> = {}
): RenderResult => {
    const TestWrapper: React.FunctionComponent<PropsWithChildren<unknown>> = ({children}) => <>{children}</>;

    return render(ui, {wrapper: TestWrapper, container, ...renderOptions});
};

/**
 * Jest logs thrown errors with console.error even when using `.toThrow()` matcher.
 * This function will silence those logs.
 *
 * @param func Function that you would normally pass to `expect(func).toThrow()`
 */
const expectToThrow = (func: () => unknown, error?: JestToErrorArg): void => {
    // Even though the error is caught, it still gets printed to the console
    // so we mock that out to avoid the wall of red text.
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => null);

    expect(func).toThrow(error);

    spy.mockRestore();
};

type JestToErrorArg = Parameters<jest.Matchers<unknown, () => unknown>['toThrow']>[0];

export * from '@testing-library/react';
export {customRender as render, expectToThrow, cleanup, setup};
