import {render, screen, userEvent} from '@test-utils';

import {DateRangePickerPresetSelect} from '../DateRangePickerPresetSelect.js';

describe('DateRangePickerPresetSelect', () => {
    it('calls onChange when selecting a preset', async () => {
        const user = userEvent.setup({delay: null});
        const onChange = vi.fn();
        render(
            <DateRangePickerPresetSelect
                value={[null, null]}
                onChange={onChange}
                presets={{
                    year2k: {
                        label: 'select me',
                        range: [new Date(1999, 11, 31).toISOString(), new Date(2000, 0, 1).toISOString()],
                    },
                }}
            />,
        );

        await user.click(
            screen.getByRole('combobox', {
                name: 'Date range',
            }),
        );
        await user.click(screen.getByRole('option', {name: 'select me'}));

        expect(onChange).toHaveBeenCalledExactlyOnceWith([
            new Date(1999, 11, 31).toISOString(),
            new Date(2000, 0, 1).toISOString(),
        ]);
    });

    it('autoselects the preset that match the value', () => {
        const {rerender} = render(
            <DateRangePickerPresetSelect
                value={[new Date().toISOString(), new Date().toISOString()]}
                presets={{
                    year2k: {
                        label: 'select me',
                        range: [new Date(1999, 11, 31).toISOString(), new Date(2000, 0, 1).toISOString()],
                    },
                }}
            />,
        );

        // by default no value
        expect(screen.getByRole('combobox', {name: 'Date range'})).toHaveValue('');

        rerender(
            <DateRangePickerPresetSelect
                value={[new Date(1999, 11, 31).toISOString(), new Date(2000, 0, 1).toISOString()]}
                presets={{
                    year2k: {
                        label: 'select me',
                        range: [new Date(1999, 11, 31).toISOString(), new Date(2000, 0, 1).toISOString()],
                    },
                }}
            />,
        );

        // if a preset match the value, it selects it
        expect(screen.getByRole('combobox', {name: 'Date range'})).toHaveValue('select me');
    });
});
