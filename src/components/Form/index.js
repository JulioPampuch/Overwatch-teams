import "./form.css"
import { useState } from "react"

const Form = (props) => {

  const onSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    props.submited({
      nome: values.nome,
      imagem: values.imagem,
      funcao: values.funcao,
      time: values.time
    })

    setValues({
      'nome': '',
      'imagem': '',
      'funcao': '',
      'time': ''
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
      <div className="container">
        <h3>Preencha os dados do seu herói</h3>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" onChange={handleChange} value={values.nome} required placeholder="Digite o nome do herói" />
          </div>
          <div>
            <label htmlFor="imagem">Imagem</label>
            <input type="text" name="imagem" onChange={handleChange} value={values.imagem} required placeholder="Digite o url da imagem do herói" />
          </div>
          <div>
            <label htmlFor="funcao">Função</label>
            <select name="funcao" required onChange={handleChange}>
              {props.funcoes.map((funcao, index) => {
                return (
                  <option key={index}>{funcao}</option>
                )
              })}
            </select>
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <select name="time" required onChange={handleChange}>
              {props.times.map((time) => {
                return (
                  <option key={time.name}>{time.name}</option>
                )
              })}
            </select>
          </div>
          <button className="submit-btn" type="submit">Criar card</button>
        </form>
      </div>
    </section>
  )
}

export default Form