import React, { useState } from "react";
import { Header } from "../../content/header";
import { Footer } from "../../content/footer";
import { Bookmark, Calendar, Clock, Confetti, Devices, Eye, EyeClosed, FingerprintSimple } from "@phosphor-icons/react";

export function SKT() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.stopPropagation();
    setShowPassword(!showPassword);
  };
  
  return (
    <section className="_body _tutorial">
      <Header />
      <main className="_main">
        <section className="_card">
          <div className="_fav">
            <Bookmark className="ico" />
          </div>
          <h2>Sistema Kids</h2>
          <div className="_div">
            <p>O Ministério Kids lançou seu sistema escolar, onde reúne todas as informações sobre os alunos, além de permitir o registro dos alunos presentes nas aulas.</p>
            <p>Para o sistema funcionar, há um custo de operação, por isso ele é ativado somente durante as aulas e desativado após o término delas, tornando-se inacessível para todos os usuários.</p>
          </div>
        </section>
        <section className="_card">
          <div className="_fav">
            <Clock className="ico" />
          </div>
          <h2>Horário de funcionamento</h2>
          <div className="_div">
            <span className="_cont">
              <Calendar className="ico" />
              <p>Terças e Sábados</p>
            </span>
            <span className="_cont">
              <Clock className="ico" />
              <p>Das 21h até 21h35min</p>
            </span>
          </div>
        </section>
        <section className="_card">
          <div className="_fav">
            <FingerprintSimple className="ico" />
          </div>
          <h2>Autenticação</h2>
          <div className="_div">
            <p>Todos os professores receberam um usuário único, que não pode ser alterado, e uma senha padrão que deve ser modificada após o primeiro acesso.</p>
            <p>Para alterar a senha após fazer login, o usuário deve clicar no menu superior direito, onde encontrará a opção <strong>"Conta"</strong>. Em seguida, haverá um botão de <strong>"Trocar senha"</strong>. Agora, é só escolher sua nova senha e armazená-la em um local seguro.</p>
          </div>
        </section>
        <form className="_card">
          <h2 className="center">Exemplo do login</h2>
          <div className="_div">
            <input className="_input" type="text" placeholder="Usuário" name="user" maxLength={15} minLength={5} required value="nome.ultimosobrenome" />
            <section className="_cnt">
              <input className="_input" type={showPassword ? 'text' : 'password'} placeholder="Senha" name="password" maxLength={25} minLength={5} required value="@MinisterioKids721" />
              <div className="_btn ico rd" title={showPassword ? 'Ocultar senha' : 'Mostrar senha'} onClick={togglePasswordVisibility}>
                {showPassword ? <EyeClosed /> : <Eye />}
              </div>
            </section>
          </div>
          <button type="submit" className="_btn active center" title="Entrar">Entrar</button>
        </form>
        <section className="_card">
          <div className="_fav">
            <Confetti className="ico" />
          </div>
          <h2>Parabéns!</h2>
          <div className="_div">
            <p>Está na hora de começar a utilizar o Sistema Kids agora. Se você tiver alguma dúvida ou encontrar dificuldades para colocá-lo em prática, basta avisar a liderança do ministério. Estamos aqui para ajudar!</p>
          </div>
          <a className="_btn" href="http://35.208.36.27/" target="_blank" rel="noopener noreferrer">
              <Devices className="ico" />
              Sistema Kids
            </a>
        </section>
      </main>
      <Footer />
    </section>
  )
}