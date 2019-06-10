const CornerRibbon = () => (
    <>
        <div className="ribbon-container bg-white" style={{width: 200, height: 200}}>
            <div className="corner-ribbon top right">Top Right</div>
            <div className="corner-ribbon top left">Top Left</div>
            <div className="corner-ribbon bottom right">Bottom Right</div>
            <div className="corner-ribbon bottom left">Bottom Left</div>
        </div>

        <div className="ribbon-container bg-white mt2" style={{width: 200, height: 100}}>
            <div className="corner-ribbon top right bold bg-orange text-black">Ribbon</div>
            <div className="corner-ribbon top left bold bg-pure-white text-red mod-border border-red">Ribbon</div>
        </div>
    </>
);
export default CornerRibbon;
