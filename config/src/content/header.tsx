import React, { useEffect, useState } from "react";
import { ArrowUUpLeft, Equals } from "@phosphor-icons/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { verifyToken } from '../function/verifytoken';
import { handleLogout } from '../function/logout';

export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      verifyToken(token).then(isAuth => setIsAuthenticated(isAuth));
    }
  }, []);

  const ReturnPage = () => {
    window.history.back();
  };

  return (
    <header className={`_header${isAuthenticated ? '' : ' _jcenter'}`}>
      <img src="/config/assets/logotipo.svg" alt="Logotipo do Ministério Kids" width="112px" height="78.84px" />
      {isAuthenticated && (
        <nav>
          <button type="submit" title="Retornar para página anterior" className="_btn return" onClick={ReturnPage}>
            <ArrowUUpLeft />
          </button>
          <Menu>
            <MenuButton as="button" className="_btn menu" title="Menu lateral">
              <Equals />
            </MenuButton>
            <MenuList className="_menu">
              <MenuItem className="_opt p1" as="a" href="/dash" title="Acessar o painel inicial">Painel</MenuItem>
              <MenuItem className="_opt" as="a" href="/user" title="Acessar informações da conta">Conta</MenuItem>
              <MenuItem className="_opt" as="a" href="/novidades" title="Novidades da versão">Novidades</MenuItem>
              <MenuItem className="_opt" as="a" href="/notes" title="Notas e informações">Notas</MenuItem>
              <MenuItem className="_opt" as="button" title="Sair da conta" onClick={handleLogout}>Sair</MenuItem>
            </MenuList>
          </Menu>
        </nav>
      )}
    </header>
  )
}
