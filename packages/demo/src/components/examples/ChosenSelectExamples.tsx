import * as React from 'react';
import {ChosenSelect} from 'react-vapor';
import * as _ from 'underscore';

export class ChosenSelectExamples extends React.Component<any, any> {
    static deprecated = true;

    getNumberOfOptions(num: number) {
        return _.times(num, (index: number) => {
            const indexShow = index + 1;
            return (
                <option key={index} value={indexShow}>
                    Option {indexShow}
                </option>
            );
        });
    }

    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Default Chosen single select</label>
                    <div className="form-control">
                        <ChosenSelect
                            placeholderTextSingle="Choose a country"
                            value="France"
                            width="400px"
                            onChosenChange={(event: any, args: any) => {
                                /* tslint:disable */ console.log('Changed: ', args); /* tslint:enable */
                            }}
                        >
                            <option value="Canada">Canada</option>
                            <option value="France">France</option>
                            <option value="United States">United States</option>
                        </ChosenSelect>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Chosen multi select</label>
                    <div className="form-control">
                        <ChosenSelect
                            placeholderTextSingle="Choose a country"
                            defaultValue={['Canada']}
                            multiple
                            width="400px"
                            onChosenChange={(event: any, args: any) => {
                                /* tslint:disable */ console.log('Changed: ', args); /* tslint:enable */
                            }}
                        >
                            <option value="Canada">Canada</option>
                            <option value="France">France</option>
                            <option value="United States">United States</option>
                        </ChosenSelect>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Chosen single select with 2000 options</label>
                    <div className="form-control">
                        <ChosenSelect placeholderTextSingle="Choose a option" width="400px">
                            {this.getNumberOfOptions(2000)}
                        </ChosenSelect>
                    </div>
                </div>
            </div>
        );
    }
}
