import '../App.css';
import { Link } from "react-router-dom";

function Navbar(props) {
    const { reposList } = props;
    return (
        <nav className="navbar">
            <ul>
                <li className='repoLink'>
                    <Link to="/">Home</Link>
                </li>
                {reposList.length && reposList.map((repo) => {
                    return <li className='repoLink'>
                        <Link to={`/repo/${repo.id}`}>{repo.name}</Link>
                    </li>
                }) || ""}
            </ul>
        </nav>
    );
}

export default Navbar;
