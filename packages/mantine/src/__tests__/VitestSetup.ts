import matchers, {TestingLibraryMatchers} from '@testing-library/jest-dom/matchers';
import {cleanup} from '@testing-library/react';

declare global {
    namespace Vi {
        interface JestAssertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
    }
}
expect.extend(matchers);
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});
window.ResizeObserver =
    window.ResizeObserver ||
    vi.fn().mockImplementation(() => ({
        disconnect: vi.fn(),
        observe: vi.fn(),
        unobserve: vi.fn(),
    }));

afterEach(() => {
    cleanup();
});
