import * as classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {getReactNodeTextContent} from '../../utils/JSXUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {Content} from '../content/Content';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {clearListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {ISelectButtonProps, ISelectOwnProps, ISelectProps, SelectConnected} from './SelectConnected';
import {SelectSelector} from './SelectSelector';
import * as styles from './styles/SingleSelect.scss';

export interface ISingleSelectOwnProps extends ISelectProps {
    placeholder?: string;
    toggleClasses?: string;
    onSelectOptionCallback?: (option: string) => void;
    items?: IItemBoxProps[];
    buttonPrepend?: React.ReactNode;
    noFixedWidth?: boolean;
    canClear?: boolean;
    deselectTooltipText?: string;
}

const selectPropsKeys = keys<ISelectOwnProps>();

export interface ISingleSelectStateProps {
    selectedOption: string;
}

export interface ISingleSelectDispatchProps {
    deselect: () => void;
}

export interface ISingleSelectProps
    extends ISingleSelectOwnProps,
        Partial<ISingleSelectStateProps>,
        Partial<ISingleSelectDispatchProps> {}

const mapStateToProps = (state: IReactVaporState, ownProps: ISingleSelectOwnProps): ISingleSelectStateProps => {
    const customSelected: string[] = SelectSelector.getListState(state, ownProps);
    return {
        selectedOption: customSelected.length
            ? customSelected[customSelected.length - 1]
            : SelectSelector.getListBoxSelected(state, ownProps)[0],
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ISingleSelectOwnProps): ISingleSelectDispatchProps => ({
    deselect: () => dispatch(clearListBoxOption(ownProps.id)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class SingleSelectConnected extends React.PureComponent<
    ISingleSelectProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> {
    static defaultProps: Partial<ISingleSelectOwnProps>;

    componentDidUpdate(prevProps: ISingleSelectProps) {
        if (prevProps.selectedOption !== this.props.selectedOption) {
            this.props.onSelectOptionCallback?.(this.props.selectedOption);
        }
    }

    render() {
        return (
            <SelectConnected {..._.pick(this.props, selectPropsKeys)} button={this.getButton}>
                {this.props.children}
            </SelectConnected>
        );
    }

    private getButton = (props: ISelectButtonProps): JSX.Element => {
        const option = _.findWhere(this.props.items, {value: this.props.selectedOption});
        const showClear = !!option && this.props.canClear && !this.props.disabled;
        const buttonClasses = classNames('btn dropdown-toggle', this.props.toggleClasses, {
            'dropdown-toggle-placeholder': !option,
            [styles.singleSelectFixedWidth]: !this.props.noFixedWidth,
            'mod-append': showClear,
        });

        return (
            <button
                className={buttonClasses}
                type="button"
                onClick={props.onClick}
                onKeyDown={props.onKeyDown}
                onKeyUp={props.onKeyUp}
                disabled={this.props.disabled}
            >
                {this.props.buttonPrepend}
                {option && option.prepend ? <Content {...option.prepend} /> : null}
                {this.getSelectedOptionElement(option)}
                {option && option.append ? <Content {...option.append} /> : null}
                <span className="dropdown-toggle-arrow" />
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
            <Tooltip title={this.props.deselectTooltipText} placement="top" noSpanWrapper onClick={this.handleDeselect}>
                <Svg svgName={VaporSVG.svg.clear.name} svgClass="icon mod-12" className="btn-append center-align" />
            </Tooltip>
        );
    }

    private handleDeselect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!this.props.disabled) {
            this.props.deselect();
            e.stopPropagation();
        }
    };
}

SingleSelectConnected.defaultProps = {
    placeholder: 'Select an option',
    deselectTooltipText: 'Deselect',
};
