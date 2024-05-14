import React from "react";
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./home";
import { NotFoundPage } from "./notpage";
import { SKT } from "./sistema/tutorial";
import { SKR } from "./sistema/skr";

export function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Ministério Kids</title>
        <meta name="title" content="Ministério Kids" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sistema/tutorial" element={<SKT />} />
        <Route path="/sistema/kids" element={<SKR />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}