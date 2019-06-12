export const SplitLayout = () => (
    <div className="flex flex-column overflow-auto mod-border" style={{height: '280px'}}>
        <div className="split-layout">
            <div className="column">
                <p className="p1" style={{'line-height': '24px'}}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
            </div>
            <div className="column">
                <ul className="collapsible" data-collapsible="expandable">
                    <li>
                        <button type="button" className="collapsible-header active btn with-icon">
                            Text example
                        </button>
                        <div className="collapsible-body">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="collapsible-header btn with-icon">
                            Inputs
                        </button>
                        <div className="collapsible-body">
                            <div className="coveo-form">
                                <fieldset className="form-group input-field mod-fixed-width">
                                    <input type="text" required />
                                    <label>Input 1</label>
                                </fieldset>
                                <fieldset className="form-group input-field mod-fixed-width">
                                    <input type="text" required />
                                    <label>Input 2</label>
                                </fieldset>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default SplitLayout;
