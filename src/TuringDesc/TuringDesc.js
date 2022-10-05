import "./TuringDesc.scss";
export default function TuringDesc() {
    return (
        <div className="TuringNMPage">
            <div className="Turingheading">
                <h1>Turing: The Techno Learning Club</h1>
                <img src={require("../Homepage/images/turing1_preview_rev_1.png")} />
            </div>
            <div className="TuringdescGifGrid">
                <img src={require("./images/Turing.gif")} />
                <div className="Turingdesc">
                    With a legacy of 40 years, NMIMS has grown to be one of the
                    top-10 universities in India and has emerged as a
                    multi-disciplinary university with 6 campuses and 12
                    constituent schools. Part of which is the STME School which
                    is a Tier-1 University under Autonomous Universities
                    category according to University Grants Permission (UGC),
                    India. To know more visit: www.nmimsindore.org/stme
                </div>
            </div>
        </div>
    );
}