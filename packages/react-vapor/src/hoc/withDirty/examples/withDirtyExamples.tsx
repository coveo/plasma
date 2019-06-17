import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';

import {Input} from '../../../components/input/Input';
import {IWithDirtyProps, withDirty} from '../withDirty';

const lorem = loremIpsum({count: 10});

class ComponentWithDirtyExample extends React.Component<IWithDirtyProps> {
    static ID = 'ComponentWithDirty';

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

export const ComponentWithDirtyExampleHOC = withDirty({
    id: ComponentWithDirtyExample.ID,
    showDirty: (isDirty: boolean) => isDirty && <div className="mt2">You did it</div>,
})(ComponentWithDirtyExample);
