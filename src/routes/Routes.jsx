import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.jsx'
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import GroupPage from "../pages/GroupPage/GroupPage.jsx";
import SearchPage from "../pages/SearchPage/SearchPage.jsx";


export const Router = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path = "/search" element = {<SearchPage/>} />
            <Route path= "/group/:name" element = {<GroupPage/>} />
            <Route path= "*" element = {<ErrorPage/>} />
        </Routes>
      </BrowserRouter>

    )
}