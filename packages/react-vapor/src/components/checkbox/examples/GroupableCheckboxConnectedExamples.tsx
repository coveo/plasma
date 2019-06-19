import * as React from 'react';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {Button} from '../../button/Button';
import {Label} from '../../input/Label';
import {toggleDisabledAllGroupedCheckbox, toggleDisabledGroupedCheckbox} from '../GroupableCheckboxActions';
import {GroupableCheckboxConnected} from '../GroupableCheckboxConnected';

export class GroupableCheckboxConnectedExamples extends React.Component<any, any> {
    private toggleDisabledAllCheckboxes(id: string, disabled?: boolean) {
        ReactVaporStore.dispatch(toggleDisabledAllGroupedCheckbox(id, undefined, disabled));
    }

    private toggleDisabledGroupedCheckbox(id: string, parentId: string) {
        ReactVaporStore.dispatch(toggleDisabledGroupedCheckbox(id, parentId));
    }

    render() {
        const parentId1 = 'parentId1';
        const parentId2 = 'parentId2';
        const parentId3 = 'parentId3';
        const parentId4 = 'parentId4';
        const parentId5 = 'parentId5';
        return (
            <div className="mt2">
                <h1 className="text-blue mb1 bold">Groupable Checkboxes Connected</h1>
                <div className="form-group">
                    <label className="form-control-label">A simple groupable checkbox uncheck by default</label>
                    <div className="form-control">
                        <GroupableCheckboxConnected id={parentId1} isParent>
                            <Label classes={['label']}>A parent checkbox connected</Label>
                        </GroupableCheckboxConnected>
                        <br />
                        <GroupableCheckboxConnected
                            id={parentId1 + 1}
                            parentId={parentId1}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 1</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId1 + 2}
                            parentId={parentId1}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 2</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId1 + 3}
                            parentId={parentId1}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 3</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId1 + 4}
                            parentId={parentId1}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 4</Label>
                        </GroupableCheckboxConnected>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">
                        A groupable checkbox with child checkbox selected by default
                    </label>
                    <div className="form-control">
                        <GroupableCheckboxConnected id={parentId2} isParent>
                            <Label classes={['label']}>A parent checkbox connected</Label>
                        </GroupableCheckboxConnected>
                        <br />
                        <GroupableCheckboxConnected
                            id={parentId2 + 1}
                            parentId={parentId2}
                            classes={['mt1 mr1']}
                            defaultChecked={true}
                        >
                            <Label classes={['label']}>Checkbox child 1</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId2 + 2}
                            parentId={parentId2}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 2</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId2 + 3}
                            parentId={parentId2}
                            classes={['mt1 mr1']}
                            defaultChecked={true}
                        >
                            <Label classes={['label']}>Checkbox child 3</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId2 + 4}
                            parentId={parentId2}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 4</Label>
                        </GroupableCheckboxConnected>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">A groupable checkbox with all checkboxes disabled</label>
                    <div className="form-group">
                        <label className="form-control-label">Link Button</label>
                        <div className="form-control">
                            <Button
                                name={'Toggle all checkboxes to disabled/enabled'}
                                classes={['m1']}
                                enabled={true}
                                onClick={() => this.toggleDisabledAllCheckboxes(parentId3)}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <GroupableCheckboxConnected id={parentId3} isParent defaultDisabled>
                            <Label classes={['label']}>A parent checkbox connected</Label>
                        </GroupableCheckboxConnected>
                        <br />
                        <GroupableCheckboxConnected
                            id={parentId3 + 1}
                            parentId={parentId3}
                            classes={['mt1 mr1']}
                            defaultChecked={true}
                            defaultDisabled
                        >
                            <Label classes={['label']}>Checkbox child 1</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId3 + 2}
                            parentId={parentId3}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                            defaultDisabled
                        >
                            <Label classes={['label']}>Checkbox child 2</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId3 + 3}
                            parentId={parentId3}
                            classes={['mt1 mr1']}
                            defaultChecked={true}
                            defaultDisabled
                        >
                            <Label classes={['label']}>Checkbox child 3</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId3 + 4}
                            parentId={parentId3}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                            defaultDisabled
                        >
                            <Label classes={['label']}>Checkbox child 4</Label>
                        </GroupableCheckboxConnected>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">A groupable checkbox with some checkboxes disabled</label>
                    <div className="form-control">
                        <GroupableCheckboxConnected id={parentId4} isParent>
                            <Label classes={['label']}>A parent checkbox connected</Label>
                        </GroupableCheckboxConnected>
                        <br />
                        <div className="form-group">
                            <label className="form-control-label">Link Button</label>
                            <div className="form-control">
                                <Button
                                    name={'Toggle disabled on this checkbox'}
                                    classes={['m1']}
                                    enabled={true}
                                    onClick={() => this.toggleDisabledGroupedCheckbox(parentId4 + 1, parentId4)}
                                />
                            </div>
                        </div>
                        <GroupableCheckboxConnected
                            id={parentId4 + 1}
                            parentId={parentId4}
                            classes={['mt1 mr1']}
                            defaultChecked={true}
                            defaultDisabled
                        >
                            <Label classes={['label']}>Checkbox child 1</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId4 + 2}
                            parentId={parentId4}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 2</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId4 + 3}
                            parentId={parentId4}
                            classes={['mt1 mr1']}
                            defaultChecked={true}
                            defaultDisabled
                        >
                            <Label classes={['label']}>Checkbox child 3</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId4 + 4}
                            parentId={parentId4}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 4</Label>
                        </GroupableCheckboxConnected>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">
                        A groupable checkbox not disabled with a button to enable all
                    </label>
                    <div className="form-group">
                        <label className="form-control-label">Link Button</label>
                        <div className="form-control">
                            <Button
                                name={'Toggle all checkboxes to disabled'}
                                classes={['m1']}
                                enabled={true}
                                onClick={() => this.toggleDisabledAllCheckboxes(parentId5, true)}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <GroupableCheckboxConnected id={parentId5} isParent>
                            <Label classes={['label']}>A parent checkbox connected</Label>
                        </GroupableCheckboxConnected>
                        <br />
                        <GroupableCheckboxConnected
                            id={parentId5 + 1}
                            parentId={parentId5}
                            classes={['mt1 mr1']}
                            defaultChecked={true}
                        >
                            <Label classes={['label']}>Checkbox child 1</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId5 + 2}
                            parentId={parentId5}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 2</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId5 + 3}
                            parentId={parentId5}
                            classes={['mt1 mr1']}
                            defaultChecked={true}
                        >
                            <Label classes={['label']}>Checkbox child 3</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected
                            id={parentId5 + 4}
                            parentId={parentId5}
                            classes={['mt1 mr1']}
                            defaultChecked={false}
                        >
                            <Label classes={['label']}>Checkbox child 4</Label>
                        </GroupableCheckboxConnected>
                    </div>
                </div>
            </div>
        );
    }
}
