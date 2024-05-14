import React from "react";

export function Header() {
  const ReturnPage = () => {
    window.history.back();
  };

  return (
    <header className={`_header _jcenter`}>
      <img src="/config/assets/logotipo.svg" alt="Logotipo do Ministério Kids" width="112px" height="78.84px" />
    </header>
  )
}
