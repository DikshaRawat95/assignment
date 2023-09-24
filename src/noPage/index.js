import '../App.css';
import { PAGE_NOT_FOUND } from "../utils/constants"

function NoPage() {
    return (
        <main className='home'>
            <h1>{PAGE_NOT_FOUND}</h1>
        </main>
    );
}

export default NoPage;
