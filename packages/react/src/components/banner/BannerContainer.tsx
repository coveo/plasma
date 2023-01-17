import classNames from 'clsx';
import {HTMLProps, FunctionComponent, PropsWithChildren} from 'react';
import * as _ from 'underscore';

/**
 * @deprecated Use Mantine instead
 */
export const BannerContainer: FunctionComponent<PropsWithChildren<HTMLProps<HTMLDivElement>>> = (props) => (
    <div {..._.omit(props, 'children')} className={classNames(props.className, 'banner')}>
        {props.children}
    </div>
);
