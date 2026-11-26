import {IconUpload} from '@coveord/plasma-react-icons';
import {FileButton, Tooltip} from '@mantine/core';
import {FunctionComponent} from 'react';
import {ActionIcon} from '../../ActionIcon/ActionIcon.js';

export interface UploadProps {
    /** File types accepted by the file picker, e.g. `'.json,application/json'` */
    accept?: string;
    /**
     * Label of the button, used as tooltip and accessible name
     *
     * @default 'Upload file'
     */
    label?: string;
    disabled?: boolean;
    onUpload: (file: File) => void;
}

export const Upload: FunctionComponent<UploadProps> = ({accept, label = 'Upload file', disabled, onUpload}) => (
    <FileButton accept={accept} onChange={(file) => file && onUpload(file)} disabled={disabled}>
        {(props) => (
            <Tooltip label={label}>
                <ActionIcon.Quaternary aria-label={label} disabled={disabled} {...props}>
                    <IconUpload size={16} />
                </ActionIcon.Quaternary>
            </Tooltip>
        )}
    </FileButton>
);
