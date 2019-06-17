import * as React from 'react';
import {UUID} from '../../../utils/UUID';
import {IContentProps} from '../../content/Content';
import {Loading} from '../../loading/Loading';
import {ISvgProps, Svg} from '../../svg/Svg';
import {FlatSelectConnected} from '../FlatSelectConnected';
import {IFlatSelectOptionProps} from '../FlatSelectOption';

export class FlatSelectExamples extends React.Component {
    render() {
        const defaultFlatSelectOption: IFlatSelectOptionProps[] = [
            {
                id: UUID.generate(),
                option: {content: 'Option 1'},
            },
            {
                id: UUID.generate(),
                option: {content: 'Option 2'},
            },
            {
                id: UUID.generate(),
                option: {content: 'Option 3'},
            },
        ];

        const svg: ISvgProps = {
            svgName: 'domain-google',
            svgClass: 'icon',
        };
        const prepend: IContentProps = {content: () => <Svg {...svg} />, classes: ['mr1']};
        const append: IContentProps = {content: () => <Svg {...svg} />, classes: ['ml1']};

        return (
            <div className="mt2">
                <h1 className="text-blue mb1">Flat Select List</h1>

                <div className="form-group">
                    <label className="form-control-label">Default Flat Select</label>
                    <div className="form-control">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: defaultFlatSelectOption,
                            }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Flat Select mod group</label>
                    <div className="form-control">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: defaultFlatSelectOption,
                                group: true,
                            }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Flat Select mod option picker</label>
                    <div className="form-control">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: defaultFlatSelectOption,
                                optionPicker: true,
                            }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Flat Select with option tooltip</label>
                    <div className="form-control">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: [
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 1'},
                                        tooltip: {title: 'Option 1 tooltip', container: 'body', placement: 'bottom'},
                                    },
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 2'},
                                        tooltip: {title: 'Option 2 tooltip', container: 'body', placement: 'bottom'},
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Flat Select mod group with option tooltip</label>
                    <div className="form-control">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: [
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 1'},
                                        tooltip: {title: 'Option 1 tooltip', container: 'body', placement: 'bottom'},
                                    },
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 2'},
                                        tooltip: {title: 'Option 2 tooltip', container: 'body', placement: 'bottom'},
                                    },
                                ],
                                group: true,
                            }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Flat Select with option prepend</label>
                    <div className="form-control">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: [
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 1'},
                                        prepend: prepend,
                                    },
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 2'},
                                        prepend: prepend,
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Flat Select with option append</label>
                    <div className="form-control">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: [
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 1'},
                                        append: append,
                                    },
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 2'},
                                        append: append,
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Flat Select with option component</label>
                    <div className="form-control">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: [
                                    {
                                        id: UUID.generate(),
                                        option: {content: Loading},
                                    },
                                    {
                                        id: UUID.generate(),
                                        option: {content: Loading},
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
