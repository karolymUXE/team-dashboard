import ProjectsList from "./projects/ProjectsList"
import ProjectsCreate from "./projects/ProjectsCreate"


export default function Projects() {
  return (
    <div id="Projects">
      <ProjectsCreate />
      <ProjectsList />
    </div>
  );
}