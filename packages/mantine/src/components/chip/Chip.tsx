import {ChipFactory, ChipGroup, factory, Chip as MantineChip} from '@mantine/core';

export const Chip = factory<ChipFactory>(({variant: _variant, ...props}, ref) => <MantineChip {...props} ref={ref} />);

Chip.Group = ChipGroup;
