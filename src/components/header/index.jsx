import Logo from "./logo";
import Navigation from "./navigation";
import Personal from "./personal";

function Header() {
    return (
        <header className="header d-flex justify-content-between fixed-top container">
            <Personal />
            <Logo />
            <Navigation />
        </header>
    );
}

export default Header;