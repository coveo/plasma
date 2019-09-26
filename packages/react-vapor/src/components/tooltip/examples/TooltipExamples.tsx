import * as React from 'react';
import {Tooltip} from '../Tooltip';

export class TooltipExamples extends React.Component<{}, {}> {
    static description =
        'Tooltips are short descriptions that appear when hovering an element. They are used to provide explanations that do not require nor allow user interaction, like tips and tricks.';

    render() {
        return (
            <div className="mt2">
                <h1 className="text-blue mb1 bold">Tooltip</h1>
                <div className="form-group">
                    <label className="form-control-label">Tooltip example</label>
                    <div className="form-control">
                        <Tooltip title="I am a tooltip!" placement="right">
                            <button type="button" className="btn">
                                Hover me!
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Tooltip example with a footer</label>
                    <div className="form-control">
                        <Tooltip title="I am a tooltip!" footer="I have a footer" placement="right">
                            <button type="button" className="btn">
                                Hover me!
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Tooltip with top with the container body</label>
                    <div className="form-control">
                        <Tooltip title="I am a tooltip!">
                            <button type="button" className="btn">
                                Hover me!
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">No Tooltip if the title is an empty string</label>
                    <div className="form-control">
                        <Tooltip title="">
                            <button type="button" className="btn">
                                Hover me!
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        );
    }
}
