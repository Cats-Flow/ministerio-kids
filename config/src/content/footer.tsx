import { ArrowBendLeftUp } from "@phosphor-icons/react";
import { GitBranch } from "@phosphor-icons/react/dist/ssr/GitBranch";
import React, { useEffect, useState } from "react";

import { verifyToken } from '../function/verifytoken';

export function Footer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      verifyToken(token).then(isAuth => setIsAuthenticated(isAuth));
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="_footer">
        <p>© 2024 Cat`s Flow</p>
        <span>
          <span>
            <GitBranch />
            B1.1.8
          </span>
          {isAuthenticated && (
            <button className="_btn" onClick={scrollToTop}>
              <ArrowBendLeftUp />
            </button>
          )}
        </span>
      </footer>
    </>
  )
}