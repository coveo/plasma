import * as React from 'react';
import {Label} from '../../input/Label';
import {GroupableCheckboxConnected} from '../GroupableCheckboxConnected';

export class GroupableCheckboxConnectedExamples extends React.Component<any, any> {

    render() {
        const parentId1 = 'parentId1';
        const parentId2 = 'parentId2';
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Groupable Checkboxes Connected</h1>
                <div className='form-group'>
                    <label className='form-control-label'>A simple groupable checkbox uncheck by default</label>
                    <div className='form-control'>
                        <GroupableCheckboxConnected id={parentId1} isParent>
                            <Label classes={['label']}>A parent checkbox connected</Label>
                        </GroupableCheckboxConnected>
                        <br />
                        <GroupableCheckboxConnected id={parentId1 + 1} parentId={parentId1} classes={['mt1 mr1']} defaultChecked={false}>
                            <Label classes={['label']}>Checkbox child 1</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected id={parentId1 + 2} parentId={parentId1} classes={['mt1 mr1']} defaultChecked={false}>
                            <Label classes={['label']}>Checkbox child 2</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected id={parentId1 + 3} parentId={parentId1} classes={['mt1 mr1']} defaultChecked={false}>
                            <Label classes={['label']}>Checkbox child 3</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected id={parentId1 + 4} parentId={parentId1} classes={['mt1 mr1']} defaultChecked={false}>
                            <Label classes={['label']}>Checkbox child 4</Label>
                        </GroupableCheckboxConnected>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>A groupable checkbox with child checkbox selected by default</label>
                    <div className='form-control'>
                        <GroupableCheckboxConnected id={parentId2} isParent>
                            <Label classes={['label']}>A parent checkbox connected</Label>
                        </GroupableCheckboxConnected>
                        <br />
                        <GroupableCheckboxConnected id={parentId2 + 1} parentId={parentId2} classes={['mt1 mr1']} defaultChecked={true}>
                            <Label classes={['label']}>Checkbox child 1</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected id={parentId2 + 2} parentId={parentId2} classes={['mt1 mr1']} defaultChecked={false}>
                            <Label classes={['label']}>Checkbox child 2</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected id={parentId2 + 3} parentId={parentId2} classes={['mt1 mr1']} defaultChecked={true}>
                            <Label classes={['label']}>Checkbox child 3</Label>
                        </GroupableCheckboxConnected>
                        <GroupableCheckboxConnected id={parentId2 + 4} parentId={parentId2} classes={['mt1 mr1']} defaultChecked={false}>
                            <Label classes={['label']}>Checkbox child 4</Label>
                        </GroupableCheckboxConnected>
                    </div>
                </div>
            </div>
        );
    }
}
