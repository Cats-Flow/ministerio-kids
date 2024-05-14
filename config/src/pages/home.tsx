import React, { useEffect, useState } from 'react';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = sessionStorage.getItem('token');

        const response = await fetch('http://localhost:3000/auth/verify/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        setTimeout(() => {
          if (response.ok) {
            window.location.href = '/dash';
          } else {
            window.location.href = '/login';
          }
        }, 7000);
      } catch (error) {
        console.error('Erro ao verificar o token:', error);
        setTimeout(() => {
          window.location.href = '/login';
        }, 7000);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 7000);
      }
    };

    verifyToken();
  }, []);

  if (isLoading) {
    return <main className="_home"></main>;
  }

  return null;
}