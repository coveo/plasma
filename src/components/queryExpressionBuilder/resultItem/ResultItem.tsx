
import * as React from 'react';
import { IResult } from '../responseParser/ResponseParser';

export interface IResultItemProps {
    result: IResult;
}

export class ResultItem extends React.Component<IResultItemProps> {

    render() {
        return (
            <div>
                {this.props.result.excerpt}
            </div>
        );
    }
}
