export default function Hover() {
    return (
        <div className="flex">
            <button style={{width: 100, height: 50}} className="btn mod-primary hover-color-light-blue">Blue</button>
            <button style={{width: 100, height: 50}} className="btn mod-primary hover-color-yellow">Yellow</button>
            <button style={{width: 100, height: 50}} className="btn mod-primary hover-color-dark-grey">Dark grey</button>
        </div>
    );
};
