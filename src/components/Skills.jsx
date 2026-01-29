import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '💻',
      skills: [
        { name: 'React.js', level: 75 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: '🔧',
      skills: [
        { name: 'Laravel', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'API Development', level: 75 },
        { name: 'VB.NET', level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '�',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'Vercel', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'Vite', level: 75 },
        { name: 'Database Design', level: 85 }
      ]
    }
  ]

  return (
    <section className="skills">
      <div className="skills-content">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="skills-intro">
          Here are the technologies and tools I've been working with to bring ideas to life.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
