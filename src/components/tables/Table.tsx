import * as React from 'react';
import {TableHeader} from './TableHeader';
// import {TableEmptyRow} from './TableEmptyRow';
// import {BlankSlate} from '../blankslate/BlankSlate';
// import {TableCollapsibleRow} from './TableCollapsibleRow';

export interface ITableOwnProps extends React.ClassAttributes<Table> {
    displayedProperties: string[];
    displayCollapsibleDataBySection?: boolean;
    perPageOptions?: number[];
    perPageLabel?: string;
    withFilter?: boolean;

    sortByMethods: {
        [key: string]: (propertyData: any, propertyKey: string, object: {[key: string]: any}) => void;
    };
    headerFormatterMethods: {
        [key: string]: (propertyData: any, propertyKey: string, object: {[key: string]: any}) => string|JSX.Element;
    };
    dataFormatterMethods: {
        [key: string]: (propertyData: any, propertyKey: string, object: {[key: string]: any}) => string|JSX.Element;
    };
    predicateFormatterMethods: {
        [key: string]: (propertyData: any, propertyKey: string, object: {[key: string]: any}) => string|JSX.Element;
    };
}

export interface ITableState {
    perPage: number|'all';
    atPage: number;
    sortedBy?: string;
    sortedAscending?: boolean;
    isLoading?: boolean;
    displayedTableDataIDs: string[];
    tableData: {
        byId: {
            id: string;
            headingData: {
                [data: string]: any;
            };
            collapsibleData?: {
                [section: string]: {
                    [property: string]: any;
                };
            };
        };
        allIds: string[];
    };
}

export class Table extends React.Component<ITableOwnProps, any> {

    render() {
        return (
            <table>
                <TableHeader columns={[{title: 'test'}]} headerClass={'mod-no-border-top'} />
                {this.props.children}
            </table>
        );
    }
}
