import {IconUpload} from '@coveord/plasma-react-icons';
import {FileButton, Tooltip} from '@mantine/core';
import {FunctionComponent, useRef} from 'react';
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

export const Upload: FunctionComponent<UploadProps> = ({accept, label = 'Upload file', disabled, onUpload}) => {
    const resetRef = useRef<() => void>(null);
    const handleChange = (file: File | null) => {
        // clear the input so picking the same file again still triggers a change
        resetRef.current?.();
        if (file) {
            onUpload(file);
        }
    };

    return (
        <FileButton accept={accept} onChange={handleChange} disabled={disabled} resetRef={resetRef}>
            {(props) => (
                // a disabled button fires no mouse events, so `disabledTooltip` takes over while disabled
                <Tooltip label={label} disabled={disabled}>
                    <ActionIcon.Quaternary aria-label={label} disabled={disabled} disabledTooltip={label} {...props}>
                        <IconUpload size={16} />
                    </ActionIcon.Quaternary>
                </Tooltip>
            )}
        </FileButton>
    );
};
