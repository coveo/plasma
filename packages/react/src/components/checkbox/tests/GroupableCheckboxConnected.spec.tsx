import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {Checkbox} from '../Checkbox';
import {ICheckboxState} from '../CheckboxReducers';
import {GroupableCheckboxConnected, IGroupableCheckboxOwnProps} from '../GroupableCheckboxConnected';
import {IGroupableCheckboxesState} from '../GroupableCheckboxConstants';
import {divTemplateClasses, divTemplateForMultipleCheckbox} from './GroupableCheckboxTestUtils';

describe('GroupableCheckbox', () => {
    describe('<GroupableCheckboxConnected />', () => {
        let groupableCheckbox: ReactWrapper<IGroupableCheckboxOwnProps, any>;
        let wrapper: ReactWrapper<any, any>;
        let store: Store<PlasmaState>;
        let groupableChekboxesState: IGroupableCheckboxesState[];
        let groupableCheckboxState: IGroupableCheckboxesState;
        const parentId = 'checkboxParent1';
        const defaultElementApp = 'App';

        const renderChildCheckbox = (
            props: IGroupableCheckboxOwnProps = {},
            attachToElementName: string = defaultElementApp,
        ) => {
            wrapper = mount(
                <Provider store={store}>
                    <GroupableCheckboxConnected id={parentId + '1'} parentId={parentId} isParent={false} {...props} />
                </Provider>,
                {attachTo: document.getElementById(attachToElementName)},
            );
            groupableCheckbox = wrapper.find(Checkbox).first();

            return wrapper;
        };

        const renderParentCheckbox = (
            props: IGroupableCheckboxOwnProps = {},
            attachToElementName: string = defaultElementApp,
        ) => {
            wrapper = mount(
                <Provider store={store}>
                    <GroupableCheckboxConnected id={parentId} isParent={true} {...props} />
                </Provider>,
                {attachTo: document.getElementById(attachToElementName)},
            );
            groupableCheckbox = wrapper.find(Checkbox).first();

            return wrapper;
        };

        const getCurrentGroupableCheckboxes = (currentStore: Store<PlasmaState>): IGroupableCheckboxesState[] =>
            currentStore
                .getState()
                .groupableCheckboxes.filter((currentCheckbox) => currentCheckbox.parentId === parentId);

        const getFirstGroupableCheckbox = (currentStore: Store<PlasmaState>): IGroupableCheckboxesState =>
            currentStore
                .getState()
                .groupableCheckboxes.filter((currentCheckbox) => currentCheckbox.parentId === parentId)[0];

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
        });

        describe('Child checkbox', () => {
            it('should get its id as a prop', () => {
                renderChildCheckbox();
                const idProp = groupableCheckbox.props().id;

                expect(idProp).toBeDefined();
                expect(idProp).toBe(parentId + '1');
            });

            it('should get its parentId as a prop', () => {
                renderChildCheckbox();
                const currentParentId = groupableCheckbox.props().parentId;

                expect(currentParentId).toBeDefined();
                expect(currentParentId).toBe(parentId);
            });

            it('should add the child groupableCheckbox in the store on render', () => {
                renderChildCheckbox();
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);

                expect(groupableChekboxesState.length).toBe(1);
                expect(groupableChekboxesState[0].total).toBe(1);
            });

            it('should update the number selected if the child checkbox is checked', () => {
                renderChildCheckbox({
                    defaultChecked: true,
                });
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);

                expect(groupableChekboxesState.length).toBe(1);
                expect(groupableChekboxesState[0].nbChecked).toBe(1);
            });

            it('should remove the child checkbox in the groupableChekboxeState', () => {
                renderChildCheckbox();
                groupableCheckbox.props().onDestroy();
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);

                expect(groupableChekboxesState.length).toBe(1);
                expect(groupableChekboxesState[0].checkboxes.length).toBe(0);
            });

            it('should toggle the child checkbox on click witch checked true', () => {
                renderChildCheckbox({
                    defaultChecked: false,
                });
                groupableCheckbox.props().onClick({} as any);
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);

                expect(groupableChekboxesState.length).toBe(1);
                expect(groupableChekboxesState[0].checkboxes[0].checked).toBe(true);
            });

            it('should toggle the child checkbox on click witch checked false', () => {
                renderChildCheckbox({
                    defaultChecked: true,
                });
                groupableCheckbox.props().onClick({} as any);
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);

                expect(groupableChekboxesState.length).toBe(1);
                expect(groupableChekboxesState[0].checkboxes[0].checked).toBe(false);
            });
        });

        describe('Parent checkbox', () => {
            it('should get its id as a prop', () => {
                renderParentCheckbox();
                const idProp = groupableCheckbox.props().id;

                expect(idProp).toBeDefined();
                expect(idProp).toBe(parentId);
            });

            it('should have isParent to true', () => {
                renderParentCheckbox();
                const isParent = groupableCheckbox.props().isParent;

                expect(isParent).toBeDefined();
                expect(isParent).toBe(true);
            });

            it('should add the parent groupableCheckbox in the store on render', () => {
                renderParentCheckbox();
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);

                expect(groupableChekboxesState.length).toBe(1);
                expect(groupableChekboxesState[0].parent).toBeDefined();
            });

            it('should remove all the groupableChekboxeState if the parent is deleted', () => {
                renderParentCheckbox();
                groupableCheckbox.props().onDestroy();
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);

                expect(groupableChekboxesState.length).toBe(0);
            });
        });

        describe('With child checkboxes and parent checkbox', () => {
            let wrappers: Array<ReactWrapper<any, any>>;

            const getView = () => {
                document.body.innerHTML += divTemplateForMultipleCheckbox;

                wrappers = [];
                wrappers.push(renderChildCheckbox({}, divTemplateClasses.checkbox1));
                wrappers.push(renderChildCheckbox({id: parentId + '2'}, divTemplateClasses.checkbox2));
                wrappers.push(renderParentCheckbox({}, divTemplateClasses.checkbox3));
            };

            afterEach(() => {
                _.each(wrappers, (currentWrapper: ReactWrapper<any, any>) => {
                    currentWrapper.unmount();
                });
            });

            it('should add checkboxes and the parent checkbox event if the parent is added lastly', () => {
                getView();
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);
                groupableCheckboxState = groupableChekboxesState[0];

                expect(groupableChekboxesState.length).toBe(1);
                expect(groupableCheckboxState.checkboxes.length).toBe(2);

                expect(groupableCheckboxState.parent).toBeDefined();
            });

            it('should have total equal to the number of child checkboxes added', () => {
                getView();

                groupableCheckboxState = getFirstGroupableCheckbox(store);

                expect(groupableCheckboxState.total).toBe(2);

                wrappers.push(renderChildCheckbox({id: parentId + '4'}, divTemplateClasses.checkbox4));
                groupableCheckboxState = getFirstGroupableCheckbox(store);

                expect(groupableCheckboxState.total).toBe(3);
            });

            it('should have nbChecked equal to the number of child checkboxes checked added', () => {
                getView();

                wrappers.push(
                    renderChildCheckbox({id: parentId + '4', defaultChecked: true}, divTemplateClasses.checkbox4),
                );
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);
                groupableCheckboxState = groupableChekboxesState[0];

                expect(groupableCheckboxState.nbChecked).toBe(1);
            });

            it('should toggle all child checkbox on click parent checkbox true', () => {
                getView();

                groupableCheckbox.props().onClick({} as any);
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);

                expect(
                    _.every(groupableChekboxesState[0].checkboxes, (checkbox: ICheckboxState) => checkbox.checked),
                ).toBe(true);

                expect(groupableChekboxesState[0].nbChecked).toBe(2);
            });

            it('should toggle all child checkbox on click parent checkbox false', () => {
                getView();

                groupableCheckbox.props().onClick({} as any);
                groupableCheckbox.props().onClick({} as any);
                groupableChekboxesState = getCurrentGroupableCheckboxes(store);

                expect(
                    _.every(groupableChekboxesState[0].checkboxes, (checkbox: ICheckboxState) => !checkbox.checked),
                ).toBe(true);

                expect(groupableChekboxesState[0].nbChecked).toBe(0);
            });
        });
    });
});
