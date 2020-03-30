import classNames from 'classnames';
import * as React from 'react';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {InputDescription} from './InputDescription';

export interface ILabeledInputProps {
    label?: React.ReactNode;
    message?: React.ReactNode;
    helpText?: React.ReactNode;
    headerClassName?: string;
    optionalInformation?: string;
}

export const LabeledInput: React.FunctionComponent<ILabeledInputProps> = ({
    children,
    label,
    message,
    helpText: description,
    headerClassName,
    optionalInformation: information,
}) => {
    const header =
        !!label || !!information ? (
            <header className={classNames('label', 'text-light-blue', headerClassName)}>
                {!!label ? <span>{label}</span> : null}
                {!!information ? (
                    <Tooltip title={information} placement={TooltipPlacement.Top} className="ml1">
                        <Svg svgName="info-14" svgClass="icon fill-medium-grey" />
                    </Tooltip>
                ) : null}
            </header>
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
