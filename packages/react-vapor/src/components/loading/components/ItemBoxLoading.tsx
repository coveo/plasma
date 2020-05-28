import classNames from 'classnames';
import React from 'react';

import {Random} from '../../../utils/RandomUtils';

const possibleWidths = ['mod-width-10', 'mod-width-20', 'mod-width-30', 'mod-width-40'];

export const ItemBoxLoading: React.FunctionComponent = () => (
    <li className="item-box disabled flex">
        <div
            className={classNames('bg-grey-3 mod-rounded-border-1', Random.pick(possibleWidths))}
            style={{height: '1em'}}
        />
        {Random.bool() && (
            <div
                className={classNames('bg-grey-3 ml1 mod-rounded-border-1', Random.pick(possibleWidths))}
                style={{height: '1em'}}
            />
        )}
    </li>
);
