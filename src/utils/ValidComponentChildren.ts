import * as React from 'react';

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/ValidComponentChildren.js
export class ValidComponentChildren {
  static map(children: React.ReactNode, func: Function, context: any) {
    let index = 0;

    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      return func.call(context, child, index++);
    });
  }
}
