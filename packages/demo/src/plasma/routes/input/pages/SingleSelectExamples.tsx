import * as React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    FilterBoxSelectors,
    IDispatch,
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
    ValidationActions,
    ValidationMessage,
    withDirtySaveButtonHOC,
    withDirtySingleSelectHOC,
    withNonEmptySingleSelectHOC,
    withServerSideProcessing,
    withValidationMessage,
} from 'react-vapor';
import * as _ from 'underscore';

import {ExampleComponent} from '../../../utils/ExamplesUtils';
import VaporComponent from '../../../../demo-building-blocs/VaporComponent';
import {IReactVaporExampleState} from '../../../../Reducers';
import {PhotoItem, PhotoProps, usePhotosAPIMock} from '../../../utils/ServerSideSelectExampleUtils';

// start-print
export const SingleSelectExample: ExampleComponent = () => (
    <VaporComponent id="SingleSelect" title="Single Select" withSource>
        <Section>
            <SingleSelectConnectedExamples />
            <ServerSideSingleSelectExample id="ServerSideSingleSelect" />
        </Section>
    </VaporComponent>
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

const itemsWithASelectedItem = _.map(defaultItems, (item) => (item.value === '3' ? {...item, selected: true} : item));

const itemsWithAppendedValue = _.map(defaultItems, (item) => ({
    ...item,
    append: {content: () => <span className="append-red ml3">{item.value}</span>},
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
    UUID.generate(),
    UUID.generate(),
];

const defaultFlatSelectOptions: IFlatSelectOptionProps[] = [
    {id: UUID.generate(), option: {content: 'All'}, selected: true},
    {id: UUID.generate(), option: {content: 'even'}},
    {id: UUID.generate(), option: {content: 'odd'}},
];

const SingleSelectConnectedWithValidation = _.compose(withValidationMessage)(SingleSelectConnected);

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

const SingleSelectWithNonEmptyValue = withNonEmptySingleSelectHOC(SingleSelectConnected);
const SingleSelectWithDirty = withDirtySingleSelectHOC(SingleSelectConnected);
const SaveButton = withDirtySaveButtonHOC(Button);

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
        <Section level={3} title="A single select with a selected item">
            <SingleSelectConnected
                id={ids[2]}
                items={itemsWithASelectedItem}
                toggleClasses="mod-right"
                placeholder="Select something"
                canClear
            />
        </Section>
        <Section level={3} title="A single select with predicates">
            <SingleSelectWithPredicate
                id={ids[3]}
                items={itemsWithAppendedValue}
                options={defaultFlatSelectOptions}
                matchPredicate={(p: string, i: IItemBoxProps) => matchPredicate(p, i)}
                initiallySelectedPredicateId={defaultFlatSelectOptions[1].id}
            />
        </Section>
        <Section level={3} title="A single select with filter">
            <SingleSelectWithFilter id={ids[4]} items={itemsWithAppendedValue} />
        </Section>
        <Section level={3} title="A single select with a custom match filter that matches the exact value">
            <SingleSelectWithFilter
                id={ids[5]}
                items={itemsWithAppendedValue}
                matchFilter={(filter: string, item: IItemBoxProps) =>
                    _.isString(item.displayValue) ? item.displayValue.indexOf(filter) !== -1 : false
                }
            />
        </Section>
        <Section level={3} title="A single select with a filter, predicates, a lots of values and a footer">
            <SingleSelectWithPredicateAndFilter
                id={ids[6]}
                items={itemsWithAppendedValue}
                options={defaultFlatSelectOptions}
                matchPredicate={(p: string, i: IItemBoxProps) => matchPredicate(p, i)}
                dropClasses="drop-this"
                customValues
                footer={<div className="select-footer">The single select footer</div>}
            />
        </Section>
        <Section level={3} title="A single select with a custom button">
            <SingleSelectConnected id={ids[7]} items={defaultItems} customButton={MyCustomButton} />
        </Section>
        <Section level={3} title="A single select with items loading">
            <SingleSelectWithPredicateAndFilter
                id={ids[8]}
                isLoading
                matchPredicate={(p: string, i: IItemBoxProps) => matchPredicate(p, i)}
                options={defaultFlatSelectOptions}
            />
        </Section>
        <Section level={3} title="A single select with an error message to show with a button">
            <SingleSelectWithMessageExample />
        </Section>
        <Section level={3} title="A single select with non-empty validation">
            <SingleSelectWithNonEmptyValue id="single-select-non-empty" items={defaultItems} canClear />
            <div>
                <ValidationMessage id="single-select-non-empty" />
            </div>
        </Section>
        <Section level={3} title="A single select with dirty management">
            <div>
                <SingleSelectWithDirty id="select-dirty" items={defaultItems} canClear />
                <SingleSelectWithDirty
                    id="select-dirty-with-initial-value"
                    items={defaultItems}
                    initialValue={defaultItems[1].value}
                    canClear
                    footer={<div className="select-footer">This one already has an initial value</div>}
                />
                <SaveButton
                    enabled
                    validationIds={['select-dirty', 'select-dirty-with-initial-value']}
                    name="An example button bound to the select"
                />
            </div>
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

const SingleSelectWithMessageExample = connect(undefined, (dispatch: IDispatch) => ({
    showMessage: () => dispatch(ValidationActions.setError(ids[9], 'error message!')),
}))(({showMessage}: {showMessage: () => void}) => (
    <>
        <SingleSelectConnectedWithValidation id={ids[9]} items={defaultItems} placeholder="Select something" />
        <Button name="Show message" classes="mt1" onClick={() => showMessage()} />
    </>
));

const ServerSideSingleSelectExampleDisconnected: React.FunctionComponent<
    {id: string} & ReturnType<typeof mapStateToProps>
> = ({filterValue, id}) => {
    const [photos, totalEntries, fetchPhotos] = usePhotosAPIMock();
    const [pageNbr, setPage] = React.useState(1);

    React.useEffect(() => {
        fetchPhotos({_page: 1, _limit: PER_PAGE});
    }, []);

    const fetchNextPage = () => {
        fetchPhotos({_page: pageNbr + 1, _limit: PER_PAGE, q: filterValue}, false);
        setPage(pageNbr + 1);
    };

    const applyFilter = () => {
        fetchPhotos({_page: 1, _limit: PER_PAGE, q: filterValue});
        setPage(1);
    };

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
