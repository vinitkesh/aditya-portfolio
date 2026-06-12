import data from '../public/data/data.json';

const Skills = () => {
  // Normalize technical skills: support old shape (`skills.technical`) and
  // new split shape (cfdAndSimulation, thermalEngineering, programmingAndData, designAndPostProcessing)
  const skillsObj: any = (data as any).skills || {};
  let technicalList: string[] = [];

  if (Array.isArray(skillsObj.technical)) {
    technicalList = skillsObj.technical as string[];
  } else {
    // collect arrays of strings from known categories
    const buckets = ['cfdAndSimulation', 'thermalEngineering', 'programmingAndData', 'designAndPostProcessing'];
    buckets.forEach((b) => {
      if (Array.isArray(skillsObj[b])) {
        technicalList = technicalList.concat(skillsObj[b]);
      }
    });
  }

  const certifications: string[] = Array.isArray(skillsObj.certifications) ? (skillsObj.certifications as string[]) : [];
  const languages: any[] = Array.isArray(skillsObj.languages) ? (skillsObj.languages as any[]) : [];

  return (
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
            {technicalList.map((skill, i) => (
              <div key={i} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Certifications</h3>
          <div className="certifications">
            {certifications.map((cert, i) => (
              <span key={i} className="certification-badge">{cert}</span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Languages</h3>
          <div className="languages">
            {languages.map((lang, i) => (
              <div key={i} className="language-item">
                <span className="language">{lang.language || lang}</span>
                <span className="proficiency">{lang.level || lang.proficiency || ''}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Skills;
