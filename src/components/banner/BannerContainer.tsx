import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import * as styles from './styles/Banner.scss';

export const BannerContainer: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = (props: React.HTMLProps<HTMLDivElement>) => (
    <div
        {..._.omit(props, 'children')}
        className={classNames(props.className, styles.banner)}
    >
        {props.children}
    </div>
);
