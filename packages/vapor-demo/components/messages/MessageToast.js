import Svg from '../Svg';

export const MessageToast = () => (
    <>
        <div className="toast-container relative" style={{top: '0'}}>
            <div className="toast mod-success mod-animated">
                <span className="toast-close">
                    <Svg name="close" className="icon fill-pure-white" />
                </span>
                <div className="toast-title">Your settings have been saved</div>
            </div>

            <div className="toast mod-warning mod-animated">
                <span className="toast-close">
                    <Svg name="close" className="icon fill-pure-white" />
                </span>
                <div className="toast-title">You have almost reached your download limit.</div>
                <div className="toast-description">
                    <a href="#">See your usage limits</a>
                </div>
            </div>

            <div className="toast mod-error mod-animated">
                <span className="toast-close">
                    <Svg name="close" className="icon fill-pure-white" />
                </span>
                <div className="toast-title">Ohno! Something went horribly wrong.</div>
                <div className="toast-description">
                    <a href="#">Status page</a>
                </div>
            </div>
        </div>
    </>
);

export default MessageToast;
