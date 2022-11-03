/**
 * This file is executed once per test file.
 * It is executed after executing Setup and Jest is initialised, but before the test code itself.
 */

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

Element.prototype.scrollTo = jest.fn();
window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));
