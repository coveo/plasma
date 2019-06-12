export const MessageTooltip = () => (
    <div style={{height: '150px'}}>
        <div class="tooltip right in">
            <div class="tooltip-arrow" />
            <div class="tooltip-inner">Tooltip to the right</div>
        </div>
        <div class="tooltip top in" style={{left: '33%'}}>
            <div class="tooltip-arrow" />
            <div class="tooltip-inner">Tooltip to the top</div>
        </div>
        <div class="tooltip bottom in" style={{left: '66%'}}>
            <div class="tooltip-arrow" />
            <div class="tooltip-inner">Tooltip to the bottom</div>
        </div>
        <div class="tooltip left in" style={{right: '0'}}>
            <div class="tooltip-arrow" />
            <div class="tooltip-inner">Tooltip to the left</div>
        </div>
        <div class="tooltip bottom in" style={{top: '100px'}}>
            <div class="tooltip-arrow" style={{left: '25%'}} />
            <div class="tooltip-inner">Tooltip with decentered arrow</div>
        </div>
    </div>
);

export default MessageTooltip;
