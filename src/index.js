import ReactDOM from "react-dom";
import React from "react";
import { initConfigFormBuilder } from "./formBuilder";

import "./styles.scss";

import LoginScreen from "./screens/login";

initConfigFormBuilder();

const rootElement = document.getElementById("root");
ReactDOM.render(<LoginScreen />, rootElement);
