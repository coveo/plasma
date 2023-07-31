import {
    FilterBoxSelectors,
    IItemBoxProps,
    ISingleSelectOwnProps,
    selectWithFilter,
    selectWithInfiniteScroll,
    SelectWithInfiniteScrollProps,
    SingleSelectConnected,
    withServerSideProcessing,
} from '@coveord/plasma-react';
import {ComponentType, FunctionComponent, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {compose} from 'redux';

const ServerSideSingleSelect: ComponentType<
    React.PropsWithChildren<ISingleSelectOwnProps & SelectWithInfiniteScrollProps>
> = compose<any>(withServerSideProcessing, selectWithFilter, selectWithInfiniteScroll)(SingleSelectConnected);

const Demo = () => {
    const filterValue = useSelector((state) => FilterBoxSelectors.getFilterText(state, {id: 'single-select-4'}));
    const [photos, totalEntries, fetchPhotos] = usePhotosAPIMock();
    const [pageNbr, setPage] = useState(1);

    useEffect(() => {
        fetchPhotos({_page: 1, _limit: PER_PAGE});
    }, []);

    const fetchNextPage = () => {
        fetchPhotos({_page: pageNbr + 1, _limit: PER_PAGE, q: filterValue}, false);
        setPage(pageNbr + 1);
    };

    const applyFilter = () => {
        fetchPhotos({_page: 1, _limit: PER_PAGE, q: filterValue});
        setPage(1);
    };

    return (
        <ServerSideSingleSelect
            id="single-select-4"
            items={photos.map(
                (photo: PhotoProps): IItemBoxProps => ({
                    value: photo.id,
                    displayValue: <PhotoItem {...photo} />,
                }),
            )}
            totalEntries={totalEntries}
            next={fetchNextPage}
            onUpdate={applyFilter}
            canClear
            noFixedWidth
        />
    );
};
export default Demo;

export interface PhotoProps {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const PhotoItem: FunctionComponent<PhotoProps> = ({id, url, title, thumbnailUrl}) => (
    <div className="flex flex-center">
        <a href={url} target="__blank" className="mr2 flex">
            <img src={thumbnailUrl} alt={title} width={IMG_SIZE} height={IMG_SIZE} />
        </a>
        <span>{title}</span>
    </div>
);

const PER_PAGE = 10;
const IMG_SIZE = 50;

const clean = <T extends Record<string, unknown>>(object: T) => {
    Object.keys(object).forEach((key) => (object[key] === undefined ? delete object[key] : {}));
    return object;
};

const usePhotosAPIMock = (): [any[], number, (params?: any, overwrite?: boolean) => void] => {
    const [photos, setPhotos] = useState([]);
    const [totalEntries, setTotalEntries] = useState(0);

    const fetchPhotos = (params?: any, overwrite = true) => {
        const cleanParams = clean(params);
        const queryString =
            cleanParams && Object.keys(cleanParams).length > 0
                ? `?${new URLSearchParams(Object.entries(cleanParams)).toString()}`
                : '';

        return fetch(`https://jsonplaceholder.typicode.com/photos${queryString}`)
            .then((response) => {
                setTotalEntries(parseInt(response.headers.get('x-total-count'), 10));
                return response.json();
            })
            .then((newPhotos) => {
                if (overwrite) {
                    setPhotos(newPhotos);
                } else {
                    setPhotos([...photos, ...newPhotos]);
                }
            });
    };

    return [photos, totalEntries, fetchPhotos];
};
