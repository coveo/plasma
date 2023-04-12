import React from 'react';

import {CheckSize24Px, CopySize24Px} from '@coveord/plasma-react-icons';
import {TextInput, CopyButton, Tooltip, ActionIcon, createStyles, Textarea} from '@mantine/core';

export enum CopyToClipboardVariant {
    Button = 'button',
    Text = 'text',
    TextArea = 'textarea',
}

export interface CopyToClipboardProps {
    /**
     * The value to be copied to the clipboard.
     */
    value: string;
    /**
     * The variant type to use when displaying the component.
     *
     * @default "button"
     */
    variant?: 'button' | 'text' | 'textarea';
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

export const CopyToClipboard: React.FunctionComponent<CopyToClipboardProps> = ({
    value,
    variant = CopyToClipboardVariant.Button,
}) => {
    const {classes} = useStyles();

    if (variant === CopyToClipboardVariant.Button) {
        return <CopyToClipboardButton value={value} />;
    } else if (variant === CopyToClipboardVariant.Text) {
        return (
            <TextInput
                classNames={{
                    input: classes.input,
                }}
                value={value}
                readOnly
                rightSection={<CopyToClipboardButton value={value} />}
            />
        );
    } else if (variant === CopyToClipboardVariant.TextArea) {
        return (
            <Textarea
                classNames={{
                    input: classes.input,
                }}
                value={value}
                autosize
                readOnly
                rightSection={<CopyToClipboardButton value={value} />}
            />
        );
    } else {
        return null;
    }
};
