import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <img src="data:image/png;base64,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"></img>
            <ul className="footerNav">
                <p>Doormat Navigation</p>
                <li>
                    <Link to="/" className="nav-item">Home</Link>
                </li>
                <li>
                    <Link to="/chicago" className="nav-item">About</Link>
                </li>
                <li>
                    <Link to="/specials" className="nav-item">Menu</Link>
                </li>
                <li>
                    <Link to="/booking" className="nav-item">Reservations</Link>
                </li>
                <li>
                    <Link to="orderonline.html" className="nav-item">Order Online</Link>
                </li>
                <li>
                    <Link to="login.html" className="nav-item">Login</Link>
                </li>
            </ul>

            <ul className="contact">
                <p>Contact</p><br></br>
                <li>
                    <a href="address.html" className="nav-item">Address</a>
                </li>
                <li>
                    <a href="phonenumber.html" className="nav-item">Phone Number</a>
                </li>
                <li>
                    <a href="email.html" className="nav-item">Email</a>
                </li>
            </ul>

            <ul className="media">
                <p>Social media Links</p><br></br>
                <li>
                    <a href="address.html" className="nav-item">Address</a>
                </li>
                <li>
                    <a href="phonenumber.html" className="nav-item">Phone Number</a>
                </li>
                <li>
                    <a href="email.html" className="nav-item">Email</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;