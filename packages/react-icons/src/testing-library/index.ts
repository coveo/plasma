/**
 * Custom queries for finding Plasma icons in tests
 * Uses @testing-library/dom buildQueries for consistent behavior
 */

import {buildQueries, GetErrorFunction} from '@testing-library/dom';

// Helper function to convert camelCase to kebab-case
const slugify = (text: string) =>
    text
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();

// Error functions compatible with Testing Library
const getMultipleError: GetErrorFunction = (c, iconName) => `Found multiple elements with icon name: ${iconName}`;

const getMissingError: GetErrorFunction = (c, iconName) => `Unable to find an element with icon name: ${iconName}`;

// Core query function that finds all matching elements
const queryAllByIconName = (container: HTMLElement, iconName: string): HTMLElement[] => {
    if (iconName.startsWith('icon')) {
        // For Tabler icons with 'icon' prefix, use CSS class selector
        const elements = container.querySelectorAll(`.tabler-${slugify(iconName)}`);
        return Array.from(elements) as HTMLElement[];
    } else {
        // For other icons, look for elements with role="img" and matching accessible name
        // This covers both img elements and SVG elements with role="img"
        const roleElements = container.querySelectorAll('[role="img"]');
        const matchingElements: HTMLElement[] = [];

        roleElements.forEach((element) => {
            const ariaLabel = element.getAttribute('aria-label');
            const title = element.getAttribute('title');
            if (ariaLabel === iconName || title === iconName) {
                matchingElements.push(element as HTMLElement);
            }
        });

        // Also check img elements for alt text
        const imgElements = container.querySelectorAll('img');
        imgElements.forEach((img) => {
            const alt = img.getAttribute('alt');
            const ariaLabel = img.getAttribute('aria-label');
            if (alt === iconName || ariaLabel === iconName) {
                matchingElements.push(img as HTMLElement);
            }
        });

        return matchingElements;
    }
};

// Use buildQueries to create all the standard Testing Library query variants
const [queryByIconName, getAllByIconName, getByIconName, findAllByIconName, findByIconName] = buildQueries(
    queryAllByIconName,
    getMultipleError,
    getMissingError,
);

// Export the queries
export {queryByIconName, queryAllByIconName, getAllByIconName, getByIconName, findAllByIconName, findByIconName};

// Type definitions for icon queries
export interface IconQueries {
    queryByIconName: (iconName: string) => HTMLElement | null;
    queryAllByIconName: (iconName: string) => HTMLElement[];
    getByIconName: (iconName: string) => HTMLElement;
    getAllByIconName: (iconName: string) => HTMLElement[];
    findByIconName: (iconName: string, options?: any) => Promise<HTMLElement>;
    findAllByIconName: (iconName: string, options?: any) => Promise<HTMLElement[]>;
}

// Create screen-compatible queries that work with document.body as default container
const screenQueries: IconQueries = {
    queryByIconName: (iconName: string) => queryByIconName(document.body, iconName),
    queryAllByIconName: (iconName: string) => queryAllByIconName(document.body, iconName),
    getByIconName: (iconName: string) => getByIconName(document.body, iconName),
    getAllByIconName: (iconName: string) => getAllByIconName(document.body, iconName),
    findByIconName: (iconName: string, options?: any) => findByIconName(document.body, iconName, options),
    findAllByIconName: (iconName: string, options?: any) => findAllByIconName(document.body, iconName, options),
};

// Export individual screen queries for convenience
export const {
    queryByIconName: screenQueryByIconName,
    queryAllByIconName: screenQueryAllByIconName,
    getByIconName: screenGetByIconName,
    getAllByIconName: screenGetAllByIconName,
    findByIconName: screenFindByIconName,
    findAllByIconName: screenFindAllByIconName,
} = screenQueries;

/**
 * Extends a Testing Library screen object with icon queries.
 * This allows you to use icon queries directly on the screen object.
 *
 * @param testingLibraryScreen - The screen object from Testing Library (optional)
 * @returns Extended screen object with icon queries
 *
 * @example
 * import { render } from '@testing-library/react';
 * import { extendScreen } from '@coveord/plasma-react-icons/testing-library';
 *
 * const screen = extendScreen();
 * render(<MyComponent />);
 * const icon = screen.getByIconName('add');
 */
export const extendScreen = <T extends Record<string, any> = Record<string, never>>(
    testingLibraryScreen?: T,
): T extends Record<string, never> ? IconQueries : T & IconQueries => {
    // If no screen is provided, use our screen queries directly
    if (!testingLibraryScreen) {
        return screenQueries as T extends Record<string, never> ? IconQueries : T & IconQueries;
    }

    // Merge the provided screen with our icon queries
    return {
        ...testingLibraryScreen,
        ...screenQueries,
    } as T extends Record<string, never> ? IconQueries : T & IconQueries;
};
