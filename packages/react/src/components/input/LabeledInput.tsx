import classNames from 'classnames';
import {ReactNode, FunctionComponent} from 'react';

import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {InputDescription} from './InputDescription';

export interface ILabeledInputProps {
    label?: ReactNode;
    message?: ReactNode;
    helpText?: ReactNode;
    headerClassName?: string;
    optionalInformation?: string;
}

/**
 * @deprecated Use Mantine Input instead: https://mantine.dev/core/input/
 */
export const LabeledInput: FunctionComponent<ILabeledInputProps> = ({
    children,
    label,
    message,
    helpText: description,
    headerClassName,
    optionalInformation: information,
}) => {
    const header =
        !!label || !!information ? (
            <div className="flex">
                <header className={classNames('label', headerClassName)}>
                    {!!label ? <span>{label}</span> : null}
                </header>
                {!!information ? (
                    <Tooltip title={information} placement={TooltipPlacement.Right} className="ml1 labeled-tooltip">
                        <Svg svgName="info" svgClass="icon mod-14" />
                    </Tooltip>
                ) : null}
            </div>
        ) : null;

    return (
        <div className="labeled-input">
            {header}
            {children}
            {!!message && <InputDescription>{message}</InputDescription>}
            {!!description && <InputDescription>{description}</InputDescription>}
        </div>
    );
};
