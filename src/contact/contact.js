import "./contact.scss";

export default function Contact() {
    return (
        <div className="contactPage">
            {/* NM and Turing Logos */}

            <img
                src={require("../NMIMS/images/NMIMSLogo.png")}
                className="NMLogo"
            />
            <img
                src={require("../Homepage/images/turing1_preview_rev_1.png")}
                className="turingLogo"
            />

            {/* Adding 3 columns */}

            <div className="contactsGrid">
                {/* Social Media Column */}

                <div className="row">
                    <h2>Follow Us On</h2>

                    <a href="https://discord.gg/feuXpeVj" target="_blank">
                        <div className="site">
                            <img src={require("./images/discord.png")} />
                            Discord
                        </div>
                    </a>

                    <a href="https://instagram.com/turing.club?igshid=YmMyMTA2M2Y=">
                        <div className="site">
                            <img src={require("./images/instagram.png")} />
                            Instagram
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/turing-club/">
                        <div className="site">
                            <img src={require("./images/linkedin.png")} />
                            Linkedin
                        </div>
                    </a>

                    <a
                        href="https://www.youtube.com/channel/UCm0RQ9-qmD3J_GZUzUK9ywA"
                        target="_blank"
                    >
                        <div className="site">
                            <img src={require("./images/youtube.png")} />
                            Youtube
                        </div>
                    </a>
                </div>

                {/* Extra Links */}

                <div className="row">
                    <h2>Also Look At</h2>
                    <div className="extraLinks">Previous events</div>
                    <div className="extraLinks">Leader-board</div>
                    <div className="extraLinks">Activities</div>
                    <div className="extraLinks">Joining Form</div>
                </div>

                {/* Contact Columns */}

                <div className="row">
                    <h2>Contact Us</h2>
                    <a href="mailto:turing@nmims.edu">
                        <div className="site">
                            <img src={require("./images/mailbox.png")} />
                            Mail
                        </div>
                    </a>
                    <a href="https://g.page/NMIMSIndore?share" target="_blank">
                        <div className="site">
                            <img src={require("./images/map.png")} />
                            Location
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
