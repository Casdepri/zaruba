import { Container, Navbar } from "react-bootstrap";
import Logo from "./logo";
import Navigation from "./navigation";
import Personal from "./personal";

function Header() {
    return (
        <div>
            <header className="header d-flex justify-content-between fixed-top container">
                <div className="personal pt-5">
                    Алекесей
                </div>
                <div className="logo d-flex flex-column justify-content-between">
                    <div className="logo-top">///</div>
                    <div className="logo-img">L</div>
                </div>
                <div className="navigation  pt-5">
                    <ul className="d-flex flex-row">
                        <li className="px-3">X</li>
                        <li className="px-3">Fav</li>
                        <li className="px-3">Notif</li>
                    </ul>
                </div>
            </header>
            <main className="container">

            </main>
            <footer className="">
                <div className="footer d-flex justify-content-between fixed-bottom container">
                    <div className="subproduct">
                        Субпродукт
                    </div>
                    <div className="society text-center">
                        <p>Street sport society</p>
                        <div className="text-uppercase">dvor na dvor</div>
                    </div>
                    <div className="copyrights">
                        created by Mike Sabad
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Header;