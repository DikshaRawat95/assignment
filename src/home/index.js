import '../App.css';
import { HOME_PAGE_CONST } from "../utils/constants";

function Home() {
    return (
        <main className='home'>
            <h1>{HOME_PAGE_CONST.WELCOME}</h1>
            <p>{HOME_PAGE_CONST.MSG}</p>
        </main>
    );
}

export default Home;
