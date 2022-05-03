import classNames from 'classnames';
import {HTMLProps, FunctionComponent} from 'react';
import * as _ from 'underscore';

export const BannerContainer: FunctionComponent<HTMLProps<HTMLDivElement>> = (props) => (
    <div {..._.omit(props, 'children')} className={classNames(props.className, 'banner')}>
        {props.children}
    </div>
);
