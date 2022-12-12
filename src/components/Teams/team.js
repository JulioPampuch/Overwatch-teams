const Team = (props) => {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: props.color }}>
        <div className="card-img">
          <img src="https://github.com/JulioPampuch.png" />
        </div>
      </div>
      <div className="card-footer">
        <p className="hero-name">Cassidy</p>
        <p className="hero-function">Dano</p>
      </div>
    </div>
  )
}

export default Team