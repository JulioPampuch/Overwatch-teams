import "./footer.css"
import { Envelope, Phone } from "phosphor-react"

const Footer = () => {
  return (
    <footer>
      <img className="overwatch-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blizzard_Entertainment_Logo_2015.svg/1200px-Blizzard_Entertainment_Logo_2015.svg.png" />
      <p>Desenvolvido por Julio Pampuch</p>
      <div>
        <p>Contato:</p>
        <div className="contato">
          <Envelope size={22} />
          <p>juliopampuch@gmail.com</p>
        </div>
        <div className="contato">
          <Phone size={22} />
          <p>(41)9 9147-8134</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer