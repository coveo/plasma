import Component from '../components/Component';
import Layout from '../layouts/Layout';
import TextInput from '../components/form/TextInput';
import NumericSpinner from '../components/form/NumericSpinner';
import CheckboxesInfos from '../components/form/CheckboxesInfos';
import Checkboxes from '../components/form/Checkboxes';
import RadioButton from '../components/form/RadioButtons';
import SlideToggle from '../components/form/SlideToggle';
import SlideToggleModifiers from '../components/form/SlideToggleModifiers';
import SlideToggleDouble from '../components/form/SlideToggleDouble';
import DropdownModifiers from '../components/form/DropdownModifiers';
import Dropdown from '../components/form/Dropdown';
import FilterBox from '../components/form/FilterBox';

const FormControls = () => {
    return (
        <Layout>
            <Component
                id="text-input"
                title="Text input"
                usage='This is the standard single-line input-field. The animation is done in pure css by leveraging "required" and "valid" states.'
                stylesheet="scss/controls/input-field.scss"
                withSource
            >
                <TextInput />
            </Component>

            <Component
                id="numeric-spinner"
                title="Numeric Spinner"
                usage="Spinner for numeric values. Replacement for HTML5"
                stylesheet="scss/controls/numeric-spinner.scss"
                withSource
            >
                <NumericSpinner />
            </Component>

            <Component id="checkboxes-infos" title="Checkboxes / Infos">
                <CheckboxesInfos />
            </Component>

            <Component
                id="checkboxes"
                title="Checkboxes"
                usage="Custom checkboxes"
                stylesheet="scss/controls/checkboxes.scss"
                withSource
            >
                <Checkboxes />
            </Component>

            <Component
                id="radio-buttons"
                title="Radio buttons"
                usage="Custom radio button"
                stylesheet="scss/controls/radios.scss"
                withSource
            >
                <RadioButton />
            </Component>

            <Component
                id="slide-toggle"
                title="Slide toggle"
                usage="Another style for a checkbox with stylish animations."
                stylesheet="scss/controls/slide-toggle.scss"
                withSource
            >
                <SlideToggle />
            </Component>

            <Component
                id="slide-toggle-modifiers"
                title="Slide toggle modifiers"
                usage="Add boxed option, for boxes"
                stylesheet="scss/controls/slide-toggle.scss"
                withSource
            >
                <SlideToggleModifiers />
            </Component>

            <Component
                id="slide-toggle-double"
                title="Slide toggle double"
                usage="A slide toggle with two options"
                stylesheet="scss/controls/slide-toggle-double.scss"
                withSource
            >
                <SlideToggleDouble />
            </Component>

            <Component
                id="filter-box"
                title="Filter box"
                usage="Basic filter box."
                stylesheet="scss/controls/filter-box.scss"
                withSource
            >
                <FilterBox />
            </Component>

            <Component
                id="input-slider"
                title="Input slider"
                usage={
                    <>
                        Styled input slider for cross-browser compatibility. IE10+, FF, Chrome, Safari.
                        <br />
                        Initialize the component's colors whenever it is rendered by using{' '}
                        <code>$(selector).slider()</code>.<br />
                        See <a href="https://github.com/coveo/slider">Coveo Slider</a> for more infos.
                    </>
                }
                withSource
            >
                <input type="range" className="coveo-slider-input" min="1" max="100" defaultValue="50" />
            </Component>

            <Component
                id="dropdown"
                title="Dropdown"
                usage="A dropdown control. Basically, it replaces the HTML select tag. The dropdown prepend is optional."
                stylesheet="scss/controls/dropdown.scss"
                withSource
            >
                <Dropdown />
            </Component>

            <Component
                id="dropdown-modifiers"
                title="Dropdown modifiers"
                usage="Modifiers for the Dropdown control { mod-menu, mod-right } ."
                stylesheet="sscss/controls/dropdown.scss"
                withSource
            >
                <DropdownModifiers />
            </Component>
        </Layout>
    );
};

export default FormControls;
