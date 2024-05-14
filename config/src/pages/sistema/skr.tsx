import React, { useEffect } from "react";
import { Header } from "../../content/header";
import { Footer } from "../../content/footer";
import { Loading } from "../../content/loading";

export function SKR() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = 'http://35.208.36.27/';
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section className="_body _hw">
      <Header />
      <main className="_main">
        <Loading />
      </main>
      <Footer />
    </section>
  )
}