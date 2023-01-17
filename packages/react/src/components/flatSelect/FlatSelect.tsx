import classNames from 'clsx';
import {FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {IDispatch} from '../../utils';
import {addFlatSelect, removeFlatSelect, selectFlatSelect} from './FlatSelectActions';
import {FlatSelectOption, IFlatSelectOptionProps} from './FlatSelectOption';
import {FlatSelectSelectors} from './FlatSelectSelectors';

export interface IFlatSelectOwnProps {
    /**
     * The unique identifier of the flat select
     */
    id: string;
    /**
     * The list of options to show
     */
    options: IFlatSelectOptionProps[];
    /**
     * Additionnal CSS class for the flat select
     */
    className?: string;
    /**
     * Whether the flat select options are grouped. Grouped options are displayed closer together
     *
     * @default false
     */
    group?: boolean;
    /**
     * Whether the flat select is an option picker. This makes the visual lighter and fits well inside a dropdown
     *
     * @default false
     */
    optionPicker?: boolean;
    /**
     * The id of the initialy selected option
     */
    defaultSelectedOptionId?: string;
    /**
     * A callback function that is executed when the user click on a value
     *
     * @param option an object representing the value being clicked
     */
    onClick?: (option: IFlatSelectOptionProps) => void;
    /**
     * Whether the flat select is disabled
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * @deprecated use className instead
     */
    classes?: string[];
}

export type IFlatSelectProps = IFlatSelectOwnProps &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

/**
 * @deprecated use Mantine SegmentedControl instead: https://mantine.dev/core/segmented-control/
 */
export const FlatSelect: FunctionComponent<IFlatSelectProps> = ({
    onDestroy,
    onRender,
    onOptionClick,
    onClick,
    options,
    disabled,
    selectedOptionId,
    group,
    optionPicker,
    classes,
    className,
}) => {
    useEffect(() => {
        onRender?.();
        return () => void onDestroy();
    }, []);

    const handleClick = (option: IFlatSelectOptionProps) => {
        onOptionClick?.(option);
        onClick?.(option);
    };

    const choices = _.map(options, (flatSelectOption: IFlatSelectOptionProps) => (
        <FlatSelectOption
            key={flatSelectOption.id}
            {...flatSelectOption}
            onClick={handleClick}
            disabled={disabled || flatSelectOption.disabled}
            selected={selectedOptionId === flatSelectOption.id}
        />
    ));

    return (
        <div
            className={classNames(
                'flat-select',
                {
                    'mod-btn-group': group,
                    'mod-option-picker': optionPicker,
                },
                classes,
                className
            )}
        >
            {choices}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectedOptionId: FlatSelectSelectors.getSelectedOptionId,
});

const mapDispatchToProps = (dispatch: IDispatch, {id, options, defaultSelectedOptionId}: IFlatSelectOwnProps) => ({
    onRender: () => dispatch(addFlatSelect(id, defaultSelectedOptionId || options?.[0].id)),
    onDestroy: () => dispatch(removeFlatSelect(id)),
    onOptionClick: (selectedOption: IFlatSelectOptionProps) => dispatch(selectFlatSelect(id, selectedOption.id)),
});

export const FlatSelectConnected = connect(mapStateToProps, mapDispatchToProps)(FlatSelect);
