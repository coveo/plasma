import * as React from 'react';
import {isEmpty} from 'underscore';

export class EventUtils {
    static isClickingInsideElementWithClassname = (e: React.MouseEvent<any>, classname: string): boolean => {
        let currentTarget: HTMLElement = e && (e.target as HTMLElement);
        let isClickingInside = false;

        while (e && !isEmpty(classname) && currentTarget !== e.currentTarget && !isClickingInside) {
            isClickingInside = currentTarget.classList.contains(classname);
            currentTarget = currentTarget.parentElement;
        }

        return isClickingInside;
    }
}
