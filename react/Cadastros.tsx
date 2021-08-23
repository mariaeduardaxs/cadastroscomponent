import React, { useState } from 'react';
import styles from './styles.css';

interface CadastrosProps {}

const appformulario: StorefrontFunctionComponent<CadastrosProps> = ({}) => {

  // Instanciando os estados que vão ser usados.
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');

  function handleEnviar(e:React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();

  return (
    <div className={styles.Container}>
      <h1 className={styles.HeadingTitulo}>Cadastre-se para receber descontos e novidades da UPMedal!</h1>
      <form className={styles.Formulario} autoComplete="off">
        <input className={styles.inputForms} autoComplete="off" type="text" name="Nome" id="nome" value={nome} onChange={(e: any) => setNome(e.target.value)} required placeholder="Nome" />
        <input className={styles.inputForms} autoComplete="off" type="email" name="email" id="email" value={email} onChange={(e: any) => setEmail(e.target.value)} required placeholder="Email" />
        <input className={styles.inputForms} autoComplete="off" type="text" name="celular" id="celular" value={telefone} onChange={(e: any) => setTelefone(e.target.value)} required placeholder="Telefone" />
        <input className={styles.inputButton} type="submit" value="Enviar" name='btnEnviar' id="btnEnviar" onClick={(e) => handleEnviar(e)} />
        <p className={styles.Mensagem}>{mensagem}</p>
      </form>
    </div>
  )
}

export default Cadastros;

Cadastros.schema = {
  title: 'editor.cadastros.title',
  description: 'editor.cadastros.description',
  type: 'object',
  properties: {},
}

export default Cadastros
