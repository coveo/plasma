import '@testing-library/jest-dom/vitest';
import {cleanup} from '@testing-library/react';

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
    vi.fn(
        class ResizeObserverMock {
            disconnect = vi.fn();
            observe = vi.fn();
            unobserve = vi.fn();
        },
    );
document.queryCommandSupported = document.queryCommandSupported ?? vi.fn().mockReturnValue(true);

// Temporarily workaround for bug in @testing-library/react when use user-event with `vi.useFakeTimers()`
beforeAll(() => {
    const _jest = (globalThis as any).jest;

    (globalThis as any).jest = {
        ...(globalThis as any).jest,
        advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
    };

    return () => void ((globalThis as any).jest = _jest);
});

afterEach(() => {
    cleanup();
});
