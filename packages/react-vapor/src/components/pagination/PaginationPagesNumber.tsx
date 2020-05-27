import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {PaginationReduxActions} from '../navigation/pagination/NavigationPaginationActions';
import {Svg} from '../svg/Svg';
import {PaginationSelect} from './PaginationSelect';
import {PaginationSelectors} from './PaginationSelectors';

export interface IPaginationPagesNumberOwnProps {
    id: string;
    totalPages: number;
    numberOfPagesToShow?: number;
    previousLabel?: string;
    nextLabel?: string;
    hidden?: boolean;
    disabled?: boolean;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IPaginationPagesNumberOwnProps) => ({
    currentPage: PaginationSelectors.getPaginationPageNumber(state, {id: ownProps.id}),
});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IPaginationPagesNumberOwnProps
) => ({
    onRender: () => dispatch(PaginationReduxActions.addPagination(ownProps.id)),
    onDestroy: () => dispatch(PaginationReduxActions.removePagination(ownProps.id)),
    onPageClick: (pageNb: number) => dispatch(PaginationReduxActions.changePage(ownProps.id, pageNb)),
});

export interface IPaginationPagesNumberProps
    extends IPaginationPagesNumberOwnProps,
        ReturnType<typeof mapDispatchToProps>,
        ReturnType<typeof mapStateToProps> {}

const NUMBER_OF_PAGES_SHOWING: number = 7;
const PREVIOUS_LABEL: string = 'Previous';
const NEXT_LABEL: string = 'Next';

class PaginationPagesNumberDisconnected extends React.Component<IPaginationPagesNumberProps, any> {
    private handlePageClick = (pageNb: number) => {
        if (pageNb >= 0 && this.props.currentPage !== pageNb) {
            this.props.onPageClick?.(pageNb);
        }
    };

    componentDidUpdate() {
        if (this.props.currentPage > this.props.totalPages - 1) {
            this.handlePageClick(this.props.totalPages - 1);
        }
    }

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    render() {
        const {currentPage} = this.props;
        const showXPages: number = Math.abs((this.props.numberOfPagesToShow || NUMBER_OF_PAGES_SHOWING) - 1);
        const previousLabel: string = this.props.previousLabel || PREVIOUS_LABEL;
        const nextLabel: string = this.props.nextLabel || NEXT_LABEL;
        let start: number = 0;
        let end: number = showXPages;
        const lastPage: number = this.props.totalPages - 1;
        const previousClasses: string = classNames('flat-select-option mod-link', {
            disabled: currentPage === 0 || this.props.disabled,
            selectable: currentPage !== 0,
            hidden: this.props.hidden,
        });
        const nextClasses: string = classNames('flat-select-option mod-link', {
            disabled: currentPage === lastPage || this.props.disabled,
            selectable: currentPage !== lastPage,
            hidden: this.props.hidden,
        });

        const pageSelects: JSX.Element[] = [];

        if (!this.props.hidden) {
            if (currentPage + showXPages / 2 > lastPage) {
                end = lastPage;
                start = Math.max(lastPage - showXPages, 0);
            } else {
                start = Math.max(Math.floor(currentPage - showXPages / 2), 0);
                end = Math.min(start + showXPages, lastPage);
            }

            _.each(_.range(start, end + 1), (nbr: number): void => {
                pageSelects.push(
                    <PaginationSelect
                        key={'page-' + nbr}
                        onPageClick={this.handlePageClick}
                        pageNb={nbr}
                        selected={nbr === currentPage}
                        disabled={this.props.disabled}
                    />
                );
            });
        }

        return (
            <div className="pagination">
                <div className="flat-select">
                    <a
                        className={previousClasses}
                        data-page={currentPage - 1}
                        onClick={() => this.handlePageClick(currentPage - 1)}
                    >
                        <Svg
                            svgName="arrow-left-rounded"
                            className="pagination-icon"
                            svgClass="icon icon-small mod-lg"
                        />
                        {previousLabel}
                    </a>
                    {pageSelects}
                    <a
                        className={nextClasses}
                        data-page={currentPage + 1}
                        onClick={() => this.handlePageClick(currentPage + 1)}
                    >
                        {nextLabel}
                        <Svg
                            svgName="arrow-right-rounded"
                            className="pagination-icon"
                            svgClass="icon icon-small mod-lg"
                        />
                    </a>
                </div>
            </div>
        );
    }
}

export const PaginationPagesNumber = connect(mapStateToProps, mapDispatchToProps)(PaginationPagesNumberDisconnected);
