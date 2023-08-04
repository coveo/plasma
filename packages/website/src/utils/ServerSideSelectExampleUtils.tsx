import {FunctionComponent, useState} from 'react';
import * as _ from 'underscore';

export interface PhotoProps {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const IMG_SIZE = 50;

const clean = <T extends Record<string, unknown>>(object: T) => _.pick(object, _.identity as any);

export const usePhotosAPIMock = (): [any[], number, (params?: any, overwrite?: boolean) => void] => {
    const [photos, setPhotos] = useState([]);
    const [totalEntries, setTotalEntries] = useState(0);

    const fetchPhotos = (params?: any, overwrite = true) => {
        const cleanParams = clean(params);
        const queryString = !_.isEmpty(cleanParams)
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

export const PhotoItem: FunctionComponent<PhotoProps> = ({url, title, thumbnailUrl}) => (
    <div className="flex flex-center">
        <a href={url} target="__blank" className="mr2 flex">
            <img src={thumbnailUrl} alt={title} width={IMG_SIZE} height={IMG_SIZE} />
        </a>
        <span>{title}</span>
    </div>
);
