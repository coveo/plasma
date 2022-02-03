import classNames from 'classnames';
import * as VaporSVG from '@coveord/plasma-style';
import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {getReactNodeTextContent} from '../../utils/JSXUtils';
import {IDispatch} from '../../utils/ReduxUtils';
import {Content} from '../content/Content';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {clearListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {ISelectButtonProps, ISelectOwnProps, SelectConnected} from './SelectConnected';
import {SelectSelector} from './SelectSelector';
export interface ISingleSelectOwnProps extends Omit<ISelectOwnProps, 'button'> {
    onSelectOptionCallback?: (option: string) => void;
    buttonPrepend?: React.ReactNode;
    noFixedWidth?: boolean;
    canClear?: boolean;
    deselectTooltipText?: string;
    footer?: React.ReactNode;
    customButton?: React.ComponentType<ISelectButtonProps>;
}

const selectPropsKeys = [
    'button',
    'classes',
    'disabled',
    'dropClasses',
    'dropOption',
    'footer',
    'hasFocusableChild',
    'id',
    'isLoading',
    'items',
    'multi',
    'noActive',
    'noResultItem',
    'onUpdate',
    'placeholder',
    'selectClasses',
    'toggleClasses',
    'wrapItems',
];

export type ISingleSelectProps = ISingleSelectOwnProps &
    ReturnType<typeof mapDispatchToProps> &
    ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: PlasmaState, ownProps: ISingleSelectOwnProps) => {
    const customSelected = SelectSelector.getListState(state, ownProps);
    return {
        selectedOption: customSelected.length
            ? customSelected[customSelected.length - 1]
            : SelectSelector.getListBoxSelected(state, ownProps)[0],
    };
};

const mapDispatchToProps = (dispatch: IDispatch, {id}: ISingleSelectOwnProps) => ({
    deselect: () => dispatch(clearListBoxOption(id)),
});

class SingleSelect extends React.PureComponent<ISingleSelectProps> {
    static defaultProps = {
        placeholder: 'Select an option',
        deselectTooltipText: 'Deselect',
    };

    componentDidUpdate(prevProps: ISingleSelectProps) {
        if (prevProps.selectedOption !== this.props.selectedOption) {
            this.props.onSelectOptionCallback?.(this.props.selectedOption);
        }
    }

    render() {
        return (
            <SelectConnected
                {..._.pick(this.props, selectPropsKeys)}
                button={this.props.customButton ?? this.Toggle}
                isLoading={this.props.isLoading}
            >
                {this.props.children}
            </SelectConnected>
        );
    }

    private Toggle: React.FunctionComponent<ISelectButtonProps> = ({
        onClick,
        onKeyDown,
        onKeyUp,
        selectedOptions,
        isOpen,
    }) => {
        const option = selectedOptions[0];
        const showClear = !!option && this.props.canClear && !this.props.disabled;
        const buttonClasses = classNames('btn dropdown-toggle', this.props.toggleClasses, {
            'dropdown-toggle-placeholder': !option,
            'single-select-fixed-width': !this.props.noFixedWidth,
            'mod-append': showClear,
        });

        return (
            <button
                className={buttonClasses}
                type="button"
                onClick={onClick}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                disabled={this.props.disabled}
            >
                {this.props.buttonPrepend}
                {option?.prepend ? <Content {...option.prepend} /> : null}
                {this.getSelectedOptionElement(option)}
                {option?.append ? <Content {...option.append} /> : null}
                <Svg
                    svgName={isOpen ? VaporSVG.svg.chartUp.name : VaporSVG.svg.chartDown.name}
                    svgClass={classNames('icon dropdown-toggle-arrow-size', {
                        'dropdown-toggle-arrow-style': !showClear,
                    })}
                />
                {showClear && this.getDeselectOptionButton()}
            </button>
        );
    };

    private getSelectedOptionElement(option: IItemBoxProps): JSX.Element {
        if (option) {
            const displayValue =
                option.selectedDisplayValue || getReactNodeTextContent(option.displayValue) || option.value;
            return (
                <span
                    key={option.value}
                    className="dropdown-selected-value flex-auto left-align"
                    data-value={option.value}
                    title={displayValue}
                >
                    {displayValue}
                </span>
            );
        }

        return <span className="dropdown-no-value">{this.props.placeholder}</span>;
    }

    private getDeselectOptionButton(): React.ReactNode {
        return (
            <Tooltip title={this.props.deselectTooltipText} placement="top" noSpanWrapper>
                <Svg
                    svgName={VaporSVG.svg.clear.name}
                    svgClass="icon mod-12"
                    className="btn-append center-align"
                    onClick={this.handleDeselect}
                />
            </Tooltip>
        );
    }

    private handleDeselect = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!this.props.disabled) {
            this.props.deselect();
        }
    };
}

export const SingleSelectConnected = connect<
    ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps>,
    ISingleSelectOwnProps
>(
    mapStateToProps,
    mapDispatchToProps
)(SingleSelect as any);
