import {FETCH_DATA_URL} from "./constants";

export const getReposList = () => {
    return fetch(FETCH_DATA_URL);
};
