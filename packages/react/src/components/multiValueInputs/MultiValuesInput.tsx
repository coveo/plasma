import {ReactNode, FunctionComponent, ChangeEvent} from 'react';
import * as _ from 'underscore';

import classNames from 'clsx';
import {IButtonProps} from '../button/Button';
import {IInputOwnProps} from '../input/Input';
import {InputConnected} from '../input/Input';
import {multilineBoxWithRemoveButton} from '../multilineBox/hoc/MultilineBoxWithRemoveButton';
import {IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../multilineBox/MultilineBox';
import {IClassName} from '../../utils';

const MultilineBoxWithRemoveButton = _.compose(
    multilineBoxWithRemoveButton({
        containerNode: (
            child: ReactNode,
            getRemoveButton: (props?: Partial<IButtonProps>) => ReactNode,
            data: Array<IMultilineSingleBoxProps<string>>,
            index: number
        ) => (
            <div key={`${data[index].id}`} className="flex">
                <div className="flex-auto">{child}</div>
                {getRemoveButton({
                    classes: ['align-end', 'mt1', 'mod-link'],
                })}
            </div>
        ),
    })
)(MultilineBox);

export interface MultiValuesInputProps {
    id: string;
    data: string[];
    inputProps?: Omit<Partial<IInputOwnProps>, 'id'>;
    dataLimit?: number;
    reachedLimitPlaceholder?: string;
    disabledTooltipTitle?: string;
    disabledInputInnerClasses?: IClassName;
    disabledInputClasses?: IClassName;
    disabled?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const MultiValuesInput: FunctionComponent<MultiValuesInputProps> = ({
    id,
    data,
    inputProps,
    dataLimit,
    reachedLimitPlaceholder,
    disabledTooltipTitle,
    disabledInputInnerClasses,
    disabledInputClasses,
    disabled,
}) => (
    <MultilineBoxWithRemoveButton
        id={id}
        data={data}
        renderBody={(allData: Array<IMultilineSingleBoxProps<string>>, parentProps: IMultilineParentProps) =>
            allData.map((cData: IMultilineSingleBoxProps<string>, index) => {
                const isInputLimitReached = !!dataLimit && index >= dataLimit;
                const isIndexEqualToDataLimit = !!dataLimit && index === dataLimit;
                const reachedPlaceholder = !isIndexEqualToDataLimit ? reachedLimitPlaceholder : undefined;
                const isTooltipRequired = isInputLimitReached && !_.isEmpty(cData.props);
                const innerInputClasses = isInputLimitReached
                    ? classNames(inputProps?.innerInputClasses, disabledInputInnerClasses)
                    : inputProps?.innerInputClasses;
                const classes = isInputLimitReached
                    ? classNames(inputProps?.classes, disabledInputClasses)
                    : inputProps?.classes;

                if (cData.isLast && disabled) {
                    return null;
                }

                return (
                    <InputConnected
                        key={cData.id}
                        id={cData.id}
                        defaultValue={cData.props}
                        {...inputProps}
                        onKeyUp={inputProps?.onKeyUp}
                        onChangeHandler={(e: ChangeEvent<HTMLInputElement>) => {
                            if (e.currentTarget.value !== '' && cData.isLast) {
                                parentProps.addNewBox();
                            }
                        }}
                        isReadOnly={disabled || isInputLimitReached}
                        onBlur={(value: string) => {
                            inputProps?.onBlur?.(value);
                            if (value === '' && !cData.isLast) {
                                parentProps.removeBox(cData.id);
                            }
                        }}
                        placeholder={isInputLimitReached ? reachedPlaceholder : inputProps?.placeholder}
                        classes={classes}
                        innerInputClasses={innerInputClasses}
                        disabledTooltip={isTooltipRequired && disabledTooltipTitle ? disabledTooltipTitle : ''}
                        labelTitle={index === 0 ? inputProps?.labelTitle : ''}
                        validate={inputProps?.validate}
                    />
                );
            })
        }
        defaultProps=""
        disabled={disabled}
    />
);
