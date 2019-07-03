const style = {
    width: '100px',
    height: '100px',
};

export default function Shadows() {
    return (
        <div className="flex space-between">
            <div style={style} className="shadow-1 bg-white">
                1
            </div>
            <div style={style} className="shadow-2 bg-white">
                2
            </div>
            <div style={style} className="shadow-3 bg-white">
                3
            </div>
            <div style={style} className="shadow-4 bg-white">
                4
            </div>
            <div style={style} className="shadow-5 bg-white">
                5
            </div>
        </div>
    );
}
