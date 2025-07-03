

const Projectcard = ({ imgSrc, title, tags, codelink, projectlink }) => {
  return (
      <div className="work2">
            <img src={imgSrc} alt="github" className='work-image' width={100} height={100}/>
            <p className='work-name'>
             {title}
            </p>
            <p className="work-definition">
             {tags}
            </p>
          <div className="work-button-container">
            <button className='work-button'> {codelink} </button>
            <button className='preview-button'>{projectlink}</button>
         </div>
        
          </div>
   
  )
}

export default Projectcard
