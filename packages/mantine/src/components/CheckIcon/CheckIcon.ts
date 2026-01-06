import {CheckIcon} from '@mantine/core';

(CheckIcon as typeof CheckIcon & {displayName: string}).displayName = 'CheckIcon';

export {CheckIcon, type CheckIconProps} from '@mantine/core';
