import Logo from "./logo";
import Navigation from "./navigation";
import Personal from "./personal";

function Header() {
    return (
        <div>
            <header>
                <div className="header d-flex justify-content-between w-75 m-auto">
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
                </div>
            </header>
            <main className="container">

            </main>
            <footer>
                
            </footer>
        </div>
    );
}

export default Header;