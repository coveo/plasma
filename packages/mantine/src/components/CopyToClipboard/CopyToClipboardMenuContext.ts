import {createSafeContext} from '@mantine/core';

interface CopyToClipboardMenuContextValue {
    copied: boolean;
    onItemCopy: () => void;
}

export const [CopyToClipboardMenuProvider, useCopyToClipboardMenuContext] =
    createSafeContext<CopyToClipboardMenuContextValue>('CopyToClipboard.Menu component was not found in the tree');
