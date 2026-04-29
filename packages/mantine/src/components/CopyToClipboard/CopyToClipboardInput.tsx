import {TextInput, TextInputProps} from '@mantine/core';
import {CopyToClipboardBaseProps, CopyToClipboardButton} from './CopyToClipboardButton.js';

export interface CopyToClipboardInputProps
    extends Omit<TextInputProps, 'value' | 'rightSection' | 'onCopy'>, CopyToClipboardBaseProps {}

export const CopyToClipboardInput = ({
    value,
    onCopy,
    tooltipLabelCopy,
    tooltipLabelCopied,
    ...others
}: CopyToClipboardInputProps) => (
    <TextInput
        value={value}
        readOnly
        autoComplete="off"
        rightSection={
            <CopyToClipboardButton
                value={value}
                onCopy={onCopy}
                tooltipLabelCopy={tooltipLabelCopy}
                tooltipLabelCopied={tooltipLabelCopied}
            />
        }
        {...others}
    />
);

CopyToClipboardInput.displayName = 'CopyToClipboard.Input';
