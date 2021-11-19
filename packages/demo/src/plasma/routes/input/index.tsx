import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

export const InputRoutes: React.FunctionComponent = () => (
    <Switch>
        <Route exact path="/ActionBar" component={() => <div />} />
        <Route exact path="/ActionableItem" component={() => <div />} />
        <Route exact path="/AddRemove" component={() => <div />} />
        <Route exact path="/Button" component={() => <div />} />
        <Route exact path="/Checkbox" component={() => <div />} />
        <Route exact path="/Childform" component={() => <div />} />
        <Route exact path="/CodeEditor" component={() => <div />} />
        <Route exact path="/DiffViewer" component={() => <div />} />
        <Route exact path="/Dropdown" component={() => <div />} />
        <Route exact path="/FilterBox" component={() => <div />} />
        <Route exact path="/Facet" component={() => <div />} />
        <Route exact path="/typography/links" component={() => <div />} />
        <Route exact path="/MultilineBox" component={() => <div />} />
        <Route exact path="/NumericInput" component={() => <div />} />
        <Route exact path="/RadioButton" component={() => <div />} />
        <Route exact path="/SearchBar" component={() => <div />} />
        <Route exact path="/Slider" component={() => <div />} />
        <Route exact path="/TextInput" component={() => <div />} />
        <Route exact path="/Toggle" component={() => <div />} />
        <Route exact path="/filtering/value-popup" component={() => <div />} />
    </Switch>
);
