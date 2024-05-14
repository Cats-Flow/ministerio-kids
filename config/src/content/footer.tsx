import { ArrowBendLeftUp } from "@phosphor-icons/react";
import { GitBranch } from "@phosphor-icons/react/dist/ssr/GitBranch";
import React from "react";

export function Footer() {
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
            B1.0.1
          </span>
          <button className="_btn" onClick={scrollToTop}>
            <ArrowBendLeftUp />
          </button>
        </span>
      </footer>
    </>
  )
}