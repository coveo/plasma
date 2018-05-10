import * as React from 'react';
import {Svg} from '../svg/Svg';

export interface IOptionsCycleOwnProps extends React.ClassAttributes<OptionsCycle> {
    options: string[];
    id?: string;
    startAt?: number;
    isInline?: boolean;
}

export interface IOptionsCycleStateProps {
    currentOption?: number;
}

export interface IOptionsCycleDispatchProps {
    onRender?: (index: number) => void;
    onDestroy?: () => void;
    onChange?: (index: number) => void;
}

export interface IOptionsCycleProps extends IOptionsCycleOwnProps, IOptionsCycleStateProps, IOptionsCycleDispatchProps {}

export class OptionsCycle extends React.Component<IOptionsCycleProps, any> {
    private selectedOption: string;

    private goToPreviousOption() {
        if (this.props.onChange) {
            const newOptionIndex = this.props.currentOption ? this.props.currentOption - 1 : this.props.options.length - 1;
            this.props.onChange(newOptionIndex);
        }
    }

    private goToNextOption() {
        if (this.props.onChange) {
            const newOptionIndex = this.props.currentOption === this.props.options.length - 1 ? 0 : this.props.currentOption + 1;
            this.props.onChange(newOptionIndex);
        }
    }

    private setSelectedOption(currentOption: number = 0) {
        this.selectedOption = this.props.options[currentOption];
    }

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender(this.props.startAt);
            this.setSelectedOption(this.props.currentOption);
        }
        this.setSelectedOption(this.props.startAt);
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    componentWillReceiveProps(nextProps: IOptionsCycleProps) {
        this.setSelectedOption(nextProps.currentOption);
    }

    render() {
        const optionsCycleClasses = ['options-cycle', 'text-medium-blue'];

        if (this.props.isInline) {
            optionsCycleClasses.push('mod-inline');
        }

        return (
            <div className={optionsCycleClasses.join(' ')}>
                <button type='button' className='options-cycle-button previous-option' onClick={() => this.goToPreviousOption()}>
                    <Svg svgName='arrow-left-rounded' svgClass='icon fill-dark-blue' />
                </button>
                <span className='options-cycle-option'>{this.selectedOption}</span>
                <button type='button' className='options-cycle-button next-option' onClick={() => this.goToNextOption()}>
                    <Svg svgName='arrow-right-rounded' svgClass='icon fill-dark-blue' />
                </button>
            </div>
        );
    }
}
