import {Factory, MantineComponent, useProps} from '@mantine/core';
import {CopyToClipboardButton, CopyToClipboardButtonProps} from './CopyToClipboardButton.js';
import {CopyToClipboardInput} from './CopyToClipboardInput.js';
import {CopyToClipboardMenu, CopyToClipboardMenuTarget, CopyToClipboardMenuItem} from './CopyToClipboardMenu.js';

/**
 * @deprecated Use `CopyToClipboardButtonProps` instead.
 */
export type CopyToClipboardProps = CopyToClipboardButtonProps;

export type {CopyToClipboardBaseProps, CopyToClipboardButtonProps} from './CopyToClipboardButton.js';
export type {CopyToClipboardInputProps} from './CopyToClipboardInput.js';
export type {
    CopyToClipboardMenuProps,
    CopyToClipboardMenuTargetProps,
    CopyToClipboardMenuItemProps,
} from './CopyToClipboardMenu.js';

export interface CopyToClipboardLegacyProps extends CopyToClipboardButtonProps {
    /**
     * @deprecated Use `CopyToClipboard.Input` instead.
     */
    withLabel?: boolean;
}

export type CopyToClipboardFactory = Factory<{
    props: CopyToClipboardLegacyProps;
    ref: never;
    staticComponents: {
        Button: typeof CopyToClipboardButton;
        Input: typeof CopyToClipboardInput;
        Menu: typeof CopyToClipboardMenu;
        MenuTarget: typeof CopyToClipboardMenuTarget;
        MenuItem: typeof CopyToClipboardMenuItem;
    };
}>;

const defaultProps: Partial<CopyToClipboardLegacyProps> = {};

export const CopyToClipboard = ((_props) => {
    const {withLabel, value, onCopy, tooltipLabelCopy, tooltipLabelCopied, ...others} = useProps(
        'CopyToClipboard',
        defaultProps,
        _props,
    );

    return withLabel ? (
        <CopyToClipboardInput
            value={value}
            onCopy={onCopy}
            tooltipLabelCopy={tooltipLabelCopy}
            tooltipLabelCopied={tooltipLabelCopied}
        />
    ) : (
        <CopyToClipboardButton
            value={value}
            onCopy={onCopy}
            tooltipLabelCopy={tooltipLabelCopy}
            tooltipLabelCopied={tooltipLabelCopied}
            {...others}
        />
    );
}) as MantineComponent<CopyToClipboardFactory>;

CopyToClipboard.displayName = 'CopyToClipboard';
CopyToClipboard.Button = CopyToClipboardButton;
CopyToClipboard.Input = CopyToClipboardInput;
CopyToClipboard.Menu = CopyToClipboardMenu;
CopyToClipboard.MenuTarget = CopyToClipboardMenuTarget;
CopyToClipboard.MenuItem = CopyToClipboardMenuItem;
