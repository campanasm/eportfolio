import resumeData from "../data/resume.json";
import ResumeCard from "../components/card/ResumeCard";

function Resume() {
  return (
    <main>
      <h2>Resume</h2>

      <div className="card-container">

        <ResumeCard
          entry={{
            role: "Education",
            company: resumeData.education
              .map(
                edu =>
                  `${edu.degree} - ${edu.institution} (${edu.year})`
              )
              .join(", ")
          }}
          footer="Academic background and qualifications."
        />

        <ResumeCard
          entry={{
            role: "Work Experience",
            company: resumeData.workExperience
              .map(
                job =>
                  `${job.position} - ${job.company} (${job.duration})`
              )
              .join(", ")
          }}
          footer="Work experience and professional background."
        />

        <ResumeCard
          entry={{
            role: "Skills",
            company: resumeData.skills.join(", ")
          }}
          footer="Technical skills and proficiencies."
        />

      </div>
    </main>
  );
}

export default Resume;