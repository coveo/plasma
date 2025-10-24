/* eslint-disable testing-library/prefer-presence-queries */
/**
 * Test suite for Plasma React Icons testing utilities
 * Demonstrates usage of custom icon queries with Testing Library
 */

import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {
    queryByIconName,
    queryAllByIconName,
    getByIconName,
    getAllByIconName,
    findByIconName,
    findAllByIconName,
    extendScreen,
} from './index';

// Import actual icons from the generated folder
import {SearchSize24Px} from '../generated/search/index.js';
import {AddSize16Px} from '../generated/add/index.js';
import {DeleteSize24Px} from '../generated/delete/index.js';

// Import Tabler icon for testing
import {IconNumber123} from '../TablerIcons';

describe('Plasma Icon Testing Utilities', () => {
    describe('queryByIconName', () => {
        test('finds search icon by accessible name', () => {
            const {container} = render(<SearchSize24Px />);

            const result = queryByIconName(container, 'search');
            expect(result).toBeInTheDocument();
        });

        test('finds search icon by custom aria-label', () => {
            const {container} = render(<SearchSize24Px aria-label="my-awesome-search-icon" />);

            const result = queryByIconName(container, 'my-awesome-search-icon');
            expect(result).toBeInTheDocument();
        });

        test('finds icons with numbers in their name', () => {
            const {container} = render(<IconNumber123 />);

            const result = queryByIconName(container, 'iconNumber123');
            expect(result).toBeInTheDocument();
        });

        test('returns null when icon not found', () => {
            const {container} = render(<div>No icons here</div>);

            const icon = queryByIconName(container, 'search');
            expect(icon).toBeNull();
        });

        test('finds multiple different icon types', () => {
            const {container} = render(
                <div>
                    <SearchSize24Px />
                    <AddSize16Px />
                    <DeleteSize24Px />
                </div>,
            );

            expect(queryByIconName(container, 'search')).toBeInTheDocument();
            expect(queryByIconName(container, 'add')).toBeInTheDocument();
            expect(queryByIconName(container, 'delete')).toBeInTheDocument();
        });
    });

    describe('queryAllByIconName', () => {
        test('finds multiple icons with the same name', () => {
            const {container} = render(
                <div>
                    <SearchSize24Px />
                    <SearchSize24Px />
                </div>,
            );

            const icons = queryAllByIconName(container, 'search');
            expect(icons).toHaveLength(2);
            icons.forEach((icon) => expect(icon).toBeInTheDocument());
        });

        test('returns empty array when no icons found', () => {
            const {container} = render(<div>No icons here</div>);

            const icons = queryAllByIconName(container, 'search');
            expect(icons).toEqual([]);
        });

        test('finds and counts different icon types correctly', () => {
            const {container} = render(
                <div>
                    <SearchSize24Px />
                    <AddSize16Px />
                    <DeleteSize24Px />
                </div>,
            );

            expect(queryAllByIconName(container, 'search')).toHaveLength(1);
            expect(queryAllByIconName(container, 'add')).toHaveLength(1);
            expect(queryAllByIconName(container, 'delete')).toHaveLength(1);
            expect(queryAllByIconName(container, 'missing')).toHaveLength(0);
        });
    });

    describe('getByIconName', () => {
        test('finds icon when present', () => {
            const {container} = render(<SearchSize24Px />);

            const result = getByIconName(container, 'search');
            expect(result).toBeInTheDocument();
        });

        test('throws error when icon not found', () => {
            const {container} = render(<div>No icons here</div>);

            expect(() => getByIconName(container, 'search')).toThrow(
                'Unable to find an element with icon name: search',
            );
        });
    });

    describe('getAllByIconName', () => {
        test('finds multiple icons and returns all matches', () => {
            const {container} = render(
                <div>
                    <SearchSize24Px />
                    <AddSize16Px />
                </div>,
            );

            const searchIcons = getAllByIconName(container, 'search');
            expect(searchIcons).toHaveLength(1);
            expect(searchIcons[0]).toBeInTheDocument();

            const addIcons = getAllByIconName(container, 'add');
            expect(addIcons).toHaveLength(1);
            expect(addIcons[0]).toBeInTheDocument();
        });

        test('throws error when no icons found', () => {
            const {container} = render(<div>No icons here</div>);

            expect(() => getAllByIconName(container, 'search')).toThrow(
                'Unable to find an element with icon name: search',
            );
        });
    });

    describe('findByIconName', () => {
        test('finds icon asynchronously', async () => {
            const {container} = render(<SearchSize24Px />);

            const result = await findByIconName(container, 'search');
            expect(result).toBeInTheDocument();
        });

        test('times out when icon not found', async () => {
            const {container} = render(<div>No icons here</div>);

            await expect(findByIconName(container, 'search')).rejects.toThrow(
                'Unable to find an element with icon name: search',
            );
        });
    });

    describe('findAllByIconName', () => {
        test('finds multiple icons asynchronously', async () => {
            const {container} = render(
                <div>
                    <SearchSize24Px />
                    <AddSize16Px />
                </div>,
            );

            const icons = await findAllByIconName(container, 'search');
            expect(icons).toHaveLength(1);
            expect(icons[0]).toBeInTheDocument();
        });
    });

    describe('Screen integration', () => {
        test('extends screen object with all custom queries', () => {
            const extendedScreen = extendScreen(screen);

            // Verify that all custom queries are available on screen
            expect(extendedScreen.getByIconName).toBeDefined();
            expect(extendedScreen.getAllByIconName).toBeDefined();
            expect(extendedScreen.queryByIconName).toBeDefined();
            expect(extendedScreen.queryAllByIconName).toBeDefined();
            expect(extendedScreen.findByIconName).toBeDefined();
            expect(extendedScreen.findAllByIconName).toBeDefined();
        });

        test('works with actual icon components through screen', () => {
            render(
                <div>
                    <SearchSize24Px />
                    <AddSize16Px />
                    <DeleteSize24Px />
                </div>,
            );
            const extendedScreen = extendScreen(screen);

            // Find icons by their accessible names using the screen object
            const searchIcon = extendedScreen.queryByIconName('search');
            expect(searchIcon).toBeInTheDocument();

            const addIcon = extendedScreen.queryByIconName('add');
            expect(addIcon).toBeInTheDocument();

            const deleteIcon = extendedScreen.queryByIconName('delete');
            expect(deleteIcon).toBeInTheDocument();
        });
    });

    describe('Error handling', () => {
        test('provides helpful error messages', () => {
            const {container} = render(<div>No icons</div>);

            expect(() => getByIconName(container, 'missing-icon')).toThrow(
                'Unable to find an element with icon name: missing-icon',
            );

            expect(() => getAllByIconName(container, 'missing-icon')).toThrow(
                'Unable to find an element with icon name: missing-icon',
            );
        });

        test('handles empty strings gracefully', () => {
            const {container} = render(<SearchSize24Px />);

            expect(queryByIconName(container, '')).toBeNull();
        });
    });
});
