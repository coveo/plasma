import * as React from 'react';
import * as _ from 'underscore';

import {IButtonProps} from '../button/Button';
import {IInputOwnProps} from '../input/Input';
import {InputConnected} from '../input/InputConnected';
import {multilineBoxWithRemoveButton} from '../multilineBox/hoc/MultilineBoxWithRemoveButton';
import {IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../multilineBox/MultilineBox';

const MultilineBoxWithRemoveButton = _.compose(
    multilineBoxWithRemoveButton({
        containerNode: (
            child: React.ReactNode,
            getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode,
            data: Array<IMultilineSingleBoxProps<string>>,
            index: number
        ) => (
            <div key={`${data[index].id}`} className="flex">
                <div className="flex-auto">{child}</div>
                {getRemoveButton({
                    classes: ['mod-no-border', 'bg-transparent', 'align-end', 'mt1'],
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
}

export const MultiValuesInput: React.FunctionComponent<MultiValuesInputProps> = ({
    id,
    data,
    inputProps,
    dataLimit,
    reachedLimitPlaceholder,
    disabledTooltipTitle,
}) => {
    const limit = !!dataLimit ? dataLimit : Infinity;
    return (
        <MultilineBoxWithRemoveButton
            id={id}
            data={data}
            renderBody={(allData: Array<IMultilineSingleBoxProps<string>>, parentProps: IMultilineParentProps) =>
                allData.map((cData: IMultilineSingleBoxProps<string>, index) => (
                    <InputConnected
                        key={cData.id}
                        id={cData.id}
                        defaultValue={cData.props}
                        {...inputProps}
                        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            inputProps?.onKeyUp?.(e);
                            const value = e.currentTarget.value;
                            if (value !== '' && cData.isLast) {
                                parentProps.addNewBox();
                            }
                        }}
                        onBlur={(value: string) => {
                            inputProps?.onBlur?.(value);
                            if (value === '' && !cData.isLast) {
                                parentProps.removeBox(cData.id);
                            }
                        }}
                        placeholder={index >= limit ? reachedLimitPlaceholder : inputProps?.placeholder}
                        disabled={index >= limit}
                        classes={index >= limit && 'mt0 mb0 ml-1'}
                        innerInputClasses={index >= limit && 'mod-no-border input-wider-text-box disabled-input'}
                        disabledTooltip={index >= limit && disabledTooltipTitle ? disabledTooltipTitle : ''}
                        labelTitle={index === 0 ? inputProps?.labelTitle : ''}
                        validate={index === 0 ? inputProps?.validate : (value: string) => true}
                    />
                ))
            }
            defaultProps=""
        />
    );
};
