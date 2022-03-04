import { render } from "react-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
