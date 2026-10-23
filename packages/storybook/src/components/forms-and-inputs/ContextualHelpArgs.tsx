import {type ReactNode} from 'react';
import {ContextualHelp} from '@coveord/plasma-mantine/components/ContextualHelp';
import {type WithContextualHelpArgs} from '../../Args.js';

const withContextualHelp = (label: ReactNode, contextualHelp?: ReactNode) =>
    contextualHelp ? (
        <>
            {label}
            <ContextualHelp ml="xxs">{contextualHelp}</ContextualHelp>
        </>
    ) : (
        label
    );

export const withLabelContextualHelpProps = <T extends {label?: ReactNode}>({
    contextualHelp,
    label,
    ...props
}: T & WithContextualHelpArgs) => ({
    ...props,
    label: withContextualHelp(label, contextualHelp),
});

export const withTitleContextualHelpProps = <T extends {title?: ReactNode}>({
    contextualHelp,
    title,
    ...props
}: T & WithContextualHelpArgs) => ({
    ...props,
    title: withContextualHelp(title, contextualHelp),
});
