


const About = () => {
  return (
    <section className="about-section">
      <div className="container2 ">
        <div className="work-heading">
        <h2 className="heading2">ABOUT ME</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Sofin Mansuri, a web developer based in India. I
              specialize in building and designing responsive websites that not
              only look great but also perform exceptionally.
            </p>
            <p>
              With a strong foundation in <strong>HTML, CSS, JavaScript</strong>
              , and frameworks like <strong>React.js</strong> and{" "}
              <strong>Node.js</strong>, I aim to create intuitive, user-friendly
              web solutions. I’m passionate about clean code, performance, and
              delivering exceptional user experiences.
            </p>
            <p>
              When I'm not coding, I enjoy learning new technologies, exploring
              design trends, and contributing to open-source projects.
            </p>
        </div>
         <div className="framwork">
             <ul>
              <li>
                <strong>Frontend:</strong> HTML, CSS, JavaScript, React
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express
              </li>
              <li>
                <strong>Database:</strong> MongoDB, PostgreSQL
              </li>
              <li>
                <strong>Tools:</strong> Git, Figma, VSCode
              </li>
            </ul>
            <a href="/sofin-resume.pdf" className="btn-primary" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
