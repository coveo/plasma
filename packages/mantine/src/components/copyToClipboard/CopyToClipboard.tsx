import {CheckSize16Px, CopySize16Px} from '@coveord/plasma-react-icons';
import {ActionIcon, CopyButton, TextInput, Tooltip} from '@mantine/core';

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
}

const CopyToClipboardButton: React.FunctionComponent<Omit<CopyToClipboardProps, 'withLabel'>> = ({value, onCopy}) => (
    <CopyButton value={value} timeout={2000}>
        {({copied, copy}) => (
            <Tooltip label={copied ? 'Copied' : 'Copy'}>
                <ActionIcon
                    color={copied ? 'success' : 'gray'}
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

export const CopyToClipboard: React.FunctionComponent<CopyToClipboardProps> = ({withLabel, ...others}) =>
    withLabel ? (
        <TextInput
            classNames={{input: 'var(--mantine-color-gray-7)'}}
            value={others.value}
            readOnly
            autoComplete="off"
            rightSection={<CopyToClipboardButton {...others} />}
        />
    ) : (
        <CopyToClipboardButton {...others} />
    );
