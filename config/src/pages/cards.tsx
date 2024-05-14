import { Alert, Select } from "@chakra-ui/react";
import { Notebook, Notepad, SealWarning, Student, X, Funnel, Equals, User, AddressBook } from "@phosphor-icons/react";
import React from "react";

export function Cards() {
  return (
    <section className="_main">
      <section className="_card">
        <div className="_fav">
          <Student className="ico" />
        </div>
        <h2>Ferramentas</h2>
        <nav className="_div">
          <a title="Material de estudos" href="https://drive.google.com/drive/folders/11YmX-xli_EF8_DZ8pm9LPTDzCMquOfe-?usp=drive_link" className="_btn">
            <Notebook className="ico" />
            Material de estudo
          </a>
          <a title="Informações das crianças" href="https://drive.google.com/drive/folders/1vzMSk5CtaKO_o64BbAeenDm3d9qhRr8K?usp=drive_link" className="_btn">
            <Notepad className="ico" />
            Cadastro infantil
          </a>
        </nav>
      </section>
      <section className="_card">
        <div className="_fav">
          <Student className="ico" />
        </div>
        <h2>Cadastrar novos alunos</h2>
        <p>Para o cadastro de novos alunos o professor precisa solicitar ao responsavel do aluno que seja feito o cadastramento infantil.</p>
      </section>
      <section className="_card alert">
        <button className="_btn _fav rd">
          <X weight="bold" />
        </button>
        <SealWarning weight="bold" className="ico" />
        <p>Mensagem</p>
      </section>
      <section className="_card">
        <div className="_fav">
          <Funnel className="ico" />
        </div>
          <h2>Ferramentas</h2>
            <section className="_nav">
              <label className="_select" htmlFor="selsexo">
                <Select className="camp" id="selsexo" name="sexp" title="Filtrar por sexo">
                  <option value="" hidden>Sexo</option>
                  <option value="">Ambos</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                </Select>
              </label>
              <label className="_select" htmlFor="selord">
                <Select className="camp" id="selord" name="ordem" title="Ordem alfabetica">
                  <option value="" hidden>Organizar</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </Select>
              </label>
            </section>
      </section>
      <section className="_card">
        <h2>Turma do Juniores</h2>
        <div className="_div">
          <section className="_cnt">
            <p>Nome do aluno</p>
            <button className="_btn ico menu rd" title="Menu lateral">
              <Equals />
            </button>
          </section>
        </div>
      </section>
      <section className="_card">
        <h2>Administrador</h2>
        <nav className="_div">
          <a title="Registrar novo aluno" className="_btn" href="/registrar/aluno">
            <Student className="ico" />
            Registrar aluno
          </a>
          <a title="Registrar novo usuário" className="_btn" href="/registrar/usuario">
            <User className="ico" />
            Registrar usuário
          </a>
          <a title="Gerenciar usuarios" className="_btn" href="/gerenciar/usuario">
            <AddressBook className="ico" />
            Gerenciar usuário
          </a>
        </nav>
      </section>
      <form className="_card">
        <h2>Cadastrar aluno</h2>
        <div className="_div">
            <input className="_input" type="text" placeholder="Nome do aluno" name="nome" required />
            <input className="_input" type="text" placeholder="Nome do responsável" name="responsavel" required />
            <input className="_input" type="tel"  placeholder="Data de nascimento" name="dataNascimento" required />
            <textarea className="_textarea" name="observacao" placeholder="Observação"></textarea>
            <section className="_nav">
              <label className="_select" htmlFor="selsex">
                <Select className="camp" id="selsex" name="sexo" title="Sexo do aluno" required>
                  <option value="" hidden>Sexo</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                </Select>
              </label>
              <label className="_select" htmlFor="selidade">
                <Select className="camp" id="selidade" name="idade" title="Idade do aluno" required>
                  <option value="" hidden>Idade</option>
                  <option value="3 anos">3 anos</option>
                  <option value="4 anos">4 anos</option>
                  <option value="5 anos">5 anos</option>
                  <option value="6 anos">6 anos</option>
                  <option value="7 anos">7 anos</option>
                  <option value="8 anos">8 anos</option>
                  <option value="9 anos">9 anos</option>
                </Select>
              </label>
            </section>
            <label className="_select" htmlFor="selturma">
              <Select className="camp" id="selturma" name="turma" title="Turma do aluno" required>
                <option value="" hidden>Selecionar turma</option>
                <option value="Maternal">Maternal</option>
                <option value="Juniores">Juniores</option>
              </Select>
            </label>
        </div>
        <button title="Cadastrar aluno" className="_btn active center" type="submit">Cadastrar</button>
      </form>
    </section>
  )
}