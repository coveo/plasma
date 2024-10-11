import {CheckSize16Px, CopySize16Px} from '@coveord/plasma-react-icons';
import {ActionIcon, CopyButton, MantineColor, TextInput, Tooltip} from '@mantine/core';
import {FunctionComponent} from 'react';

export interface CopyToClipboardProps {
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
    onCopy?: () => void;
    /**
     * The color of the icon when idle
     *
     * @default 'gray'
     */
    color?: MantineColor | (string & {});
}

const CopyToClipboardButton: FunctionComponent<Omit<CopyToClipboardProps, 'withLabel'>> = ({value, onCopy, color}) => (
    <CopyButton value={value} timeout={2000}>
        {({copied, copy}) => (
            <Tooltip label={copied ? 'Copied' : 'Copy'}>
                <ActionIcon
                    variant="subtle"
                    color={copied ? 'success' : color}
                    onClick={() => {
                        copy();
                        onCopy?.();
                    }}
                >
                    {copied ? <CheckSize16Px height={16} /> : <CopySize16Px height={16} />}
                </ActionIcon>
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
            rightSection={<CopyToClipboardButton color="action" {...others} />}
        />
    ) : (
        <CopyToClipboardButton {...others} />
    );
