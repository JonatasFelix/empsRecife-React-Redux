import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.jsx'
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import GroupPage from "../pages/GroupPage/GroupPage.jsx";
import SearchPage from "../pages/SearchPage/SearchPage.jsx";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage.jsx";

 const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path = "/search" element = {<SearchPage/>} />
            <Route path= "/group/:name" element = {<GroupPage/>} />
            <Route path = "/favorites" element = {<FavoritesPage/>} />
            <Route path= "*" element = {<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    )
}

export default Router;