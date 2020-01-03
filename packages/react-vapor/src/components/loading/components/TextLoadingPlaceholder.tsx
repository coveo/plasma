import * as classNames from 'classnames';
import * as React from 'react';

export interface ITextLoadingPlaceholder {
    small?: boolean;
    word?: boolean;
    className?: string;
}

export const TextLoadingPlaceholder = ({small, word, className = ''}: ITextLoadingPlaceholder) => (
    <div
        className={classNames(
            'text-content-placeholder',
            {
                'mod-small': small,
                'mod-word': word,
            },
            className
        )}
    />
);
