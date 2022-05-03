import classNames from 'classnames';
import {ClassAttributes, HTMLProps, Component} from 'react';
import {omit} from 'underscore';

export interface ILoadingOwnProps extends ClassAttributes<Loading> {
    /**
     * Unique identifier. Only needed when using LoadingConnected
     */
    id?: string;
    /**
     * Additional CSS classes to set on the loading element
     */
    className?: string;
    /**
     * Whether the loading needs to be vertically centered within its parent container
     *
     * @default false
     */
    fullContent?: boolean;
}

export interface ILoadingDispatchProps {
    /**
     * A callback function executed when the component is added to the DOM. Only useful for the implementation of the LoadingConnected, you most likely won't need this prop.
     */
    onRender?: () => void;
    /**
     * A callback function executed when the component is removed from the DOM. Only useful for the implementation of the LoadingConnected, you most likely won't need this prop.
     */
    onDestroy?: () => void;
}

export interface ILoadingProps extends ILoadingOwnProps, ILoadingDispatchProps {}

export class Loading extends Component<ILoadingProps & HTMLProps<HTMLDivElement>, any> {
    static defaultProps: Partial<ILoadingOwnProps> = {
        fullContent: false,
    };

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    render() {
        return (
            <div
                role="alert"
                aria-busy="true"
                className={classNames('spinner', this.props.className, {
                    'flex center-align flex-auto full-content-y': this.props.fullContent,
                })}
                {...omit(this.props, ['id', 'className', 'fullContent', 'onRender', 'onDestroy'])}
            >
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        );
    }
}
