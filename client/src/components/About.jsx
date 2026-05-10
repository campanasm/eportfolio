import aboutData from "../data/about.json";
import AboutCard from "../components/card/AboutCard";

function About() {
  return (
    <main>
      <h2>About Me</h2>

      <div className="card-container">

        <AboutCard
          title="Personal Information"
          paragraph={
            `My name is ${aboutData.name}, 
            and I am ${aboutData.age} years old. 
            I was born in ${aboutData.birthplace}.`
          }
          footer="Basic details and contact information."
        />

        <AboutCard
          title="Education"
          paragraph={
            aboutData.education
              .map(
                edu =>
                  `${edu.degree} - ${edu.institution}`
              )
              .join(", ")
          }
          footer="Academic background and qualifications."
        />

        <AboutCard
          title="Work Experience"
          paragraph={
            aboutData.workExperience
              .map(
                job =>
                  `${job.position} - ${job.company}`
              )
              .join(", ")
          }
          footer="Professional background and experience."
        />

        <AboutCard
          title="Hobbies"
          paragraph={
            aboutData.hobbies.join(", ")
          }
          footer="Personal interests and leisure activities."
        />

      </div>
    </main>
  );
}

export default About;