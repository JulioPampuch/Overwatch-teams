const Hero = (props) => {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: props.primaryColor }}>
        <div className="card-img">
          <img src="https://github.com/JulioPampuch.png" />
        </div>
      </div>
      <div className="card-footer">
        <p className="hero-name">{props.heroName}</p>
        <p className="hero-function">{props.heroFunction}</p>
      </div>
    </div>
  )
}

export default Hero