import { PROJECTS } from '@/constants';

export function ProjectsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-2xl">Projects page</h1>
      {PROJECTS.map((project) => {
        return (
          <div
            key={project.name}
            className="flex flex-col items-center justify-center m-4 p-4 border-2 border-black dark:border-white rounded-lg"
          >
            <h2 className="text-xl">{project.name}</h2>
            <p className="text-sm">{project.description}</p>
            <div className="flex flex-row justify-center items-center m-2 gap-4">
              <a href={project.sourceCodeLink} className="text-sm mr-2">
                Source code
              </a>
              <a href={project.link} className="text-sm">
                Live demo
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
