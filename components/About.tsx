import data from "../public/data/data.json"

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-text ">
          {data.about.description}
        </p>
        <div className="about-highlights">
          {data.about.highlights.map((item:any, index:any) => (
            <div
              key={index}
              className="hightlight-item"
            >
              <h4 className="">{item.title}</h4>
              <p className="">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
