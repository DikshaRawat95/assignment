import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getReposList } from "./utils/api";

import Home from "./home"
import Header from "./header";
import Navbar from "./navbar";
import RepoDetails from "./repoDetails";
import NoPage from './noPage';

const FETCH_DATA_URL = "https://api.github.com/orgs/godaddy/repos";

function App() {
  const [reposList, setReposList] = useState([]);

  useEffect(() => {
    if (!reposList.length) {
      getReposList()
        .then((response) => response.json())
        .then((response) => {
          setReposList(response);
        })
        .catch(() => console.log("API not responding please try again later!"));
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Navbar reposList={reposList} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="repo/:repoId" element={<RepoDetails reposList={reposList} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
