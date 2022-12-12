import "./form.css"
import { useState } from "react"
import Teams from "../Teams"


const Form = (props) => {

  const onSubmit = (event) => {
    event.preventDefault()
    props.submited({
      nome: values.nome,
      imagem: values.imagem,
      funcao: values.funcao,
      time: values.time
    })
  }

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setValues({
      ...values,
      [name]: value
    })
  }

  const [values, setValues] = useState({
    'nome': '',
    'imagem': '',
    'funcao': '',
    'time': '',
  })


  return (
    <section className="sectionForm">
      <h3>Preencha os dados do seu herói.</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" onChange={handleChange} value={values.nome} />
        </div>
        <div>
          <label htmlFor="imagem">Imagem</label>
          <input type="text" name="imagem" onChange={handleChange} value={values.imagem} />
        </div>
        <div>
          <label htmlFor="funcao">Função</label>
          <select name="funcao" onChange={handleChange}>
            {props.funcoes.map((funcao) => {
              return (
                <option>{funcao}</option>
              )
            })}
          </select>
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <select name="time" onChange={handleChange}>
            {props.times.map((time) => {
              return (
                <option>{time.name}</option>
              )
            })}
          </select>
        </div>
        <button className="submit-btn" type="submit">Criar card</button>
      </form>
    </section>
  )
}

export default Form