import Hero from "./hero"
import "./teams.css"

const Teams = (props) => {

  return (
    props.heroes.length >= 1 && props.heroes.length < 6 ?
      <section className="teams" style={{ backgroundColor: props.secundaryColor }}>
        <h2 className="team-title" style={{ color: props.primaryColor }}>{props.teamTitle}</h2>
        {props.heroes.map((hero) => {
          return (
            <Hero key={hero.nome} heroName={hero.nome} heroFunction={hero.funcao} primaryColor={props.primaryColor} />
          )
        })}
      </section>
      :
      props.heroes.length >= 6 ?
        <>
          <section className="teams" style={{ backgroundColor: props.secundaryColor }}>
            <h2 className="team-title" style={{ color: props.primaryColor }}>{props.teamTitle}</h2>
            <p className="team-error">Atenção! Um time tem apenas 5 heróis</p>
            {props.heroes.map((hero) => {
              return (
                <Hero key={hero.nome} heroName={hero.nome} heroFunction={hero.funcao} primaryColor={props.primaryColor} />
              )
            })}
          </section>
        </> :
        <>
        </>
  )
}

export default Teams