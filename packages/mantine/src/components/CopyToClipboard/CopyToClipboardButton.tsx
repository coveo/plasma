import {IconClipboardCheck, IconClipboardText} from '@coveord/plasma-react-icons';
import {CopyButton, Tooltip} from '@mantine/core';
import {MouseEventHandler, forwardRef} from 'react';
import {ActionIcon, ActionIconProps} from '../ActionIcon/ActionIcon.js';

export interface CopyToClipboardBaseProps {
    /**
     * The value to be copied to the clipboard.
     */
    value: string;
    /**
     * Called each time the value is copied to the clipboard.
     */
    onCopy?: MouseEventHandler<HTMLButtonElement>;
    /**
     * The text displayed when hovering over the button.
     *
     * @default 'Copy to clipboard'
     */
    tooltipLabelCopy?: string;
    /**
     * The text displayed when the value is copied to the clipboard.
     *
     * @default 'Copied'
     */
    tooltipLabelCopied?: string;
}

interface CopyToClipboardIconButtonProps extends Omit<ActionIconProps, 'children'> {
    copied: boolean;
    tooltipLabelCopy?: string;
    tooltipLabelCopied?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CopyToClipboardIconButton = forwardRef<HTMLButtonElement, CopyToClipboardIconButtonProps>(
    ({copied, tooltipLabelCopy = 'Copy to clipboard', tooltipLabelCopied = 'Copied', ...others}, ref) => (
        <Tooltip
            key={`${copied ? 'copied' : 'copy'}-tooltip`}
            label={copied ? tooltipLabelCopied : tooltipLabelCopy}
            opened={copied || undefined}
        >
            <ActionIcon.Quaternary ref={ref} {...others}>
                {copied ? <IconClipboardCheck size={16} /> : <IconClipboardText size={16} />}
            </ActionIcon.Quaternary>
        </Tooltip>
    ),
);

export interface CopyToClipboardButtonProps extends ActionIconProps, CopyToClipboardBaseProps {}

export const CopyToClipboardButton = ({
    value,
    onCopy,
    tooltipLabelCopy,
    tooltipLabelCopied,
    ...others
}: CopyToClipboardButtonProps) => (
    <CopyButton value={value} timeout={2000}>
        {({copied, copy}) => (
            <CopyToClipboardIconButton
                aria-label={tooltipLabelCopy}
                copied={copied}
                tooltipLabelCopy={tooltipLabelCopy}
                tooltipLabelCopied={tooltipLabelCopied}
                onClick={(clickEvent) => {
                    copy();
                    onCopy?.(clickEvent);
                }}
                {...others}
            />
        )}
    </CopyButton>
);

CopyToClipboardButton.displayName = 'CopyToClipboard.Button';
