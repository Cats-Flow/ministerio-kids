import React from "react";
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./home";
import { Dash } from "./dash";
import { Notas } from "./notas";
import { Login } from "./login";
import { Profile } from "./user";
import { GTJ } from "./turmas/juniores";
import { GTM } from "./turmas/maternal";
import { RNA } from "./registrar/alunos";
import { NotFoundPage } from "./notpage";
import { RNU } from "./registrar/usuarios";
import { Maternal } from "./chamada/maternal/maternal";
import { Juniores } from "./chamada/juniores/juniores";
import AuthenticationGuard from "../content/guardian";
import { GUS } from "./gerenciar/usuario";
import { Cards } from "./cards";
import { Novidades } from "./novidades";
import { GCM } from "./turma/gcm";
import { GCJ } from "./turma/gcj";

export function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Sistema Kids | Ministério Kids" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/novidades" element={<Novidades />} />

        {/*<Route path="/" element={<Cards />} />*/}
        {/* <Route path="/turma/maternal/chamada/gerenciar/" element={<GCM />} /> */}

        <Route path="/dash" element={<AuthenticationGuard component={Dash} />} />
        <Route path="/notes" element={<AuthenticationGuard component={Notas} />} />
        <Route path="/user" element={<AuthenticationGuard component={Profile} />} />

        <Route path="/registrar/aluno" element={<AuthenticationGuard component={RNA} />} />
        <Route path="/registrar/usuario" element={<AuthenticationGuard component={RNU} />} />
        <Route path="/gerenciar/usuario" element={<AuthenticationGuard component={GUS} />} />

        <Route path="/turma/juniores/" element={<AuthenticationGuard component={GTJ} />} />
        <Route path="/turma/maternal/" element={<AuthenticationGuard component={GTM} />} />
        <Route path="/turma/juniores/chamada/" element={<AuthenticationGuard component={Juniores} />} />
        <Route path="/turma/maternal/chamada/" element={<AuthenticationGuard component={Maternal} />} />
        <Route path="/turma/maternal/chamada/gerenciar/" element={<AuthenticationGuard component={GCM} />} />
        <Route path="/turma/juniores/chamada/gerenciar/" element={<AuthenticationGuard component={GCJ} />} />
      </Routes>
    </BrowserRouter>
  )
}