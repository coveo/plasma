import {IconClipboardCheck, IconClipboardText} from '@coveord/plasma-react-icons';
import {ActionIconProps, CopyButton, MantineColor, TextInput, Tooltip} from '@mantine/core';
import {FunctionComponent, MouseEventHandler} from 'react';
import {ActionIcon} from '../action-icon/index.js';

export interface CopyToClipboardProps extends ActionIconProps {
    /**
     * The value to be copied to the clipboard.
     */
    value: string;
    /**
     * Whether to display the string to be copied alongside the button.
     *
     * @default false
     */
    withLabel?: boolean;
    /**
     * Called each time the value is copied to the clipboard
     */
    onCopy?: MouseEventHandler<HTMLButtonElement>;
    /**
     * The color of the icon when idle
     *
     * @default 'gray'
     */
    color?: MantineColor | (string & {});
    /**
     * The text displayed when hovering over the button
     *
     * @default 'Copy to clipboard'
     */
    tooltipLabelCopy?: string;
    /**
     * The text displayed when the value is copied to the clipboard
     *
     * @default 'Copied'
     */
    tooltipLabelCopied?: string;
}

const CopyToClipboardButton: FunctionComponent<Omit<CopyToClipboardProps, 'withLabel'>> = ({
    value,
    onCopy,
    color,
    tooltipLabelCopy = 'Copy to clipboard',
    tooltipLabelCopied = 'Copied',
    ...others
}) => (
    <CopyButton value={value} timeout={2000}>
        {({copied, copy}) => (
            <Tooltip label={copied ? tooltipLabelCopied : tooltipLabelCopy}>
                <ActionIcon.Quaternary
                    aria-label={tooltipLabelCopy}
                    color={copied ? 'success' : color}
                    onClick={(clickEvent) => {
                        copy();
                        onCopy?.(clickEvent);
                    }}
                    {...others}
                >
                    {copied ? <IconClipboardCheck size={16} /> : <IconClipboardText size={16} />}
                </ActionIcon.Quaternary>
            </Tooltip>
        )}
    </CopyButton>
);

export const CopyToClipboard: FunctionComponent<CopyToClipboardProps> = ({withLabel, ...others}) =>
    withLabel ? (
        <TextInput
            value={others.value}
            readOnly
            autoComplete="off"
            rightSection={<CopyToClipboardButton {...others} />}
        />
    ) : (
        <CopyToClipboardButton {...others} />
    );
