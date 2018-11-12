import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {Button} from '../../../components/button/Button';
import {Input} from '../../../components/input/Input';
import {withEditing} from '../withEditing';
import {toggleDirtyComponent} from '../withEditingActions';

const lorem = loremIpsum({count: 200});

class ComponentWithEditingExample extends React.Component {
    static ID = 'ComponentWithEdit';

    static footerChildren = (
        <Button primary name='Save' />
    );

    render() {
        return (
            <div className='mt2'>
                <div className='mb2'>
                    <Input
                        id='input'
                        labelTitle='Enter something, go ahead, make me dirty...'
                        onChange={() => ReactVaporStore.dispatch(toggleDirtyComponent(ComponentWithEditingExample.ID, true))}
                    />
                </div>
                {lorem}
            </div>
        );
    }
}

export const ComponentWithEditingExampleHOC = withEditing(
    {id: ComponentWithEditingExample.ID, footerChildren: ComponentWithEditingExample.footerChildren, footerClassName: 'sticky-footer-mod-header'},
)(ComponentWithEditingExample);
