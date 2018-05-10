import * as React from 'react';
import {Toast, ToastType} from '../Toast';
import {ToastContainer} from '../ToastContainer';
import {ToastContentExample} from './ToastContentExample';

export interface IToastExamplesState {
    Success: boolean;
    Warning: boolean;
    Error: boolean;
    Timed: boolean;
    NonDismissible: boolean;
    BottomRight: boolean;
    BottomLeft: boolean;
    BottomCenter: boolean;
    TopLeft: boolean;
    TopRight: boolean;
    TopCenter: boolean;
}

export class ToastExamples extends React.Component<{}, IToastExamplesState> {

    constructor(props: any) {
        super(props);

        this.state = {
            Success: false,
            Warning: false,
            Error: false,
            Timed: false,
            NonDismissible: false,
            TopCenter: false,
            TopLeft: false,
            TopRight: false,
            BottomCenter: false,
            BottomLeft: false,
            BottomRight: false,
        };
    }

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Toasts</label>
                    <div>
                        <button className='btn' onClick={() => this.setState({Success: !this.state.Success})}>Success Toast</button>
                        <button className='btn' onClick={() => this.setState({Warning: !this.state.Warning})}>Warning Toast</button>
                        <button className='btn' onClick={() => this.setState({Error: !this.state.Error})}>Error Toast</button>
                        <button className='btn' onClick={() => this.setState({Timed: !this.state.Timed})}>Timed Toast</button>
                        <button className='btn' onClick={() => this.setState({NonDismissible: !this.state.NonDismissible})}>Non Dismissible Toast</button>

                        <ToastContainer>
                            {this.state.Success && <Toast key='toast-1' id='toast-1' title='Success!' onClose={() => this.setState({Success: false})} />}
                            {this.state.Warning && <Toast key='toast-2' id='toast-2' title='Warning!'
                                type={ToastType.Warning} onClose={() => this.setState({Warning: false})} />}
                            {this.state.Error && <Toast key='toast-3' id='toast-3' title='Ohno! Something went wrong.' type={ToastType.Error}
                                onClose={() => this.setState({Error: false})} content={ToastContentExample}>
                                <a href='#'>Status Page</a>
                            </Toast>}
                            {this.state.Timed &&
                                <Toast key='toast-4' id='toast-4' title='Timed Success!' dismiss={1000} onClose={() => this.setState({Timed: false})} />}
                            {this.state.NonDismissible &&
                                <Toast key='toast-5' id='toast-5' title='Ohno! Something went wrong.' type={ToastType.Error} dismissible={false} content={ToastContentExample} />}
                        </ToastContainer>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Toast Placements</label>
                    <div>
                        <button className='btn' onClick={() => this.setState({TopCenter: !this.state.TopCenter})}>Top Center (default)</button>
                        <button className='btn' onClick={() => this.setState({TopLeft: !this.state.TopLeft})}>Top Left</button>
                        <button className='btn' onClick={() => this.setState({TopRight: !this.state.TopRight})}>Top Right</button>
                        <button className='btn' onClick={() => this.setState({BottomCenter: !this.state.BottomCenter})}>Bottom Center</button>
                        <button className='btn' onClick={() => this.setState({BottomLeft: !this.state.BottomLeft})}>Bottom Left</button>
                        <button className='btn' onClick={() => this.setState({BottomRight: !this.state.BottomRight})}>Bottom Right</button>
                        <ToastContainer>
                            {this.state.TopCenter && <Toast key='toast-1' id='toast-1' title='Top Center' onClose={() => this.setState({TopCenter: false})} />}
                        </ToastContainer>
                        <ToastContainer left>
                            {this.state.TopLeft && <Toast key='toast-1' id='toast-1' title='Top Left' onClose={() => this.setState({TopLeft: false})} />}
                        </ToastContainer>
                        <ToastContainer right>
                            {this.state.TopRight && <Toast key='toast-1' id='toast-1' title='Top Right' onClose={() => this.setState({TopRight: false})} />}
                        </ToastContainer>
                        <ToastContainer bottom>
                            {this.state.BottomCenter && <Toast key='toast-1' id='toast-1' title='Bottom' onClose={() => this.setState({BottomCenter: false})} />}
                        </ToastContainer>
                        <ToastContainer bottom right>
                            {this.state.BottomRight && <Toast key='toast-1' id='toast-1' title='Why am I in the corner?' type={ToastType.Warning} onClose={() => this.setState({BottomRight: false})} />}
                        </ToastContainer>
                        <ToastContainer bottom left>
                            {this.state.BottomLeft && <Toast key='toast-1' id='toast-1' title='Why am I in the corner?' type={ToastType.Warning} onClose={() => this.setState({BottomLeft: false})} />}
                        </ToastContainer>
                    </div>
                </div>
            </div>
        );
    }
}
