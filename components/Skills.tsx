import data from '../public/data/data.json';

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-grid">
        {/* {data.skills.top && (
          <div className="skills-category fade-in">
            <h3>Top Skills</h3>
            <div className="skills-list">
              {data.skills.top.map((skill, i) => (
                <div key={i} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )} */}

        <div className="skills-category">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            {data.skills.technical.map((skill, i) => (
              <div key={i} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Certifications</h3>
          <div className="certifications">
            {data.skills.certifications.map((cert, i) => (
              <span key={i} className="certification-badge">{cert}</span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Languages</h3>
          <div className="languages">
            {data.skills.languages.map((lang, i) => (
              <div key={i} className="language-item">
                <span className="language">{lang.language}</span>
                <span className="proficiency">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
