import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporExampleState} from '../../../../docs/Reducers';
import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {FilterBoxSelectors} from '../../filterBox/FilterBoxSelectors';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {selectWithFilter} from '../hoc/SelectWithFilter';
import {selectWithInfiniteScroll, SelectWithInfiniteScrollProps} from '../hoc/SelectWithInfiniteScroll';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../SingleSelectConnected';
import {PhotoItem, PhotoProps, usePhotosAPIMock} from './ServerSideSelectExampleUtils';

const PER_PAGE = 10;

const mapStateToProps = (state: IReactVaporExampleState, props: {id: string}) => ({
    filterValue: FilterBoxSelectors.getFilterText(state, props),
});

const ServerSideSingleSelect: React.ComponentType<ISingleSelectOwnProps & SelectWithInfiniteScrollProps> = _.compose(
    withServerSideProcessing,
    selectWithFilter,
    selectWithInfiniteScroll
)(SingleSelectConnected);

const ServerSideSingleSelectExampleDisconnected: React.FunctionComponent<{id: string} & ReturnType<
    typeof mapStateToProps
>> = ({filterValue, id}) => {
    const [photos, totalEntries, fetchPhotos] = usePhotosAPIMock();
    const [pageNbr, setPage] = React.useState(1);

    React.useEffect(() => {
        fetchPhotos({_page: 1, _limit: PER_PAGE});
    }, []);

    function fetchNextPage() {
        fetchPhotos({_page: pageNbr + 1, _limit: PER_PAGE, q: filterValue}, false);
        setPage(pageNbr + 1);
    }

    function applyFilter() {
        fetchPhotos({_page: 1, _limit: PER_PAGE, q: filterValue});
        setPage(1);
    }

    return (
        <div className="form-group">
            <p className="form-control-label">
                SingleSelect using server-side filtering and pagination with infinite scroll
            </p>
            <div className="form-control">
                <ServerSideSingleSelect
                    id={id}
                    items={photos.map(
                        (photo: PhotoProps): IItemBoxProps => ({
                            value: photo.id,
                            displayValue: <PhotoItem {...photo} />,
                        })
                    )}
                    totalEntries={totalEntries}
                    next={fetchNextPage}
                    onUpdate={applyFilter}
                    canClear
                />
            </div>
        </div>
    );
};

const ServerSideSingleSelectExample = connect(mapStateToProps)(ServerSideSingleSelectExampleDisconnected);

export function ServerSideSelectExamples() {
    return (
        <div className="mod-form-top-bottom-padding">
            <h1 className="mb2">Server-side selects</h1>
            <ServerSideSingleSelectExample id="server-side-single-select" />
        </div>
    );
}
