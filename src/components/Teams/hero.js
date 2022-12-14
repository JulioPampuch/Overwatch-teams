const Hero = (props) => {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: props.primaryColor }}>
        <div className="card-img">
          <div className="bg-img" style={{ backgroundImage: `url(${props.image})` }}></div>
          {/* <img src={props.image} alt="Hero" /> */}
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