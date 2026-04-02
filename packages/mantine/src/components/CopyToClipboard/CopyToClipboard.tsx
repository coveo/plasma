import {FunctionComponent} from 'react';
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

export const CopyToClipboard: FunctionComponent<CopyToClipboardButtonProps> & {
    Button: typeof CopyToClipboardButton;
    Input: typeof CopyToClipboardInput;
    Menu: typeof CopyToClipboardMenu;
    MenuTarget: typeof CopyToClipboardMenuTarget;
    MenuItem: typeof CopyToClipboardMenuItem;
} = ({withLabel, value, onCopy, color, tooltipLabelCopy, tooltipLabelCopied, ...others}) =>
    withLabel ? (
        <CopyToClipboardInput
            value={value}
            onCopy={onCopy}
            color={color}
            tooltipLabelCopy={tooltipLabelCopy}
            tooltipLabelCopied={tooltipLabelCopied}
        />
    ) : (
        <CopyToClipboardButton
            value={value}
            onCopy={onCopy}
            color={color}
            tooltipLabelCopy={tooltipLabelCopy}
            tooltipLabelCopied={tooltipLabelCopied}
            {...others}
        />
    );

CopyToClipboard.displayName = 'CopyToClipboard';
CopyToClipboard.Button = CopyToClipboardButton;
CopyToClipboard.Input = CopyToClipboardInput;
CopyToClipboard.Menu = CopyToClipboardMenu;
CopyToClipboard.MenuTarget = CopyToClipboardMenuTarget;
CopyToClipboard.MenuItem = CopyToClipboardMenuItem;
