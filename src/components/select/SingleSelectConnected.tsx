import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {Content} from '../content/Content';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ISelectButtonProps, ISelectProps, SelectConnected} from './SelectConnected';
import {SelectSelector} from './SelectSelector';

export interface ISingleSelectOwnProps extends ISelectProps {
    placeholder?: string;
    toggleClasses?: string;
    onSelectOptionCallback?: (option: string) => void;
    items?: IItemBoxProps[];
    buttonPrepend?: React.ReactNode;
}

export interface ISingleSelectStateProps {
    selectedOption?: string;
}

export interface ISingleSelectDispatchProps {}

export interface ISingleSelectProps extends ISingleSelectOwnProps, ISingleSelectStateProps, ISingleSelectDispatchProps {}

const mapStateToProps = (state: IReactVaporState, ownProps: ISingleSelectOwnProps): ISingleSelectStateProps => {
    const customSelected: string[] = SelectSelector.getListState(state, ownProps);
    return {
        selectedOption: customSelected.length
            ? customSelected[customSelected.length - 1]
            : SelectSelector.getListBoxSelected(state, ownProps)[0],
    };
};

@ReduxConnect(mapStateToProps)
export class SingleSelectConnected extends React.Component<ISingleSelectProps & React.ButtonHTMLAttributes<HTMLButtonElement>> {

    static defaultProps: Partial<ISingleSelectOwnProps> = {
        placeholder: 'Select an option',
    };

    componentDidUpdate(prevProps: ISingleSelectProps) {
        if (prevProps.selectedOption !== this.props.selectedOption) {
            callIfDefined(this.props.onSelectOptionCallback, this.props.selectedOption);
        }
    }

    render() {
        return (
            <SelectConnected
                id={this.props.id}
                button={this.getButton}
                items={this.props.items}
                selectClasses={this.props.selectClasses}
                hasFocusableChild={this.props.hasFocusableChild}
            >
                {this.props.children}
            </SelectConnected>
        );
    }

    private getButton = (props: ISelectButtonProps): JSX.Element => {
        const option = _.findWhere(this.props.items, {value: this.props.selectedOption});
        const buttonClasses = classNames('btn dropdown-toggle', this.props.toggleClasses, {
            'dropdown-toggle-placeholder': !option,
        });

        return (
            <button
                className={buttonClasses}
                type='button'
                onMouseUp={props.onMouseUp}
                onKeyDown={props.onKeyDown}
                onKeyUp={props.onKeyUp}
                disabled={this.props.disabled}
            >
                {this.props.buttonPrepend}
                {option && option.prepend ? <Content {...option.prepend} /> : null}
                {this.getSelectedOptionElement(option)}
                {option && option.append ? <Content {...option.append} /> : null}
                <span className='dropdown-toggle-arrow' />
            </button>
        );
    }

    private getSelectedOptionElement(option: IItemBoxProps): JSX.Element {
        if (option) {
            const displayValue = option.displayValue || option.value;
            return (
                <span
                    key={option.value}
                    className='dropdown-selected-value'
                    data-value={option.value}
                    title={displayValue}
                >
                    {displayValue}
                </span>
            );
        }

        return <span className='dropdown-no-value'>{this.props.placeholder}</span>;
    }
}
