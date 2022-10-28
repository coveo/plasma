import {render, screen, userEvent} from '@test-utils';

import {DateRangePickerPresetSelect} from '../DateRangePickerPresetSelect';

describe('DateRangePickerPresetSelect', () => {
    it('calls onChange when selecting a preset', () => {
        const onChange = jest.fn();
        render(
            <DateRangePickerPresetSelect
                value={[null, null]}
                onChange={onChange}
                presets={{
                    year2k: {label: 'select me', range: [new Date(1999, 11, 31), new Date(2000, 0, 1)]},
                }}
            />
        );

        userEvent.click(
            screen.getByRole('searchbox', {
                name: 'Date range',
            })
        );
        userEvent.click(screen.getByRole('option', {name: 'select me'}));

        expect(onChange).toHaveBeenCalledWith([new Date(1999, 11, 31), new Date(2000, 0, 1)]);
    });

    it('autoselects the preset that match the value', () => {
        const {rerender} = render(
            <DateRangePickerPresetSelect
                value={[new Date(), new Date()]}
                presets={{
                    year2k: {label: 'select me', range: [new Date(1999, 11, 31), new Date(2000, 0, 1)]},
                }}
            />
        );

        // by default no value
        expect(screen.getByRole('searchbox', {name: 'Date range'})).toHaveValue('');

        rerender(
            <DateRangePickerPresetSelect
                value={[new Date(1999, 11, 31), new Date(2000, 0, 1)]}
                presets={{
                    year2k: {label: 'select me', range: [new Date(1999, 11, 31), new Date(2000, 0, 1)]},
                }}
            />
        );

        // if a preset match the value, it selects it
        expect(screen.getByRole('searchbox', {name: 'Date range'})).toHaveValue('select me');
    });
});
