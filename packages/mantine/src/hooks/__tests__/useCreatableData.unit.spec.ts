import {act, renderHook} from '@testing-library/react';

import {getCreateOptionValue, useCreatableData} from '../useCreatableData.js';

describe('useCreatableData', () => {
    const baseData = ['React', 'Angular', 'Vue', 'Svelte'];

    describe('data', () => {
        it('returns the data sorted alphabetically when search is empty', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData}));

            const labels = result.current.data.map((data) => (typeof data === 'string' ? data : data.label));
            expect(labels).toEqual(['Angular', 'React', 'Svelte', 'Vue']);
        });

        it('returns the original data when search matches an existing value exactly', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData, searchValue: 'React'}));

            // No create option appended
            expect(result.current.data).toHaveLength(baseData.length);
        });

        it('matches existing values case-insensitively', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData, searchValue: 'react'}));

            expect(result.current.data).toHaveLength(baseData.length);
        });

        it('appends a create option with a prefixed value when search does not match', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData, searchValue: 'Solid'}));

            expect(result.current.data).toHaveLength(baseData.length + 1);
            const createOption = result.current.data[result.current.data.length - 1];
            expect(createOption).toEqual({
                value: '__creatable__:Solid',
                label: '+ Create "Solid"',
            });
        });

        it('trims whitespace from the search value before matching', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData, searchValue: '  Solid  '}));

            const createOption = result.current.data[result.current.data.length - 1];
            expect(createOption).toEqual({value: '__creatable__:Solid', label: '+ Create "Solid"'});
        });

        it('does not append a create option when search is only whitespace', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData, searchValue: '   '}));

            expect(result.current.data).toHaveLength(baseData.length);
        });

        it('works with ComboboxItem[] data format', () => {
            const comboboxData = [
                {value: 'react', label: 'React'},
                {value: 'vue', label: 'Vue'},
            ];

            const {result} = renderHook(() => useCreatableData({data: comboboxData, searchValue: 'solid'}));

            expect(result.current.data).toHaveLength(3);
            const createOption = result.current.data[result.current.data.length - 1];
            expect(createOption).toEqual({value: '__creatable__:solid', label: '+ Create "solid"'});
        });

        it('matches ComboboxItem values case-insensitively', () => {
            const comboboxData = [{value: 'react', label: 'React'}];

            const {result} = renderHook(() => useCreatableData({data: comboboxData, searchValue: 'React'}));

            expect(result.current.data).toEqual(comboboxData);
        });

        it('filters created values by search so unrelated created values do not appear', () => {
            const {result, rerender} = renderHook(
                ({searchValue}: {searchValue: string}) => useCreatableData({data: baseData, searchValue}),
                {initialProps: {searchValue: ''}},
            );

            act(() => {
                result.current.persistCreatedValues(['__creatable__:Solid', '__creatable__:Qwik']);
            });

            // Search for "Solid" — only Solid should appear from the created values
            rerender({searchValue: 'Solid'});
            const values = result.current.data.map((data) => (typeof data === 'string' ? data : data.value));
            expect(values).toContain('Solid');
            expect(values).not.toContain('Qwik');
        });
    });

    describe('getCreateLabel', () => {
        it('uses the custom label function when provided', () => {
            const {result} = renderHook(() =>
                useCreatableData({
                    data: baseData,
                    searchValue: 'Solid',
                    getCreateLabel: (search) => `Add "${search}" as a new framework`,
                }),
            );

            const createOption = result.current.data[result.current.data.length - 1];
            expect(createOption).toEqual({
                value: '__creatable__:Solid',
                label: 'Add "Solid" as a new framework',
            });
        });
    });

    describe('renderCreateOption', () => {
        it('returns renderOption when renderCreateOption is provided', () => {
            const {result} = renderHook(() =>
                useCreatableData({
                    data: baseData,
                    renderCreateOption: (search) => `Custom: ${search}`,
                }),
            );

            expect(result.current.renderOption).toBeDefined();
        });

        it('does not return renderOption when renderCreateOption is not provided', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData}));

            expect(result.current.renderOption).toBeUndefined();
        });

        it('renderOption delegates to renderCreateOption for create options', () => {
            const renderCreateOption = vi.fn((search: string) => `Custom: ${search}`);

            const {result} = renderHook(() =>
                useCreatableData({
                    data: baseData,
                    searchValue: 'Solid',
                    renderCreateOption,
                }),
            );

            const createItem = {value: '__creatable__:Solid', label: '+ Create "Solid"'};
            expect(result.current.renderOption?.({option: createItem, checked: false})).toBe('Custom: Solid');
            expect(renderCreateOption).toHaveBeenCalledWith('Solid');
        });

        it('renderOption returns label for normal options', () => {
            const {result} = renderHook(() =>
                useCreatableData({
                    data: [{value: 'react', label: 'React'}],
                    renderCreateOption: () => 'create',
                }),
            );

            expect(result.current.renderOption?.({option: {value: 'react', label: 'React'}, checked: false})).toBe(
                'React',
            );
        });
    });

    describe('search state', () => {
        it('manages its own search state when no controlled value is provided', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData}));

            expect(result.current.searchValue).toBe('');
            expect(typeof result.current.onSearchChange).toBe('function');
        });

        it('uses the controlled search value when provided', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData, searchValue: 'test'}));

            expect(result.current.searchValue).toBe('test');
        });

        it('uses the controlled onSearchChange when provided', () => {
            const onSearchChange = vi.fn();

            const {result} = renderHook(() => useCreatableData({data: baseData, onSearchChange}));

            result.current.onSearchChange('hello');
            expect(onSearchChange).toHaveBeenCalledWith('hello');
        });
    });

    describe('persistCreatedValues', () => {
        it('persists a created value (stripping the prefix) so it appears in subsequent data', () => {
            const {result, rerender} = renderHook(
                ({searchValue}: {searchValue: string}) => useCreatableData({data: baseData, searchValue}),
                {initialProps: {searchValue: 'Solid'}},
            );

            result.current.persistCreatedValues('__creatable__:Solid');

            rerender({searchValue: ''});
            expect(result.current.data).toContain('Solid');
            expect(result.current.data).toHaveLength(baseData.length + 1);
        });

        it('persists values without prefix too', () => {
            const {result, rerender} = renderHook(
                ({searchValue}: {searchValue: string}) => useCreatableData({data: baseData, searchValue}),
                {initialProps: {searchValue: ''}},
            );

            result.current.persistCreatedValues('Solid');

            rerender({searchValue: ''});
            expect(result.current.data).toContain('Solid');
        });

        it('persists multiple created values from an array', () => {
            const {result, rerender} = renderHook(
                ({searchValue}: {searchValue: string}) => useCreatableData({data: baseData, searchValue}),
                {initialProps: {searchValue: ''}},
            );

            result.current.persistCreatedValues(['__creatable__:Solid', '__creatable__:Qwik']);

            rerender({searchValue: ''});
            expect(result.current.data).toContain('Solid');
            expect(result.current.data).toContain('Qwik');
        });

        it('does not duplicate values that already exist in base data', () => {
            const {result, rerender} = renderHook(
                ({searchValue}: {searchValue: string}) => useCreatableData({data: baseData, searchValue}),
                {initialProps: {searchValue: ''}},
            );

            result.current.persistCreatedValues('React');

            rerender({searchValue: ''});
            expect(result.current.data).toHaveLength(baseData.length);
        });

        it('handles null gracefully', () => {
            const {result} = renderHook(() => useCreatableData({data: baseData}));

            expect(() => result.current.persistCreatedValues(null)).not.toThrow();
        });
    });

    describe('getCreateOptionValue', () => {
        it('strips the prefix from a create option value', () => {
            expect(getCreateOptionValue('__creatable__:Solid')).toBe('Solid');
        });

        it('returns the value as-is if no prefix', () => {
            expect(getCreateOptionValue('react')).toBe('react');
        });
    });
});
