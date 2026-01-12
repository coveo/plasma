import {Children, ReactNode, isValidElement} from 'react';

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/ValidComponentChildren.js
export class ValidComponentChildren {
    static map(children: ReactNode, func: (child: ReactNode) => any, context: any): any[] {
        return Children.map(children, (child) => (isValidElement(child) ? func.call(context, child) : child));
    }
}
