import React from "react";
import { Router } from "./routes/Routes"
import { GlobalStyle } from "./global/style/GlobalStyle"
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getAllCategorys } from "./services/getAllCategorys";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategorys(dispatch);
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
