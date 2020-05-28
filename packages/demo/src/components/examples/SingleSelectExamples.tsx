import * as React from 'react';
import {connect} from 'react-redux';
import {
    FilterBoxSelectors,
    IFlatSelectOptionProps,
    IItemBoxProps,
    ISelectButtonProps,
    ISingleSelectOwnProps,
    Section,
    selectWithFilter,
    selectWithInfiniteScroll,
    SelectWithInfiniteScrollProps,
    SingleSelectConnected,
    SingleSelectWithFilter,
    SingleSelectWithPredicate,
    SingleSelectWithPredicateAndFilter,
    UUID,
    withServerSideProcessing,
} from 'react-vapor';
import * as _ from 'underscore';

import {IReactVaporExampleState} from '../../Reducers';
import {ExampleComponent} from '../ComponentsInterface';
import {PhotoItem, PhotoProps, usePhotosAPIMock} from './ServerSideSelectExampleUtils';

export const SingleSelectExample: ExampleComponent = () => (
    <Section>
        <SingleSelectConnectedExamples />
        <ServerSideSingleSelectExample id="ServerSideSingleSelect" />
    </Section>
);

SingleSelectExample.description =
    'A Single Select component allows users to choose a single option from a list or, if relevant, to create and select their own custom option.';

const defaultItems: IItemBoxProps[] = [
    {displayValue: 'Test', value: '0'},
    {displayValue: 'Test One', value: '1'},
    {displayValue: 'Disabled', value: 'disabled', disabled: true},
    {displayValue: 'Three', value: '3'},
    {displayValue: 'Four', value: '4'},
    {displayValue: 'Five', value: '5'},
    {displayValue: 'Six', value: '6'},
    {displayValue: 'Seven', value: '7', selectedDisplayValue: '007 Bond, James'},
];

const itemsWithAppendedValue = _.map(defaultItems, (item) => ({
    ...item,
    append: {content: () => <span className="text-red ml3">{item.value}</span>},
}));

const ids = [
    UUID.generate(),
    UUID.generate(),
    UUID.generate(),
    UUID.generate(),
    UUID.generate(),
    UUID.generate(),
    UUID.generate(),
    UUID.generate(),
];

const defaultFlatSelectOptions: IFlatSelectOptionProps[] = [
    {id: UUID.generate(), option: {content: 'All'}, selected: true},
    {id: UUID.generate(), option: {content: 'even'}},
    {id: UUID.generate(), option: {content: 'odd'}},
];

const matchPredicate = (predicate: string, item: IItemBoxProps) => {
    const value = parseInt(item.value, 10);
    if (predicate === defaultFlatSelectOptions[0].id) {
        return true;
    } else if (predicate === defaultFlatSelectOptions[1].id) {
        return value % 2 === 0;
    } else if (predicate === defaultFlatSelectOptions[2].id) {
        return value % 2 === 1;
    } else {
        return true;
    }
};

const SingleSelectConnectedExamples: React.ComponentType = () => (
    <Section level={2} title="Single selects connected to store">
        <Section level={3} className="form-group" title="A single select with some implementation props">
            <SingleSelectConnected
                id={ids[0]}
                items={defaultItems}
                placeholder="Select something"
                canClear
                buttonPrepend={<span>👉 </span>}
            />
        </Section>
        <Section level={3} title="A single select with some implementation props">
            <SingleSelectConnected
                id={ids[1]}
                items={defaultItems}
                toggleClasses="mod-right"
                placeholder="Select something"
                canClear
            />
        </Section>
        <Section level={3} title="A single select with predicates">
            <SingleSelectWithPredicate
                id={ids[2]}
                items={itemsWithAppendedValue}
                options={defaultFlatSelectOptions}
                matchPredicate={(p: string, i: IItemBoxProps) => matchPredicate(p, i)}
            />
        </Section>
        <Section level={3} title="A single select with filter">
            <SingleSelectWithFilter id={ids[3]} items={itemsWithAppendedValue} />
        </Section>
        <Section level={3} title="A single select with a custom match filter that matches the exact value">
            <SingleSelectWithFilter
                id={ids[4]}
                items={itemsWithAppendedValue}
                matchFilter={(filter: string, item: IItemBoxProps) =>
                    _.isString(item.displayValue) ? item.displayValue.indexOf(filter) !== -1 : false
                }
            />
        </Section>
        <Section level={3} title="A single select with a filter, predicates, a lots of values and a footer">
            <SingleSelectWithPredicateAndFilter
                id={ids[5]}
                items={itemsWithAppendedValue}
                options={defaultFlatSelectOptions}
                matchPredicate={(p: string, i: IItemBoxProps) => matchPredicate(p, i)}
                dropClasses="drop-this"
                customValues
                footer={<div className="select-footer">The single select footer</div>}
            />
        </Section>
        <Section level={3} title="A single select with a custom button">
            <SingleSelectConnected id={ids[6]} items={defaultItems} customButton={MyCustomButton} />
        </Section>
        <Section level={3} title="A single select with items loading">
            <SingleSelectWithPredicateAndFilter
                id={ids[7]}
                isLoading
                matchPredicate={(p: string, i: IItemBoxProps) => matchPredicate(p, i)}
                options={defaultFlatSelectOptions}
            />
        </Section>
    </Section>
);

const MyCustomButton: React.FunctionComponent<ISelectButtonProps> = ({onClick, selectedOptions}) => {
    const option = selectedOptions[0];
    return (
        <div onClick={onClick} className="btn">
            {option ? option.displayValue : 'Click me!'}
        </div>
    );
};

const PER_PAGE = 10;

const mapStateToProps = (state: IReactVaporExampleState, props: {id: string}) => ({
    filterValue: FilterBoxSelectors.getFilterText(state, props),
});

const ServerSideSingleSelectExampleDisconnected: React.FunctionComponent<{id: string} & ReturnType<
    typeof mapStateToProps
>> = ({filterValue, id}) => {
    const [photos, totalEntries, fetchPhotos] = usePhotosAPIMock();
    const [pageNbr, setPage] = React.useState(1);

    React.useEffect(() => {
        fetchPhotos({_page: 1, _limit: PER_PAGE});
    }, [PER_PAGE]);

    function fetchNextPage() {
        fetchPhotos({_page: pageNbr + 1, _limit: PER_PAGE, q: filterValue}, false);
        setPage(pageNbr + 1);
    }

    function applyFilter() {
        fetchPhotos({_page: 1, _limit: PER_PAGE, q: filterValue});
        setPage(1);
    }

    return (
        <Section level={2} title="Server side single select">
            <Section level={3} title="A single select using server-side filtering and pagination with infinite scroll">
                <ServerSideSingleSelect
                    id={id}
                    items={photos.map(
                        (photo: PhotoProps): IItemBoxProps => ({
                            value: photo.id,
                            displayValue: <PhotoItem {...photo} />,
                        })
                    )}
                    totalEntries={totalEntries}
                    next={fetchNextPage}
                    onUpdate={applyFilter}
                    canClear
                    noFixedWidth
                />
            </Section>
        </Section>
    );
};

const ServerSideSingleSelect: React.ComponentType<ISingleSelectOwnProps & SelectWithInfiniteScrollProps> = _.compose(
    withServerSideProcessing,
    selectWithFilter,
    selectWithInfiniteScroll
)(SingleSelectConnected);

const ServerSideSingleSelectExample = connect(mapStateToProps)(ServerSideSingleSelectExampleDisconnected);
