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
import FlatSelect from '../components/form/FlatSelect';
import FlatSelectPrepend from '../components/form/FlatSelectPrepend';
import FlatSelectModifiers from '../components/form/FlatSelectBtnGroup';
import MultilineInput from '../components/form/MultilineInput';
import ProgressBar from '../components/form/ProgressBar';
import StepProgressBar from '../components/form/StepProgressBar';
import FileInput from '../components/form/FileInput';

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
                usage="Modifiers for the Dropdown control { mod-menu, mod-right }."
                stylesheet="scss/controls/dropdown.scss"
                withSource
            >
                <DropdownModifiers />
            </Component>

            <Component
                id="flat-select"
                title="Flat select"
                usage="A flat single select control."
                stylesheet="scss/controls/flat-select.scss"
                withSource
            >
                <FlatSelect />
            </Component>

            <Component
                id="flat-select-prepend"
                title="Flat select prepend"
                usage="A flat single select control with a label."
                stylesheet="scss/controls/flat-select.scss"
                withSource
            >
                <FlatSelectPrepend />
            </Component>

            <Component
                id="flat-select-modifiers"
                title="Flat select modifiers"
                usage="Modifiers for the Flat select control { mod-btn-group } ."
                stylesheet="scss/controls/flat-select.scss"
                withSource
            >
                <FlatSelectModifiers />
            </Component>

            <Component
                id="multiline-input"
                title="Multiline input"
                usage="This is a serie of inputs to add multiple entries for the same field type."
                stylesheet="scss/controls/multiline-field.scss"
                withSource
            >
                <MultilineInput />
            </Component>

            <Component
                id="progress-bar"
                title="Progress bar"
                usage="Show a progression between 0 and 100%."
                stylesheet="scss/elements/progress-bar.scss"
                withSource
            >
                <ProgressBar />
            </Component>

            <Component
                id="step-progress-bar"
                title="Step progress bar"
                usage="Show a progression between steps."
                stylesheet="scss/components/step-step-progress-bar.scss"
                withSource
            >
                <StepProgressBar />
            </Component>

            <Component id="file-input" title="File input" stylesheet="scss/controls/file-input.scss" withSource>
                <FileInput />
            </Component>
        </Layout>
    );
};

export default FormControls;
