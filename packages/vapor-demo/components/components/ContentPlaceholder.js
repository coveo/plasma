const ContentPlaceholder = () => (
    <>
        <div className="mb2">
            <div className="content-placeholder inline-block" style={{height: 16, width: '20%'}} />
            <div className="content-placeholder ml1 inline-block" style={{height: 16, width: '50%'}} />
        </div>

        <div>
            <div className="content-placeholder content-placeholder-animated inline-block" style={{height: 16, width: '50%'}} />
        </div>
        <div>This can be animated too.</div>


        <div>
            <div className="content-placeholder mt2 mb1" style={{height: 64, width: 64}} />
            <div>This could be an image placeholder too.</div>
        </div>
    </>
);
export default ContentPlaceholder;

