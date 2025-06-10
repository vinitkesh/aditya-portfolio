import data from "../public/data/data.json";

const Experience = () => (
  <section id="experience" className="section section--alt py-16 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="section-title text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Professional Experience
      </h2>
      <div className="timeline space-y-12">
        {data.experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="experience-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-1">{exp.role}</h3>
                <h4 className="text-gray-800 dark:text-white">{exp.company}</h4>

                {exp.duration && (
                  <p className="duration text-sm text-gray-600 dark:text-gray-300">{exp.duration}</p>
                )}
                {exp.location && (
                  <p className="location text-sm text-gray-600 dark:text-gray-300">{exp.location}</p>
                )}

                {exp.description && exp.description.length > 0 && (
                  <ul className="description mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {exp.skills && exp.skills.length > 0 && (
                  <div className="skills-tags flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((tag, i) => (
                      <span key={i} className="tag bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
