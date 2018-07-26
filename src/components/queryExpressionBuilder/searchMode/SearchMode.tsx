import * as React from 'react';
import { Button } from '../../button/Button';
import { QueryTrigger } from '../queryTrigger/QueryTrigger';

export interface ISearchModeProps {
    queryTrigger: QueryTrigger;
}

export interface ISearchModeState {
}

export class SearchMode extends React.Component<ISearchModeProps, ISearchModeState> {

    private async ajaxTestCall() {
        await this.props.queryTrigger.getAllResults();
    }

    render() {
        return (
            <div>
                SearchMode
                <Button enabled={true} name={'Call'} onClick={() => this.ajaxTestCall()}/>
            </div>
        );
    }
}
