import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import { Button } from 'react-bootstrap';

var dndApi = require("../api/dnd5api");
var HelloWorld = require("./helloWorld");

const App = () => {
    
    return (
        <div>
            <p class="test">React here</p>
            <HelloWorld />
        </div>
    );
};

export default App;

ReactDOM.render(<App /> , document.getElementById("app"));