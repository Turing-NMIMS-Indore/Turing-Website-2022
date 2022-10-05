import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import AboutNM from "./NMIMS/aboutNM";
import TuringDesc from "./TuringDesc/TuringDesc";
function App() {
    return (
        <div>
            <Homepage />
            <AboutNM />
            <TuringDesc />
        </div>
    );
}

export default App;
