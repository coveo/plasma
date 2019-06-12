export const NumericSpinner = () => (
    <>
    <div className="input-group admin-numeric-spinner">
        <input type="text" value="1" className="" />
         <span className="add-on">
             <div id="SpinnerUp">
                 <i className="coveo-sprites-misc-spinner_arrow_up" />
             </div>
             <div id="SpinnerDown">
                 <i className="coveo-sprites-misc-spinner_arrow_down" />
             </div>
         </span>
    </div>

    <div className="input-group mt4">
        <label className="form-control-label">With an error</label>
        <div className="input-field validate">
            <div className="input-wrapper input invalid" id="SizeInGibibytesWrapper">
                <span id="SizeInGibibytes" className="admin-numeric-spinner-container">
                    <div className="input-group admin-numeric-spinner">
                        <input type="text" value="30" />
                        <span className="add-on">
                            <div id="SpinnerUp">
                                <i className="coveo-sprites-misc-spinner_arrow_up" />
                            </div>
                            <div id="SpinnerDown">
                                <i className="coveo-sprites-misc-spinner_arrow_down" />
                            </div>
                        </span>
                    </div>
                </span>
            </div>
            <label data-invalid-message="An error" />
        </div>
    </div>
</>
);
export default NumericSpinner;
