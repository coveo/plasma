import {ComboboxItem, Select, SelectProps} from '@mantine/core';
import {type DatesRangeValue} from '@mantine/dates';
import dayjs from 'dayjs';
import {useEffect, useState} from 'react';

export interface DateRangePickerPreset {
    label: string;
    range: DatesRangeValue;
}

interface DateRangePickerPresetsSelectProps {
    presets: Record<string, DateRangePickerPreset>;
    value: DatesRangeValue;
    onChange?(value: DatesRangeValue): void;
    selectProps?: Partial<Omit<SelectProps, 'data' | 'value' | 'onChange'>>;
}

export const DateRangePickerPresetSelect = ({
    presets,
    value,
    onChange,
    selectProps = {},
}: DateRangePickerPresetsSelectProps) => {
    const selectData: ComboboxItem[] = Object.entries(presets).map(([val, {label}]) => ({value: val, label}));

    const getSelectedPreset = () => {
        if (value[0] !== null && value[1] !== null && dayjs(value[0]).unix() !== dayjs(value[1]).unix()) {
            const selected = Object.entries(presets).find(
                ([, {range}]) => dayjs(range[0]).isSame(value[0]) && dayjs(value[1]).isSame(value[1]),
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
            maxDropdownHeight={240}
        />
    );
};
