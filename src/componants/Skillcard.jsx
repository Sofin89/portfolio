

const Skillcard = ({ imgSrc, label, desc }) => {
  return (
    <div className="skill2">
         <div className="skill-card">
       <img src={imgSrc} alt="Figma" className="skill-image" />
        <h3>{label}</h3>
        <p>{desc}</p>
  </div>
    </div>
  )
}

export default Skillcard
