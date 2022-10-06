import "./HomepageStyle.scss"
export default function Homepage() {
    return (
        <div className="homepage">
            {/* Font The techno learning club, found from https://www.fontspace.com/future-z-font-f67242 */}

            <img src="https://see.fontimg.com/api/renderfont4/MVEaw/eyJyIjoiZnMiLCJoIjozMywidyI6MTI1MCwiZnMiOjI2LCJmZ2MiOiIjRUNFNkU2IiwiYmdjIjoiIzE5MDQwNCIsInQiOjF9/VGhlIHRlY2hubyBsZWFybmluZyBjbHVi/future-z.png" className = "fontImage"/>

            <img src="https://see.fontimg.com/api/renderfont4/MVEaw/eyJyIjoiZnMiLCJoIjoxMjksInciOjEyNTAsImZzIjoxMDMsImZnYyI6IiMxRkY4RkIiLCJiZ2MiOiIjMTkwNDA0IiwidCI6MX0/VHVyaW5n/future-z.png" className = "fontImage"/>

            <img
                src={require("./images/turing1_preview_rev_1.png")}
                className="turingLogo"
            />
        </div>
    );
}