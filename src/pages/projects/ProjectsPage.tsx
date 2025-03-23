import { PROJECTS } from '@/constants';
import { BasicPageLayout } from '@/shared/basic-page-layout';
import { PageHeader } from '@/shared/header';

interface IProjectCard {
  name: string;
  description: string;
  sourceCodeLink: string;
  link: string;
}

function ProjectCard({ name, description, sourceCodeLink, link }: IProjectCard) {
  return (
    <div
      key={name}
      className="flex flex-col items-center justify-center m-4 p-4 border-2 border-black dark:border-white rounded-lg"
    >
      <h2 className="text-xl">{name}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex flex-row justify-center items-center m-2 gap-4">
        <a href={sourceCodeLink} className="text-sm mr-2">
          Source code
        </a>
        <a href={link} className="text-sm">
          Live demo
        </a>
      </div>
    </div>
  );
}

export function ProjectsPage() {
  return (
    <div className="pt-[65px]">
      <PageHeader title={'Projects page'} />
      <BasicPageLayout>
        <div className="flex flex-col items-center min-h-screen text-black dark:text-white">
          {PROJECTS.map((project) => {
            return (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                sourceCodeLink={project.sourceCodeLink}
                link={project.link}
              />
            );
          })}
        </div>
      </BasicPageLayout>
    </div>
  );
}
