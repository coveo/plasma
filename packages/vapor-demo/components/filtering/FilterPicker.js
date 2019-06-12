import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export const FilterPicker = () => (
<div className="filter-expression-picker">
    <div className="filters coveo-form">
        <div className="admin-filterbox">
            <div className="filter-popup">
                <div className="filter-actions">
                    <a className="btn add-filter">
                        <span>
                            <Svg name={VaporSVG.svg.filterAdd.name} className="icon mod-lg icon-small" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="filters">
                <div className="editable-filter">
                    <div className="filter-badge filter-popup ">
                        <button className="btn edit-filter dropdown-toggle mod-light">
                            <span className="edit-filter-content">
                                <span className="filter-dimension">Browser</span>
                                <span className="filter-operator mod-positive">is</span>
                                <span className="filter-values">Chrome</span>
                                <span className="dropdown-toggle-arrow" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="filter-popup">
                <div className="filter-actions">
                    <a className="btn clear-all-filters">
                        <span>
                            <Svg name={VaporSVG.svg.clear.name} className="icon mod-lg icon-small" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
);

export default FilterPicker;
