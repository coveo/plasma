import classNames from 'classnames';
import {FunctionComponent} from 'react';

import {Random} from '../../../utils/RandomUtils';

const possibleWidths = ['mod-width-10', 'mod-width-20', 'mod-width-30', 'mod-width-40'];

export const ItemBoxLoading: FunctionComponent = () => (
    <li className="item-box disabled flex">
        <div className={classNames('mod-rounded-border-1 item-box-loading', Random.pick(possibleWidths))} />
        {Random.bool() && (
            <div className={classNames('ml1 mod-rounded-border-1 item-box-loading', Random.pick(possibleWidths))} />
        )}
    </li>
);
