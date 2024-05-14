import React, { useState, useEffect } from "react";
import { Header } from "../content/header";
import { Footer } from "../content/footer";
import { Helmet } from 'react-helmet';
import { AlertCard } from "../content/alert";
import { EyeClosed, Eye } from "@phosphor-icons/react";

export function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({ status: '', mensagem: '' });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.stopPropagation();
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    async function checkTokenValidity() {
      const token = sessionStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('http:/localhost:3000/auth/verify/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });

          if (response.ok) {
            window.location.href = '/dash'; // Redireciona para a página de dashboard se o token for válido
          }
        } catch (error) {
          handleErrors(error); // Chamando a função para tratar erros
        }
      }
    }

    checkTokenValidity();
  }, []);

  const handleErrors = (error) => {
    if (error instanceof Response) {
      setAlerta({ status: 'error', mensagem: 'Erro ao verificar token: ' + error.statusText });
    } else {
      console.error('Erro ao verificar token:', error);
      setAlerta({ status: 'error', mensagem: 'Erro interno do servidor' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Dados do formulário:', user, password);

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, password }),
      });

      if (response.ok) {
        const responseJson = await response.json();
        console.log('Resposta do servidor:', responseJson);

        if (responseJson.token) {
          const token = responseJson.token;

          sessionStorage.setItem('token', token);

          window.location.href = '/dash';
        } else {
          console.error('Token não encontrado na resposta do servidor');
          setAlerta({ status: 'error', mensagem: 'Token não encontrado na resposta do servidor' });
        }
      } else {
        handleErrors(response);
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <section className="_body _hw _login">
      <Helmet>
        <title>Entrar no sistema • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Entrar no sistema • Sistema Kids | Ministério Kids" />
      </Helmet>
      <Header />
      <main className="_main">
        {alerta.status === 'error' && (
          <AlertCard status={alerta.status} mensagem={alerta.mensagem} onClose={() => setAlerta({ status: '', mensagem: '' })} />
        )}
        <form onSubmit={handleSubmit} className="_card">
          <h2 className="center">Entre no sistema</h2>
          <div className="_div">
            <input className="_input" type="text" placeholder="Usuário" name="user" maxLength={15} minLength={5} required value={user} onChange={(e) => setUser(e.target.value)} />
            <section className="_cnt">
              <input className="_input" type={showPassword ? 'text' : 'password'} placeholder="Senha" name="password" maxLength={25} minLength={5} required value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="_btn ico rd" title={showPassword ? 'Ocultar senha' : 'Mostrar senha'} onClick={togglePasswordVisibility}>
                {showPassword ? <EyeClosed /> : <Eye />}
              </div>
            </section>
          </div>
          <button type="submit" className="_btn active center" title="Entrar">Entrar</button>
        </form>
      </main>
      <Footer />
    </section>
  );
}
