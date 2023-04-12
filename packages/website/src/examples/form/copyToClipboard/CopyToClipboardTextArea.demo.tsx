import {CopyToClipboard, CopyToClipboardVariant} from '@coveord/plasma-mantine';

export default () => (
    <CopyToClipboard
        value="This is a longer piece of text that you may possibly want to consider the benefits that would ensue were you to copy me."
        variant={CopyToClipboardVariant.TextArea}
    />
);
