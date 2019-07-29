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

const TOTAL_ENTRIES = 5000;
const PER_PAGE = 10;
const IMG_SIZE = 50;

interface PhotoProps {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const clean = <T extends object>(o: T) => _(o).pick(_.identity);

function usePhotosAPIMock(initialPhotos: any[] = []): [any[], (params?: any, overwrite?: boolean) => void] {
    const [photos, setPhotos] = React.useState(initialPhotos);

    function fetchPhotos(params?: any, overwrite = true) {
        const cleanParams = clean(params);
        const queryString = !_.isEmpty(cleanParams)
            ? `?${new URLSearchParams(Object.entries(cleanParams)).toString()}`
            : '';

        return fetch(`https://jsonplaceholder.typicode.com/photos${queryString}`)
            .then((response) => response.json())
            .then((newPhotos: any) => {
                if (overwrite) {
                    setPhotos(newPhotos);
                } else {
                    setPhotos([...photos, ...newPhotos]);
                }
            });
    }

    return [photos, fetchPhotos];
}

const PhotoItem: React.FunctionComponent<PhotoProps> = ({id, url, title, thumbnailUrl}) => {
    return (
        <div className="flex flex-center">
            <a href={url} target="__blank" className="mr2">
                <img src={thumbnailUrl} alt={title} width={IMG_SIZE} height={IMG_SIZE} />
            </a>
            <span>{title}</span>
        </div>
    );
};

function mapStateToProps(state: IReactVaporExampleState, props: {id: string}) {
    return {
        filterValue: FilterBoxSelectors.getFilterText(state, props),
    };
}

const ServerSideSingleSelect: React.ComponentType<ISingleSelectOwnProps & SelectWithInfiniteScrollProps> = _.compose(
    withServerSideProcessing,
    selectWithFilter,
    selectWithInfiniteScroll
)(SingleSelectConnected);

function ServerSideSingleSelectExampleDisconnected({
    filterValue,
    id,
}: {id: string} & ReturnType<typeof mapStateToProps>) {
    const [photos, fetchPhotos] = usePhotosAPIMock([]);
    const [pageNbr, setPage] = React.useState(1);

    React.useEffect(() => {
        fetchPhotos({_page: 1, _limit: PER_PAGE}, false);
    }, []);

    function fetchNextPage() {
        fetchPhotos({_page: pageNbr + 1, _limit: PER_PAGE, q: filterValue}, false);
        setPage(pageNbr + 1);
    }

    function applyFilter() {
        fetchPhotos({_page: 1, _limit: PER_PAGE, q: filterValue}, true);
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
                    totalEntries={TOTAL_ENTRIES}
                    next={fetchNextPage}
                    onUpdate={applyFilter}
                    canClear
                />
            </div>
        </div>
    );
}

const ServerSideSingleSelectExample = connect(mapStateToProps)(ServerSideSingleSelectExampleDisconnected);

export function ServerSideSelectExamples() {
    return (
        <div className="mod-form-top-bottom-padding">
            <h1 className="mb2">Server-side selects</h1>
            <ServerSideSingleSelectExample id="server-side-single-select" />
        </div>
    );
}
