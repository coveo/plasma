import classNames from 'classnames';
import {HTMLProps, FunctionComponent} from 'react';
import * as _ from 'underscore';

/**
 * @deprecated Use Mantine instead
 */
export const BannerContainer: FunctionComponent<React.PropsWithChildren<HTMLProps<HTMLDivElement>>> = (props) => (
    <div {..._.omit(props, 'children')} className={classNames(props.className, 'banner')}>
        {props.children}
    </div>
);
