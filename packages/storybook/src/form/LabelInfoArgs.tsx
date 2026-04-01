import {type ReactNode} from 'react';
import {Input} from '../../../mantine/src/components/Input/Input.js';
import {type WithLabelInfoArgs} from '../Args.js';

const withLabelInfo = (label: ReactNode, labelInfo?: ReactNode) =>
    labelInfo ? (
        <>
            {label}
            <Input.LabelInfo>{labelInfo}</Input.LabelInfo>
        </>
    ) : (
        label
    );

export const withLabelInfoProps = <T extends {label?: ReactNode}>({
    labelInfo,
    label,
    ...props
}: T & WithLabelInfoArgs) => ({
    ...props,
    label: withLabelInfo(label, labelInfo),
});

export const withTitleInfoProps = <T extends {title?: ReactNode}>({
    labelInfo,
    title,
    ...props
}: T & WithLabelInfoArgs) => ({
    ...props,
    title: withLabelInfo(title, labelInfo),
});
