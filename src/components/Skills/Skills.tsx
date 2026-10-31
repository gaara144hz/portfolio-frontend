import './Skills.scss';

export function Skills() {
  const skillsList = [
    { name: 'React', level: 'Intermédio', icon: '⚛️' },
    { name: 'TypeScript', level: 'Intermédio', icon: 'TS' },
    { name: 'JavaScript (ES6+)', level: 'Avançado', icon: 'JS' },
    { name: 'Sass / SCSS', level: 'Intermédio', icon: '🎨' },
    { name: 'HTML5 & CSS3', level: 'Avançado', icon: '🌐' },
    { name: 'Git & GitHub', level: 'Intermédio', icon: 'git' },
    { name: 'VS Code', level: 'Avançado', icon: '💻' },
    { name: 'Node.js', level: 'Iniciante', icon: '🟢' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="skills__title">Minhas Habilidades</h2>
        <p className="skills__subtitle">
          Tecnologias e ferramentas que utilizo no dia a dia para desenvolver interfaces web modernas e responsivas.
        </p>

        <div className="skills__grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skills__card">
              <span className="skills__card-icon">{skill.icon}</span>
              <div>
                <h3 className="skills__card-title">{skill.name}</h3>
                <span className="skills__card-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}