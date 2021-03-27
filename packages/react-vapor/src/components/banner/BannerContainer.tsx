import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

export const BannerContainer: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = (props) => (
    <div {..._.omit(props, 'children')} className={classNames(props.className, 'banner')}>
        {props.children}
    </div>
);
