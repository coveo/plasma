import classNames from 'classnames';
import * as React from 'react';

export interface ITextLoadingPlaceholder {
    tiny?: boolean;
    small?: boolean;
    word?: boolean;
    large?: boolean;
    className?: string;
}

export const TextLoadingPlaceholder = ({tiny, small, word, large, className = ''}: ITextLoadingPlaceholder) => (
    <div
        className={classNames(
            'text-content-placeholder',
            {
                'mod-tiny': tiny,
                'mod-small': small,
                'mod-word': word,
                'mod-large': large,
            },
            className
        )}
    />
);
