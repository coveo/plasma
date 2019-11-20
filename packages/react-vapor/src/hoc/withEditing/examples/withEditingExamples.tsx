import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';

import {Button} from '../../../components/button/Button';
import {Input} from '../../../components/input/Input';
import {IWithDirtyProps} from '../../withDirty/withDirty';
import {withEditing} from '../withEditing';

const lorem = loremIpsum({count: 200});

class ComponentWithEditingExample extends React.Component<IWithDirtyProps> {
    static ID = 'ComponentWithEdit';

    static footerChildren = (<Button primary name="Save" />);

    render() {
        return (
            <div className="mt2">
                <div className="mb2">
                    <Input
                        id="input"
                        labelTitle="Enter something, go ahead, make me dirty..."
                        onChange={() => this.props.toggleIsDirty(true)}
                    />
                </div>
                {lorem}
            </div>
        );
    }
}

export const ComponentWithEditingExampleHOC = withEditing({
    id: ComponentWithEditingExample.ID,
    footerChildren: ComponentWithEditingExample.footerChildren,
    footerClassName: 'sticky-footer-mod-header',
})(ComponentWithEditingExample);
