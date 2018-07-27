import * as React from 'react';
import { QueryExpressionBuilder } from '../QueryExpressionBuilder';
import * as style from './TempLayout.scss';

export class QueryExpressionBuilderExample extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2'>
                <div className={`form-group ${style.containerTest}`}>
                    <QueryExpressionBuilder accessToken={'xx564559b1-0045-48e1-953c-3addd1ee4457'} organizationId={'searchuisamples'}/>
                </div>
            </div>
        );
    }
}
