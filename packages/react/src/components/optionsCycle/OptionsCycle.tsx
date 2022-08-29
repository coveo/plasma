import classNames from 'classnames';
import {ReactNode, Component} from 'react';

import {Svg} from '../svg';

export interface IOptionsCycleConnectedOwnProps {
    id: string;
    startAt?: number;
}

export interface IOptionsCycleOwnProps {
    options: ReactNode[];
    isInline?: boolean;
    wrapAround?: boolean;
    className?: string;
    previousClassName?: string;
    nextClassName?: string;
    buttonClassName?: string;
    onChangeOption?: (index: number) => void;
}

export interface IOptionsCycleStateProps {
    currentOption: number;
}

export interface IOptionsCycleDispatchProps {
    onRender: () => void;
    onDestroy: () => void;
    onChange: (index: number) => void;
}

export interface IOptionsCycleProps
    extends IOptionsCycleOwnProps,
        Partial<IOptionsCycleStateProps>,
        Partial<IOptionsCycleDispatchProps> {}

/**
 * @deprecated Use Mantine instead
 */
export class OptionsCycle extends Component<IOptionsCycleProps> {
    static defaultProps: Partial<IOptionsCycleProps> = {
        currentOption: 0,
        wrapAround: true,
    };

    private goToPreviousOption() {
        const newOptionIndex = this.props.currentOption ? this.props.currentOption - 1 : this.props.options.length - 1;
        this.props.onChange?.(newOptionIndex);
        this.props.onChangeOption?.(newOptionIndex);
    }

    private goToNextOption() {
        const newOptionIndex =
            this.props.currentOption === this.props.options.length - 1 ? 0 : this.props.currentOption + 1;
        this.props.onChange?.(newOptionIndex);
        this.props.onChangeOption?.(newOptionIndex);
    }

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    render() {
        return (
            <div
                className={classNames('options-cycle', this.props.className, {
                    'mod-inline': this.props.isInline,
                })}
            >
                <button
                    type="button"
                    className={classNames('options-cycle-button previous-option', this.props.previousClassName)}
                    onClick={() => this.goToPreviousOption()}
                    disabled={!this.props.wrapAround && this.props.currentOption === 0}
                >
                    <Svg svgName="arrowLeftRounded" className="icon mod-16" />
                </button>
                <span className={classNames('options-cycle-option', this.props.buttonClassName)}>
                    {this.props.options[this.props.currentOption]}
                </span>
                <button
                    type="button"
                    className={classNames('options-cycle-button next-option', this.props.nextClassName)}
                    onClick={() => this.goToNextOption()}
                    disabled={!this.props.wrapAround && this.props.currentOption === this.props.options.length - 1}
                >
                    <Svg svgName="arrowRightRounded" className="icon mod-16" />
                </button>
            </div>
        );
    }
}
