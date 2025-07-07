import {Chip as MantineChip, type ChipProps as MantineChipProps} from '@mantine/core';
import {forwardRef} from 'react';

export type ChipProps = Omit<MantineChipProps, 'variant'>;

export const Chip = forwardRef<HTMLInputElement, ChipProps>((props, ref) => <MantineChip {...props} ref={ref} />);
