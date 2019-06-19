import * as React from 'react';
import * as _ from 'underscore';
import {IOption, Option} from './Option';

export interface IOptionPickerOwnProps extends React.ClassAttributes<OptionPicker> {
    id?: string;
    options: IOption[];
}

export interface IOptionPickerStateProps {
    activeLabel?: string;
}

export interface IOptionPickerDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onClick?: (value: string, label: string) => void;
}

export interface IOptionPickerProps
    extends IOptionPickerOwnProps,
        IOptionPickerStateProps,
        IOptionPickerDispatchProps {}

export class OptionPicker extends React.Component<IOptionPickerProps, any> {
    private handleClick(value: string, label: string) {
        if (this.props.onClick) {
            this.props.onClick(value, label);
        }
    }

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

    render() {
        const options: JSX.Element[] = _.map(this.props.options, (option: IOption, index: number) => {
            return (
                <li key={`option-${this.props.id}-${index}`}>
                    <Option
                        option={option}
                        onClick={(value: string, label: string) => this.handleClick(value, label)}
                        isActive={this.props.activeLabel && option.label === this.props.activeLabel}
                    />
                </li>
            );
        });

        return <ul className="option-picker flex flex-wrap mt2 mb2">{options}</ul>;
    }
}
