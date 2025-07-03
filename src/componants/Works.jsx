import Projectcard from "./projectcard";


const workitems = [
  {
    imgSrc: '/deep.jpeg',
    title: 'Deepseek-clone',
    tags: ['API','Authentication','Deepseek'],
    codelink: 'https://github.com/Sofin89/deepseek',
    projectlink: 'https://deepseek-pi-topaz.vercel.app'
  },

  {
    imgSrc: '/school.jpg',
    title: 'School-website',
    tags: ['Study','Front-end'],
     codelink: 'https://github.com/Sofin89/website--clone.git',
    projectlink: 'priview'
  },


    {
    imgSrc: '/amazon.jpg',
    title: 'Amazone-clone',
    tags: ['Shoping','Front-end'],
     codelink: 'https://github.com/Sofin89/amazon-clone.git',
    projectlink: 'priview'
  },


  //  {
  //   imgSrc: '/react.svg',
  //   title: 'sofin',
  //   tags: ['abc','xyz','cde'],
  //    codelink: 'https://github.com/Sofin89',
  //   projectlink: 'https://musify-5al0.onrender.com/'
  // },


  //   {
  //   imgSrc: '/react.svg',
  //   title: 'sofin',
  //   tags: ['abc','xyz','cde'],
  //    codelink: 'https://github.com/Sofin89',
  //   projectlink: 'https://musify-5al0.onrender.com/'
  // },

]

const Works = () => {
  return (
    <section className='work-section'>
        <div className="work-container">
          <div className="work-heading">
          <h2 className="heading2">
            Works
          </h2>
          </div>
          <div className="work">
           {workitems.map(( { imgSrc, title, tags, codelink, projectlink },key) => (
             <Projectcard 
             key={key}
             imgSrc={imgSrc}
             title={title}
             tags={tags}
             codelink={codelink}
             projectlink={projectlink}
             />
           ))}
          </div>
        </div>
    </section>
  )
}

export default Works;
