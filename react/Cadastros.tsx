import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

interface CadastrosProps { }

const CSS_HANDLES = ['container', 'form', 'formGroup', 'textHighlight', 'input', 'btnSubmit']

const Leadsupmedal: StorefrontFunctionComponent<CadastrosProps> = ({ }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let cadastrosImput: any = {}

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    cadastrosImput = {
      nameCadastrado: name,
      emailCadastrado: email,
      phoneCadastrado: phone,
    }

    localStorage.setItem("lead", JSON.stringify(createLead));

    setName('');
    setEmail('');
    setPhone('');
  }

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
      <div className={`${handles.container}`}>
        <h2>Cadastre o seu melhor e-mail para receber as promoçoes da UPMedal </h2>
        <form onSubmit={submitForm} className={`${handles.form}`}>
          <div className={`${handles.formGroup}`}>
            <label htmlFor="" className="f6 b db mb2">Nome Completo</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nome Completo"
              className={`${handles.input}`}
              required
            />
          </div>
          <div className={`${handles.formGroup}`}>
            <label htmlFor="" className="f6 b db mb2">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-mail"
              className={`${handles.input}`}
              required
            />
          </div>
          <div className={`${handles.formGroup}`}>
            <label htmlFor="" className="f6 b db mb2">Telefone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Telefone"
              className={`${handles.input}`}
              required
            />
          </div>
          <button type="submit" className={`${handles.btnSubmit}`}>Cadastrar</button>
        </form>
      </div>
    </>
  )
}

Cadastros.schema = {
  title: 'editor.cadastros.title',
  description: 'editor.cadastros.description',
  type: 'object',
  properties: {},
}

export default Cadastros
