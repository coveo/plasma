import {ActionIconProps, CopyButton, Menu, MenuItemProps, MenuProps} from '@mantine/core';
import {useTimeout} from '@mantine/hooks';
import {Children, MouseEventHandler, ReactElement, ReactNode, forwardRef, isValidElement, useState} from 'react';
import {CopyToClipboardIconButton} from './CopyToClipboardButton.js';
import {CopyToClipboardMenuProvider, useCopyToClipboardMenuContext} from './CopyToClipboardMenuContext.js';

export interface CopyToClipboardMenuTargetProps extends Omit<ActionIconProps, 'children'> {
    /**
     * The text displayed when hovering over the button.
     * @default 'Copy to clipboard'
     */
    tooltipLabelCopy?: string;
    /**
     * The text displayed when the value is copied to the clipboard.
     * @default 'Copied'
     */
    tooltipLabelCopied?: string;
}

export const CopyToClipboardMenuTarget = forwardRef<HTMLButtonElement, CopyToClipboardMenuTargetProps>(
    ({tooltipLabelCopy = 'Copy to clipboard', tooltipLabelCopied = 'Copied', ...others}, ref) => {
        const {copied} = useCopyToClipboardMenuContext();
        return (
            <CopyToClipboardIconButton
                ref={ref}
                aria-label={tooltipLabelCopy}
                copied={copied}
                tooltipLabelCopy={tooltipLabelCopy}
                tooltipLabelCopied={tooltipLabelCopied}
                {...others}
            />
        );
    },
);

CopyToClipboardMenuTarget.displayName = 'CopyToClipboard.MenuTarget';

export interface CopyToClipboardMenuItemProps extends Omit<MenuItemProps, 'onClick'> {
    /**
     * The value to be copied to the clipboard when this item is clicked.
     */
    value: string;
    /**
     * Called each time the value is copied to the clipboard.
     */
    onCopy?: MouseEventHandler<HTMLButtonElement>;
}

export const CopyToClipboardMenuItem = ({value, onCopy, children, ...others}: CopyToClipboardMenuItemProps) => {
    const {onItemCopy} = useCopyToClipboardMenuContext();
    return (
        <CopyButton value={value} timeout={2000}>
            {({copy}) => (
                <Menu.Item
                    onClick={(e) => {
                        copy();
                        onItemCopy();
                        onCopy?.(e);
                    }}
                    {...others}
                >
                    {children}
                </Menu.Item>
            )}
        </CopyButton>
    );
};

CopyToClipboardMenuItem.displayName = 'CopyToClipboard.MenuItem';

export interface CopyToClipboardMenuProps extends MenuProps {
    children: ReactNode;
}

export const CopyToClipboardMenu = ({children, ...others}: CopyToClipboardMenuProps) => {
    const [copied, setCopied] = useState(false);
    const {start: startResetTimeout} = useTimeout(() => setCopied(false), 2000);

    const onItemCopy = () => {
        setCopied(true);
        startResetTimeout();
    };

    let target: ReactElement | undefined;
    const items: ReactNode[] = [];
    Children.forEach(children, (child) => {
        if (isValidElement(child) && child.type === CopyToClipboardMenuTarget) {
            target = child;
        } else {
            items.push(child);
        }
    });

    return (
        <CopyToClipboardMenuProvider value={{copied, onItemCopy}}>
            <Menu {...others}>
                <Menu.Target>{target}</Menu.Target>
                <Menu.Dropdown>{items}</Menu.Dropdown>
            </Menu>
        </CopyToClipboardMenuProvider>
    );
};

CopyToClipboardMenu.displayName = 'CopyToClipboard.Menu';
