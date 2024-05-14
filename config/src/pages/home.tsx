import React, { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = '/sistema/tutorial';
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="_home"></main>
  );
}