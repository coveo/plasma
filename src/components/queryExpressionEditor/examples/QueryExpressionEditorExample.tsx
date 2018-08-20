import * as React from 'react';
import {QueryExpressionEditor} from '../QueryExpressionEditor';
import * as styles from './TempLayout.scss';

export class QueryExpressionEditorExample extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2'>
                <div className={`form-group ${styles.containerTest}`}>
                    <QueryExpressionEditor accessToken={'xx564559b1-0045-48e1-953c-3addd1ee4457'} organizationId={'searchuisamples'} />
                </div>
            </div>
        );
    }
}
