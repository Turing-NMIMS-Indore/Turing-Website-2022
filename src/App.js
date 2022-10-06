import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import AboutNM from "./NMIMS/aboutNM";
import TuringDesc from "./TuringDesc/TuringDesc";
import Menu from "./navBar/nav";
import Contact from "./contact/contact";
import Team from "./Team/Team";
function App() {
    return (
        <div>
            <Menu />
            <Homepage />
            <AboutNM />
            <TuringDesc />
            <Team />
            <Contact />
        </div>
    );
}

export default App;
