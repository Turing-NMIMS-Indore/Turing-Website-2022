import "./aboutNM.scss";
export default function AboutNM() {
    return (
        <div className="NMPage">
            <div className="heading">
                <h1>SVKM'S NMIMS, Indore</h1>
                <img src={require("./images/NMIMSLogo.png")} />
            </div>
            <div className="descGifGrid">
                <div className="desc">
                    With a legacy of 40 years, NMIMS has grown to be one of the
                    top-10 universities in India and has emerged as a
                    multi-disciplinary university with 6 campuses and 12
                    constituent schools. Part of which is the STME School which
                    is a Tier-1 University under Autonomous Universities
                    category according to University Grants Permission (UGC),
                    India. To know more visit: www.nmimsindore.org/stme
                </div>
                <img src={require("./images/NMIMS GIF.gif")} />
            </div>
        </div>
    );
}