import React from 'react';

import {CheckSize24Px, CopySize24Px} from '@coveord/plasma-react-icons';
import {TextInput, CopyButton, Tooltip, ActionIcon, createStyles} from '@mantine/core';

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
}

const useStyles = createStyles((theme) => ({
    input: {
        color: theme.colors.gray[7],
    },
}));

const CopyToClipboardButton: React.FunctionComponent<{value: string}> = ({value}) => (
    <CopyButton value={value} timeout={2000}>
        {({copied, copy}) => (
            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="top">
                <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                    {copied ? <CheckSize24Px /> : <CopySize24Px />}
                </ActionIcon>
            </Tooltip>
        )}
    </CopyButton>
);

export const CopyToClipboard: React.FunctionComponent<CopyToClipboardProps> = ({value, withLabel}) => {
    const {classes} = useStyles();

    return withLabel ? (
        <TextInput
            classNames={{
                input: classes.input,
            }}
            value={value}
            readOnly
            rightSection={<CopyToClipboardButton value={value} />}
        />
    ) : (
        <CopyToClipboardButton value={value} />
    );
};
