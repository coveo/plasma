export const MessagePopover = () => (
    <>
        <button type="button" className="btn js-tether-target">
            Popover toggle
        </button>
        <div className="popover" style={{width: '320px'}}>
            <div className="popover-body">Insert popover content here!</div>
            <div className="popover-footer">
                <button type="button" className="btn mod-primary mod-small">
                    Submit
                </button>
                <button type="button" className="btn mod-small">
                    Cancel
                </button>
            </div>
        </div>
    </>
);

export default MessagePopover;
