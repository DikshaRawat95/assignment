import '../App.css';
import { useEffect, useState, useMemo } from "react";
import { Routes, Route, useParams } from 'react-router-dom';

import { DETAILS } from "../utils/constants";

function RepoDetails(props) {
    const { reposList } = props;
    let { repoId } = useParams();
    const [languages, setLanguages] = useState([]);

    const activeRepo = useMemo(() => {
        return reposList.find((repo) => repo.id == repoId);
    }, [repoId]);

    useEffect(() => {
        fetch(activeRepo.languages_url).then((response) => response.json()).then((response) => {
            setLanguages(Object.keys(response));
        }).catch(() => console.log("API not responding please try again later!"))
    }, [activeRepo]);

    if (activeRepo) {
        return (
            <main>
                <section className="repoCard">
                    <h1>{activeRepo.full_name}</h1>
                    <ul>
                        <li>{activeRepo.description}</li>
                        <li><a href={activeRepo.html_url} target='_blank'>{activeRepo.html_url}</a></li>
                        <li>{DETAILS.LANGUAGES} {languages.join(" ")} </li>
                        <li>{DETAILS.FORKS} {activeRepo.forks}</li>
                        <li>{DETAILS.OPEN_ISSUES} {activeRepo.open_issues_count}</li>
                        <li>{DETAILS.WATCHERS} {activeRepo.watchers}</li>
                    </ul>
                </section>
            </main>
        );
    }
    return "";
}

export default RepoDetails;
