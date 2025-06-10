import data from '../public/data/data.json';

const Education = () => (
  <section id="education" className="section section--alt">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {data.education.map((edu, i) => (
          <div key={i} className="education-card">
            <h3>{edu.degree}</h3>
            <h4>{edu.university}</h4>
            <p className="field">{edu.field}</p>
            <p className="duration">{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
