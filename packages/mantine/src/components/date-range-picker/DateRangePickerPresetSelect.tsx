import {DateRangePickerValue, isSameDate} from '@mantine/dates';
import {Select, SelectItem, SelectProps} from '@mantine/core';
import {useState, useEffect} from 'react';

export interface DateRangePickerPreset {
    label: string;
    range: DateRangePickerValue;
}

interface DateRangePickerPresetsSelectProps<T> {
    presets: Record<string, DateRangePickerPreset>;
    value: DateRangePickerValue;
    onChange?(value: DateRangePickerValue): void;
    selectProps?: Partial<Omit<SelectProps, 'data' | 'value' | 'onChange'>>;
}

export const DateRangePickerPresetSelect = <T extends unknown>({
    presets,
    value,
    onChange,
    selectProps = {},
}: DateRangePickerPresetsSelectProps<T>) => {
    const selectData: SelectItem[] = Object.entries(presets).map(([val, {label}]) => ({value: val, label}));

    const getSelectedPreset = () => {
        if (value[0] !== null && value[1] !== null) {
            const selected = Object.entries(presets).find(
                ([id, {range}]) => isSameDate(range[0]!, value[0]!) && isSameDate(range[1]!, value[1]!)
            );
            if (selected) {
                return selected[0];
            }
        }
        return null;
    };

    const [selectedPreset, setSelectedPreset] = useState<string | null>(getSelectedPreset());

    useEffect(() => {
        const newPreset = getSelectedPreset();
        if (newPreset !== selectedPreset) {
            setSelectedPreset(newPreset);
        }
    }, [value]);

    const onChangePreset = (presetId: keyof typeof presets) => {
        const range = presets[presetId].range as any;
        onChange?.(range);
    };

    return (
        <Select
            label="Date range"
            placeholder="Select a date range"
            {...selectProps}
            value={selectedPreset}
            onChange={onChangePreset}
            data={selectData}
        />
    );
};
