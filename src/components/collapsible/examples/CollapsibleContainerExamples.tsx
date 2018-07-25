import * as React from 'react';
import * as _ from 'underscore';

import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {setExpandedCollapsibleContainer} from '../CollapsibleActions';
import {CollapsibleContainerConnected} from '../CollapsibleContainerConnected';

export const CollapsibleContainerExamples = () =>
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>CollapsibleContainer List</h1>
        <div className='form-group'>
            <label className='form-control-label'>CollapsibleContainer expanded on mount</label>
            <div className='form-control'>
                <CollapsibleContainerConnected
                    id='collapsible-example-1'
                    title='CollapsibleContainer expanded on mount'
                    informationUrl='http://coveo.github.io/vapor/'
                    informationTooltip={{title: 'I display information and if you click me you\'ll be led to a url that was provided to me.', placement: 'top'}}
                    expandedOnMount>
                    I am expanded on mount!
                </CollapsibleContainerConnected>
                <CollapsibleContainerConnected
                    id='collapsible-example-5'
                    title='CollapsibleContainer (why not stack two on top of each other)'
                    informationUrl='http://coveo.github.io/vapor/'
                    informationTooltip={{title: 'I display information and if you click me you\'ll be led to a url that was provided to me.', placement: 'top'}}
                    expandedOnMount>
                    I am expanded on mount!
                </CollapsibleContainerConnected>
            </div>
        </div>
        <div className='form-group'>
            <label className='form-control-label'>CollapsibleContainer not expanded on mount</label>
            <div className='form-control'>
                <CollapsibleContainerConnected
                    id='collapsible-example-2'
                    title='CollapsibleContainer not expanded on mount'
                    informationTooltip={{title: 'I display information only since no url was given to me.', placement: 'top'}}>
                    I was not expanded on mount, but now I am! Thanks!
                </CollapsibleContainerConnected>
            </div>
        </div>
        <div className='form-group'>
            <label className='form-control-label'>
                CollapsibleContainer is expandable from outside the component.
      <button
                    className='ml1'
                    onClick={() => {
                        const collapsibleState = _.findWhere(ReactVaporStore.getState().collapsibles, {id: 'collapsible-example-3'});
                        ReactVaporStore.dispatch(setExpandedCollapsibleContainer('collapsible-example-3', !collapsibleState.expanded));
                    }}>
                    Toggle Container!
        </button>
            </label>
            <div className='form-control'>
                <CollapsibleContainerConnected
                    id='collapsible-example-3'
                    title='CollapsibleContainer'>
                    You just expanded me with that button! Thanks!
                </CollapsibleContainerConnected>
            </div>
        </div>
    </div>;
