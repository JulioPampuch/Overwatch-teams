import "./form.css"

const Form = () => {
  return (
    <section className="sectionForm">
      <h3>Preencha os dados do seu herói.</h3>
      <form>
        <div>
          <label for="nome">Nome</label>
          <input type="text" name="nome" />
        </div>
        <div>
          <label for="imagem">Imagem</label>
          <input type="text" name="imagem" />
        </div>
        <div>
          <label for="funcao">Função</label>
          <select name="funcao" />
        </div>
        <div>
          <label for="time">Time</label>
          <select name="time" />
        </div>
      </form>
    </section>
  )
}

export default Form