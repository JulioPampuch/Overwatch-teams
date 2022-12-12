import Hero from "./hero"
import Team from "./hero"
import "./teams.css"

const Teams = (props) => {

  return (
    (props.heroes.length)>= 0 &&  
    <section className="teams" style={{ backgroundColor: props.secundaryColor }}>
      <h2 className="team-title" style={{ color: props.primaryColor }}>{props.teamTitle}</h2>
      {props.heroes.map((hero) => {
        console.log(hero.time)
        return (
          <Hero key={hero.nome} heroName={hero.nome} heroFunction={hero.funcao} primaryColor={props.primaryColor}/>
        )
      })}
    </section>
  )
}

export default Teams