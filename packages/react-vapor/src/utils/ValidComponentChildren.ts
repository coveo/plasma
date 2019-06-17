import * as React from 'react';

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/ValidComponentChildren.js
export class ValidComponentChildren {
    static map(children: React.ReactNode, func: (child: React.ReactChild) => any, context: any): any[] {
        return React.Children.map(children, (child) =>
            React.isValidElement(child) ? func.call(context, child) : child
        );
    }
}
