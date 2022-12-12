import Team from "./team"
import "./teams.css"

const Teams = (props) => {
  return (
    <section className="teams">
      <h2 className="team-title" style={{ color: "black" }} >{props.title}</h2>
        <Team color={props.color}/>
    </section>

  )
}

export default Teams