import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {IDispatch} from '../../utils';
import {addFlatSelect, removeFlatSelect, selectFlatSelect} from './FlatSelectActions';
import {FlatSelectOption, IFlatSelectOptionProps} from './FlatSelectOption';
import {FlatSelectSelectors} from './FlatSelectSelectors';

export interface IFlatSelectOwnProps {
    id: string;
    options: IFlatSelectOptionProps[];
    className?: string;
    group?: boolean;
    optionPicker?: boolean;
    defaultSelectedOptionId?: string;
    onClick?: (option: IFlatSelectOptionProps) => void;
    disabled?: boolean;
    classes?: string[] /* @deprecated use className instead */;
}

export type IFlatSelectProps = IFlatSelectOwnProps &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export const FlatSelect: React.FunctionComponent<IFlatSelectProps> = ({
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
    React.useEffect(() => {
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
