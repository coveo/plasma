import {Chip as MantineChip, type ChipProps as MantineChipProps} from '@mantine/core';
import React from 'react';

export type ChipProps = Omit<MantineChipProps, 'variant'>;

export const Chip: React.FC<ChipProps> = (props) => <MantineChip {...props} />;
