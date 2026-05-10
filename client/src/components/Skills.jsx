import skillsData from "../data/skills.json";

function Skills() {
  return (
    <main>
      <section>
        <h2>Marketable Skills</h2>

        <ul>
          {skillsData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Skills;