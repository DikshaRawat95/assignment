import '../App.css';
import { APP_TITLE } from "../utils/constants";

function Header() {
    return (
        <header className="header">
            {APP_TITLE}
        </header>
    );
}

export default Header;
