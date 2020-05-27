import classNames from 'classnames';
import * as React from 'react';

export interface ITextLoadingPlaceholder {
    small?: boolean;
    word?: boolean;
    large?: boolean;
    className?: string;
}

export const TextLoadingPlaceholder = ({small, word, large, className = ''}: ITextLoadingPlaceholder) => (
    <div
        className={classNames(
            'text-content-placeholder',
            {
                'mod-small': small,
                'mod-word': word,
                'mod-large': large,
            },
            className
        )}
    />
);
