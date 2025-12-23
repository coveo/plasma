import {FileInput} from '@mantine/core';

(FileInput as typeof FileInput & {displayName: string}).displayName = 'FileInput';

export {FileInput, type FileInputFactory, type FileInputProps} from '@mantine/core';
