import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

const Calendar = () => (
    <>
        <div className="date-picker-box flex flex-column">
            <div className="split-layout">
                <div className="calendar column">
                    <div className="calendar-header p2">
                        <div div className="options-cycle text-medium-blue mod-inline">
                            <button className="options-cycle-button">
                                <Svg name={VaporSVG.svg.arrowLeftRounded.name} className="icon fill-medium-blue" />
                            </button>
                            <span className="options-cycle-option">January</span>
                            <button className="options-cycle-button">
                                <Svg name={VaporSVG.svg.arrowRightRounded.name} className="icon fill-medium-blue" />
                            </button>
                        </div>
                        <div className="options-cycle text-medium-blue mod-inline">
                            <button className="options-cycle-button">
                                <Svg name={VaporSVG.svg.arrowLeftRounded.name} className="icon fill-medium-blue" />
                            </button>
                            <span className="options-cycle-option">2017</span>
                            <button className="options-cycle-button">
                                <Svg name={VaporSVG.svg.arrowRightRounded.name} className="icon fill-medium-blue" />
                            </button>
                        </div>
                    </div>
                    <table className="calendar-grid">
                        <thead className="mod-no-border-top">
                            <tr>
                                <th>Sun</th>
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className="other-month-date">29</span>
                                </td>
                                <td>
                                    <span className="other-month-date">30</span>
                                </td>
                                <td>
                                    <span className="other-month-date">31</span>
                                </td>
                                <td>
                                    <span className="selected-date bg-blue lower-limit upper-limit">
                                        1<span></span>
                                    </span>
                                </td>
                                <td>
                                    <span>2</span>
                                </td>
                                <td>
                                    <span>3</span>
                                </td>
                                <td>
                                    <span>4</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>5</span>
                                </td>
                                <td>
                                    <span>6</span>
                                </td>
                                <td>
                                    <span>7</span>
                                </td>
                                <td>
                                    <span>8</span>
                                </td>
                                <td>
                                    <span>9</span>
                                </td>
                                <td>
                                    <span>10</span>
                                </td>
                                <td>
                                    <span>11</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>12</span>
                                </td>
                                <td>
                                    <span>13</span>
                                </td>
                                <td>
                                    <span>14</span>
                                </td>
                                <td>
                                    <span>15</span>
                                </td>
                                <td>
                                    <span>16</span>
                                </td>
                                <td>
                                    <span>17</span>
                                </td>
                                <td>
                                    <span>18</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>19</span>
                                </td>
                                <td>
                                    <span>20</span>
                                </td>
                                <td>
                                    <span>21</span>
                                </td>
                                <td>
                                    <span>22</span>
                                </td>
                                <td>
                                    <span>23</span>
                                </td>
                                <td>
                                    <span>24</span>
                                </td>
                                <td>
                                    <span>25</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>26</span>
                                </td>
                                <td>
                                    <span>27</span>
                                </td>
                                <td>
                                    <span>28</span>
                                </td>
                                <td>
                                    <span className="other-month-date">1</span>
                                </td>
                                <td>
                                    <span className="other-month-date">2</span>
                                </td>
                                <td>
                                    <span className="other-month-date">3</span>
                                </td>
                                <td>
                                    <span className="other-month-date">4</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="date-selection column p2">
                    <h3 className="bold text-medium-blue">Date Range</h3>
                    <ul className="option-picker flex flex-wrap mt2 mb2">
                        <li>
                            <button className="active">Last 10 seconds</button>
                        </li>
                        <li>
                            <button>Last minute</button>
                        </li>
                        <li>
                            <button>Last 5 minutes</button>
                        </li>
                        <li>
                            <button>Last 30 minutes</button>
                        </li>
                        <li>
                            <button>Last hour</button>
                        </li>
                        <li>
                            <button>Last day</button>
                        </li>
                    </ul>
                    <div>
                        <div className="date-picker flex">
                            <input value="2017-01-30 13:26:57:238" />
                            <button title="Set to now" className="date-button">
                                <Svg name={VaporSVG.svg.setToNow.name} className="fill-medium-blue" />
                            </button>
                        </div>
                        <span className="date-separator mod-vertical">
                            <span>-</span>
                        </span>
                        <div className="date-picker flex">
                            <input value="2017-01-30 13:26:57:238" />
                            <button title="Set to now" className="date-button">
                                <Svg name={VaporSVG.svg.setToNow.name} className="fill-medium-blue" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="modal-footer mod-small">
                <button className="btn mod-primary mod-small">Apply</button>
                <button className="btn mod-small">Cancel</button>
            </footer>
        </div>

        <div className="date-picker-box flex flex-column mt2">
            <div className="split-layout">
                <div className="calendar column">
                    <div className="calendar-header p2">
                        <div div className="options-cycle text-medium-blue mod-inline">
                            <button className="options-cycle-button">
                                <Svg name={VaporSVG.svg.arrowLeftRounded.name} className="icon fill-medium-blue" />
                            </button>
                            <span className="options-cycle-option">January</span>
                            <button className="options-cycle-button">
                                <Svg name={VaporSVG.svg.arrowRightRounded.name} className="icon fill-medium-blue" />
                            </button>
                        </div>
                        <div className="options-cycle text-medium-blue mod-inline">
                            <button className="options-cycle-button">
                                <Svg name={VaporSVG.svg.arrowLeftRounded.name} className="icon fill-medium-blue" />
                            </button>
                            <span className="options-cycle-option">2017</span>
                            <button className="options-cycle-button">
                                <Svg name={VaporSVG.svg.arrowRightRounded.name} className="icon fill-medium-blue" />
                            </button>
                        </div>
                    </div>
                    <table className="calendar-grid">
                        <thead className="mod-no-border-top">
                            <tr>
                                <th>Sun</th>
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className="other-month-date">29</span>
                                </td>
                                <td>
                                    <span className="other-month-date">30</span>
                                </td>
                                <td>
                                    <span className="other-month-date">31</span>
                                </td>
                                <td>
                                    <span className="selected-date bg-blue lower-limit">1</span>
                                </td>
                                <td>
                                    <span className="todays-date selected-date bg-blue upper-limit">2</span>
                                </td>
                                <td>
                                    <span>3</span>
                                </td>
                                <td>
                                    <span>4</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>5</span>
                                </td>
                                <td>
                                    <span>6</span>
                                </td>
                                <td>
                                    <span>7</span>
                                </td>
                                <td>
                                    <span>8</span>
                                </td>
                                <td>
                                    <span>9</span>
                                </td>
                                <td>
                                    <span>10</span>
                                </td>
                                <td>
                                    <span>11</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>12</span>
                                </td>
                                <td>
                                    <span>13</span>
                                </td>
                                <td>
                                    <span>14</span>
                                </td>
                                <td>
                                    <span>15</span>
                                </td>
                                <td>
                                    <span>16</span>
                                </td>
                                <td>
                                    <span>17</span>
                                </td>
                                <td>
                                    <span>18</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>19</span>
                                </td>
                                <td>
                                    <span>20</span>
                                </td>
                                <td>
                                    <span>21</span>
                                </td>
                                <td>
                                    <span>22</span>
                                </td>
                                <td>
                                    <span>23</span>
                                </td>
                                <td>
                                    <span>24</span>
                                </td>
                                <td>
                                    <span>25</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>26</span>
                                </td>
                                <td>
                                    <span>27</span>
                                </td>
                                <td>
                                    <span>28</span>
                                </td>
                                <td>
                                    <span className="other-month-date">1</span>
                                </td>
                                <td>
                                    <span className="other-month-date">2</span>
                                </td>
                                <td>
                                    <span className="other-month-date">3</span>
                                </td>
                                <td>
                                    <span className="other-month-date">4</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="date-selection column p2">
                    <h3 className="bold text-medium-blue">Date Range</h3>
                    <ul className="option-picker flex flex-wrap mt2 mb2">
                        <li>
                            <button className="active">Last 10 seconds</button>
                        </li>
                        <li>
                            <button>Last minute</button>
                        </li>
                        <li>
                            <button>Last 5 minutes</button>
                        </li>
                        <li>
                            <button>Last 30 minutes</button>
                        </li>
                        <li>
                            <button>Last hour</button>
                        </li>
                        <li>
                            <button>Last day</button>
                        </li>
                    </ul>
                    <div className="mod-inline flex">
                        <div className="date-picker">
                            <input value="Jan 30, 2017" className="border-blue bg-blue date-picked" />
                        </div>
                        <span className="date-separator">
                            <span>-</span>
                        </span>
                        <div className="date-picker">
                            <input value="Jan 30, 2017" className="border-blue picking-date" />
                        </div>
                    </div>
                    <button type="button" className="clear-selection-button mt2">
                        Clear
                    </button>
                </div>
            </div>
            <footer className="modal-footer mod-small">
                <button className="btn mod-primary mod-small">Apply</button>
                <button className="btn mod-small">Cancel</button>
            </footer>
        </div>

        <div className="date-picker-dropdown mt2">
            <div className="dropdown-wrapper open">
                <span className="dropdown-toggle btn inline-flex flex-center">
                    <span className="dropdown-selected-value">
                        <label>Select date</label>
                    </span>
                    <span className="dropdown-toggle-arrow"></span>
                </span>
                <div className="dropdown-menu date-picker-box flex flex-column">
                    <div className="split-layout">
                        <div className="calendar column">
                            <div className="calendar-header p2">
                                <div className="options-cycle text-medium-blue mod-inline">
                                    <button className="options-cycle-button previous-option">
                                        <Svg
                                            name={VaporSVG.svg.arrowLeftRounded.name}
                                            className="icon fill-medium-blue"
                                        />
                                    </button>
                                    <span className="options-cycle-option">February</span>
                                    <button className="options-cycle-button next-option">
                                        <Svg
                                            name={VaporSVG.svg.arrowRightRounded.name}
                                            className="icon fill-medium-blue"
                                        />
                                    </button>
                                </div>
                                <div className="options-cycle text-medium-blue mod-inline">
                                    <button className="options-cycle-button previous-option">
                                        <Svg
                                            name={VaporSVG.svg.arrowLeftRounded.name}
                                            className="icon fill-medium-blue"
                                        />
                                    </button>
                                    <span className="options-cycle-option">2017</span>
                                    <button className="options-cycle-button next-option">
                                        <Svg
                                            name={VaporSVG.svg.arrowRightRounded.name}
                                            className="icon fill-medium-blue"
                                        />
                                    </button>
                                </div>
                            </div>
                            <table className="calendar-grid">
                                <thead className="mod-no-border-top">
                                    <tr>
                                        <th>Sun</th>
                                        <th>Mon</th>
                                        <th>Tue</th>
                                        <th>Wed</th>
                                        <th>Thu</th>
                                        <th>Fri</th>
                                        <th>Sat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="other-month-date">29</span>
                                        </td>
                                        <td>
                                            <span className="other-month-date">30</span>
                                        </td>
                                        <td>
                                            <span className="other-month-date">31</span>
                                        </td>
                                        <td>
                                            <span>1</span>
                                        </td>
                                        <td>
                                            <span>2</span>
                                        </td>
                                        <td>
                                            <span className="todays-date selected-date bg-blue lower-limit upper-limit">
                                                3<span></span>
                                            </span>
                                        </td>
                                        <td>
                                            <span>4</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>5</span>
                                        </td>
                                        <td>
                                            <span>6</span>
                                        </td>
                                        <td>
                                            <span>7</span>
                                        </td>
                                        <td>
                                            <span>8</span>
                                        </td>
                                        <td>
                                            <span>9</span>
                                        </td>
                                        <td>
                                            <span>10</span>
                                        </td>
                                        <td>
                                            <span>11</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>12</span>
                                        </td>
                                        <td>
                                            <span>13</span>
                                        </td>
                                        <td>
                                            <span>14</span>
                                        </td>
                                        <td>
                                            <span>15</span>
                                        </td>
                                        <td>
                                            <span>16</span>
                                        </td>
                                        <td>
                                            <span>17</span>
                                        </td>
                                        <td>
                                            <span>18</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>19</span>
                                        </td>
                                        <td>
                                            <span>20</span>
                                        </td>
                                        <td>
                                            <span>21</span>
                                        </td>
                                        <td>
                                            <span>22</span>
                                        </td>
                                        <td>
                                            <span>23</span>
                                        </td>
                                        <td>
                                            <span>24</span>
                                        </td>
                                        <td>
                                            <span>25</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>26</span>
                                        </td>
                                        <td>
                                            <span>27</span>
                                        </td>
                                        <td>
                                            <span>28</span>
                                        </td>
                                        <td>
                                            <span className="other-month-date">1</span>
                                        </td>
                                        <td>
                                            <span className="other-month-date">2</span>
                                        </td>
                                        <td>
                                            <span className="other-month-date">3</span>
                                        </td>
                                        <td>
                                            <span className="other-month-date">4</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="date-selection column p2">
                            <div>
                                <h3 className="bold text-medium-blue">Date range</h3>
                                <ul className="option-picker flex flex-wrap mt2 mb2">
                                    <li>
                                        <button>Last 10 seconds</button>
                                    </li>
                                    <li>
                                        <button>Last minute</button>
                                    </li>
                                    <li>
                                        <button>Last 5 minutes</button>
                                    </li>
                                    <li>
                                        <button>Last 30 minutes</button>
                                    </li>
                                    <li>
                                        <button>Last hour</button>
                                    </li>
                                    <li>
                                        <button>Last day</button>
                                    </li>
                                </ul>
                                <div>
                                    <div className="date-picker flex">
                                        <input />
                                        <span title="" data-original-title="Set to now">
                                            <button className="date-button">
                                                <Svg name={VaporSVG.svg.setToNow.name} className="fill-medium-blue" />
                                            </button>
                                        </span>
                                    </div>
                                    <span className="date-separator mod-vertical">
                                        <span>-</span>
                                    </span>
                                    <div className="date-picker flex">
                                        <input />
                                        <span title="" data-original-title="Set to now">
                                            <button className="date-button">
                                                <Svg name={VaporSVG.svg.setToNow.name} className="fill-medium-blue" />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="modal-footer mod-small">
                        <button className="btn mod-primary mod-small">Apply</button>
                        <button className="btn mod-small">Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    </>
);
export default Calendar;
