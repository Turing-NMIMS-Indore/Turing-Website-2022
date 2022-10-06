import "./Team.scss";
export default function Team() {
    return (
        <div className="teamPage">
            <h1 align="center">Turing 2022-23</h1>

            <div className="membersSection">
                <div className="member">
                    <img
                        src="src\Team\images\Varnika.webp"
                        type="webp"
                    />
                    Varnika Singh
                    <br />
                    <div className="memberPost">Core Team</div>
                </div>
                <div className="member">
                    <img src={require("./images/Krish.webp")} type="webp" />
                    Krish Dwivedi
                    <br />
                    <div className="memberPost">Core Team</div>
                </div>
                <div className="member">
                    <img src={require("./images/Pranav.webp")} type="webp" />
                    Paranav Kadam
                    <br />
                    <div className="memberPost">Core Team</div>
                </div>
                <div className="member">
                    <img src={require("./images/Manas.webp")} type="webp" />
                    Manas Vyas
                    <br />
                    <div className="memberPost">Core Team</div>
                </div>
                <div className="member">
                    <img src={require("./images/Akshat.webp")} type="webp" />
                    Akshat Jain
                    <br />
                    <div className="memberPost">Core Team</div>
                </div>
                <div className="member">
                    <img src={require("./images/Dev.webp")} type="webp" />
                    Dev Suri
                    <br />
                    <div className="memberPost">Operations Head</div>
                </div>
                <div className="member">
                    <img src={require("./images/Ansh.webp")} type="webp" />
                    Ansh Ronald Ward
                    <br />
                    <div className="memberPost">Finance Head</div>
                </div>
                <a
                    href="https://www.linkedin.com/in/sam-varghese2003/"
                    target="_blank"
                >
                    <div className="member">
                        <img src={require("./images/Sam.webp")} type="webp" />
                        Sam Varghese
                        <br />
                        <div className="memberPost">Technical Head</div>
                    </div>
                </a>
                <div className="member">
                    <img src={require("./images/Isha.webp")} type="webp" />
                    Isha Chandravanshi
                    <br />
                    <div className="memberPost">PR Head</div>
                </div>
                <div className="member">
                    <img src={require("./images/Aaditya.webp")} type="webp" />
                    Aaditya Jain
                    <br />
                    <div className="memberPost">Sponsorship Head</div>
                </div>
            </div>
        </div>
    );
}
