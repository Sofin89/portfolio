import Skillcard from "./Skillcard";


const skillItem = [
  {
    imgSrc: '/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skills = () => {
  return (
    <section className="work-section">
       <div className="skill-container">
        <div className="work-heading">
            <h2 className="heading2">
                 Skills
            </h2>
        </div>
        <div className="skills">
            {skillItem.map(({ imgSrc, label, desc }, key) => 
            (
                <Skillcard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                />
            )
            )}
        </div>
       </div>
    </section>
  )
}

export default Skills
