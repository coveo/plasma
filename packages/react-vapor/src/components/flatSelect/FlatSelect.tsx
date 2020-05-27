import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {FlatSelectOption, IFlatSelectOptionProps} from './FlatSelectOption';

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

export interface IFlatSelectStateProps {
    selectedOptionId?: string;
}

export interface IFlatSelectDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onOptionClick?: (option: IFlatSelectOptionProps) => void;
}

export interface IFlatSelectProps extends IFlatSelectOwnProps, IFlatSelectStateProps, IFlatSelectDispatchProps {}

export class FlatSelect extends React.Component<IFlatSelectProps> {
    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    private handleOnOptionClick(option: IFlatSelectOptionProps) {
        if (this.props.onOptionClick) {
            this.props.onOptionClick(option);
        }

        if (this.props.onClick) {
            this.props.onClick(option);
        }
    }

    private getOptions(): JSX.Element[] {
        return _.map(this.props.options, (flatSelectOption: IFlatSelectOptionProps, index: number) => {
            flatSelectOption.selected =
                this.props.selectedOptionId && this.props.selectedOptionId === flatSelectOption.id;
            flatSelectOption.onClick = (option: IFlatSelectOptionProps) => this.handleOnOptionClick(option);

            return <FlatSelectOption key={index} {...flatSelectOption} disabled={this.props.disabled} />;
        });
    }

    render() {
        const classes: string = classNames(
            'flat-select',
            {
                'mod-btn-group': this.props.group,
                'mod-option-picker': this.props.optionPicker,
            },
            this.props.classes,
            this.props.className
        );

        return <div className={classes}>{this.getOptions()}</div>;
    }
}
